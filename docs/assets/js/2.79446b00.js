(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{299:function(t,e,i){"use strict";var n=i(165),r=i(164),a=i(5),o=i(23),s=i(97),c=i(166),u=i(12),l=i(167),h=i(66),f=i(1),d=[].push,g=Math.min,p=!f((function(){return!RegExp(4294967295,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(o(this)),a=void 0===i?4294967295:i>>>0;if(0===a)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,a);for(var s,c,u,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,p=new RegExp(t.source,f+"g");(s=h.call(p,n))&&!((c=p.lastIndex)>g&&(l.push(n.slice(g,s.index)),s.length>1&&s.index<n.length&&d.apply(l,s.slice(1)),u=s[0].length,g=c,l.length>=a));)p.lastIndex===s.index&&p.lastIndex++;return g===n.length?!u&&p.test("")||l.push(""):l.push(n.slice(g)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var r=o(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,r,i):n.call(String(r),e,i)},function(t,r){var o=i(n,t,this,r,n!==e);if(o.done)return o.value;var h=a(t),f=String(this),d=s(h,RegExp),v=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(p?"y":"g"),b=new d(p?h:"^(?:"+h.source+")",m),y=void 0===r?4294967295:r>>>0;if(0===y)return[];if(0===f.length)return null===l(b,f)?[f]:[];for(var w=0,z=0,O=[];z<f.length;){b.lastIndex=p?z:0;var x,R=l(b,p?f:f.slice(z));if(null===R||(x=g(u(b.lastIndex+(p?0:z)),f.length))===w)z=c(f,z,v);else{if(O.push(f.slice(w,z)),O.length===y)return O;for(var j=1;j<=R.length-1;j++)if(O.push(R[j]),O.length===y)return O;z=w=x}}return O.push(f.slice(w)),O}]}),!p)},300:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},301:function(t,e,i){"use strict";var n=i(0),r=i(302).trim;n({target:"String",proto:!0,forced:i(303)("trim")},{trim:function(){return r(this)}})},302:function(t,e,i){var n=i(23),r="["+i(300)+"]",a=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),s=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(a,"")),2&t&&(i=i.replace(o,"")),i}};t.exports={start:s(1),end:s(2),trim:s(3)}},303:function(t,e,i){var n=i(1),r=i(300);t.exports=function(t){return n((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},304:function(t,e,i){"use strict";var n=i(0),r=i(28).find,a=i(94),o=i(17),s=!0,c=o("find");"find"in[]&&Array(1).find((function(){s=!1})),n({target:"Array",proto:!0,forced:s||!c},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},305:function(t,e,i){var n=i(0),r=i(327),a=i(94);n({target:"Array",proto:!0},{fill:r}),a("fill")},326:function(t,e,i){"use strict";var n=i(0),r=i(28).every,a=i(29),o=i(17),s=a("every"),c=o("every");n({target:"Array",proto:!0,forced:!s||!c},{every:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},327:function(t,e,i){"use strict";var n=i(10),r=i(99),a=i(12);t.exports=function(t){for(var e=n(this),i=a(e.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,i),c=o>2?arguments[2]:void 0,u=void 0===c?i:r(c,i);u>s;)e[s++]=t;return e}},328:function(t,e,i){var n=i(0),r=i(1),a=i(13),o=i(25).f,s=i(7),c=r((function(){o(1)}));n({target:"Object",stat:!0,forced:!s||c,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},329:function(t,e,i){"use strict";i.d(e,"e",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return o})),i.d(e,"f",(function(){return s})),i.d(e,"a",(function(){return c})),i.d(e,"g",(function(){return u})),i.d(e,"d",(function(){return l}));i(305),i(24),i(161),i(168),i(64),i(163),i(42),i(160),i(9),i(41),i(96),i(162),i(65),i(299),i(301);var n=i(30),r=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return i.some((function(e){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()===e}))},a=function(t){return r(t,"number")?t:r(t,"string")?t.includes("%")?t.slice(0,-1)/100:~~t.replace(/px/g,""):0},o=function(t){return Math.PI/180*t},s=function(t){return[].filter.call(t,(function(t){return"\n"!==t})).join("")},c=function(t){var e=t.padding.replace(/px/g,"").split(" ").map((function(t){return~~t}))||[0],i=0,n=0,a=0,o=0;switch(e.length){case 1:i=n=a=o=e[0];break;case 2:i=n=e[0],a=o=e[1];break;case 3:i=e[0],a=o=e[1],n=e[2];break;default:i=e[0],n=e[1],a=e[2],o=e[3]}var s={paddingTop:i,paddingBottom:n,paddingLeft:a,paddingRight:o};for(var c in s)s[c]=t.hasOwnProperty(c)&&r(t[c],"string","number")?~~String(t[c]).replace(/px/g,""):s[c];return[i,n,a,o]},u=function(t,e,i,n,r,a,o){var s=Math.min(n,r);a>s/2&&(a=s/2),t.beginPath(),t.fillStyle=o,t.moveTo(e+a,i),t.lineTo(e+a,i),t.lineTo(e+n-a,i),t.arcTo(e+n,i,e+n,i+a,a),t.lineTo(e+n,i+r-a),t.arcTo(e+n,i+r,e+n-a,i+r,a),t.lineTo(e+a,i+r),t.arcTo(e,i+r,e,i+r-a,a),t.lineTo(e,i+a),t.arcTo(e,i,e+a,i,a),t.closePath(),t.fill()},l=function(t,e,i,r,a,o){var s,c=/linear-gradient\((.+)\)/.exec(o)[1].split(",").map((function(t){return t.trim()})),u=c.shift();if(u.includes("deg")){var l=function(t){return Math.tan(t/180*Math.PI)};(u=u.slice(0,-3)%360)>=0&&u<45?s=[e,i+a,e+r,i+a-r*l(u-0)]:u>=45&&u<90?s=[e,i+a,e+r-a*l(u-45),i]:u>=90&&u<135?s=[e+r,i+a,e+r-a*l(u-90),i]:u>=135&&u<180?s=[e+r,i+a,e,i+r*l(u-135)]:u>=180&&u<225?s=[e+r,i,e,i+r*l(u-180)]:u>=225&&u<270?s=[e+r,i,e+a*l(u-225),i+a]:u>=270&&u<315?s=[e,i,e+a*l(u-270),i+a]:u>=315&&u<360&&(s=[e,i,e+r,i+a-r*l(u-315)])}else u.includes("top")?s=[e,i+a,e,i]:u.includes("bottom")?s=[e,i,e,i+a]:u.includes("left")?s=[e+r,i,e,i]:u.includes("right")&&(s=[e,i,e+r,i]);var h=t.createLinearGradient.apply(t,Object(n.a)(s.map((function(t){return t>>0}))));return c.reduce((function(t,e,i){var r=e.split(" ");return 1===r.length?t.addColorStop(i,r[0]):2===r.length&&t.addColorStop.apply(t,Object(n.a)(r)),t}),h)}},358:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(43),i(24),i(92),i(328),i(172),i(95),i(93);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},362:function(t,e,i){"use strict";i(169),i(326),i(305),i(24),i(304),i(92),i(161),i(64),i(163),i(42),i(41),i(162),i(65),i(299),i(93);var n=i(358),r=i(91),a=i(30),o=i(329),s={props:{blocks:{type:Array,validator:function(t){return t.every((function(t,e){return t.padding?(t.background||console.error("blocks[".concat(e,"]缺少 background 属性")),!0):console.error("blocks[".concat(e,"]缺少 padding 属性"))}))},default:function(){return[]}},prizes:{type:Array,validator:function(t){return t.every((function(t,e){return!(t.fonts&&!t.fonts.every((function(t,i){return!!t.hasOwnProperty("text")||console.error("prizes[".concat(e,"].fonts[").concat(i,"]缺少 text 属性"))})))&&!(t.imgs&&!t.imgs.every((function(t,i){return!!t.hasOwnProperty("src")||console.error("prizes[".concat(e,"].imgs[").concat(i,"]缺少 src 属性"))})))}))},default:function(){return[]}},buttons:{type:Array,validator:function(t){return!(t.fonts&&!t.fonts.every((function(t,e){return!!t.hasOwnProperty("text")||console.error("button.fonts[".concat(e,"]缺少 text 属性"))})))&&!(t.imgs&&!t.imgs.every((function(t,e){return!!t.hasOwnProperty("src")||console.error("button.imgs[".concat(e,"]缺少 src 属性"))})))},default:function(){return[]}},defaultStyle:{type:Object,default:function(){return{}}}},data:function(){return{ctx:null,canPlay:!0,speed:0,prizeFlag:void 0,animationId:null,Radius:0,prizeDeg:360,prizeRadian:0,prizeRadius:0,maxBtnRadius:0,rotateDeg:0,prizeImgs:[],btnImgs:[]}},computed:{_defaultStyle:function(){var t={fontSize:"18px",fontColor:"#000",fontStyle:"sans-serif, STHeiti, SimHei",background:"#fff",prizeGutter:"0px",wordWrap:!0,lengthLimit:"90%"};for(var e in this.defaultStyle)t[e]=this.defaultStyle[e];return t.lineHeight||(t.lineHeight=t.fontSize),t}},watch:{prizes:{handler:function(t,e){var i=this,n=[];return e?t&&t.forEach((function(t,r){var a=[],o=e[r];o?t.imgs&&t.imgs.forEach((function(t,e){var n=o.imgs[e];n&&i.prizeImgs[r]&&i.prizeImgs[r][e]?t.src!==n.src&&(a[e]=t):a[e]=t})):a=t.imgs,n[r]=a})):n=t.map((function(t){return t.imgs})),this.init(n)},deep:!0},buttons:{handler:function(t,e){var i=this,n=[];return e?t&&t.forEach((function(t,r){var a=[],o=e[r];o&&o.imgs?t.imgs&&t.imgs.forEach((function(t,e){var n=o.imgs[e];n&&i.btnImgs[r]&&i.btnImgs[r][e]?t.src!==n.src&&(a[e]=t):a[e]=t})):a=t.imgs,n[r]=a})):n=t.map((function(t){return t.imgs})),this.init([].concat(Object(a.a)(new Array(this.prizes.length).fill()),Object(a.a)(n)))},deep:!0},blocks:{handler:function(){this.init()},deep:!0}},mounted:function(){var t;this.dpr=window.devicePixelRatio||2;var e=[];this.prizes&&(e=this.prizes.map((function(t){return t.imgs}))),this.buttons&&(t=e).push.apply(t,Object(a.a)(this.buttons.map((function(t){return t.imgs})))),this.init(e),window.addEventListener("resize",this.init.bind(this))},methods:{init:function(t){var e=this,i=this.dpr,n=this.$refs.luckDraw;if(!n)return!1;var r=this.$refs.luckDraw.childNodes[0];this.ctx=r.getContext("2d");var a=this.ctx;r.width=r.height=n.offsetWidth*i,this.Radius=r.width/2;var s=function(t){return(t*i-t)/(t*i)*(i/2)*100};r.style="transform: scale(".concat(1/i,") translate(\n        ").concat(-s(this.Radius),"%,\n        ").concat(-s(this.Radius),"%\n      )"),a.translate(this.Radius,this.Radius);var c=function(){e.draw(),r.onmousedown=function(t){return a.beginPath(),a.arc(0,0,e.maxBtnRadius,0,2*Math.PI,!1),!!a.isPointInPath(t.offsetX,t.offsetY)&&(!!e.canPlay&&void e.$emit("start",t))}},u=0,l=0;Object(o.e)(t,"array")&&(this.draw(),t.forEach((function(t,i){if(!t)return!1;t.forEach((function(t,n){l++,e.loadAndCacheImg(i,n,(function(){u++,l===u&&c.call(e)}))}))}))),l||c.call(this)},loadAndCacheImg:function(t,e,i){var n=this,r=t<this.prizes.length,a=r?"prizes":"buttons",o=r?"prizeImgs":"btnImgs";t=r?t:t-this.prizes.length;var s=this[a][t];if(!s)return!1;var c=s.imgs[e];if(!c)return!1;var u=new Image;this[o][t]||(this[o][t]=[]),this[o][t][e]=u,u.src=c.src,u.onload=function(){return i.call(n)}},computedWidthAndHeight:function(t,e,i,n){if(!e.width&&!e.height)return[t.width,t.height];if(e.width&&!e.height){var r=this.getWidth(e.width,i);return[r,t.height*(r/t.width)]}if(!e.width&&e.height){var a=this.getHeight(e.height,n);return[t.width*(a/t.height),a]}return[this.getWidth(e.width,i),this.getHeight(e.height,n)]},draw:function(){var t=this,e=this.ctx,i=this.dpr,n=this._defaultStyle;e.clearRect(2*-this.Radius,2*-this.Radius,2*this.Radius,2*this.Radius),this.prizeRadius=this.blocks.reduce((function(t,n){return e.beginPath(),e.fillStyle=n.background,e.arc(0,0,t,0,2*Math.PI,!1),e.fill(),t-Object(o.c)(n.padding.split(" ")[0])*i}),this.Radius),this.prizeDeg=360/this.prizes.length,this.prizeRadian=Object(o.b)(this.prizeDeg);var a=Object(o.b)(-90+this.rotateDeg),s=function(i){return t.getOffsetX(e.measureText(i).width)},c=function(e,r){return t.getHeight(e.top)+(r+1)*Object(o.c)(e.lineHeight||n.lineHeight)*i};this.prizes.forEach((function(u,l){var h=a+l*t.prizeRadian;e.beginPath(),e.fillStyle=u.background||n.background,e.moveTo(0,0),e.arc(0,0,t.prizeRadius,h-t.prizeRadian/2,h+t.prizeRadian/2,!1),e.fill();var f=Math.cos(h)*t.prizeRadius,d=Math.sin(h)*t.prizeRadius;e.translate(f,d),e.rotate(h+Object(o.b)(90)),u.imgs&&u.imgs.forEach((function(i,n){if(!t.prizeImgs[l])return!1;var a=t.prizeImgs[l][n];if(!a)return console.error("错误273: 没有奖品图片");var o=t.computedWidthAndHeight(a,i,t.prizeRadian*t.prizeRadius,t.prizeRadius-t.maxBtnRadius),s=Object(r.a)(o,2),c=s[0],u=s[1];e.drawImage(a,t.getOffsetX(c),t.getHeight(i.top),c,u)})),u.fonts&&u.fonts.forEach((function(r){e.fillStyle=r.fontColor||n.fontColor,e.font="".concat(Object(o.c)(r.fontSize||n.fontSize)*i,"px ").concat(r.fontStyle||n.fontStyle);var a=[],u=String(r.text);if(r.hasOwnProperty("wordWrap")?r.wordWrap:n.wordWrap){u=Object(o.f)(u);for(var l="",h=0;h<u.length;h++){l+=u[h];var f=e.measureText(l).width,d=(t.prizeRadius-c(r,a.length))*Math.tan(t.prizeRadian/2)*2;f>t.getWidth(r.lengthLimit||n.lengthLimit,d)&&(a.push(l.slice(0,-1)),l=u[h])}l&&a.push(l),a.length||a.push(u)}else a=u.split("\n");a.filter((function(t){return!!t})).forEach((function(t,i){e.fillText(t,s(t),c(r,i))}))})),e.rotate(Object(o.b)(360)-h-Object(o.b)(90)),e.translate(-f,-d)})),this.buttons.forEach((function(a,u){var l=t.getHeight(a.radius);t.maxBtnRadius=Math.max(t.maxBtnRadius,l),e.beginPath(),e.fillStyle=a.background,e.arc(0,0,l,0,2*Math.PI,!1),e.fill(),a.pointer&&(e.beginPath(),e.fillStyle=a.background,e.moveTo(-l,0),e.lineTo(l,0),e.lineTo(0,2*-l),e.closePath(),e.fill()),a.imgs&&a.imgs.forEach((function(i,n){if(!t.btnImgs[u])return!1;var o=t.btnImgs[u][n];if(!o)return console.error("错误339: 没有按钮图片");var s=t.computedWidthAndHeight(o,i,2*t.getHeight(a.radius),2*t.getHeight(a.radius)),c=Object(r.a)(s,2),l=c[0],h=c[1];e.drawImage(o,t.getOffsetX(l),t.getHeight(i.top),l,h)})),a.fonts&&a.fonts.forEach((function(t){e.fillStyle=t.fontColor||n.fontColor,e.font="".concat(Object(o.c)(t.fontSize||n.fontSize)*i,"px ").concat(t.fontStyle||n.fontStyle),String(t.text).split("\n").forEach((function(i,n){e.fillText(i,s(i),c(t,n))}))}))}))},play:function(){if(!this.canPlay)return!1;cancelAnimationFrame(this.animationId),this.prizeFlag=void 0,this.canPlay=!1,this.speed=0,this.run()},run:function(){if(this.speed>=20&&void 0!==this.prizeFlag&&this.rotateDeg%360>this.prizeFlag*this.prizeDeg&&this.rotateDeg%360<this.prizeFlag*this.prizeDeg+this.prizeDeg)return this.slowDown();this.speed<20&&(this.speed+=.1),this.rotateDeg+=this.speed,this.draw(),this.animationId=window.requestAnimationFrame(this.run)},stop:function(t){this.prizeFlag=t},slowDown:function(){var t=this;if(this.speed<1){var e=360-this.prizeFlag*this.prizeDeg;if(Math.abs(this.rotateDeg%360-e)<=1)return cancelAnimationFrame(this.animationId),this.speed=0,this.canPlay=!0,this.$emit("end",Object(n.a)({},this.prizes.find((function(e,i){return i===t.prizeFlag})))),!1}else this.speed<2?this.speed-=.02:this.speed-=.05;this.rotateDeg+=this.speed,this.draw(),this.animationId=window.requestAnimationFrame(this.slowDown)},getWidth:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prizeRadian*this.prizeRadius;return Object(o.e)(t,"number")?t*this.dpr:Object(o.e)(t,"string")?t.includes("%")?t.slice(0,-1)/100*e:t.replace(/px/g,"")*this.dpr:0},getHeight:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.prizeRadius;return Object(o.e)(t,"number")?t*this.dpr:Object(o.e)(t,"string")?t.includes("%")?t.slice(0,-1)/100*e:t.replace(/px/g,"")*this.dpr:0},getOffsetX:function(t){return-t/2}}},c=i(40),u=Object(c.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"luckDraw",staticStyle:{overflow:"hidden"}},[e("canvas")])}),[],!1,null,null,null);e.a=u.exports}}]);