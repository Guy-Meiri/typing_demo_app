(this.webpackJsonptyping_demo_app=this.webpackJsonptyping_demo_app||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports={mytextarea:"myCssTest_mytextarea__Xzu0O",myImg:"myCssTest_myImg__3k-Xv",myCanvas:"myCssTest_myCanvas__1qVbM"}},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),c=(n(9),n(3));var l=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),r=Object(a.useState)(!1),i=Object(c.a)(r,2),l=i[0],s=i[1];return Object(a.useEffect)((function(){var a=t.current;a.width=1.5*e.width,a.height=1.5*e.height,a.style.width="".concat(1.5*e.width/2,"px"),a.style.height="".concat(1.5*e.height/2,"px");var o=a.getContext("2d");o.scale(2,2),o.font="40px Arial",o.fillStyle="#00DADA",o.fillText("noom is a cutie pie",50,e.height/4),o.fillText("she's the real deal dude!",50,e.height/4+60),o.lineCap="round",o.strokeStyle="#1f2f3f",o.lineWidth=2,o.globalAlpha=.3,n.current=o}),[]),o.a.createElement(a.Fragment,null,o.a.createElement("canvas",{onMouseDown:function(e){var t=e.nativeEvent;s(!0);var a=t.offsetX,o=t.offsetY;n.current.beginPath(),n.current.moveTo(a,o)},onMouseUp:function(){n.current.closePath(),s(!1)},onMouseMove:function(e){var t=e.nativeEvent;if(l){var a=t.offsetX,o=t.offsetY;n.current.lineTo(a,o),n.current.stroke()}},ref:t}),o.a.createElement("div",{style:{left:250}},o.a.createElement("button",{style:{margin:10}},"DRAW"),o.a.createElement("button",{style:{margin:10}},"ERASE")))};var s=function(){return o.a.createElement(a.Fragment,null,o.a.createElement("div",{style:{border:"solid black 3px",width:600,height:600,left:"300px",top:"100px"}},o.a.createElement(l,{width:600,height:600})))};n(10),n(11),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.8826d1ab.chunk.js.map