/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dom/attr",function(k,b,v,q){function y(d){if(k.isArray(d)){for(var a=0;a<d.length;a++)d[a]=y(d[a]);return d}else return d+l}var z=document.documentElement,h=!z.hasAttribute,g=z.textContent!==q?"textContent":"innerText",l="",r=b._isElementNode,s=/^(?:href|src|style)/,f=/^(?:href|src|colspan|rowspan)/,o=/\r/g,n=/^(?:radio|checkbox)/,e={readonly:"readOnly"},m={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1};h&&k.mix(e,{"for":"htmlFor","class":"className"});var u={tabindex:{getter:function(d){return d.tabIndex},
setter:function(d,a){if(isNaN(parseInt(a))){d.removeAttribute("tabindex");d.removeAttribute("tabIndex")}else d.tabIndex=a}},style:{getter:function(d){return d.style.cssText},setter:function(d,a){d.style.cssText=a}},checked:{setter:function(d,a){d.checked=!!a}},disabled:{setter:function(d,a){d.disabled=!!a}}};k.mix(b,{attr:function(d,a,c,i){if(k.isPlainObject(a)){i=c;for(var t in a)b.attr(d,t,a[t],i)}else if(a=k.trim(a)){a=a.toLowerCase();if(i&&m[a])return b[a](d,c);a=e[a]||a;var w=u[a];if(c===q){d=
b.get(d);if(!r(d))return null;if(w&&w.getter)return w.getter(d);var j;s.test(a)||(j=d[a]);if(j===q)j=d.getAttribute(a);if(h)if(f.test(a))j=d.getAttribute(a,2);return j===q?null:j}else k.each(b.query(d),function(p){if(r(p))w&&w.setter?w.setter(p,c):p.setAttribute(a,l+c)})}},removeAttr:function(d,a){a=a.toLowerCase();k.each(b.query(d),function(c){if(r(c)){b.attr(c,a,l);c.removeAttribute(a)}})},hasAttr:h?function(d,a){a=a.toLowerCase();var c=b.get(d).getAttributeNode(a);return!!(c&&c.specified)}:function(d,
a){a=a.toLowerCase();return b.get(d).hasAttribute(a)},val:function(d,a){if(a===q){var c=b.get(d);if(!r(c))return null;if(c&&c.nodeName.toUpperCase()==="option".toUpperCase())return(c.attributes.value||{}).specified?c.value:c.text;if(c&&c.nodeName.toUpperCase()==="select".toUpperCase()){var i=c.selectedIndex,t=c.options;if(i<0)return null;else if(c.type==="select-one")return b.val(t[i]);c=[];for(var w=0,j=t.length;w<j;++w)t[w].selected&&c.push(b.val(t[w]));return c}if(v.webkit&&n.test(c.type))return c.getAttribute("value")===
null?"on":c.value;return(c.value||l).replace(o,l)}k.each(b.query(d),function(p){if(p&&p.nodeName.toUpperCase()==="select".toUpperCase()){a=y(a);var x=k.makeArray(a),A=p.options,B;w=0;for(j=A.length;w<j;++w){B=A[w];B.selected=k.inArray(b.val(B),x)}if(!x.length)p.selectedIndex=-1}else if(r(p))p.value=a})},text:function(d,a){if(a===q){var c=b.get(d);if(r(c))return c[g]||l;else if(b._nodeTypeIs(c,3))return c.nodeValue;return null}else k.each(b.query(d),function(i){if(r(i))i[g]=a;else if(b._nodeTypeIs(i,
3))i.nodeValue=a})}});return b},{requires:["dom/base","ua"]});KISSY.add("dom/base",function(k,b){function v(q,y){return q&&q.nodeType===y}return{_isElementNode:function(q){return v(q,1)},_getWin:function(q){return q&&"scrollTo"in q&&q.document?q:v(q,9)?q.defaultView||q.parentWindow:q==b?window:false},_nodeTypeIs:v,_isNodeList:function(q){return q&&!q.nodeType&&q.item&&!q.setTimeout}}});
KISSY.add("dom/class",function(k,b,v){function q(h,g,l,r){if(!(g=k.trim(g)))return r?false:v;h=b.query(h);var s=0,f=h.length,o=g.split(y);for(g=[];s<o.length;s++){var n=k.trim(o[s]);n&&g.push(n)}for(s=0;s<f;s++){o=h[s];if(b._isElementNode(o)){o=l(o,g,g.length);if(o!==v)return o}}if(r)return false;return v}var y=/[\.\s]\s*\.?/,z=/[\n\t]/g;k.mix(b,{hasClass:function(h,g){return q(h,g,function(l,r,s){if(l=l.className){l=" "+l+" ";for(var f=0,o=true;f<s;f++)if(l.indexOf(" "+r[f]+" ")<0){o=false;break}if(o)return true}},
true)},addClass:function(h,g){q(h,g,function(l,r,s){var f=l.className;if(f){var o=" "+f+" ";f=f;for(var n=0;n<s;n++)if(o.indexOf(" "+r[n]+" ")<0)f+=" "+r[n];l.className=k.trim(f)}else l.className=g},v)},removeClass:function(h,g){q(h,g,function(l,r,s){var f=l.className;if(f)if(s){f=(" "+f+" ").replace(z," ");for(var o=0,n;o<s;o++)for(n=" "+r[o]+" ";f.indexOf(n)>=0;)f=f.replace(n," ");l.className=k.trim(f)}else l.className=""},v)},replaceClass:function(h,g,l){b.removeClass(h,g);b.addClass(h,l)},toggleClass:function(h,
g,l){var r=k.isBoolean(l),s;q(h,g,function(f,o,n){for(var e=0,m;e<n;e++){m=o[e];s=r?!l:b.hasClass(f,m);b[s?"removeClass":"addClass"](f,m)}},v)}});return b},{requires:["dom/base"]});
KISSY.add("dom/create",function(k,b,v,q){function y(j,p){if(k.isPlainObject(p))if(f(j))b.attr(j,p,true);else j.nodeType==11&&k.each(j.childNodes,function(x){b.attr(x,p,true)});return j}function z(j,p){var x=null,A,B;if(j&&(j.push||j.item)&&j[0]){p=p||j[0].ownerDocument;x=p.createDocumentFragment();if(j.item)j=k.makeArray(j);A=0;for(B=j.length;A<B;A++)x.appendChild(j[A])}return x}function h(j,p,x,A){if(x){var B=k.guid("ks-tmp-"),E=RegExp(e);p+='<span id="'+B+'"></span>';k.available(B,function(){var D=
b.get("head"),C,G,H,F,I,J;for(E.lastIndex=0;C=E.exec(p);)if((H=(G=C[1])?G.match(u):false)&&H[2]){C=l.createElement("script");C.src=H[2];if((F=G.match(d))&&F[2])C.charset=F[2];C.async=true;D.appendChild(C)}else if((J=C[2])&&J.length>0)k.globalEval(J);(I=l.getElementById(B))&&b.remove(I);k.isFunction(A)&&A()});g(j,p)}else{g(j,p);k.isFunction(A)&&A()}}function g(j,p){p=(p+"").replace(e,"");try{j.innerHTML=p}catch(x){for(;j.firstChild;)j.removeChild(j.firstChild);p&&j.appendChild(b.create(p))}}var l=
document,r=v.ie,s=b._nodeTypeIs,f=b._isElementNode,o=l.createElement("div"),n=/<(\w+)/,e=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,u=/\ssrc=(['"])(.*?)\1/i,d=/\scharset=(['"])(.*?)\1/i;k.mix(b,{create:function(j,p,x){if(s(j,1)||s(j,3)){p=j;x=p.cloneNode(true);if(v.ie<8)x.innerHTML=p.innerHTML;return x}if(!(j=k.trim(j)))return null;var A=null;A=b._creators;var B,E="div",D;if(B=m.exec(j))A=(x||l).createElement(B[1]);else{if((B=n.exec(j))&&(D=B[1])&&
k.isFunction(A[D=D.toLowerCase()]))E=D;j=A[E](j,x).childNodes;A=j.length===1?j[0].parentNode.removeChild(j[0]):z(j,x||l)}return y(A,p)},_creators:{div:function(j,p){var x=p?p.createElement("div"):o;x.innerHTML=j;return x}},html:function(j,p,x,A){if(p===q){j=b.get(j);if(f(j))return j.innerHTML;return null}else k.each(b.query(j),function(B){f(B)&&h(B,p,x,A)})},remove:function(j){k.each(b.query(j),function(p){p.parentNode&&p.parentNode.removeChild(p)})},_nl2frag:z});if(r||v.gecko||v.webkit){var a=b._creators,
c=b.create,i=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,t={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"},w;for(w in t)(function(j){a[w]=function(p,x){return c("<"+j+">"+p+"</"+j+">",null,x)}})(t[w]);if(r){a.script=function(j,p){var x=p?p.createElement("div"):o;x.innerHTML="-"+j;x.removeChild(x.firstChild);return x};if(r<8)a.tbody=function(j,p){var x=c("<table>"+j+"</table>",null,p),A=x.children.tags("tbody")[0];x.children.length>1&&A&&!i.test(j)&&
A.parentNode.removeChild(A);return x}}k.mix(a,{optgroup:a.option,th:a.td,thead:a.tbody,tfoot:a.tbody,caption:a.tbody,colgroup:a.tbody})}return b},{requires:["./base","ua"]});
KISSY.add("dom/data",function(k,b,v){var q=window,y="_ks_data_"+k.now(),z={},h={},g={};g.applet=1;g.object=1;g.embed=1;var l={hasData:function(f,o){if(f)if(o!==v){if(o in f)return true}else if(!k.isEmptyObject(f))return true;return false}},r={hasData:function(f,o){return l.hasData(f[y],o)},data:function(f,o,n){f=f[y]=f[y]||{};if(n!==v)f[o]=n;else return o!==v?f[o]:f},removeData:function(f,o){var n=f[y];if(n)if(o!==v){delete n[o];k.isEmptyObject(n)&&r.removeData(f,v)}else delete f[y]}},s={hasData:function(f,
o){if(f==q)return r.hasData(h,o);var n=f[y];if(!n)return false;return l.hasData(z[n],o)},data:function(f,o,n){if(f==q)return r.data(h,o,n);if(!g[f.nodeName.toLowerCase()]){var e=f[y];e||(e=f[y]=k.guid());f=z[e]=z[e]||{};if(n!==v)f[o]=n;else return o!==v?f[o]:f}},removeData:function(f,o){if(f==q)return r.removeData(h,o);var n=f[y];if(n){var e=z[n];if(e)if(o!==v){delete e[o];k.isEmptyObject(e)&&s.removeData(f,v)}else{delete z[n];try{delete f[y]}catch(m){}f.removeAttribute&&f.removeAttribute(y)}}}};
k.mix(b,{hasData:function(f,o){var n=false;b.query(f).each(function(e){n=e&&e.nodeType?n||s.hasData(e,o):n||r.hasData(e,o)});return n},data:function(f,o,n){if(k.isPlainObject(o))for(var e in o)b.data(f,e,o[e]);else if(n===v)return(f=b.get(f))&&f.nodeType?s.data(f,o,n):r.data(f,o,n);else b.query(f).each(function(m){m&&m.nodeType?s.data(m,o,n):r.data(m,o,n)})},removeData:function(f,o){b.query(f).each(function(n){n&&n.nodeType?s.removeData(n,o):r.removeData(n,o)})}});return b},{requires:["./base"]});
KISSY.add("dom/insertion",function(k,b){function v(h,g,l){h=b.query(h);g=b.query(g);if(h=q(h)){var r;if(g.length>1)r=h.cloneNode(true);for(var s=0;s<g.length;s++){var f=g[s],o=s>0?r.cloneNode(true):h;l(o,f)}}}var q=b._nl2frag;k.mix(b,{insertBefore:function(h,g){v(h,g,function(l,r){r.parentNode&&r.parentNode.insertBefore(l,r)})},insertAfter:function(h,g){v(h,g,function(l,r){r.parentNode&&r.parentNode.insertBefore(l,r.nextSibling)})},appendTo:function(h,g){v(h,g,function(l,r){r.appendChild(l)})},prependTo:function(h,
g){v(h,g,function(l,r){r.insertBefore(l,r.firstChild)})}});var y={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},z;for(z in y)b[z]=b[y[z]];return b},{requires:["./base"]});
KISSY.add("dom/offset",function(k,b,v,q){function y(a){var c=0,i=0,t=l(a[o]);if(a[d]){a=a[d]();c=a[n];i=a[e];if(v.mobile!=="apple"){c+=b[m](t);i+=b[u](t)}}return{left:c,top:i}}var z=window,h=b._isElementNode,g=b._nodeTypeIs,l=b._getWin,r=document.compatMode==="CSS1Compat",s=Math.max,f=parseInt,o="ownerDocument",n="left",e="top",m="scrollLeft",u="scrollTop",d="getBoundingClientRect";k.mix(b,{offset:function(a,c){if(!(a=b.get(a))||!a[o])return null;if(c===q)return y(a);var i=a;if(b.css(i,"position")===
"static")i.style.position="relative";var t=y(i),w={},j,p;for(p in c){j=f(b.css(i,p),10)||0;w[p]=j+c[p]-t[p]}b.css(i,w)},scrollIntoView:function(a,c,i,t){if((a=b.get(a))&&a[o]){t=t===q?true:!!t;i=i===q?true:!!i;if(!c||c===z)a.scrollIntoView(i);else{c=b.get(c);if(g(c,9))c=l(c);var w=!!l(c),j=b.offset(a),p=w?{left:b.scrollLeft(c),top:b.scrollTop(c)}:b.offset(c),x={left:j[n]-p[n],top:j[e]-p[e]};j=w?b.viewportHeight(c):c.clientHeight;w=w?b.viewportWidth(c):c.clientWidth;p=b[m](c);var A=b[u](c),B=p+w,E=
A+j,D=a.offsetHeight;a=a.offsetWidth;var C=x.left+p-(f(b.css(c,"borderLeftWidth"))||0);x=x.top+A-(f(b.css(c,"borderTopWidth"))||0);var G=C+a,H=x+D,F,I;if(D>j||x<A||i)F=x;else if(H>E)F=H-j;if(t)if(a>w||C<p||i)I=C;else if(G>B)I=G-w;b[u](c,F);b[m](c,I)}}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});k.each(["Left","Top"],function(a,c){var i="scroll"+a;b[i]=function(t,w){if(k.isNumber(t))arguments.callee(z,t);else{t=b.get(t);var j=0,p=l(t);if(p){if(w!==q){j=a=="Left"?w:b.scrollLeft(p);var x=
a=="Top"?w:b.scrollTop(p);p.scrollTo(j,x)}j=p.document;j=p[c?"pageYOffset":"pageXOffset"]||j.documentElement[i]||j.body[i]}else if(h(t=b.get(t)))j=w!==q?t[i]=w:t[i];return w===q?j:q}}});k.each(["Width","Height"],function(a){b["doc"+a]=function(c){c=b.get(c);c=l(c).document;return s(r?c.documentElement["scroll"+a]:c.body["scroll"+a],b["viewport"+a](c))};b["viewport"+a]=function(c){c=b.get(c);var i="inner"+a;c=l(c);var t=c.document;return i in c?c[i]:r?t.documentElement["client"+a]:t.body["client"+
a]}});return b},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(k,b,v){function q(e,m){var u,d,a=[],c;d=k.require("sizzle");m=y(m);if(k.isString(e))if(e.indexOf(",")!=-1){u=e.split(",");k.each(u,function(i){a.push.apply(a,k.makeArray(q(i,m)))})}else{e=k.trim(e);if(f.test(e)){if(d=z(e.slice(1),m))a=[d]}else if(u=o.exec(String(e))){d=u[1];c=u[2];u=u[3];if(m=d?z(d,m):m)if(u)if(!d||e.indexOf(s)!==-1)a=k.makeArray(n(u,c,m));else{if((d=z(d,m))&&b.hasClass(d,u))a=[d]}else if(c)a=h(c,m)}else if(d)a=d(e,m);else g(e)}else if(e&&(k.isArray(e)||
r(e)))a=e;else if(e)a=[e];if(r(a))a=k.makeArray(a);a.each=function(i,t){return k.each(a,i,t)};return a}function y(e){if(e===v)e=l;else if(k.isString(e)&&f.test(e))e=z(e.slice(1),l);else if(k.isArray(e)||r(e))e=e[0]||null;else if(e&&e.nodeType!==1&&e.nodeType!==9)e=null;return e}function z(e,m){if(!m)return null;if(m.nodeType!==9)m=m.ownerDocument;return m.getElementById(e)}function h(e,m){return m.getElementsByTagName(e)}function g(e){k.error("Unsupported selector: "+e)}var l=document,r=b._isNodeList,
s=" ",f=/^#[\w-]+$/,o=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var e=l.createElement("div");e.appendChild(l.createComment(""));if(e.getElementsByTagName("*").length>0)h=function(m,u){var d=k.makeArray(u.getElementsByTagName(m));if(m==="*"){for(var a=[],c=0,i=0,t;t=d[c++];)if(t.nodeType===1)a[i++]=t;d=a}return d}})();var n=l.getElementsByClassName?function(e,m,u){u=e=k.makeArray(u.getElementsByClassName(e));var d=0,a=0,c=e.length,i;if(m&&m!=="*"){u=[];for(m=m.toUpperCase();d<c;++d){i=
e[d];if(i.tagName===m)u[a++]=i}}return u}:l.querySelectorAll?function(e,m,u){return u.querySelectorAll((m?m:"")+"."+e)}:function(e,m,u){m=u.getElementsByTagName(m||"*");u=[];var d=0,a=0,c=m.length,i,t;for(e=s+e+s;d<c;++d){i=m[d];if((t=i.className)&&(s+t+s).indexOf(e)>-1)u[a++]=i}return u};k.mix(b,{query:q,get:function(e,m){return q(e,m)[0]||null},filter:function(e,m,u){var d=q(e,u),a=k.require("sizzle"),c,i,t,w=[];if(k.isString(m)&&(c=o.exec(m))&&!c[1]){i=c[2];t=c[3];m=function(j){return!(i&&j.tagName.toLowerCase()!==
i.toLowerCase()||t&&!b.hasClass(j,t))}}if(k.isFunction(m))w=k.filter(d,m);else if(m&&a)w=a._filter(e,m,u);else g(m);return w},test:function(e,m,u){e=q(e,u);return e.length&&b.filter(e,m,u).length===e.length}});return b},{requires:["dom/base"]});
KISSY.add("dom/style-ie",function(k,b,v,q,y){if(!v.ie)return b;q=document;var z=q.documentElement,h=b._CUSTOM_STYLES,g=/^-?\d+(?:px)?$/i,l=/^-?\d/,r=/^(?:width|height)$/;try{if(z.style.opacity==y&&z.filters)h.opacity={get:function(n){var e=100;try{e=n.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(m){try{e=n.filters("alpha").opacity}catch(u){if(n=((n.currentStyle||0).filter||"").match(/alpha\(opacity[=:]([^)]+)\)/))e=parseInt(k.trim(n[1]))}}return e/100+""},set:function(n,e){var m=n.style,
u=(n.currentStyle||0).filter||"";m.zoom=1;if(u)u=k.trim(u.replace(/alpha\(opacity[=:][^)]+\),?/ig,""));if(u&&e!=1)u+=", ";m.filter=u+(e!=1?"alpha(opacity="+e*100+")":"")}}}catch(s){}v=v.ie==8;var f={},o={get:function(n,e){var m=n.currentStyle[e]+"";if(m.indexOf("px")<0)m=f[m]?f[m]:0;return m}};f.thin=v?"1px":"2px";f.medium=v?"3px":"4px";f.thick=v?"5px":"6px";k.each(["","Top","Left","Right","Bottom"],function(n){h["border"+n+"Width"]=o});if(!(q.defaultView||{}).getComputedStyle&&z.currentStyle)b._getComputedStyle=
function(n,e){var m=n.style,u=n.currentStyle[e];if(r.test(e))u=b[e](n)+"px";else if(!g.test(u)&&l.test(u)){var d=m.left,a=n.runtimeStyle.left;n.runtimeStyle.left=n.currentStyle.left;m.left=e==="fontSize"?"1em":u||0;u=m.pixelLeft+"px";m.left=d;n.runtimeStyle.left=a}return u};return b},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(k,b,v,q){function y(d,a){var c=b.get(d);if(k.isWindow(c))return a==l?b.viewportWidth(c):b.viewportHeight(c);else if(c.nodeType==9)return a==l?b.docWidth(c):b.docHeight(c);var i=a===l?c.offsetWidth:c.offsetHeight;k.each(a===l?["Left","Right"]:["Top","Bottom"],function(t){i-=parseFloat(b._getComputedStyle(c,"padding"+t))||0;i-=parseFloat(b._getComputedStyle(c,"border"+t+"Width"))||0});return i}function z(d,a,c){var i=c;if(c===r&&f.test(a)){i=0;if(k.inArray(b.css(d,"position"),
["absolute","fixed"])){c=d[a==="left"?"offsetLeft":"offsetTop"];if(v.ie===8||v.opera)c-=s(b.css(d.offsetParent,"border-"+a+"-width"))||0;i=c-(s(b.css(d,"margin-"+a))||0)}}return i}var h=document,g=h.documentElement,l="width",r="auto",s=parseInt,f=/^(?:left|top)/,o=/^(?:width|height|top|left|right|bottom|margin|padding)/i,n=/-([a-z])/ig,e=function(d,a){return a.toUpperCase()},m={},u={};k.mix(b,{_CUSTOM_STYLES:m,_getComputedStyle:function(d,a){var c="",i=d.ownerDocument;if(d.style)c=i.defaultView.getComputedStyle(d,
null)[a];return c},css:function(d,a,c){if(k.isPlainObject(a))for(var i in a)b.css(d,i,a[i]);else{if(a.indexOf("-")>0)a=a.replace(n,e);i=a;a=m[a]||a;if(c===q){d=b.get(d);var t="";if(d&&d.style){t=a.get?a.get(d,i):d.style[a];if(t===""&&!a.get)t=z(d,a,b._getComputedStyle(d,a))}return t===q?"":t}else{if(c===null||c==="")c="";else if(!isNaN(new Number(c))&&o.test(a))c+="px";(a===l||a==="height")&&parseFloat(c)<0||k.each(b.query(d),function(w){if(w&&w.style){a.set?a.set(w,c):w.style[a]=c;if(c==="")w.style.cssText||
w.removeAttribute("style")}})}}},width:function(d,a){if(a===q)return y(d,l);else b.css(d,l,a)},height:function(d,a){if(a===q)return y(d,"height");else b.css(d,"height",a)},show:function(d){b.query(d).each(function(a){if(a){a.style.display=b.data(a,"display")||"";if(b.css(a,"display")==="none"){var c=a.tagName,i=u[c],t;if(!i){t=h.createElement(c);h.body.appendChild(t);i=b.css(t,"display");b.remove(t);u[c]=i}b.data(a,"display",i);a.style.display=i}}})},hide:function(d){b.query(d).each(function(a){if(a){var c=
a.style,i=c.display;if(i!=="none"){i&&b.data(a,"display",i);c.display="none"}}})},toggle:function(d){b.query(d).each(function(a){if(a)b.css(a,"display")==="none"?b.show(a):b.hide(a)})},addStyleSheet:function(d,a,c){if(k.isString(d)){c=a;a=d;d=window}d=b.get(d);d=b._getWin(d).document;var i;if(c&&(c=c.replace("#","")))i=b.get("#"+c,d);if(!i){i=b.create("<style>",{id:c},d);b.get("head",d).appendChild(i);if(i.styleSheet)i.styleSheet.cssText=a;else i.appendChild(d.createTextNode(a))}},unselectable:function(d){b.query(d).each(function(a){if(a)if(v.gecko)a.style.MozUserSelect=
"none";else if(v.webkit)a.style.KhtmlUserSelect="none";else if(v.ie||v.opera){var c=0,i=a.getElementsByTagName("*");for(a.setAttribute("unselectable","on");a=i[c++];)switch(a.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:a.setAttribute("unselectable","on")}}})}});if(g.style.cssFloat!==q)m["float"]="cssFloat";else if(g.style.styleFloat!==q)m["float"]="styleFloat";return b},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(k,b,v){function q(h,g,l,r){if(!(h=b.get(h)))return null;if(g===v)g=1;var s=null,f,o;if(k.isNumber(g)&&g>=0){if(g===0)return h;f=0;o=g;g=function(){return++f===o}}for(;h=h[l];)if(z(h)&&(!g||b.test(h,g))&&(!r||r(h))){s=h;break}return s}function y(h,g,l){var r=[];var s=h=b.get(h);if(h&&l)s=h.parentNode;if(s){l=0;for(s=s.firstChild;s;s=s.nextSibling)if(z(s)&&s!==h&&(!g||b.test(s,g)))r[l++]=s}return r}var z=b._isElementNode;k.mix(b,{parent:function(h,g){return q(h,g,
"parentNode",function(l){return l.nodeType!=11})},next:function(h,g){return q(h,g,"nextSibling",v)},prev:function(h,g){return q(h,g,"previousSibling",v)},siblings:function(h,g){return y(h,g,true)},children:function(h,g){return y(h,g,v)},contains:function(h,g){var l=false;if((h=b.get(h))&&(g=b.get(g)))if(h.contains){if(g.nodeType===3){g=g.parentNode;if(g===h)return true}if(g)return h.contains(g)}else if(h.compareDocumentPosition)return!!(h.compareDocumentPosition(g)&16);else for(;!l&&(g=g.parentNode);)l=
g==h;return l},equals:function(h,g){h=k.query(h);g=k.query(g);if(h.length!=g.length)return false;for(var l=h.length;l>=0;l--)if(h[l]!=g[l])return false;return true}});return b},{requires:["./base"]});KISSY.add("dom",function(k,b){return b},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
