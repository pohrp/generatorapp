(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const c=()=>{const n=["John","Emma","James","Sophia","Michael","Olivia","anthony"],e=["tan","goh","sim"];return`Generated Name: ${n[Math.floor(Math.random()*n.length)]} ${e[Math.floor(Math.random()*e.length)]}`},l=()=>{const n=[];for(;n.length<6;){const e=Math.floor(Math.random()*49)+1;n.includes(e)||n.push(e)}return n},i=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`,u=()=>{const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?";return Array.from({length:12},()=>e[Math.floor(Math.random()*e.length)]).join("")},m=n=>{var e;document.querySelectorAll(".generator").forEach(o=>o.classList.add("hidden")),(e=document.getElementById(`${n}-generator`))==null||e.classList.remove("hidden")};document.addEventListener("DOMContentLoaded",()=>{var n,e,o,a,t;document.querySelectorAll("nav ul li a").forEach(r=>{r.addEventListener("click",s=>{s.preventDefault();const d=s.target.dataset.type;m(d)})}),(n=document.getElementById("generate-name-btn"))==null||n.addEventListener("click",()=>{document.getElementById("name-result").textContent=c()}),(e=document.getElementById("generate-number-btn"))==null||e.addEventListener("click",()=>{document.getElementById("number-result").textContent=`Generated Numbers: ${l().join(", ")}`}),(o=document.getElementById("generate-color-btn"))==null||o.addEventListener("click",()=>{document.body.style.backgroundColor=i()}),(a=document.getElementById("reset-color-btn"))==null||a.addEventListener("click",()=>{document.body.style.backgroundColor="white"}),(t=document.getElementById("generate-password-btn"))==null||t.addEventListener("click",()=>{document.getElementById("password-result").textContent=u()})});
