(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[8],{131:function(t,i,n){t.exports={worksContainer:"works_worksContainer__2h6Ax",title:"works_title__3sarh",layer:"works_layer__2o_1_"}},132:function(t,i,n){t.exports={work:"work_work__1gTh7",title:"work_title__3Qn8o",line:"work_line__37QTC",img:"work_img__39oef"}},250:function(t,i,n){"use strict";n.r(i);var e=n(1),r=n(45),a=n.n(r),o=n(46),s=n(40),c=n(0),l=n(52),u=n.n(l),d=n(17),p=n(131),h=n.n(p),f=n(7),y=n(132),b=n.n(y),v=n(72),g=n(38),m=function(t){var i=t._id,n=t.title,r=t.imgSrc,a=Object(v.a)({threshold:0},"initial","animate"),o=Object(s.a)(a,2),c=o[0],l=o[1],u=Object(v.a)({threshold:0},"initial","animate"),p=Object(s.a)(u,2),h=p[0],y=p[1];return Object(e.jsx)(f.b,{to:"/works/".concat(i),className:b.a.work,children:Object(e.jsxs)(d.b.div,{ref:c,variants:g.q,initial:"initial",animate:l,children:[Object(e.jsxs)("h2",{className:b.a.title,children:[" ",n," "]}),Object(e.jsx)(d.b.div,{className:b.a.line,ref:h,variants:g.l,initial:"initial",animate:y}),Object(e.jsx)("img",{src:r,alt:r,className:b.a.img})]})})};m.defaultProps={title:"",imgSrc:"",_id:""};var j=m,w=["#f48fb1 ","#9fa8da","#80cbc4","#aed581"];i.default=function(){var t=Object(c.useState)([]),i=Object(s.a)(t,2),n=i[0],r=i[1];return Object(c.useEffect)((function(){(function(){var t=Object(o.a)(a.a.mark((function t(){var i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("/data/works.json");case 3:i=t.sent,r(i.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(d.b.div,{variants:g.k,initial:"initial",animate:"animate",children:w.map((function(t,i){return Object(e.jsx)(d.b.div,{variants:g.j,style:{backgroundColor:t},className:h.a.layer},i)}))}),Object(e.jsx)(d.b.div,{className:h.a.worksContainer,variants:g.m,initial:"initial",animate:"animate",exit:"exit",children:Object(e.jsxs)(d.b.div,{variants:g.r,children:[Object(e.jsx)("h5",{className:h.a.title,children:" our works "}),Object(e.jsx)("div",{className:h.a.works,children:n.map((function(t){return Object(e.jsx)(j,{title:t.title,imgSrc:t.imgSrc,_id:t._id},t._id)}))})]})})]})}},38:function(t,i,n){"use strict";n.d(i,"m",(function(){return r})),n.d(i,"p",(function(){return a})),n.d(i,"i",(function(){return o})),n.d(i,"f",(function(){return s})),n.d(i,"b",(function(){return c})),n.d(i,"c",(function(){return l})),n.d(i,"h",(function(){return u})),n.d(i,"g",(function(){return d})),n.d(i,"k",(function(){return p})),n.d(i,"j",(function(){return h})),n.d(i,"d",(function(){return f})),n.d(i,"e",(function(){return y})),n.d(i,"r",(function(){return b})),n.d(i,"q",(function(){return v})),n.d(i,"l",(function(){return g})),n.d(i,"a",(function(){return m})),n.d(i,"n",(function(){return j})),n.d(i,"o",(function(){return w}));var e=window.innerWidth/5,r={initial:{y:"50vh",opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,ease:"easeInOut",staggerChildren:.25,delayChildren:.5}},exit:{y:"-50vh",opacity:0,transition:{duration:.5,ease:"easeInOut"}}},a={initial:{pathLength:0},animate:{pathLength:1,transition:{duration:1,ease:"easeInOut"}}},o={initial:{},animate:{transition:{duration:0,staggerChildren:.15,delayChildren:1}}},s={initial:{opacity:0,x:e},animate:{opacity:1,x:0,transition:{type:"spring",stiffness:120}}},c={initial:{},animate:{transition:{staggerChildren:.15,delayChildren:1}}},l={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}}},u={animate:{transition:{delayChildren:.75}}},d={initial:{scale:2,opacity:0},animate:{scale:1,opacity:1,transition:{duration:.5}}},p={initial:{},animate:{transition:{staggerChildren:.24,delayChildren:0}}},h={initial:{x:"-200vw",skew:"45deg"},animate:{x:"200vw",skew:"0deg",transition:{duration:1.2,ease:"linear"}}},f={initial:{opacity:0,height:0},animate:{opacity:1,height:"auto",transition:{duration:.5,ease:"easeInOut"}},exit:{height:0,opacity:0,transition:{duration:.5,ease:"easeInOut"}}},y={initial:{opacity:0,x:-e},animate:{opacity:1,x:0,transition:{duration:.5}}},b={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{duration:.65,delay:1.5}}},v={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}}},g={initial:{originX:"left",scaleX:0},animate:{scaleX:1,transition:{duration:.5,ease:"easeInOut"}}},m={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5,ease:"linear"}},exit:{opacity:0,transition:{duration:.5,ease:"linear"}}},j={initial:{scale:1},animate:{},whileHover:{scale:1.2,transition:{type:"spring",stiffness:150,damping:1}},whileTap:{scale:.8,transition:{type:"spring",stiffness:100,damping:8}}},w={initial:{opacity:0,y:100},animate:{opacity:1,y:0,transition:{duration:.5}},exit:{opacity:0,y:100,transition:{duration:.5}}}},72:function(t,i,n){"use strict";var e=n(40),r=n(0),a=n(17);function o(){return(o=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t}).apply(this,arguments)}var s=new Map,c=new Map,l=0;function u(t){return Object.keys(t).sort().filter((function(i){return void 0!==t[i]})).map((function(i){return i+"_"+("root"===i?(n=t.root)?(c.has(n)||(l+=1,c.set(n,l.toString())),c.get(n)):"0":t[i]);var n})).toString()}function d(t,i,n){if(void 0===n&&(n={}),!t)return function(){};var e=function(t){var i=u(t),n=s.get(i);if(!n){var e,r=new Map,a=new IntersectionObserver((function(i){i.forEach((function(i){var n,a=i.isIntersecting&&e.some((function(t){return i.intersectionRatio>=t}));t.trackVisibility&&"undefined"===typeof i.isVisible&&(i.isVisible=a),null==(n=r.get(i.target))||n.forEach((function(t){t(a,i)}))}))}),t);e=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:i,observer:a,elements:r},s.set(i,n)}return n}(n),r=e.id,a=e.observer,o=e.elements,c=o.get(t)||[];return o.has(t)||o.set(t,c),c.push(i),a.observe(t),function(){c.splice(c.indexOf(i),1),0===c.length&&(o.delete(t),a.unobserve(t)),0===o.size&&(a.disconnect(),s.delete(r))}}function p(t){return"function"!==typeof t.children}var h=function(t){var i,n;function e(i){var n;return(n=t.call(this,i)||this).node=null,n._unobserveCb=null,n.handleNode=function(t){n.node&&(n.unobserve(),t||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=t||null,n.observeNode()},n.handleChange=function(t,i){t&&n.props.triggerOnce&&n.unobserve(),p(n.props)||n.setState({inView:t,entry:i}),n.props.onChange&&n.props.onChange(t,i)},n.state={inView:!!i.initialInView,entry:void 0},n}n=t,(i=e).prototype=Object.create(n.prototype),i.prototype.constructor=i,i.__proto__=n;var a=e.prototype;return a.componentDidUpdate=function(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var t=this.props,i=t.threshold,n=t.root,e=t.rootMargin,r=t.trackVisibility,a=t.delay;this._unobserveCb=d(this.node,this.handleChange,{threshold:i,root:n,rootMargin:e,trackVisibility:r,delay:a})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!p(this.props)){var t=this.state,i=t.inView,n=t.entry;return this.props.children({inView:i,entry:n,ref:this.handleNode})}var e=this.props,a=e.children,s=e.as,c=e.tag,l=function(t,i){if(null==t)return{};var n,e,r={},a=Object.keys(t);for(e=0;e<a.length;e++)n=a[e],i.indexOf(n)>=0||(r[n]=t[n]);return r}(e,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(s||c||"div",o({ref:this.handleNode},l),a)},e}(r.Component);h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};i.a=function(t,i,n){var o=Object(a.c)(),s=function(t){var i=void 0===t?{}:t,n=i.threshold,e=i.delay,a=i.trackVisibility,o=i.rootMargin,s=i.root,c=i.triggerOnce,l=i.skip,u=i.initialInView,p=Object(r.useRef)(),h=Object(r.useState)({inView:!!u}),f=h[0],y=h[1],b=Object(r.useCallback)((function(t){void 0!==p.current&&(p.current(),p.current=void 0),l||t&&(p.current=d(t,(function(t,i){y({inView:t,entry:i}),i.isIntersecting&&c&&p.current&&(p.current(),p.current=void 0)}),{root:s,rootMargin:o,threshold:n,trackVisibility:a,delay:e}))}),[Array.isArray(n)?n.toString():n,s,o,c,l,a,e]);Object(r.useEffect)((function(){p.current||!f.entry||c||l||y({inView:!!u})}));var v=[b,f.inView,f.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(t),c=Object(e.a)(s,2),l=c[0],u=c[1];return Object(r.useEffect)((function(){u?o.start(n):o.start(i)}),[u]),[l,o]}}}]);
//# sourceMappingURL=8.c6cc449b.chunk.js.map