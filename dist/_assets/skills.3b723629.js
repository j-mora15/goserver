let e=document.createElement("style");e.innerHTML=".skills[data-v-3f133bc6]{background:#34699a;color:#fff;padding:20px;display:flex;flex-flow:column;justify-content:center;align-items:center;width:100%;min-height:600px}.up-cont[data-v-3f133bc6]{display:flex;flex-flow:column nowrap;justify-content:space-between;align-items:center;width:100%}.text-cont[data-v-3f133bc6]{display:flex;flex-flow:column nowrap;justify-content:space-between;align-items:center;width:100%;max-width:800px;padding:20px}.title[data-v-3f133bc6]{padding-bottom:10px}.tec-item[data-v-3f133bc6]{padding-bottom:10px;display:flex}.item[data-v-3f133bc6]{display:flex;flex-flow:column;justify-content:center;align-items:center;padding:10px}@media screen and (max-width:520px){.tec-item[data-v-3f133bc6]{flex-flow:row wrap;justify-content:center;align-items:center}}",document.head.appendChild(e);import{p as t,a,r as n,o as i,c as s,b as l,F as c,d as o,w as d,t as f}from"./index.080eb7fe.js";import m from"./icon.1f7178c7.js";var r={name:"AppHeader",components:{Icon:m},methods:{skillsToArray(e){const t=Object.keys(e);return Object.values(e).map(((e,a)=>({name:this.$l.titles.skills[t[a]],category:t[a],...e})))}}};const p=d("data-v-3f133bc6");t("data-v-3f133bc6");const x={class:"skills"},u={class:"up-cont"},b={class:"text-cont"},w={class:"title animate__animated animate__fadeInLeft animate__faster"},y={class:"tec-item animate__animated animate__fadeInRight animate__faster"};a();const g=p((function(e,t,a,d,m,r){const p=n("Icon");return i(),s("section",x,[l("div",u,[(i(!0),s(c,null,o(r.skillsToArray(e.$l.skills),(t=>(i(),s("div",b,[l("h1",w,f(t.name),1),l("div",y,[(i(!0),s(c,null,o(e.$l.skills[t.category],((e,t)=>(i(),s("div",{class:"item",key:t},[l(p,{iconName:e.icon,big:!0},null,8,["iconName"]),l("span",null,f(e.name),1)])))),128))])])))),256))])])}));r.render=g,r.__scopeId="data-v-3f133bc6";export default r;
