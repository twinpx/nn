!function(p){"use strict";p(function(){var a=[{num:1,poly:[639,477,639,550,659,563,733,595,780,603,813,592,863,556,869,542,870,477,838,467,828,427,792,462,756,455,739,463,739,463,739,506,679,485,676,474,676,474]},{num:3,poly:[459,421,459,477,539,513,577,519,609,512,637,473,660,465,637,469,673,417,619,403,533,433,480,415]},{num:5,poly:[397,394,399,445,407,454,453,473,457,472,457,422,474,416,484,412,515,422,522,420,521,398,467,379,431,377]},{num:6,poly:[782,381,779,429,803,403,814,424,831,422,874,430,877,447,904,453,913,443,913,492,905,380,817,367,790,375,790,375]},{num:8,poly:[665,360,665,398,682,401,741,412,761,414,766,408,766,360,677,346]},{num:10,poly:[513,350,506,364,506,389,521,399,523,409,546,413,572,406,577,398,626,400,641,388,640,341,569,331,569,331]},{num:12,poly:[365,323,365,366,411,379,431,375,471,376,500,365,497,320,416,309,385,313]}];p(".b-visual").delegate("area","mouseenter",function(){6<p("area").index(this)||p(".b-visual__hover[data-num="+p(this).data("num")+"]").addClass("i-show")}).delegate("area","mouseleave",function(){6<p("area").index(this)||p(".b-visual__hover[data-num="+p(this).data("num")+"]").removeClass("i-show")}).delegate("area","click",function(a){a.preventDefault(),6<p("area").index(this)?p(".b-visual__popup").removeClass("i-show"):(p(".b-visual__popup").removeClass("i-show"),p(".b-visual__popup[data-num="+p(this).data("num")+"]").addClass("i-show"))}),p(window).resize(function(){!function(){var t=p(".b-visual img").width()/1280;p(".b-visual__hint[data-num=1]").css({top:517*t-40+"px",left:790*t-20+"px"}),p(".b-visual__hint[data-num=3]").css({top:455*t-40+"px",left:605*t-20+"px"}),p(".b-visual__hint[data-num=5]").css({top:410*t-40+"px",left:450*t-20+"px"}),p(".b-visual__hint[data-num=6]").css({top:415*t-40+"px",left:860*t-20+"px"}),p(".b-visual__hint[data-num=8]").css({top:380*t-40+"px",left:720*t-20+"px"}),p(".b-visual__hint[data-num=10]").css({top:370*t-40+"px",left:580*t-20+"px"}),p(".b-visual__hint[data-num=12]").css({top:340*t-40+"px",left:420*t-20+"px"}),p(".b-visual__popup[data-num=1]").css({top:517*t-100+"px",left:790*t-120+"px"}),p(".b-visual__popup[data-num=3]").css({top:455*t-100+"px",left:605*t-120+"px"}),p(".b-visual__popup[data-num=5]").css({top:410*t-100+"px",left:450*t-120+"px"}),p(".b-visual__popup[data-num=6]").css({top:415*t-100+"px",left:860*t-120+"px"}),p(".b-visual__popup[data-num=8]").css({top:380*t-100+"px",left:720*t-120+"px"}),p(".b-visual__popup[data-num=10]").css({top:370*t-100+"px",left:580*t-120+"px"}),p(".b-visual__popup[data-num=12]").css({top:340*t-100+"px",left:420*t-120+"px"});var s="";a.forEach(function(a){var p=a.poly.map(function(a){return Math.round(a*t)});s+='<area data-num="'+a.num+'" shape="poly" coords="'+p.join(",")+'" href="">'}),s+='<area shape="rect" coords="0,0,'+1280*t+","+740*t+'" nohref>',p(".b-visual map").html(s)}()}).resize()})}(jQuery);