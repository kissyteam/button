modulex.add("button",["node","component/control"],function(e,t,n){var o,l=e("node"),c=e("component/control");o=function(e){var t=l,n=c,o=t.Event.KeyCode;return e=n.extend({isButton:1,beforeCreateDom:function(e){var t=this,n=e.elAttrs;n.role="button",e.tooltip&&(n.title=e.tooltip),e["aria-describedby"]&&(n["aria-describedby"]=e.describedby),e.checked&&e.elCls.push(t.getBaseCssClasses("checked"))},bindUI:function(){this.$el.on("keyup",this.handleKeyDownInternal,this)},handleKeyDownInternal:function(e){return e.keyCode===o.ENTER&&"keydown"===e.type||e.keyCode===o.SPACE&&"keyup"===e.type?this.handleClickInternal(e):e.keyCode===o.SPACE},handleClickInternal:function(){var e=this;e.callSuper(),e.get("checkable")&&e.set("checked",!e.get("checked")),e.fire("click")},_onSetChecked:function(e){var t=this,n=t.getBaseCssClasses("checked");t.$el[e?"addClass":"removeClass"](n)},_onSetTooltip:function(e){this.el.setAttribute("title",e)},_onSetDescribedby:function(e){this.el.setAttribute("aria-describedby",e)}},{ATTRS:{handleGestureEvents:{value:!0},focusable:{value:!0},allowTextSelection:{value:!1},value:{},describedby:{value:"",render:1,sync:0},tooltip:{value:"",render:1,sync:0},checkable:{},checked:{value:!1,render:1,sync:0}},xclass:"button"})}(),n.exports=o});