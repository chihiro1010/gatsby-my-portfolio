(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{240:function(t,e,r){"use strict";r.r(e);r(18),r(8),r(6),r(5),r(3),r(7);var n=r(1),a=r(0),c=r.n(a),o=(r(32),r(2)),i=r(235),b=r(125),p=r.n(b),u=r(237),l=(r(173),r(245)),s=r(113),f=r(246),d=r(238),j=function(){return Object(n.c)("svg",{width:"20",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(n.c)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.832 17.642L.345 9.864a1.256 1.256 0 0 1 0-1.728L7.832.358a1.146 1.146 0 0 1 1.663 0c.46.477.46 1.251 0 1.728L4.017 7.778H20v2.444H4.017l5.478 5.692c.46.477.46 1.25 0 1.728a1.146 1.146 0 0 1-1.663 0z",fill:"currentColor"}))},y=r(92),m=function(t){var e=t.title,r=t.areas,n=t.description,a=t.date,b=Object(y.a)().name,u=l.data,m=Object(i.c)({config:i.b.slow,from:{opacity:0,transform:"translate3d(0, -30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),O=Object(i.c)({config:i.b.slow,from:{opacity:0,transform:"translate3d(-30px, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),g=Object(i.c)({config:i.b.slow,delay:500,from:{opacity:0},to:{opacity:1}});return Object(o.j)(o.d,null,Object(o.j)(d.a,null),Object(o.j)(o.b,{sx:{textAlign:"center",my:4,zIndex:10}},Object(o.j)(i.a.div,{style:O},Object(o.j)(s.Link,{to:"/","aria-label":b+" - Back to homepage",sx:{display:"flex",alignItems:"center",color:"text",textDecoration:"none",svg:{transition:"transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)"},"&:hover, &:focus":{svg:{transform:"translateX(-6px)"}}}},Object(o.j)(j,null),Object(o.j)("div",{sx:{overflow:"hidden",borderRadius:"full",width:"40px",height:"40px",display:"inline-block",boxShadow:"md",mx:2}},u&&u.file&&u.file.childImageSharp&&Object(o.j)(p.a,{fixed:u.file.childImageSharp.fixed})),Object(o.j)("span",{sx:{fontWeight:"medium"}},b))),Object(o.j)("div",{sx:{mt:4,mb:[6,6,7]}},Object(o.j)(i.a.div,{style:m},Object(o.j)(o.f.h1,null,e)),Object(o.j)(i.a.div,{style:g},Object(o.j)(o.f.p,{sx:{mb:0,mt:4}},a),Object(o.j)("div",null,r.map((function(t,e){return Object(o.j)(c.a.Fragment,{key:t},e>0&&", ",t)}))),n&&Object(o.j)("div",{sx:{maxWidth:"900px",mx:"auto",mt:5,p:{textAlign:"left"}}},Object(o.j)(f.MDXRenderer,null,n))))))},O=r(236),g=function(t){var e=t.prev,r=t.next;return Object(o.j)("div",{sx:{mt:6,mb:4}},Object(o.j)("div",{sx:{display:"grid",gridTemplateColumns:"250px 1fr",alignItems:"center",mb:4}},Object(o.j)("h2",{sx:{color:"textMuted",fontWeight:"medium",letterSpacing:"widest",textTransform:"uppercase",fontSize:1,my:0}},"More Projects"),Object(o.j)("div",{sx:{width:"100%",height:"2px",backgroundColor:"muted"}})),Object(o.j)("div",{sx:{display:"grid",gridTemplateColumns:["1fr","1fr","1fr 1fr"],gridGap:[4,4,5],a:{position:"relative"},"[data-name='card-overlay']":{position:"absolute",top:0,left:0,right:0,bottom:0},".gatsby-image-wrapper > div":{paddingBottom:"56% !important"}}},e&&Object(o.j)(O.a,{item:e}),r&&Object(o.j)(O.a,{item:r})))},v=r(163),w=function(t){var e=t.data,r=e.project,n=e.images,a=t.pageContext,c=a.prev,b=a.next,l=Object(i.c)({config:i.b.slow,delay:800,from:{opacity:0},to:{opacity:1}});return Object(o.j)(u.a,null,Object(o.j)(v.a,{title:r.title,description:r.excerpt,pathname:r.slug,image:r.cover.childImageSharp.resize.src}),Object(o.j)(m,{title:r.title,description:r.body,areas:r.areas,date:r.date}),Object(o.j)(o.b,{sx:{mt:["-6rem","-6rem","-8rem"]}},n.nodes.map((function(t){return Object(o.j)(i.a.div,{key:t.name,style:l},Object(o.j)(p.a,{fluid:t.childImageSharp.fluid,alt:t.name,sx:{mb:[4,4,5],boxShadow:"xl"}}))})),Object(o.j)(g,{prev:c,next:b})))};function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(r,!0).forEach((function(e){A(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function A(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"query",(function(){return P}));e.default=function(t){var e=t.data,r=t.pageContext,a=e.project,c=e.images;return Object(n.c)(w,{data:x({},e,{project:a,images:c}),pageContext:r})};var P="1452297871"},242:function(t,e,r){var n=r(4),a=r(72),c=r(46),o=r(13),i=r(14),b=r(19),p=r(174),u=(r(12).Reflect||{}).construct,l=b((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),s=!b((function(){u((function(){}))}));n(n.S+n.F*(l||s),"Reflect",{construct:function(t,e){c(t),o(e);var r=arguments.length<3?t:c(arguments[2]);if(s&&!l)return u(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(p.apply(t,n))}var b=r.prototype,f=a(i(b)?b:Object.prototype),d=Function.apply.call(t,f,e);return i(d)?d:f}})},245:function(t){t.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADjklEQVQ4y3VTbUxTVxh+b+9tae0HRVrUlepKwWpwgMAqURgdX4oKhLFNFsRNjGKyGBOHiJnZNFuWLNnM5hL94Vy2/VAzfzjUxEhidPhjZsvC4sw2TGhcGJllUEqh2t57PvaeW+TH1p08uffcc87zPu953+cCzzyYDv7hwL6dm9fsfaly9/aSw3u2xWdjYo8RzikC/odJKdVw9vknJ17fHDiwY0N3U9F7b3U9ZaYhyCwTkKzi0WuXvny+yOX35DZX+X7+4QYXGyrjGuMpfEI6gX8Bw6tqEo8eP/4uAJgURQK4evVbXCEEyQvIRGaEMVTGOa+vq+uuKT64vQpDNDY14UoqlaAstUgm/wFT1VR0JhIe+/Vob+fJ11441V3/cpn/4hdn9LQp40RPOwWLOSAwJJKTycQHA/v3tG98NRQ41Fo22Ncxeu7tr95s+LSv65uvP7s/ckdV57g4n4HMJyYedjWWtgU9r1QXvFH77JHG4jM9jQPtJduec7VXLG8rz/vp7pC4PH2cQXl+Pra3o6aj2ttZV7ilNO9oc/nZ3tZdoUBnjb+nYW1rmfvW9QtI1ohOpkxUn7IkknEJNz4+cXi917Eix17izR0+dejiOz0lvmWFnqVtGwtaK/POn/togYxSmpaaikZE/xnTS0JCtbWgj2U5joZ1gbqK8lUrfaJnRnN+tvH9vl3CLZTCH2O/3b/345/jY+Pj4VhsGi88+uCX/PyVAJIimyQwAihVm0I261IAWTJkYYjTJ4/Nz0cejI7AbCwyNzcVm3k0NTk+9fdEfG56OvqotHQ9HpINJoAstzu/uvpF8SVZDJIZ169dPo/9noyEgTFV762mO4QQIizd339ET9IqG51Fq8uDlZtELNkqSUL55s0butU0QcZ/gDGNUJUwNaUJVw4P3wEwyHK20+WzO1a4c58BMCuyQ9bTvjJ4WVhNTYhqp2XRN5QTlYhW3741lGtbkuNw2ex5mIGEkMwGcQvZbnOGw78jhaarrTdZiFNGNCrIx/p6K7yW/pZg/RovpoA1Q6RlC/yBZDLK+WNGn4Cuqaa9SvSGxxPR5tBamwJBn6t3a9DtdKK4LNslyYqBajesS8T/4vwJEw5jCy5HqFQ4ZOTe94WeLKMB1cAgSQZJEW9A2Sy71VLpl74buiQKpsVhUZbypMaQrM3EJ1tatiBTUSwARoslu3vnbpNpiSi/yVzsgcELp3Xy7D8JjPWtIzN5UQAAAABJRU5ErkJggg==","width":40,"height":40,"src":"/static/0bb29b1a9361aa41d8b9eca2c0bad21b/ae4fa/avatar.png","srcSet":"/static/0bb29b1a9361aa41d8b9eca2c0bad21b/ae4fa/avatar.png 1x,\\n/static/0bb29b1a9361aa41d8b9eca2c0bad21b/80048/avatar.png 1.5x,\\n/static/0bb29b1a9361aa41d8b9eca2c0bad21b/4da7c/avatar.png 2x","srcWebp":"/static/0bb29b1a9361aa41d8b9eca2c0bad21b/7351b/avatar.webp","srcSetWebp":"/static/0bb29b1a9361aa41d8b9eca2c0bad21b/7351b/avatar.webp 1x,\\n/static/0bb29b1a9361aa41d8b9eca2c0bad21b/d7c8c/avatar.webp 1.5x,\\n/static/0bb29b1a9361aa41d8b9eca2c0bad21b/e5a04/avatar.webp 2x"}}}}}')},246:function(t,e,r){var n=r(247);t.exports={MDXRenderer:n}},247:function(t,e,r){function n(t,e,r){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var c=new(Function.bind.apply(t,n));return r&&a(c,r.prototype),c}).apply(null,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(18),r(5),r(7),r(54),r(124),r(36),r(8),r(6),r(123),r(35),r(3),r(242),r(242),r(123),r(54),r(124),r(35),r(36),r(18),r(8),r(6),r(5),r(3),r(7);var p=r(0),u=r(44),l=u.useMDXComponents,s=u.mdx,f=r(151).useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,a=t.children,o=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,["scope","components","children"]),b=l(r),u=f(e),d=p.useMemo((function(){if(!a)return null;var t=i({React:p,mdx:s},u),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(c(e),[""+a])).apply(void 0,[{}].concat(c(r)))}),[a,e]);return p.createElement(d,i({components:b},o))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-emilia-core-src-templates-project-query-tsx-22f56817d2fbe46092a8.js.map