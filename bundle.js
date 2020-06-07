!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=0)}([function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}i.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,o;return t=e,(i=[{key:"draw",value:function(e){e.fillStyle="black",e.fillRect(125,390,350,60),e.fillStyle="#757373",e.fillRect(125,220,5,300),e.fillRect(125,450,350,100),e.fillRect(0,390,130,160),e.fillStyle="#474747",e.fillRect(20,415,90,120),e.fillStyle="#AEA8B6",e.fillRect(0,25,450,5)}}])&&n(t.prototype,i),o&&n(t,o),e}();function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,n;return t=e,(i=[{key:"draw",value:function(e){var t=document.getElementById("img-can");e.drawImage(t,140,280,70,120),e.drawImage(t,230,280,70,120),e.drawImage(t,328,280,70,120),e.save(),e.rotate(1/4),e.drawImage(t,452,165,70,120),e.restore()}}])&&r(t.prototype,i),n&&r(t,n),e}();function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gameWidth=t,this.width=60,this.height=40,this.maxSpeed=3,this.speed=0,this.dropSpeed=0,this.retrieving=!1,this.clawDelta=0,this.position={x:t-410,y:i-530}}var t,i,n;return t=e,(i=[{key:"moveLeft",value:function(){0===this.dropSpeed&&(this.speed=-this.maxSpeed)}},{key:"moveRight",value:function(){0===this.dropSpeed&&!1===this.retrieving&&(this.speed=this.maxSpeed)}},{key:"moveDown",value:function(){0===this.dropSpeed&&(this.dropSpeed=this.maxSpeed,this.retrieving=!0,this.openClaw())}},{key:"stop",value:function(){this.speed=0,this.dropSpeed=0}},{key:"draw",value:function(e){e.fillStyle="#5A585C",e.fillRect(this.position.x,this.position.y,this.width,20),e.fillRect(this.position.x-this.clawDelta,this.position.y+10,5,this.height+25),e.fillRect(this.position.x+55+this.clawDelta,this.position.y+10,5,this.height+25)}},{key:"openClaw",value:function(){this.clawDelta=3}},{key:"closeClaw",value:function(){this.clawDelta=-3}},{key:"update",value:function(e){e&&(this.position.x+=this.speed,this.position.y+=this.dropSpeed,this.position.x<=34&&(this.position.x=34,this.retrieving=!1,this.openClaw()),this.position.y<=20&&(0!==this.dropSpeed&&(this.dropSpeed=0,this.moveLeft()),this.position.y=20),this.position.x+this.width>this.gameWidth&&(this.position.x=this.gameWidth-this.width),this.position.y+this.height>300&&(this.dropSpeed=-this.maxSpeed,this.closeClaw()))}}])&&l(t.prototype,i),n&&l(t,n),e}();function c(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,n;return t=e,(i=[{key:"draw",value:function(e){e.fillStyle="white",e.beginPath(),e.moveTo(190,420),e.lineTo(230,400),e.lineTo(230,440),e.fill(),e.fillStyle="lightgreen",e.fillRect(250,400,70,40),e.fillStyle="black",e.font="bold 18px arial",e.fillText("DROP",260,426),e.fillStyle="white",e.beginPath(),e.moveTo(380,420),e.lineTo(340,400),e.lineTo(340,440),e.fill()}}])&&c(t.prototype,i),n&&c(t,n),e}();var f=document.getElementById("gameScreen").getContext("2d"),h=new o,p=new s(450,550),d=new u,y=new a,v=0;new function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),document.addEventListener("keydown",(function(e){switch(e.keyCode){case 37:t.moveLeft();break;case 39:t.moveRight();break;case 32:t.moveDown()}})),document.addEventListener("keyup",(function(e){switch(e.keyCode){case 37:t.speed<0&&t.stop();break;case 39:t.speed>0&&t.stop()}}))}(p),function e(t){var i=t-v;v=t,f.clearRect(0,0,450,550),p.update(i),function(e){p.draw(e),h.draw(e),d.draw(e),y.draw(e)}(f),requestAnimationFrame(e)}()}]);