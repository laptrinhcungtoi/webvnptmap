mac.combo_autoCp=function(b,a){a=$.extend(b.config,{autoCp:$.extend({},a)});var e=a.autoCp;var h="selected",g="hover";var f=b.children(".head").find("input");var d=b.children(".body");var c=e.by||a.keyField;f.keyup(function(p){var i=p.keyCode,n=b.isOpen;var j=d.children(".tr"),w=":visible";switch(i){case 38:case 40:var t,q=(i==40);if(!n&&q){b.open()}j=j.filter(w);var m=j.filter("."+g),y=j.filter("."+h);j.removeClass(g);var o=(q?m.nextAll(w):m.prevAll(w)).first();var r=(q?y.nextAll(w):y.prevAll(w)).first();if(m.length+y.length==0||o.length+r.length==0){t=(q?j.first():j.last())}else{if(o.length){t=o}else{if(r.length&&n&&!m.length){t=r}else{if(y.length&&!n){t=y}else{t=t=(q?j.first():j.last())}}}}t.addClass(g);return false;case 13:if(n){d.children("."+g).mousedown()}break;case 27:b.close();break;default:var w=f.val(),l=d.children(".tr");if(!w||w.length<(e.minChars||0)){l.show();break}if(w!=b.displayValue){var u=b.data;l.each(function(C,B){var A=$(B),z=A.attr("name");var v,s=u[z][c]+"";if(a.equals){v=a.equals(s,z,w,u)}else{v=s&&s.indexOf(w)>-1}A.toggle(v)});if(!b.isOpen){b.open()}}}return true}).keydown(function(j){switch(j.keyCode){case 9:var i=f.val();if(i&&i!=b.displayValue&&c==a.keyField){b.select(i);return b.selected.length}break}return true})};