(this.webpackJsonpmcfulness=this.webpackJsonpmcfulness||[]).push([[0],{163:function(e,t){},165:function(e,t){},176:function(e,t){},178:function(e,t){},203:function(e,t){},205:function(e,t){},206:function(e,t){},211:function(e,t){},213:function(e,t){},219:function(e,t){},221:function(e,t){},240:function(e,t){},252:function(e,t){},255:function(e,t){},259:function(e,t,n){},260:function(e,t,n){"use strict";n.r(t);var c,r=n(2),i=n.n(r),a=n(131),o=n.n(a),s=n(142),u=n(43),l=n(7),d=n(132),f=n(133),j=n.p+"static/media/McHeart.baa1962e.png",p=n(6),h=f.a.div(c||(c=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  text-align: center;\n  a {\n    text-align: center;\n  }\n  img {\n    width: 40%;\n  }\n"]))),b=n(140),x=n(36),m=n.n(x),v=n(73),O=n(138),g=n(139),y=n(143),w=n(141),k=n(28),M={neutral:"\ud83d\ude36",happy:"\ud83d\ude04",sad:"\ud83d\ude1e",angry:"\ud83e\udd2c",fearful:"\ud83d\ude16",disgusted:"\ud83e\udd22",surprised:"\ud83d\ude32"},P=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(O.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).video=i.a.createRef(),e.state={expressions:[]},e.log=function(){var e;(e=console).log.apply(e,arguments)},e.run=Object(v.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.log("run started"),t.prev=1,t.next=4,k.d.tinyFaceDetector.load("/models/");case 4:return t.next=6,k.c("/models/");case 6:return t.next=8,navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}});case 8:e.mediaStream=t.sent,e.video.current.srcObject=e.mediaStream,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),e.log(t.t0.name,t.t0.message,t.t0.stack);case 15:case"end":return t.stop()}}),t,null,[[1,12]])}))),e.onPlay=Object(v.a)(m.a.mark((function t(){var n,c,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.video.current.paused&&!e.video.current.ended&&k.d.tinyFaceDetector.params){t.next=3;break}return setTimeout((function(){return e.onPlay()})),t.abrupt("return");case 3:return n=new k.a({inputSize:512,scoreThreshold:.5}),t.next=6,k.b(e.video.current,n).withFaceExpressions();case 6:(c=t.sent)&&(e.log(c),r=c.expressions.reduce((function(e,t){var n=t.expression,c=t.probability;return e.push(["".concat(M[n]," ").concat(n),c]),e}),[]),e.log(r),e.setState((function(){return{expressions:r}}))),setTimeout((function(){return e.onPlay()}),1e3);case 9:case"end":return t.stop()}}),t)}))),e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.run()}},{key:"render",value:function(){return Object(p.jsx)("div",{style:{display:"flex",minHeight:"100vh",justifyContent:"center"},children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Face Recognition Webcam"}),Object(p.jsx)("div",{children:this.state.expressions.sort((function(e,t){return t[1]-e[1]})).filter((function(e,t){return t<3})).map((function(e,t){var n=Object(b.a)(e,2),c=n[0],r=n[1];return t>0?Object(p.jsx)(p.Fragment,{}):Object(p.jsx)("p",{style:{textAlign:"center",fontSize:"40px"},children:c},c+r)}))}),Object(p.jsx)("div",{style:{position:"relative"},children:Object(p.jsx)("video",{ref:this.video,autoPlay:!0,muted:!0,onPlay:this.onPlay,style:{position:"absolute",width:"100%",left:0,right:0,bottom:0,top:0}})})]})})}}]),n}(i.a.Component),S=[{path:"/",component:function(){return Object(p.jsx)(h,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"McHeart"}),Object(p.jsx)(u.b,{to:"/face",children:Object(p.jsx)("img",{src:j,alt:"logo"})})]})})}},{path:"/face",component:P}],F=function(){return Object(p.jsx)(u.a,{children:Object(p.jsx)(l.c,{children:S.map((function(e,t){return Object(p.jsx)(l.a,Object(s.a)({exact:!0},e),t)}))})})},D=function(){return Object(p.jsx)(F,{})};n(259);o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.fd566149.chunk.js.map