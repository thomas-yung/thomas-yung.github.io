(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(14),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),d=a(6),h=(a(17),a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={pages:e.pages},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setButtonFadeTimers()}},{key:"setButtonFadeTimers",value:function(){for(var e=0;e<this.state.pages.length;e++){var t=this.getStyleForIndex(e);document.getElementById(this.state.pages[e]+"-menu-opt").style=t}}},{key:"getStyleForIndex",value:function(e){return"animation-delay: "+(e-1)/5+"s;"}},{key:"setActivePage",value:function(e,t){this.props.updatePage(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"menu-wrapper"},r.a.createElement("table",{id:"menu-table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.state.pages.map(function(t){return r.a.createElement("td",{onClick:function(a){return e.setActivePage(a,t)},className:"menu-opt",id:t+"-menu-opt",key:t+"-menu-opt"},r.a.createElement("h3",{className:"menu-text"},t.toUpperCase()))})))))}}]),t}(n.Component)),p=(a(21),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"con-wrapper"},r.a.createElement("h2",{className:"con-link"},r.a.createElement("a",{href:"mailto:thomasyung@hotmail.co.uk"},"EMAIL")),r.a.createElement("hr",null),r.a.createElement("h2",{className:"con-link"},r.a.createElement("a",{href:"https://www.linkedin.com/in/thomas-yung-42216b13a/"},"LINKEDIN")))}}]),t}(n.Component)),f=(a(23),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{id:"edu-table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"edu-cell"},r.a.createElement("h2",{className:"edu-type"},"GCSE")),r.a.createElement("td",{className:"edu-cell"},r.a.createElement("h2",{className:"edu-type"},"A Level")),r.a.createElement("td",{className:"edu-cell"},r.a.createElement("h2",{className:"edu-type"},"Degree"))),r.a.createElement("tr",{className:"edu-top-row"},r.a.createElement("td",{className:"edu-cell"},r.a.createElement("h2",{className:"edu-name"},"Urmston Grammar School")),r.a.createElement("td",{className:"edu-cell"},r.a.createElement("h2",{className:"edu-name"},"Urmston Grammar Sixth Form")),r.a.createElement("td",{className:"edu-cell"},r.a.createElement("h2",{className:"edu-name"},"Imperial College London"))),r.a.createElement("tr",null,r.a.createElement("td",{className:"edu-cell edu-cell-bottom"},r.a.createElement("p",{className:"edu-result"},"11 A*",r.a.createElement("br",null),"1 B")),r.a.createElement("td",{className:"edu-cell edu-cell-bottom"},r.a.createElement("p",{className:"edu-result"},"3 A*")),r.a.createElement("td",{className:"edu-cell edu-cell-bottom"},r.a.createElement("p",{className:"edu-result"},"Year 1: First",r.a.createElement("br",null),"Year 2: First")))))}}]),t}(n.Component)),g=(a(25),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"emp-wrapper"},r.a.createElement("table",{id:"emp-table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("h2",{className:"emp-name"},"The Hut Group"),r.a.createElement("br",null),r.a.createElement("h2",{className:"emp-det"},"Manchester | July 2018 - September 2018"),r.a.createElement("br",null),r.a.createElement("p",{className:"emp-desc"},"Between my second and third year at Imperial College London, I chose to intern at The Hut Group in Manchester. I worked on their in-house warehouse management system, Voyager on a team which specialised in the interal movement of stock. The system had daily deployments so there was plently of opportunity for my code to be used in live and this set-up allowed for a quick feedback loop for new features.",r.a.createElement("br",null),"It was also here that I first experience agile development, taking part in weekly sprints and daily stand-ups under the SCRUM methodology."))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("h2",{className:"emp-name"},"Fire Tech Camp"),r.a.createElement("br",null),r.a.createElement("h2",{className:"emp-det"},"Manchester | July 2018 - August 2018"),r.a.createElement("br",null),r.a.createElement("p",{className:"emp-desc"},"For three weeks, I taught students between the ages of 13 and 15 how to program in Java. Since many of these students had never seen code before, it was key for me to communicate concepts and ideas clearly."))))))}}]),t}(n.Component)),E=(a(27),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"scroll-box"},r.a.createElement("div",{className:"port-item"},r.a.createElement("img",{src:"tron.png",alt:""}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",{className:"port-title"},"TRON"),r.a.createElement("p",{className:"port-desc"},"At the end of my first year at Imperial, I partook in a group project which saw us create an ARM emulator, assembler and lastly a group extension which we chose to be our own implementation of the classic ",r.a.createElement("i",null,"TRON")," arcade game.",r.a.createElement("br",null),"Whilst what we finished was received well by the assessors, I only worked on sections of the code and wanted to experience using the graphics library and design my own AI opponent.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/thomas-yung/tron"},"GitHub link"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",null,"(Pic) A screenshot of a game played by 250 AI players.")))),r.a.createElement("div",{className:"port-item"},r.a.createElement("img",{src:"Matchups.png",alt:""}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",{className:"port-title"},"MatchUps"),r.a.createElement("p",{className:"port-desc"},"The second year group project at ICL requires students to build a web-application from scratch. My group and I chose to build a service which would allow amateur sports teams to find opponents in their local area.",r.a.createElement("br",null),"The project required, at minimum, a frontend (which we wrote using React), a backend (which we wrote in GoLang) and a database (which we used PSQL for). As a team we opted to follow the 'vertical-slicing' development process so that every team member worked with the full stack."))))}}]),t}(n.Component)),b=(a(29),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"title-wrapper"},r.a.createElement("h1",{className:"name-title"},"Thomas Yung",r.a.createElement("span",{className:"flashing"},"_")),r.a.createElement("h3",{className:"role-title"},"Software Engineer"))}}]),t}(n.Component)),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={activePage:0,pages:["title","education","employment","portfolio","contact"]},a.updateActivePage=a.updateActivePage.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"numToPageID",value:function(e){return e>=this.state.pages.length?"err @ numToPageID ("+e+")":this.state.pages[e]}},{key:"pageIDToNum",value:function(e){for(var t=0;t<this.state.pages.length;t++)if(this.state.pages[t]===e)return t;return console.log("err @ pageIDToNum ("+e+")"),0}},{key:"loadActivePage",value:function(){switch(this.state.activePage){case 0:default:return r.a.createElement(b,null);case 1:return r.a.createElement(f,null);case 2:return r.a.createElement(g,null);case 3:return r.a.createElement(E,null);case 4:return r.a.createElement(p,null)}}},{key:"updateActivePage",value:function(e){console.log("updating to "+e);var t=this.pageIDToNum(e);this.setState({activePage:t},this.loadActivePage)}},{key:"render",value:function(){return r.a.createElement("div",{id:"page-wrapper"},r.a.createElement(h,{pages:this.state.pages,updatePage:this.updateActivePage}),this.loadActivePage())}}]),t}(n.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");v?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(e)})}}()}],[[9,2,1]]]);
//# sourceMappingURL=main.5562e288.chunk.js.map