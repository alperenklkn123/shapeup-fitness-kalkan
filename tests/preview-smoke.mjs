import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import assert from "node:assert/strict";

const port=8177;
const origin="http://127.0.0.1:"+port;
const server=spawn("python3",["-m","http.server",String(port),"--bind","127.0.0.1"],{stdio:"ignore"});
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const issues=[];
let browser;
try {
  await mkdir("preview-screenshots",{recursive:true});
  for(let i=0;i<30;i++){
    try{if((await fetch(origin+"/")).ok)break;}catch{}
    await sleep(300);
  }
  browser=await chromium.launch({headless:true});
  const pages=["membership","coaching","online-coaching","group-classes","shape-bar","hours","reviews","contact"];
  for(const vp of [{name:"desktop",width:1440,height:900},{name:"mobile",width:390,height:844}]){
    const page=await browser.newPage({viewport:{width:vp.width,height:vp.height},deviceScaleFactor:1});
    page.on("pageerror",e=>issues.push(vp.name+": "+e.message));
    await page.goto(origin+"/index.html",{waitUntil:"domcontentloaded",timeout:25000});
    await page.locator(".lux-service").first().waitFor();
    assert.equal(await page.locator(".lux-service").count(),3);
    assert.equal(await page.locator(".quick-access").count(),0);
    const quickRoutes=[
      ["membership.html","Üyelik fiyatları"],
      ["shape-bar.html","Shape Bar"],
      ["group-classes.html","Grup dersleri"],
      ["shape-kids/","Shape Kids"],
      ["hours.html","Çalışma saatleri"],
      ["reviews.html","Google Yorumları"],
      ["gallery.html","Fotoğraf galerisi"]
    ];
    assert.equal(await page.locator(".lux-main-nav .lux-nav-more").count(),0);
    assert.equal(await page.locator("#luxMenuToggle").count(),0);
    for(const [href] of quickRoutes){
      assert.equal(await page.locator('.lux-main-nav>a[href="'+href+'"]').count(),1,"Missing direct top link: "+href);
    }
    assert.equal(await page.locator(".lux-main-nav").isVisible(),true);
    const navMetrics=await page.locator(".lux-main-nav").evaluate(nav=>({
      scrollWidth:nav.scrollWidth,clientWidth:nav.clientWidth,
      links:[...nav.querySelectorAll("a")].slice(0,7).map(a=>({left:a.getBoundingClientRect().left,right:a.getBoundingClientRect().right}))
    }));
    if(vp.name==="desktop"){
      assert.ok(navMetrics.links.every(rect=>rect.left>=-1&&rect.right<=vp.width+1),"Not all seven navigation links fit on desktop");
    } else {
      assert.ok(navMetrics.scrollWidth>navMetrics.clientWidth,"Mobile menu should be horizontally swipeable");
    }

    assert.equal(await page.locator(".lux-gallery-item").count(),4);
    assert.equal(await page.locator('meta[name="robots"]').getAttribute("content"),"noindex,nofollow,noarchive");
    await page.screenshot({path:"preview-screenshots/"+vp.name+"-home.png",fullPage:true,animations:"disabled"});
    for(const [language,label] of [["tr","SHAPE DENEYİMİ"],["de","DAS SHAPE ERLEBNIS"],["ru","ОПЫТ SHAPE"],["en","THE SHAPE EXPERIENCE"]]){
      await page.locator(".topbar button[data-lang='"+language+"']").click();
      assert.equal(await page.locator("html").getAttribute("lang"),language);
      assert.equal((await page.locator("[data-lux-key='servicesLabel']").textContent()).trim(),label);
    }
    await page.locator('.lux-main-nav a[href="hours.html"]').click();
    assert.ok(page.url().endsWith("/hours.html"),"Opening hours must navigate to own page");
    await page.goto(origin+"/index.html",{waitUntil:"domcontentloaded"});

    for(const route of pages){
      await page.goto(origin+"/"+route+".html",{waitUntil:"domcontentloaded",timeout:25000});
      assert.equal(await page.locator("html").getAttribute("data-lux-page"),route);
      await page.locator("#luxRouteTitle").waitFor({state:"visible"});
      await page.locator(".lux-main-nav").waitFor({state:"attached"});
      if(route==="membership")await page.locator("#plans .plan").first().waitFor({state:"visible"});
      if(route==="coaching")await page.locator("#coachCards .coach").first().waitFor({state:"visible"});
      if(route==="group-classes")await page.locator("#groupPrices .group-price-card").first().waitFor({state:"visible"});
      if(route==="shape-bar")await page.locator("#menus .menu").first().waitFor({state:"visible"});
      if(route==="hours")await page.locator("#opening-hours").waitFor({state:"visible"});
      if(route==="reviews")await page.locator(".lux-reviews-box").waitFor({state:"visible"});
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
      assert.ok(overflow<=2,route+" horizontal overflow on "+vp.name+": "+overflow);
      if(route==="membership")await page.screenshot({path:"preview-screenshots/"+vp.name+"-membership.png",fullPage:true,animations:"disabled"});
    }
    await page.goto(origin+"/gallery.html",{waitUntil:"domcontentloaded"});
    await page.locator("#categoryNav").waitFor();
    await page.screenshot({path:"preview-screenshots/"+vp.name+"-gallery.png",fullPage:true,animations:"disabled"});
    await page.goto(origin+"/shape-kids/",{waitUntil:"domcontentloaded"});
    await page.locator(".hero h1").waitFor({state:"visible"});
    await page.screenshot({path:"preview-screenshots/"+vp.name+"-kids.png",fullPage:true,animations:"disabled"});
    await page.close();
    console.log("PASS "+vp.name+" home, 8 separate pages, language, pricing, gallery, Shape Kids");
  }
  assert.deepEqual(issues,[],"Browser exceptions");
} finally {
  if(browser)await browser.close();
  server.kill("SIGTERM");
}
