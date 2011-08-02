/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("io-upload-iframe",function(g){var b=g.config.win,f=g.config.doc,c=(f.documentMode&&f.documentMode>=8),a=decodeURIComponent;function e(h,k,j){var d=g.Node.create('<iframe id="io_iframe'+h.id+'" name="io_iframe'+h.id+'" />');d._node.style.position="absolute";d._node.style.top="-1000px";d._node.style.left="-1000px";g.one("body").appendChild(d);g.on("load",function(){j._uploadComplete(h,k);},"#io_iframe"+h.id);}g.mix(g.IO.prototype,{_addData:function(n,k){var p=[],d=k.split("="),j,h;for(j=0,h=d.length-1;j<h;j++){p[j]=f.createElement("input");p[j].type="hidden";p[j].name=a(d[j].substring(d[j].lastIndexOf("&")+1));p[j].value=(j+1===h)?a(d[j+1]):a(d[j+1].substring(0,(d[j+1].lastIndexOf("&"))));n.appendChild(p[j]);}return p;},_removeData:function(j,k){var h,d;for(h=0,d=k.length;h<d;h++){j.removeChild(k[h]);}},_setAttrs:function(h,i,d){h.setAttribute("action",d);h.setAttribute("method","POST");h.setAttribute("target","io_iframe"+i);h.setAttribute(g.UA.ie&&!c?"encoding":"enctype","multipart/form-data");},_resetAttrs:function(h,d){g.Object.each(d,function(i,j){if(i){h.setAttribute(j,i);}else{h.removeAttribute(j);}});},_startTimeout:function(d,i){var h=this;h._timeout[d.id]=b.setTimeout(function(){d.status=0;d.statusText="timeout";h.complete(d,i);h.end(d,i);},i.timeout);},_clearTimeout:function(h){var d=this;b.clearTimeout(d._timeout[h]);delete d._timeout[h];},_destroy:function(d){g.Event.purgeElement("#io_iframe"+d,false);g.one("body").removeChild(g.one("#io_iframe"+d));},_uploadComplete:function(k,m){var l=this,j=g.one("#io_iframe"+k.id).get("contentWindow.document"),h=j.one("body"),i;if(m.timeout){l._clearTimeout(k.id);}if(h){i=h.one("pre:first-child");k.c.responseText=i?i.get("text"):h.get("text");}else{k.c.responseXML=j._node;}l.complete(k,m);l.end(k,m);b.setTimeout(function(){l._destroy(k.id);},0);},_upload:function(k,i,m){var l=this,j=(typeof m.form.id==="string")?f.getElementById(m.form.id):m.form.id,h={action:j.getAttribute("action"),target:j.getAttribute("target")},d;l._setAttrs(j,k.id,i);if(m.data){d=l._addData(j,m.data);}if(m.timeout){l._startTimeout(k,m);}j.submit();l.start(k,m);if(m.data){l._removeData(j,d);}l._resetAttrs(j,h);return{id:k.id,abort:function(){k.status=0;k.statusText="abort";if(g.one("#io_iframe"+k.id)){l._destroy(k.id);l.complete(k,m);l.end(k,m);}else{return false;}},isInProgress:function(){return g.one("#io_iframe"+k.id)?true:false;},conn:l};},upload:function(h,d,i){e(h,i,this);return this._upload(h,d,i);}});},"3.4.0",{requires:["io-base","node-base"]});