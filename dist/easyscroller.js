!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.scroller=e():t.scroller=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="/dist/",e(0)}([function(t,e,o){EasyScroller=o(2),t.exports=EasyScroller},,function(t,e){var o=function(t,e,n){this.content=t,this.container=t.parentNode,this.options=e||{};var r=this;this.scroller=new Scroller(function(t,e,o){r.render(t,e,o)},e,n),this.bindEvents(),this.content.style[o.vendorPrefix+"TransformOrigin"]="left top",this.reflow()};o.prototype.render=function(){var t,e=document.documentElement.style;window.opera&&"[object Opera]"===Object.prototype.toString.call(opera)?t="presto":"MozAppearance"in e?t="gecko":"WebkitAppearance"in e?t="webkit":"string"==typeof navigator.cpuClass&&(t="trident");var n,r=o.vendorPrefix={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[t],i=document.createElement("div"),a=r+"Perspective",s=r+"Transform";return i.style[a]!==n?function(t,e,o){this.content.style[s]="translate3d("+-t+"px,"+-e+"px,0) scale("+o+")"}:i.style[s]!==n?function(t,e,o){this.content.style[s]="translate("+-t+"px,"+-e+"px) scale("+o+")"}:function(t,e,o){this.content.style.marginLeft=t?-t/o+"px":"",this.content.style.marginTop=e?-e/o+"px":"",this.content.style.zoom=o||""}}(),o.prototype.reflow=function(){this.scroller.setDimensions(this.container.clientWidth,this.container.clientHeight,this.content.offsetWidth,this.content.offsetHeight);var t=this.container.getBoundingClientRect();this.scroller.setPosition(t.left+this.container.clientLeft,t.top+this.container.clientTop)},o.prototype.bindEvents=function(){var t=this;if(window.addEventListener("resize",function(){t.reflow()},!1),"ontouchstart"in window)this.container.addEventListener("touchstart",function(e){e.touches[0]&&e.touches[0].target&&e.touches[0].target.tagName.match(/input|textarea|select/i)||(t.reflow(),t.scroller.doTouchStart(e.touches,e.timeStamp))},!1),this.container.addEventListener("touchmove",function(e){e.preventDefault(),t.scroller.doTouchMove(e.touches,e.timeStamp,e.scale)},!1),this.container.addEventListener("touchend",function(e){t.scroller.doTouchEnd(e.timeStamp)},!1),this.container.addEventListener("touchcancel",function(e){t.scroller.doTouchEnd(e.timeStamp)},!1);else{var e=!1;this.container.addEventListener("mousedown",function(o){o.target.tagName.match(/input|textarea|select/i)||(t.scroller.doTouchStart([{pageX:o.pageX,pageY:o.pageY}],o.timeStamp),e=!0,t.reflow(),o.preventDefault())},!1),document.addEventListener("mousemove",function(o){e&&(t.scroller.doTouchMove([{pageX:o.pageX,pageY:o.pageY}],o.timeStamp),e=!0)},!1),document.addEventListener("mouseup",function(o){e&&(t.scroller.doTouchEnd(o.timeStamp),e=!1)},!1),this.container.addEventListener("mousewheel",function(e){t.options.zooming&&(t.scroller.doMouseZoom(e.wheelDelta,e.timeStamp,e.pageX,e.pageY),e.preventDefault())},!1)}},document.addEventListener("DOMContentLoaded",function(){for(var t,e=document.querySelectorAll("[data-scrollable],[data-zoomable]"),n=0;n<e.length;n++){t=e[n];var r=t.attributes.getNamedItem("data-scrollable")?t.attributes.getNamedItem("data-scrollable").value:null,i=t.attributes.getNamedItem("data-zoomable")?t.attributes.getNamedItem("data-zoomable").value:"",a=i.split("-"),s=a.length>1&&parseFloat(a[0]),c=a.length>1&&parseFloat(a[1]);new o(t,{scrollingX:"true"===r||"x"===r,scrollingY:"true"===r||"y"===r,zooming:"true"===i||a.length>1,minZoom:s,maxZoom:c})}},!1)}])});
//# sourceMappingURL=easyscroller.js.map