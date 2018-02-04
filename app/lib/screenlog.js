var mainWindow=window.parent.onMessageFromConsole?window.parent:window.parent.opener;(function(){function a(a,b){var c=document.createElement(a);return c.style.cssText=b,c}function b(){var b=a('div','z-index:2147483647;font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:bold;padding:5px;text-align:left;opacity:0.8;position:fixed;right:0;top:0;min-width:200px;max-height:50vh;overflow:auto;background:'+_options.bgColor+';'+_options.css);return b}function c(b){return function(){if(_options.proxyCallback&&_options.proxyCallback.apply(null,arguments),!_options.noUi){var c=a('div','line-height:18px;min-height:18px;background:'+(m.children.length%2?'rgba(255,255,255,0.1)':'')+';color:'+b),d=[].slice.call(arguments).reduce(function(a,b){return a+' '+('object'==typeof b?JSON.stringify(b):b)},'');c.textContent=d,m.appendChild(c),_options.autoScroll&&(m.scrollTop=m.scrollHeight-m.clientHeight)}}}function d(){return _options.noUi?void mainWindow.clearConsole():void(m.innerHTML='')}function e(){return c(_options.logColor).apply(null,arguments)}function f(){return c(_options.infoColor).apply(null,arguments)}function g(){return c(_options.warnColor).apply(null,arguments)}function h(){return c(_options.errorColor).apply(null,arguments)}function i(a){for(var b in a)a.hasOwnProperty(b)&&_options.hasOwnProperty(b)&&(_options[b]=a[b])}function j(){if(!n)throw'You need to call `screenLog.init()` first.'}function k(a){return function(){return j(),a.apply(this,arguments)}}function l(a,b){return function(){a.apply(this,arguments),'function'==typeof o[b]&&o[b].apply(console,arguments)}}var m,n=!1,o={};_options={bgColor:'black',logColor:'lightgreen',infoColor:'blue',warnColor:'orange',errorColor:'red',freeConsole:!1,css:'',autoScroll:!0,proxyCallback:null,noUi:!1},window.addEventListener('error',function(){c(_options.errorColor).call(null,arguments[0].error.stack)}),window.screenLog={init:function(a){n||(n=!0,a&&i(a),!_options.noUi&&(m=b(),document.body.appendChild(m)),!_options.freeConsole&&(o.log=console.log,o.clear=console.clear,o.info=console.info,o.warn=console.warn,o.error=console.error,console.log=l(e,'log'),console.clear=l(d,'clear'),console.info=l(f,'info'),console.warn=l(g,'warn'),console.error=l(h,'error')))},log:l(k(e),'log'),clear:l(k(d),'clear'),info:l(k(d),'info'),warn:l(k(g),'warn'),error:l(k(h),'error'),destroy:k(function(){n=!1,console.log=o.log,console.clear=o.clear,console.info=o.info,console.warn=o.warn,console.error=o.error,m.remove()})}})(),screenLog.init({noUi:!0,proxyCallback:function(){mainWindow.onMessageFromConsole.apply(null,arguments)}}),window._wmEvaluate=function(a){try{var b=eval(a)}catch(a){return void mainWindow.onMessageFromConsole.call(null,a)}mainWindow.onMessageFromConsole.call(null,b)};