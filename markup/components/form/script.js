!function(i){"use strict";i(function(){i(".b-form input[type=tel]").mask("+0 (000) 000 00 00"),i(".b-form form").submit(function(e){var t=i(this);if(window.ComagicWidget){var n=Comagic.getCredentials();for(var r in n)n.hasOwnProperty(r)&&t.append('<input type="hidden" name="'+r+'" value="'+n[r]+'" />');"form_request"===t.attr("id")&&(t.append('<input type="hidden" name="is_sale" value="true" />'),document.getElementById("request_price")&&t.append('<input type="hidden" name="sale_cost" value="'+document.getElementById("request_price").textContent+'" />'))}return!0}),i("form#form_ipoteka").submit(function(){try{ym(62963446,"reachGoal","FORM-IPOTEKA-SUBMIT"),ga("send","event","form-ipoteka","submit")}catch(e){}return!0}),i("form#form_request").submit(function(){try{ym(62963446,"reachGoal","FORM-REQUEST-SUBMIT"),ga("send","event","form-request","submit")}catch(e){}return!0})})}(jQuery);