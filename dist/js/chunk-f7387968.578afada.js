(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7387968"],{"0fd9":function(t,e,s){"use strict";s("4b85");var n=s("2b0e"),a=s("d9f7"),r=s("80d2");const i=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return i.reduce((s,n)=>(s[t+Object(r["w"])(n)]=e(),s),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),f=l("justify",()=>({type:String,default:null,validator:u})),p=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",()=>({type:String,default:null,validator:p})),v={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,s){let n=m[t];if(null!=s){if(e){const s=e.replace(t,"");n+="-"+s}return n+="-"+s,n.toLowerCase()}}const b=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:e,data:s,children:n}){let r="";for(const a in e)r+=String(e[a]);let i=b.get(r);if(!i){let t;for(t in i=[],v)v[t].forEach(s=>{const n=e[s],a=y(t,s,n);a&&i.push(a)});i.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(r,i)}return t(e.tag,Object(a["a"])(s,{staticClass:"row",class:i}),n)}})},"270d":function(t,e,s){"use strict";var n=s("7589"),a=s.n(n);a.a},"4b85":function(t,e,s){},"62ad":function(t,e,s){"use strict";s("4b85");var n=s("2b0e"),a=s("d9f7"),r=s("80d2");const i=["sm","md","lg","xl"],o=(()=>i.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>i.reduce((t,e)=>(t["offset"+Object(r["w"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>i.reduce((t,e)=>(t["order"+Object(r["w"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,s){let n=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");n+="-"+s}return"col"!==t||""!==s&&!0!==s?(n+="-"+s,n.toLowerCase()):n.toLowerCase()}}const f=new Map;e["a"]=n["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:n,parent:r}){let i="";for(const a in e)i+=String(e[a]);let o=f.get(i);if(!o){let t;for(t in o=[],d)d[t].forEach(s=>{const n=e[s],a=u(t,s,n);a&&o.push(a)});const s=o.some(t=>t.startsWith("col-"));o.push({col:!s||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(i,o)}return t(e.tag,Object(a["a"])(s,{class:o}),n)}})},7589:function(t,e,s){},a523:function(t,e,s){"use strict";s("20f6"),s("4b85");var n=s("2b0e");function a(t){return n["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:n,children:a}){n.staticClass=`${t} ${n.staticClass||""}`.trim();const{attrs:r}=n;if(r){n.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(n.staticClass+=" "+t.join(" "))}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),e(s.tag,n,a)}})}var r=s("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:n}){let a;const{attrs:i}=s;return i&&(s.attrs={},a=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),n)}})},b687:function(t,e,s){"use strict";var n=s("24b2"),a=s("f2e7"),r=s("90a2"),i=s("58df"),o=s("80d2");e["a"]=Object(i["a"])(n["a"],a["a"]).extend({name:"VLazy",directives:{intersect:r["a"]},props:{options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles(){return{...this.measurableStyles}}},methods:{genContent(){const t=Object(o["n"])(this);if(!this.transition)return t;const e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve(t,e,s){this.isActive||(this.isActive=s)}},render(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},ca1e:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"professional animate__animated animate__fadeIn"},[s("h1",{staticClass:"text-center"},[t._v(t._s(t.$l.system.sections.education))]),s("v-container",[s("v-lazy",{attrs:{options:{threshold:.1},"min-height":"200",transition:"scroll-y-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[s("v-row",[s("v-col",{staticClass:"p-0",attrs:{cols:"12"}},[s("v-card",{staticClass:"pa-5 flex-grow-1 ma-2",attrs:{shaped:""}},[s("v-card-title",[t._v(t._s(t.$l.system.subsections.formal_edu))]),s("v-card-text",[s("ul",t._l(t.$l.formal_edu,(function(e,n){return s("li",{key:n},[s("p",[s("v-btn",{staticClass:"mr-2 if-mobile",attrs:{disabled:"",icon:""}},[s("v-icon",{attrs:{color:e.color}},[t._v("mdi-hexagon-slice-6")])],1),s("strong",{staticClass:"indigo--text mr-2"},[t._v(t._s(e.name.value))])],1),s("p",{staticClass:"d-xs-ml-1 d-sm-ml-6"},[s("strong",[t._v(t._s(e.career.key)+": ")]),s("span",[t._v(t._s(e.career.value))])]),s("p",{staticClass:"d-xs-ml-1 d-sm-ml-6"},[s("strong",[t._v(t._s(e.status.key)+": ")]),s("span",[t._v(t._s(e.status.value))])])])})),0)])],1),s("v-card",{staticClass:"pa-5 flex-grow-1 ma-2",attrs:{shaped:""}},[s("v-card-title",[t._v(t._s(t.$l.system.subsections.courses))]),s("v-card-text",[s("ul",t._l(t.$l.courses,(function(e,n){return s("li",{key:n},[s("p",[s("v-btn",{staticClass:"mr-2 if-mobile",attrs:{disabled:"",icon:""}},[s("v-icon",{attrs:{color:e.color}},[t._v("mdi-hexagon-slice-6")])],1),s("strong",{staticClass:"indigo--text mr-2"},[t._v(t._s(e.name.value))])],1),s("p",{staticClass:"d-xs-ml-1 d-sm-ml-6"},[s("strong",[t._v(t._s(e.platform.key)+": ")]),s("span",[t._v(t._s(e.platform.value))])])])})),0)])],1)],1)],1)],1)],1)],1)},a=[],r={data:()=>({isActive:!1})},i=r,o=(s("270d"),s("2877")),l=s("6544"),c=s.n(l),d=s("8336"),u=s("b0af"),f=s("99d9"),p=s("62ad"),g=s("a523"),v=s("132d"),m=s("b687"),y=s("0fd9"),b=Object(o["a"])(i,n,a,!1,null,"0c83b711",null);e["default"]=b.exports;c()(b,{VBtn:d["a"],VCard:u["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:p["a"],VContainer:g["a"],VIcon:v["a"],VLazy:m["a"],VRow:y["a"]})}}]);
//# sourceMappingURL=chunk-f7387968.578afada.js.map