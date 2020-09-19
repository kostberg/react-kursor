(this["webpackJsonpreact-kursor-example"]=this["webpackJsonpreact-kursor-example"]||[]).push([[0],{14:function(r,n,o){"use strict";o.r(n);o(5);var e=o(0),s=o.n(e),t=o(3),a=o.n(t),i=o(2);function u(){return(u=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(r[e]=o[e])}return r}).apply(this,arguments)}function l(r,n,o,s){void 0===s&&(s=0),o=function(r,n){var o=Object(e.useRef)([]),s=Object(e.useState)(void 0),t=s[0],a=s[1],i=Object(e.useCallback)((function(){for(var r=arguments.length,n=new Array(r),e=0;e<r;e++)n[e]=arguments[e];o.current=n,a((function(r){return!r}))}),[]);return Object(e.useEffect)((function(){if("undefined"!==typeof t){var e=setTimeout((function(){r.apply(void 0,o.current)}),n);return function(){clearTimeout(e)}}}),[t,n,r]),n?i:r}(o,s),Object(e.useEffect)((function(){if(r)return r.addEventListener(n,o),function(){r.removeEventListener(n,o)}}),[r,n,o])}var d={retries:20,maxTime:500,finishBeforeRetry:!0,passIndex:!1};function c(r,n,o){void 0===n&&(n=[]);var s=Object(e.useState)(void 0),t=s[0],a=s[1],i=Object(e.useRef)(u({},d,o,{evaluator:r}));return[t,Object(e.useCallback)((function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var e,s,t=i.current,u=t.evaluator,l=t.maxTime,d=t.retries,c=t.passIndex,p=d;new Promise((function(r){e=setInterval((function(){if(p<=0)return r(s);try{s=c?u.apply(void 0,[p].concat(n)):u.apply(void 0,n)}finally{if(s)return r(s)}--p}),l/d)})).then((function(r){clearInterval(e),a(r)}))}),n)]}var p=function(){return s.a.createElement(i.b,{css:"\nhtml{\n    cursor: none;\n}\n\n  .notCursor {\n    cursor: none;\n  }\n  .notCursor * {\n    cursor: none;\n  }\n  #kursorWrapper {\n    position: fixed;\n    z-index: 99;\n    overflow: hidden;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n  div[class*='kursor'] {\n    position: fixed;\n    pointer-events: none;\n    transform: translate(-50%, -50%);\n    z-index: 10000;\n  }\n  div[class*='kursor'].kursor--hidden {\n    opacity: 0;\n    width: 0px;\n    height: 0px;\n  }\n  div[class*='kursor'].kursor--1 {\n    left: 0px;\n    top: 0px;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    border: 2px solid rgba(var(--k-color), 1);\n    transition: all 0.2s ease, top 0.18s ease-out, left 0.18s ease-out;\n  }\n  div[class*='kursor'].kursor--1 + .kursorChild {\n    display: block;\n    width: 4px;\n    height: 4px;\n    background: rgba(var(--k-color), 1);\n    border-radius: 50%;\n    transition: all 0.2s ease, top 0s ease-out, left 0s ease-out;\n  }\n  div[class*='kursor'].kursor--1.--hover {\n    width: 40px;\n    height: 40px;\n    border: 2px solid rgba(var(--k-color), 0);\n    background: rgba(var(--k-color), 0.1);\n  }\n  div[class*='kursor'].kursor--1.--hover + .kursorChild {\n    background: rgba(var(--k-color), 0.3);\n  }\n  div[class*='kursor'].kursor--1.kursor--down {\n    width: 20px;\n    height: 20px;\n  }\n  div[class*='kursor'].kursor--1.kursor--down + .kursorChild:after {\n    width: 40px !important;\n    height: 40px !important;\n    opacity: 0;\n    border: 1px solid;\n    border-radius: 50%;\n    border-color: rgba(var(--k-color), 1);\n    transition: all 0.4s ease;\n  }\n  div[class*='kursor'].kursor--2 {\n    left: 0px;\n    top: 0px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background: rgba(var(--k-color), 1);\n    transition: all 0.2s ease, top 0.1s ease-out, left 0.1s ease-out;\n  }\n  div[class*='kursor'].kursor--2 + .kursorChild {\n    display: block;\n    width: 4px;\n    height: 4px;\n    background: rgba(var(--k-color), 1);\n    border-radius: 50%;\n    transition: all 0.2s ease, top 0.2s ease-out, left 0.2s ease-out;\n  }\n  div[class*='kursor'].kursor--2.--hover {\n    width: 40px;\n    height: 40px;\n    background: rgba(var(--k-color), 0.1);\n  }\n  div[class*='kursor'].kursor--2.--hover + .kursorChild {\n    background: rgba(var(--k-color), 0.3);\n  }\n  div[class*='kursor'].kursor--2.kursor--down {\n    width: 10px;\n    height: 10px;\n  }\n  div[class*='kursor'].kursor--2.kursor--down + .kursorChild:after {\n    width: 40px !important;\n    height: 40px !important;\n    opacity: 0;\n    border: 1px solid;\n    border-radius: 50%;\n    border-color: rgba(var(--k-color), 1);\n    transition: all 0.4s ease;\n  }\n  div[class*='kursor'].kursor--3 {\n    left: 0px;\n    top: 0px;\n    width: 20px;\n    height: 20px;\n    border: 1px solid rgba(var(--k-color), 1);\n    transition: all 0.2s ease, top 0.05s ease-out, left 0.05s ease-out;\n  }\n  div[class*='kursor'].kursor--3 + .kursorChild {\n    display: block;\n    width: 4px;\n    height: 4px;\n    background: rgba(var(--k-color), 1);\n    transition: all 0.2s ease, top 0.2s ease-out, left 0.2s ease-out;\n  }\n  div[class*='kursor'].kursor--3.--hover {\n    width: 40px;\n    height: 40px;\n    background: rgba(var(--k-color), 0.1);\n    border: 1px solid rgba(var(--k-color), 0);\n  }\n  div[class*='kursor'].kursor--3.--hover + .kursorChild {\n    background: rgba(var(--k-color), 0.3);\n  }\n  div[class*='kursor'].kursor--3.kursor--down {\n    width: 5px;\n    height: 5px;\n    border: 1px solid rgba(var(--k-color), 0);\n  }\n  div[class*='kursor'].kursor--3.kursor--down + .kursorChild {\n    width: 10px;\n    height: 10px;\n  }\n  div[class*='kursor'].kursor--3.kursor--down + .kursorChild:after {\n    width: 40px !important;\n    height: 40px !important;\n    opacity: 0;\n    border: 1px solid;\n    border-color: rgba(var(--k-color), 1);\n    transition: all 0.4s ease;\n  }\n  div[class*='kursor'].kursor--4 {\n    left: 0px;\n    top: 0px;\n    width: 50px;\n    height: 50px;\n    border: 1px solid rgba(var(--k-color), 0.3);\n    border-radius: 50%;\n    transition: all 0.2s ease, top 0.2s ease-out, left 0.2s ease-out;\n  }\n  div[class*='kursor'].kursor--4 + .kursorChild {\n    display: block;\n    width: 6px;\n    height: 6px;\n    background: rgba(var(--k-color), 1);\n    border-radius: 50%;\n    transition: all 0.2s ease, top 0.03s ease-out, left 0.03s ease-out;\n  }\n  div[class*='kursor'].kursor--4.--hover {\n    width: 30px;\n    height: 30px;\n    background: rgba(var(--k-color), 0.1);\n    border: 3px solid rgba(var(--k-color), 0);\n  }\n  div[class*='kursor'].kursor--4.--hover + .kursorChild {\n    width: 25px;\n    height: 25px;\n    background: rgba(var(--k-color), 0.1);\n  }\n  div[class*='kursor'].kursor--4.kursor--down {\n    width: 5px;\n    height: 5px;\n  }\n  div[class*='kursor'].kursor--4.kursor--down + .kursorChild {\n    width: 10px;\n    height: 10px;\n  }\n  div[class*='kursor'].kursor--4.kursor--down + .kursorChild:after {\n    width: 40px !important;\n    height: 40px !important;\n    opacity: 0;\n    border-radius: 50%;\n    border: 1px solid;\n    border-color: rgba(var(--k-color), 1);\n    transition: all 0.4s ease;\n  }\n  div[class*='kursor'].kursor--5 {\n    left: 0px;\n    top: 0px;\n    width: 10px;\n    height: 10px;\n    border: 1px solid rgba(var(--k-color), 0.5);\n    border-radius: 50%;\n    transition: all 0.2s ease, top 0.2s ease-out, left 0.2s ease-out;\n  }\n  div[class*='kursor'].kursor--5.--hover {\n    width: 26px;\n    height: 26px;\n    background: rgba(var(--k-color), 0.1);\n    border: 3px solid rgba(var(--k-color), 0);\n  }\n  div[class*='kursor'].kursor--5.kursor--down {\n    width: 15px;\n    height: 15px;\n  }\n  div[class*='kursorChild'] {\n    position: fixed;\n    pointer-events: none;\n    transform: translate(-50%, -50%);\n    display: none;\n    overflow: hidden;\n  }\n  div[class*='kursorChild'].kursorChild[class*='--hidden'] {\n    opacity: 0;\n    width: 0px;\n    height: 0px;\n  }\n  div[class*='kursorChild'].kursorChild:after {\n    content: '';\n    pointer-events: none;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    opacity: 1;\n    border: 0px solid rgba(var(--k-color), 0.5);\n    transform: translate(-50%, -50%);\n  }\n  .kursor--absolute {\n    position: absolute !important;\n    z-index: 2000;\n  }\n  @media screen and (max-width: 768px) {\n    .notCursor * {\n      cursor: auto;\n    }\n    div[class*='kursor'] {\n      display: none !important;\n    }\n    div[class*='kursorChild'] {\n      display: none !important;\n    }\n  }\n  @media screen and (max-width: 812px) and (max-height: 430px) and (orientation: landscape) {\n    div[class*='kursor'] {\n      display: none !important;\n    }\n    div[class*='kursorChild'] {\n      display: none !important;\n    }\n    .notCursor * {\n      cursor: auto;\n    }\n  }\n"})},k=s.a.createContext();var h=function(r){var n=/^(rgb|rgba)/.test(r),o=/^(#)/.test(r);if(n){var e=r.replace(/[rgba()]/g,"").split(",");return e[0]+","+e[1]+","+e[2]}if(o){var s=function(r){r=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(r,n,o,e){return n+n+o+o+e+e}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}(r);return s.r+","+s.g+","+s.b}},v=function(r,n){return[].concat(new Set(r.filter((function(r){return r!==n}))))},b=function(r,n){return[].concat(new Set([].concat(r,[n])))};function f(r,n){var o=n.payload,e=o.target,s=void 0===e?"kursor":e,t=o.classname;switch(n.type){case"removeClass":var a=u({},r,"kursor"===s?{kursor:v(r.kursor,t)}:{kursorChild:v(r.kursorChild,t)});return u({},r,a);case"addClass":var i=u({},r,"kursor"===s?{kursor:b(r.kursor,t)}:{kursorChild:b(r.kursorChild,t)});return u({},r,i);default:throw new Error}}var x=function(r){var n=void 0===r?{}:r,o=n.type,t=void 0===o?1:o,a=n.removeDefaultCursor,u=void 0===a||a,d=n.color,v=void 0===d?"#000000":d,b=n.local,x=void 0!==b&&b,g=n.shouldRender,m=void 0===g||g,C=n.kursorId,y=void 0===C?"":C,w=n.children,O=Object(e.useMemo)((function(){return h(v)}),[v]),j=Object(e.useRef)({type:t,removeDefaultCursor:u,color:O,local:x,shouldRender:m,key:y}),E=Object(e.useCallback)((function(r){return r||!1}),[]),I=c(E,[]),R=I[0],L=I[1],T=c(E,[]),N=T[0],S=T[1],z=Object(e.useReducer)(f,{kursor:["kursor--"+j.current.type,"kursor","kursor"+y],kursorChild:["kursorChild","kursorChild"+y]}),B=z[0],D=z[1];Object(e.useLayoutEffect)((function(){if(m)return j.current.removeDefaultCursor&&document.body.classList.add("notCursor"),function(){document.body.classList.remove("notCursor")}}),[m]);var M=Object(e.useCallback)((function(r){R&&N&&(R.style.left=r.x+"px",R.style.top=r.y+"px",N.style.left=r.x+"px",N.style.top=r.y+"px")}),[R,N]),P=Object(e.useCallback)((function(){D({type:"removeClass",payload:{classname:"kursor--hidden"}}),D({type:"removeClass",payload:{target:"kursorChild",classname:"kursorChild--hidden"}})}),[]),A=Object(e.useCallback)((function(){D({type:"addClass",payload:{classname:"kursor--hidden"}}),D({type:"addClass",payload:{target:"kursorChild",classname:"kursorChild--hidden"}})}),[]),J=Object(e.useCallback)((function(){D({type:"addClass",payload:{classname:"kursor--down"}})}),[]),$=Object(e.useCallback)((function(){D({type:"removeClass",payload:{classname:"kursor--down"}})}),[]),W=Object(e.useCallback)((function(){D({type:"addClass",payload:{classname:"--hover"}})}),[]),q=Object(e.useCallback)((function(){D({type:"removeClass",payload:{classname:"--hover"}})}),[]);return l(window,"mousemove",M),l(document,"mouseenter",P),l(document,"mouseleave",A),l(document,"mousedown",J),l(document,"mouseup",$),s.a.createElement(i.a,null,s.a.createElement(p,null),s.a.createElement("div",{ref:L,style:{"--k-color":O},className:B.kursor.join(" ")}),s.a.createElement("div",{ref:S,style:{"--k-color":O},className:B.kursorChild.join(" ")}),s.a.createElement(k.Provider,{value:{hoverOut:q,hoverIn:W}},w))};var g=function(){var r=Object(e.useContext)(k),n=r.hoverIn,o=r.hoverOut;return s.a.createElement("div",{className:"button",onMouseEnter:n,onMouseLeave:o},"Button")},m=function(){return s.a.createElement(x,null,s.a.createElement("div",{className:"center"},s.a.createElement("h1",null,"Try hovering the button... "),s.a.createElement("br",null),s.a.createElement(g,null)))};a.a.render(s.a.createElement(m,null),document.getElementById("root"))},4:function(r,n,o){r.exports=o(14)},5:function(r,n,o){}},[[4,1,2]]]);
//# sourceMappingURL=main.6ed88fee.chunk.js.map