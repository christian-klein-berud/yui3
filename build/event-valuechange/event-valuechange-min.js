YUI.add("event-valuechange",function(d){var c="value",a,b={POLL_INTERVAL:50,TIMEOUT:10000,_history:{},_intervals:{},_notifiers:{},_timeouts:{},_poll:function(h,f,n){var k=h._node,g=k&&k.value,j=b._history[f],p,l,m,o;if(!k){b._stopPolling(h,f);return;}if(g!==j){b._history[f]=g;p={_event:n,newVal:g,prevVal:j};o=b._notifiers[f];for(l=0,m=o.length;l<m;++l){o[l].fire(p);}b._refreshTimeout(h,f);}},_refreshTimeout:function(f,e){b._stopTimeout(f,e);b._timeouts[e]=setTimeout(function(){b._stopPolling(f,e);},b.TIMEOUT);},_startPolling:function(g,f,i,h){f||(f=d.stamp(g));if(!h&&b._intervals[f]){return;}b._stopPolling(g,f);b._intervals[f]=setInterval(function(){b._poll(g,f,i);},b.POLL_INTERVAL);b._refreshTimeout(g,f,i);},_stopPolling:function(f,e){e||(e=d.stamp(f));b._intervals[e]=clearInterval(b._intervals[e]);b._stopTimeout(f,e);},_stopTimeout:function(f,e){e||(e=d.stamp(f));b._timeouts[e]=clearTimeout(b._timeouts[e]);},_onBlur:function(f){b._stopPolling(f.currentTarget);},_onFocus:function(g){var f=g.currentTarget;b._history[d.stamp(f)]=f.get(c);b._startPolling(f,null,g);},_onKeyDown:function(f){b._startPolling(f.currentTarget,null,f);},_onKeyUp:function(f){if(f.charCode===229||f.charCode===197){b._startPolling(f.currentTarget,null,f,true);}},_onMouseDown:function(f){b._startPolling(f.currentTarget,null,f);},_onSubscribe:function(i,h,g){var f=d.stamp(i),e=b._notifiers[f];b._history[f]=i.get(c);g._handles=i.on({blur:b._onBlur,focus:b._onFocus,keydown:b._onKeyDown,keyup:b._onKeyUp,mousedown:b._onMouseDown});if(!e){e=b._notifiers[f]=[];}e.push(g);},_onUnsubscribe:function(j,i,h){var g=d.stamp(j),e=b._notifiers[g],f=d.Array.indexOf(e,h);h._handles.detach();if(f>-1){e.splice(f,1);if(!e.length){b._stopPolling(j,g);delete b._notifiers[g];delete b._history[g];}}}};a={detach:b._onUnsubscribe,on:b._onSubscribe,publishConfig:{emitFacade:true}};d.Event.define("valuechange",a);d.Event.define("valueChange",a);d.ValueChange=b;},"@VERSION@",{requires:["event-focus","event-synthetic"]});