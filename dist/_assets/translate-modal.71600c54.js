let e=document.createElement("style");e.innerHTML=".translate-modal[data-v-f8e7e70a]{position:fixed;top:0;left:0;background:#0c0b1dd9;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.modal-content[data-v-f8e7e70a]{background:#113f67;min-width:320px;border-radius:10px;padding:20px;color:#fff}.btn-cont[data-v-f8e7e70a]{display:flex;padding:10px 0 0;justify-content:flex-end}.btn[data-v-f8e7e70a]{padding:7px 20px;border-radius:10px;border:none;color:#000;font-weight:700;font-size:16px}.red[data-v-f8e7e70a]{background:#bb2626;color:#fff}select[data-v-f8e7e70a]{border:none;padding:20px;border-radius:10px;width:100%;background:#34699a;color:#fff}option[data-v-f8e7e70a]{width:100%;background:#fff;color:#0c0b1d;font-weight:700}#pseudoselect[data-v-f8e7e70a]{position:relative;width:315px;margin-bottom:10px;background:#34699a;color:#fff}.options[data-v-f8e7e70a]{position:absolute;list-style:none;z-index:20;margin:0!important;padding:0!important}.options>li[data-v-f8e7e70a]{background:#fff;text-align:center;margin-left:0;width:315px;padding:11px;border-bottom:1px solid #000;border-radius:10px;color:#000;margin-bottom:2px}",document.head.appendChild(e);import{p as t,a,o,c as n,b as l,t as s,F as d,d as i,f as r,w as c}from"./index.080eb7fe.js";var f={name:"TranslateModal",data:()=>({showOptions:!1}),methods:{close(){this.$closeTranslateModal()},changeLang(e){null!==e&&this.$changeLang(e),this.showOptions=!1}},computed:{options(){const e=this.$store.getters.currentLang;return Object.values(this.$store.getters.allLanguages).filter(((t,a)=>{if(t.info.languageCode!==e.info.languageCode)return t}))},modalStatus(){return this.$store.getters.translateModalStatus}},watch:{modalStatus(e,t){const a=document.querySelector("html"),o=document.querySelector("body");[void 0,null,"",!1].includes(e)?(o.style="overflow: initial",a.style="overflow: initial"):(o.style="overflow: hidden",a.style="overflow: hidden")}}};const u=c("data-v-f8e7e70a");t("data-v-f8e7e70a");const p={key:0,class:"translate-modal animate__animated"},g={class:"modal-content"},b={style:{"padding-bottom":"20px"}},m={class:"btn-cont"},h={key:0,class:"options"},v={class:"btn-cont"};a();const x=u((function(e,t,a,c,f,u){return u.modalStatus?(o(),n("div",p,[l("div",g,[l("h1",b,s(e.$l.info.message),1),l("div",m,[l("input",{type:"button",onClick:t[1]||(t[1]=t=>e.showOptions=!e.showOptions),class:"btn",id:"pseudoselect",value:e.$l.info.message},null,8,["value"]),e.showOptions?(o(),n("ul",h,[l("li",{onClick:t[2]||(t[2]=e=>u.changeLang(null))},s(e.$l.titles.buttons.cancel),1),(o(!0),n(d,null,i(u.options,(e=>(o(),n("li",{key:e.info.languageCode,onClick:t=>u.changeLang(e.info.languageCode)},s(e.info.language),9,["onClick"])))),128))])):r("",!0)]),l("div",v,[l("input",{type:"button",value:e.$l.titles.buttons.close,class:"btn red",onClick:t[3]||(t[3]=(...e)=>u.close(...e))},null,8,["value"])])])])):r("",!0)}));f.render=x,f.__scopeId="data-v-f8e7e70a";export default f;
