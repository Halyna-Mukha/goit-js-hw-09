import"./assets/styles-ce6a0d32.js";const t=document.querySelector(".feedback-form"),s=document.querySelectorAll("label");s.forEach(e=>e.classList.add("form-label"));const o=document.querySelector("button");o.classList.add("submit-btn");const m=document.querySelectorAll("input");m.forEach(e=>e.classList.add("form-input"));const n=()=>{const e={email:t.elements.email.value.trim(),message:t.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))},r=()=>{const e=localStorage.getItem("feedback-form-state");if(e){const a=JSON.parse(e);t.elements.email.value=a.email||"",t.elements.message.value=a.message||""}};t.addEventListener("input",n);window.addEventListener("load",r);t.addEventListener("submit",c);function c(e){e.preventDefault();const a=t.elements.email.value.trim(),l=t.elements.message.value.trim();a===""||l===""?alert("Please fill in all the fields!"):(console.log({email:a,message:l}),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset())}
//# sourceMappingURL=commonHelpers2.js.map
