let s=document.createElement("style");s.innerHTML="button{border:none;background:0 0;width:30px;height:30px;border-radius:50%;margin:1px;display:flex;flex-flow:row;justify-content:center;align-items:center;outline:0}button:hover{background:#ffffff30}.icons{font-size:20px!important;padding:1px}.big{font-size:50px;width:60px;height:60px;padding:10px}.big:hover{background:0 0}.white{color:#fff}.ion{content:url(/_assets/ionic.b44c93e6.svg);width:50px}.electron{content:url(/_assets/electron.30639fc3.svg);width:50px}.go{content:url(/_assets/go.27afb009.svg);width:50px}.vscode{content:url(/_assets/vscode.cd030a6a.svg);width:50px}.nvim{content:url(/_assets/nvim.af9ee966.svg);width:50px}.lang{content:url(/_assets/language.82f85b8e.svg);width:30px}",document.head.appendChild(s);import{o as e,c as a,b as t}from"./index.b1917285.js";var n={name:"Icon",props:{iconName:{type:String,default:""},link:{type:String,default:null},big:{type:Boolean,default:!1}},data:()=>({classes:{github:"fab fa-github icons",gitlab:"fab fa-gitlab icons",twitter:"fab fa-twitter icons",linkedin:"fab fa-linkedin icons",js:"fab fa-js-square",go:"go",html:"fab fa-html5",css:"fab fa-css3-alt",vue:"fab fa-vuejs",react:"fab fa-react",ng:"fab fa-angular",node:"fab fa-node-js",ion:"ion",electron:"electron",linux:"fab fa-linux",vscode:"vscode",nvim:"nvim",arrowup:"fas fa-chevron-up icons",close:"fas fa-times icons",lang:"lang"}}),methods:{setIcon(){let s;switch(this.iconName){case"github":s=this.classes.github;break;case"gitlab":s=this.classes.gitlab;break;case"twitter":s=this.classes.twitter;break;case"linkedin":s=this.classes.linkedin;break;case"js":s=this.classes.js;break;case"go":s=this.classes.go;break;case"html":s=this.classes.html;break;case"css":s=this.classes.css;break;case"vue":s=this.classes.vue;break;case"react":s=this.classes.react;break;case"node":s=this.classes.node;break;case"angular":s=this.classes.ng;break;case"electron":s=this.classes.electron;break;case"ion":s=this.classes.ion;break;case"linux":s=this.classes.linux;break;case"vscode":s=this.classes.vscode;break;case"nvim":s=this.classes.nvim;break;case"arrowup":s=this.classes.arrowup;break;case"close":s=this.classes.close;break;case"lang":s=this.classes.lang;break;default:s=this.classes.close,console.warn("A default value has been set")}return s}}};n.render=function(s,n,i,c,l,o){return e(),a("button",{class:["white animate__animated animate__fadeIn animate__slower",i.big?"big":null],onClick:n[1]||(n[1]=e=>null!==i.link?s.$goToLink(i.link):null)},[t("i",{class:o.setIcon()},null,2)],2)};export default n;
