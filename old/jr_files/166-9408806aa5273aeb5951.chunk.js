(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{1443:function(n,t,i){"use strict";var e=i(0),o=i.n(e);o()((function(){o()(".new-campaign-share-banner").length>0&&(o()(".manage-campaign").hide(),o()(".new-campaign-share-banner .close-banner").click((function(){return o()(".manage-campaign").show(),o()(".new-campaign-share-banner").hide(),o()(document).trigger("campaign:share_banner_dismissed"),!1})))}))},1444:function(n,t,i){"use strict";var e=i(0),o=i.n(e),a=function(){var n=o()(window).height();if(d())h();else{var t=o()(".floating-sidebar").outerHeight()+10;parseInt(o()(".main-content > .container").css("min-height"))<t&&o()(".main-content > .container").css("min-height",t),p()+l()+f()>n?c():s()}},s=function(){var n=o()(".floating-sidebar"),t=n.parent();t.css("position","").css("left","").css("height","").css("width","");var i=t.position().left,e=b();t.css("position","absolute").css("height",o()(".main-content > .container").height()).css("left",i).css("width",e),n.css("position","sticky").css("top","0"),n.css("z-index",1),u()},r=function(){var n=o()(".floating-sidebar");n.parent().css("position","").css("left","").css("height","").css("width",""),n.css("position","").css("top",""),g()},c=function(){r(),o()(".floating-sidebar").css("position","absolute")},h=function(){r(),o()(".floating-sidebar").css("position","")},u=function(){var n=o()(".last-action");if(o()(".floating-sidebar .recent-actions .last-action").length>0){g();var t=n.offset().top+n.outerHeight()-o()(window).scrollTop(),i=o()(window).height()-t-30-30;o()(".footer").is(":visible")&&(i-=f());var e=i/o()(".actions-box tr").outerHeight();e>=1?o()(".actions-box tr").each((function(n,t){n>=e-1?o()(t).hide():o()(t).show()})):(o()(".actions-box").hide(),n.hide())}else o()(".actions-box").hide(),n.hide()},g=function(){o()(".last-action").show(),o()(".actions-box").show(),o()(".actions-box tr").show()},d=function(){return o()("#screen-size-xs-indicator").is(":visible")},l=function(){var n=o()("#header"),t=n.offset().top+n.outerHeight()+10+o()("#alerts").outerHeight();return o()(".admin-toolbox").length>0&&(t+=o()(".admin-toolbox").outerHeight()),o()(".manage-campaign").length>0&&o()(".manage-campaign").is(":visible")&&(t+=o()(".manage-campaign").outerHeight()),o()(".new-campaign-share-banner").length>0&&o()(".new-campaign-share-banner").is(":visible")&&(t+=o()(".new-campaign-share-banner").outerHeight()),t},f=function(){return 20+o()(".footer").outerHeight()},p=function(){return o()("#take-action").height()+50},b=function(){return o()(".sidebar").width()};o()(window).on("load",(function(){return a()})),o()(window).on("resize",(function(){return a()})),o()((function(){window.scroll(0,0),o()("#alerts .alert").on("closed.bs.alert",(function(){return a()})),o()(document).on("campaign:share_banner_dismissed",(function(){return a()})),o()(document).on("campaign:sidebar_updated",(function(){return a()}))}))},1694:function(n,t,i){"use strict";i.r(t);var e=i(0),o=i.n(e);i(1443),i(1444);o()((function(){var n=o()("#prohibited-petition-modal");n.length>0&&n.modal({backdrop:"static",keyboard:!1});var t=document.querySelector(".petition-content").dataset.startDaisyChainPath;t&&o.a.get(t,{dataType:"script"})}))}}]);
//# sourceMappingURL=166-9408806aa5273aeb5951.chunk.js.map