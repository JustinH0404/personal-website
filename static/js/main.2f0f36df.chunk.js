(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},120:function(e,t,c){},172:function(e,t,c){},173:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(78),a=c.n(i),r=(c(87),c(88),c(89),c(12)),l=c(0);function j(){return Object(l.jsx)("div",{className:"navBar",children:Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{className:"right",children:[Object(l.jsx)("li",{className:"headerText",children:Object(l.jsx)(r.b,{className:"headerText",to:"personal-website",children:" Home"})}),Object(l.jsx)("li",{className:"headerText",children:Object(l.jsx)(r.b,{className:"headerText",to:"/aboutMe",children:"About"})})]})})})}c(98),c(82);function o(){return Object(l.jsx)("section",{id:"homePage",children:Object(l.jsxs)("div",{class:"homePage",children:[Object(l.jsx)("p",{class:"homeName",children:"Hi"}),Object(l.jsxs)("div",{class:"homeDesc",children:[Object(l.jsx)("div",{children:" I'm Justin,"}),Object(l.jsx)("div",{children:" a student at UC Berkeley studying "}),Object(l.jsx)("div",{children:" Electrical Engineering and "}),Object(l.jsx)("div",{children:"Computer Science"})]}),Object(l.jsxs)("div",{class:"homeDesc2",children:[Object(l.jsx)("a",{href:"#projectsPage",class:"links2",children:" Projects "}),Object(l.jsx)(r.b,{className:"paddingLeftRight links",to:"/aboutMe",children:"About me"})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("h2",{class:"rotatingWords",children:[Object(l.jsx)("span",{children:"Currently: "}),Object(l.jsxs)("div",{class:"rw-words rw-words-1",children:[Object(l.jsx)("span",{children:"Creating and devleoping at Codebase"}),Object(l.jsx)("span",{children:"Studying at Moffit Library"}),Object(l.jsx)("span",{children:"Working out at RSF"}),Object(l.jsx)("span",{children:"Playing volleyball with friends"})]}),Object(l.jsx)("br",{})]})}),Object(l.jsx)("div",{class:"socials"})]})})}var d=c(16),b=c.n(d),h=c(29),p=c(31);c(100),c(101);function x(e){var t=e.name,c=e.image,s=e.descrip;return Object(l.jsx)("div",{class:"projectDescription fade-in",children:Object(l.jsxs)("div",{class:"projectsContainer",children:[Object(l.jsxs)("div",{class:"projectTextBox",children:[Object(l.jsxs)("p",{class:"projectsTitle",children:[" ",t," "]}),Object(l.jsx)("p",{class:"projectsText",children:s})]}),Object(l.jsx)("div",{class:"projectsPicBox",children:Object(l.jsx)("img",{class:"projectsPic",src:c,alt:"pic"})})]})})}var u=c(30),O=c.n(u);function m(){var e=n.a.useState(null),t=Object(p.a)(e,2),c=t[0],s=t[1];function i(){return(i=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.airtable.com/v0/appKlfLPKeXS4jX0p/Project",{headers:{authorization:"Bearer ".concat("key8UKhAEWxq4usDw")}});case 2:t=e.sent,s(t.data.records),console.log(t.data.records);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.useEffect((function(){!function(){i.apply(this,arguments)}()}),[]),c?Object(l.jsx)("section",{id:"projectsPage",children:Object(l.jsxs)("div",{class:"projectsPage",children:[Object(l.jsx)("p",{class:"projectPageTitle fade-in",children:"Projects"}),c.map((function(e){return Object(l.jsx)(x,{name:e.fields.Name,image:e.fields.Logo[0].url,descrip:e.fields.description})}))]})}):Object(l.jsx)("p",{children:" Loading "})}c(120);var g=c.p+"static/media/aboutMe.4dd296e3.jpg",f=c.p+"static/media/Signature.3ba1451c.png";function v(){return Object(l.jsx)("section",{id:"aboutPage",children:Object(l.jsxs)("div",{class:"aboutPage fade-in",children:[Object(l.jsx)("div",{className:"signBox",children:Object(l.jsx)("img",{src:f,className:"signPic",alt:"me"})}),Object(l.jsxs)("div",{className:"aboutDescription",children:[Object(l.jsx)("img",{class:"aboutPhoto",src:g,alt:"me"}),Object(l.jsxs)("div",{class:"aboutText2",children:[Object(l.jsx)("p",{class:"aboutText",children:"Hi, I'm Justin! I am currently a freshman studying Electrical Engineering and Computer Science at UC Berkeley."}),Object(l.jsx)("p",{className:"aboutText",children:"My ultimate goal is to one day help design and build a product that will help the visually impaired regain their sight."}),Object(l.jsx)("p",{className:"aboutText",children:"But since I'm not there yet, here are a few things I enjoy:"}),Object(l.jsx)("p",{className:"aboutText",children:"Old Taylor Swift songs - Back to December, You Belong with Me, are all immaculate"}),Object(l.jsx)("p",{className:"aboutText",children:"Attack on Titan (the Manga) - Analyzing protagonist Eren Yeager's choice making is fun"})]})]})]})})}c(60);function y(e){var t=e.name,c=e.descrip,s=e.time,n=e.role;return Object(l.jsxs)("div",{class:"expBlock",children:[Object(l.jsx)("p",{class:"expTitle2",children:t}),Object(l.jsxs)("p",{class:"expTime",children:[" ",s]}),Object(l.jsxs)("p",{class:"expTime",children:[" ",n]}),Object(l.jsx)("p",{class:"expDesc",children:c})]})}function T(){var e=n.a.useState(null),t=Object(p.a)(e,2),c=t[0],s=t[1];function i(){return(i=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.airtable.com/v0/appXcyoZJo7HOgdsU/Table%201",{headers:{authorization:"Bearer ".concat("key8UKhAEWxq4usDw")}});case 2:t=e.sent,s(t.data.records),console.log(t.data.records);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.useEffect((function(){!function(){i.apply(this,arguments)}()}),[]),c?Object(l.jsx)("section",{id:"expPage",children:Object(l.jsxs)("div",{class:"expPage",children:[Object(l.jsx)("p",{class:"titleText expTitle",children:"Experiences"}),c.map((function(e){return Object(l.jsx)(y,{name:e.fields.Name,time:e.fields.time,descrip:e.fields.description,role:e.fields.role})}))]})}):Object(l.jsx)("p",{children:" Loading "})}c(81),c.p,c.p,c.p,c.p,c.p,c.p,c(172);var w=c(2);var P=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(w.c,{children:[Object(l.jsxs)(w.a,{exact:!0,path:"/personal-website",children:[Object(l.jsx)(o,{}),Object(l.jsx)(m,{})]}),Object(l.jsxs)(w.a,{exact:!0,path:"/aboutMe",children:[Object(l.jsx)(v,{}),Object(l.jsx)(T,{})]})]})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,174)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(P,{})})}),document.getElementById("root")),N()},60:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},98:function(e,t,c){}},[[173,1,2]]]);
//# sourceMappingURL=main.2f0f36df.chunk.js.map