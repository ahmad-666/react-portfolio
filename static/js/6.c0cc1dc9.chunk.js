(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{133:function(t,i,n){t.exports={work:"workDetail_work__2hJuu"}},134:function(t,i,n){t.exports={landing:"workDetailLanding_landing__3OFH5",img:"workDetailLanding_img__1aaC3",title:"workDetailLanding_title__diUZH"}},135:function(t,i,n){t.exports={info:"workDetailInfo_info__8LGbE",desc:"workDetailInfo_desc__2YaHL"}},136:function(t,i,n){t.exports={imgs:"workDetailImgs_imgs__1d6Pj",img:"workDetailImgs_img__3Qm-q"}},137:function(t,i,n){t.exports={blackFilter:"workDetailActiveImg_blackFilter__2aj9w",img:"workDetailActiveImg_img__21aQy"}},248:function(t,i,n){"use strict";n.r(i);var a=n(1),e=n(45),r=n.n(e),s=n(46),c=n(40),o=n(0),l=n(52),u=n.n(l),d=n(17),m=n(2),g=n(133),f=n.n(g),p=n(134),j=n.n(p),h=function(t){var i=t.imgSrc,n=t.title;return Object(a.jsxs)("div",{className:j.a.landing,children:[Object(a.jsx)("img",{src:i,alt:i,className:j.a.img}),Object(a.jsxs)("h2",{className:j.a.title,children:[" ",n," "]})]})};h.defaultProps={imgSrc:"",title:""};var y=h,b=n(135),x=n.n(b),v=function(t){t.title;var i=t.desc;return Object(a.jsx)("div",{className:x.a.info,children:Object(a.jsxs)("p",{className:x.a.desc,children:[" ",i]})})};v.defaultProps={title:"",desc:""};var O=v,_=n(136),w=n.n(_),k=function(t){var i=t.imgs,n=t.setActiveImg;return Object(a.jsx)("div",{className:w.a.imgs,children:i.map((function(t,i){return Object(a.jsx)("img",{src:t,alt:t,className:w.a.img,onClick:function(){document.body.classList.add("disableScroll"),n(t)}},i)}))})};k.defaultProps={imgs:[],setActiveImg:function(){}};var I=Object(m.h)(k),C=n(137),S=n.n(C),D=n(38),N=function(t){var i=t.imgSrc,n=t.setActiveImg,e=Object(o.useRef)(null);return Object(a.jsx)(d.b.div,{variants:D.a,initial:"initial",animate:"animate",exit:"exit",ref:e,className:S.a.blackFilter,onClick:function(t){t.target===e.current&&(document.body.classList.remove("disableScroll"),n(null))},children:Object(a.jsx)("img",{src:i,alt:i,className:S.a.img})})};N.defaultProps={imgSrc:"",setActiveImg:function(){}};var L=N;i.default=function(){var t=Object(o.useState)(null),i=Object(c.a)(t,2),n=i[0],e=i[1],l=Object(o.useState)(null),g=Object(c.a)(l,2),p=g[0],j=g[1],h=Object(m.g)();return Object(o.useEffect)((function(){(function(){var t=Object(s.a)(r.a.mark((function t(){var i,n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("/data/works.json");case 3:i=t.sent,n=i.data,a=n.filter((function(t){return t._id===h.id}))[0],e(a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.b.div,{className:f.a.work,variants:D.m,initial:"initial",animate:"animate",exit:"exit",children:n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y,{imgSrc:n.imgSrc,title:n.title}),Object(a.jsx)(O,{title:n.title,desc:n.desc}),Object(a.jsx)(I,{imgs:n.imgs,setActiveImg:j})]})}),Object(a.jsx)(d.a,{children:p&&Object(a.jsx)(L,{imgSrc:p,setActiveImg:j})})]})}},38:function(t,i,n){"use strict";n.d(i,"m",(function(){return e})),n.d(i,"p",(function(){return r})),n.d(i,"i",(function(){return s})),n.d(i,"f",(function(){return c})),n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return l})),n.d(i,"h",(function(){return u})),n.d(i,"g",(function(){return d})),n.d(i,"k",(function(){return m})),n.d(i,"j",(function(){return g})),n.d(i,"d",(function(){return f})),n.d(i,"e",(function(){return p})),n.d(i,"r",(function(){return j})),n.d(i,"q",(function(){return h})),n.d(i,"l",(function(){return y})),n.d(i,"a",(function(){return b})),n.d(i,"n",(function(){return x})),n.d(i,"o",(function(){return v}));var a=window.innerWidth/5,e={initial:{y:"50vh",opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,ease:"easeInOut",staggerChildren:.25,delayChildren:.5}},exit:{y:"-50vh",opacity:0,transition:{duration:.5,ease:"easeInOut"}}},r={initial:{pathLength:0},animate:{pathLength:1,transition:{duration:1,ease:"easeInOut"}}},s={initial:{},animate:{transition:{duration:0,staggerChildren:.15,delayChildren:1}}},c={initial:{opacity:0,x:a},animate:{opacity:1,x:0,transition:{type:"spring",stiffness:120}}},o={initial:{},animate:{transition:{staggerChildren:.15,delayChildren:1}}},l={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}}},u={animate:{transition:{delayChildren:.75}}},d={initial:{scale:2,opacity:0},animate:{scale:1,opacity:1,transition:{duration:.5}}},m={initial:{},animate:{transition:{staggerChildren:.24,delayChildren:0}}},g={initial:{x:"-200vw",skew:"45deg"},animate:{x:"200vw",skew:"0deg",transition:{duration:1.2,ease:"linear"}}},f={initial:{opacity:0,height:0},animate:{opacity:1,height:"auto",transition:{duration:.5,ease:"easeInOut"}},exit:{height:0,opacity:0,transition:{duration:.5,ease:"easeInOut"}}},p={initial:{opacity:0,x:-a},animate:{opacity:1,x:0,transition:{duration:.5}}},j={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.65,delay:1.5}}},h={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}}},y={initial:{originX:"left",scaleX:0},animate:{scaleX:1,transition:{duration:.5,ease:"easeInOut"}}},b={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5,ease:"linear"}},exit:{opacity:0,transition:{duration:.5,ease:"linear"}}},x={initial:{scale:1},animate:{},whileHover:{scale:1.2,transition:{type:"spring",stiffness:150,damping:1}},whileTap:{scale:.8,transition:{type:"spring",stiffness:100,damping:8}}},v={initial:{opacity:0,y:100},animate:{opacity:1,y:0,transition:{duration:.5}},exit:{opacity:0,y:100,transition:{duration:.5}}}}}]);
//# sourceMappingURL=6.c0cc1dc9.chunk.js.map