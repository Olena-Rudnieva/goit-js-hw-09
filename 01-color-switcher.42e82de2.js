const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.body;let o=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(function(){n.style.backgroundColor=r(),o=setInterval((()=>{n.style.backgroundColor=r()}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.42e82de2.js.map
