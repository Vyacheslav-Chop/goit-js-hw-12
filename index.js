import{a as y,S as P,i as g}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const B="49623840-0f31145568b741aa8d3c39eac",A="https://pixabay.com/api/";y.defaults.baseURL=A;const q={key:B,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};async function p(e,r){const a={...q,q:e,page:r};return(await y.get("",{params:a})).data}const v=document.querySelector(".gallery"),x=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,enableKeyboard:!0,disableScroll:!0,fadeSpeed:400,overlayOpacity:1});function O(e){return e.map(({webformatURL:r,largeImageURL:a,tags:i,likes:t,views:o,comments:l,downloads:M})=>`<li class="gallery-item">
    <a href="${a}" class="gallery-item-link">
    <img class="gallery-item-img" src="${r}" alt="${i}"/>
    </a>
    <div class="gallery-item-info-wrapper">
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Likes</h2>
        <p class="gallery-item-info-value">${t}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Views</h2>
        <p class="gallery-item-info-value">${o}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Comments</h2>
        <p class="gallery-item-info-value">${l}</p>
      </div>
      <div class="gallery-item-info">
        <h2 class="gallery-item-info-subtitle">Downloads</h2>
        <p class="gallery-item-info-value">${M}</p>
      </div>
    </div>
  </li>`).join("")}function E(){v.innerHTML=""}const L=document.querySelector(".loader");function w(){L.style.display="block"}function m(){L.style.display="none"}const h=document.querySelector(".load-more");function F(){h.hidden=!1}function u(){h.hidden=!0}const I=new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cpath%20fill='%23FAFAFB'%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20fill='%23FAFAFB'%20d='M6.969%206.969a.75.75%200%200%201%201.062%200L12%2010.939l3.969-3.97a.75.75%200%201%201%201.062%201.062L13.06%2012l3.97%203.969a.752.752%200%200%201-1.062%201.062l-3.97-3.97-3.968%203.97a.753.753%200%200%201-1.225-.244.751.751%200%200%201%20.163-.818L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/svg%3e",import.meta.url).href,s=document.querySelector(".form");m();let n=1,c="";s.addEventListener("submit",$);async function $(e){if(e.preventDefault(),E(),n=1,c=s.elements["search-text"].value.trim(),!c){s.reset(),f("Please fill in the search field!");return}w(),u();try{const{hits:r,totalHits:a}=await p(c,n);if(r.length===0){f("Sorry, there are no images matching your search query. Please try again!"),u();return}S(r),b(a)}catch{f("Something went wrong. Please try again later!")}finally{m(),s.reset()}}h.addEventListener("click",C);let d=!1;async function C(e){if(!(d||(d=!0,!e.currentTarget))){n++,u(),w();try{const{hits:a,totalHits:i}=await p(c,n);S(a),setTimeout(()=>R(),0),b(i)}catch{f("Something went wrong. Please try again later!")}finally{d=!1,m()}}}function b(e){n*15>=e?(H("We're sorry, but you've reached the end of search results."),u()):F()}function f(e){g.error({message:e,position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",maxWidth:"400",iconUrl:I})}function H(e){g.info({message:e,position:"bottomCenter",maxWidth:"400"})}function R(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}function S(e){v.insertAdjacentHTML("beforeend",O(e)),x.refresh()}
//# sourceMappingURL=index.js.map
