const t={bodyColor:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};t.btnStop.disabled=!0;let o=null;function e(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.btnStart.addEventListener("click",(()=>{t.btnStart.disabled=!0,t.btnStop.disabled=!1,o=setInterval((()=>{t.bodyColor.style.backgroundColor=e()}),1e3)})),t.btnStop.addEventListener("click",(()=>{t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(o)})),console.log(e());
//# sourceMappingURL=01-color-switcher.ca2ee2bb.js.map