import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import assert from "node:assert/strict";

const port=8177;
const origin="http://127.0.0.1:"+port;
const server=spawn("python3",["-m","http.server",String(port),"--bind","127.0.0.1"],{stdio:"ignore"});
let browser;
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const errors=[];
try {
  await mkdir("preview-screenshots",{recursive:true});
  for(let attempt=0;attempt<20;attempt++){
    try{const response=await fetch(origin+"/");if(response.ok)break;}
    catch{}
    await sleep(250);
  }
  browser=await chromium.launch({headless:true});
  for(const viewport of [{name:"desktop",width:1440,height:900},{name:"mobile",width:390,height:844}]){
    const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1});
    page.on("pageerror",error=>errors.push(viewport.name+": "+error.message));
    await page.goto(origin+"/",{waitUntil:"domcontentloaded",timeout:25000});
    await page.locator(".lux-services .lux-service").first().waitFor({timeout:15000});
    await page.locator("#plans .plan").first().waitFor({timeout:15000});
    assert.equal(await page.locator(".lux-services .lux-service").count(),3);
    assert.equal(await page.locator(".lux-gallery-item").count(),4);
    await page.locator("#menus .menu").first().waitFor({timeout:15000});
    await page.locator("#groupPrices .group-price-card").first().waitFor({timeout:15000});
    assert.ok(await page.locator("a[href='shape-kids/']").count()>0);
    assert.ok(await page.locator("a[href='gallery.html']").count()>0);
    assert.ok(await page.locator(".currency-switcher button[data-currency='TRY']").count()>0);
    assert.equal(await page.locator("meta[name='robots']").getAttribute("content"),"noindex,nofollow,noarchive");
    const docWidth=await page.evaluate(()=>document.documentElement.scrollWidth);
    assert.ok(docWidth<=viewport.width+2,"Horizontal overflow at "+viewport.name+": "+docWidth);
    await page.screenshot({path:"preview-screenshots/"+viewport.name+"-home.png",fullPage:true,animations:"disabled"});
    for(const [lang,label] of [["tr","SHAPE DENEYİMİ"],["de","DAS SHAPE ERLEBNIS"],["ru","ОПЫТ SHAPE"],["en","THE SHAPE EXPERIENCE"]]){
      await page.locator(".topbar button[data-lang='"+lang+"']").click();
      assert.equal(await page.locator("html").getAttribute("lang"),lang);
      assert.equal((await page.locator("[data-lux-key='servicesLabel']").textContent()).trim(),label);
    }
    await page.goto(origin+"/gallery.html",{waitUntil:"domcontentloaded"});
    await page.locator("#categoryNav").waitFor();
    await page.waitForTimeout(1200);
    const galleryImageStatus=await page.locator(".photo-card img").evaluateAll(images=>({total:images.length,loaded:images.filter(i=>i.complete&&i.naturalWidth>0).length}));
    console.log("GALLERY "+viewport.name+": "+JSON.stringify(galleryImageStatus));
    await page.screenshot({path:"preview-screenshots/"+viewport.name+"-gallery.png",fullPage:true,animations:"disabled"});
    await page.goto(origin+"/shape-kids/",{waitUntil:"domcontentloaded"});
    await page.locator(".hero h1").waitFor();
    await page.screenshot({path:"preview-screenshots/"+viewport.name+"-kids.png",fullPage:true,animations:"disabled"});
    await page.close();
    console.log("PASS "+viewport.name+": homepage, prices, translations, gallery, kids, no overflow");
  }
  assert.equal(errors.length,0,"Browser JavaScript exceptions: "+JSON.stringify(errors));
} finally {
  if(browser)await browser.close();
  server.kill("SIGTERM");
}
