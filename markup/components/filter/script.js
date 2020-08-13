!function(p){"use strict";p(function(){function t(e){var m=this;function t(e){for(var t in e)m["$"+t].slider("values",0,e[t][0]),m["$"+t].slider("values",1,e[t][1]),"price"===t?m.$elem.find(".b-filter-"+t+"-value").text(Number(e[t][0]).toLocaleString("ru-RU")+" — "+Number(e[t][1]).toLocaleString("ru-RU")+" руб."):(m["$"+t].find(".ui-slider-handle:eq(0) span").text(e[t][0]),m["$"+t].find(".ui-slider-handle:eq(1) span").text(e[t][1]));d()}function i(e){if(Cookies.get("filter-"+m.$elem.data("tab")))return JSON.parse(Cookies.get("filter-"+m.$elem.data("tab")))[e]}function a(t){var n=1e15,i=0;return m.flatsArray.forEach(function(e){+e[t]&&+e[t]>i&&(i=+e[t]),!isNaN(e[t])&&+e[t]<n&&(n=+e[t])}),1e15===n&&0===i&&(n=0,i=10),[n,i]}function d(){var c,e=[];m.$house.length&&e.push(["house","HouseCount"]),m.$section.length&&e.push(["section","SectionNumber"]),m.$floors.length&&e.push(["floors","FloorNumber"]),m.$rooms.length&&e.push(["rooms","FlatRoomsCount"]),m.$square.length&&e.push(["square","TotalArea"]),m.$land.length&&e.push(["land","LandArea"]),m.$price.length&&e.push(["price","Price"]),m.flatsArrayFiltered=m.flatsArray.filter(function(t){var n=1;if(e.forEach(function(e){(t[e[1]]<m["$"+e[0]].slider("values",0)||t[e[1]]>m["$"+e[0]].slider("values",1))&&(n*=0)}),n)return!0}),c="",m.flatsArrayFiltered.forEach(function(e){var t="";e.Action&&(t="i-action");var n,i,a,l,o,s,r,u,d,p,f='<tr data-url="'+e.URL+'" class="'+t+'"',$='<td><a href="'+m.$tbody.data("orderlink")+e.ExternalId+'" class="btn">Оставить заявку</a></td></tr>';void 0!==e.HouseCount&&(f+=' data-housecount="'+e.HouseCount+'"',n="<td>"+e.HouseCount+"</td>"),void 0!==e.SectionNumber&&(f+=' data-sectionnumber="'+e.SectionNumber+'"',i="<td>"+e.SectionNumber+"</td>"),void 0!==e.CorpCount&&(f+=' data-corpnumber="'+e.CorpCount+'"',a="<td>"+e.CorpCount+"</td>"),void 0!==e.FloorNumber&&(f+=' data-floornumber="'+e.FloorNumber+'"',l="<td>"+e.FloorNumber+"</td>",s=""),void 0!==e.FlatNum&&(f+=' data-flatnum="'+e.FlatNum+'"',o="<td>"+e.FlatNum+"</td>"),void 0!==e.FloorsDuplex&&(f+=' data-floorsduplex="'+e.FloorsDuplex+'"',s="<td>"+e.FloorsDuplex+"</td>",l=""),void 0!==e.FlatRoomsCount&&(f+=' data-flatroomscount="'+e.FlatRoomsCount+'"',r="<td>"+e.FlatRoomsCount+"</td>"),void 0!==e.TotalArea&&(f+=' data-totalarea="'+e.TotalArea+'"',u="<td>"+e.TotalArea+" м<sup>2</sup></td>"),void 0!==e.LandArea&&(f+=' data-landarea="'+e.LandArea+'"',d="<td>"+e.LandArea+" соток</td>"),void 0!==e.Price&&void 0!==e.PriceFormat&&(f+=' data-price="'+e.PriceFormat+'"',p='<td data-sort="'+e.Price+'">'+e.PriceFormat+" руб.</td>"),f+=' data-layoutphoto="'+e.LayoutPhoto+'" data-externalid="'+e.ExternalId+'">',c+=f+n+a+i+l+o+s+r+u+d+p+$}),m.$tbody.html(c),function(){var e={};m.$house.length&&(e.house=[m.$house.slider("values",0),m.$house.slider("values",1)]);m.$section.length&&(e.section=[m.$section.slider("values",0),m.$section.slider("values",1)]);m.$floors.length&&(e.floors=[m.$floors.slider("values",0),m.$floors.slider("values",1)]);m.$rooms.length&&(e.rooms=[m.$rooms.slider("values",0),m.$rooms.slider("values",1)]);m.$square.length&&(e.square=[m.$square.slider("values",0),m.$square.slider("values",1)]);m.$land.length&&(e.land=[m.$land.slider("values",0),m.$land.slider("values",1)]);m.$price.length&&(e.price=[m.$price.slider("values",0),m.$price.slider("values",1)]);e.filter="",Cookies.set("filter-"+m.$elem.data("tab"),e,{expires:365,path:window.location.pathname})}()}m.flatsArray=[],m.flatsArrayFiltered=[],m.$elem=e,m.$filter=p(".b-filter"),m.$input=m.$elem.find(".b-filter__input input"),m.$tbody=m.$elem.find(".b-filter-table tbody"),m.$reset=m.$elem.find(".b-filter-reset"),m.$mobileBtn=m.$elem.find(".b-filter-btn"),m.$house=m.$elem.find(".b-filter-house"),m.$section=m.$elem.find(".b-filter-section"),m.$floors=m.$elem.find(".b-filter-floors"),m.$rooms=m.$elem.find(".b-filter-rooms"),m.$square=m.$elem.find(".b-filter-square"),m.$land=m.$elem.find(".b-filter-land"),m.$price=m.$elem.find(".b-filter-price"),m.$houseInputMin=m.$elem.find(".b-filter-house-input-min"),m.$houseInputMax=m.$elem.find(".b-filter-house-input-max"),m.$sectionInputMin=m.$elem.find(".b-filter-section-input-min"),m.$sectionInputMax=m.$elem.find(".b-filter-section-input-max"),m.$floorsInputMin=m.$elem.find(".b-filter-floors-input-min"),m.$floorsInputMax=m.$elem.find(".b-filter-floors-input-max"),m.$roomsInputMin=m.$elem.find(".b-filter-rooms-input-min"),m.$roomsInputMax=m.$elem.find(".b-filter-rooms-input-max"),m.$squareInputMin=m.$elem.find(".b-filter-square-input-min"),m.$squareInputMax=m.$elem.find(".b-filter-square-input-max"),m.$landInputMin=m.$elem.find(".b-filter-land-input-min"),m.$landInputMax=m.$elem.find(".b-filter-land-input-max"),m.$priceInputValue=m.$elem.find(".b-filter-price-value"),p.ajax({url:m.$tbody.data("json"),type:m.$tbody.data("method"),dataType:"json",success:function(e){m.flatsArray=e,function(){var n=i("house"),e=a("HouseCount");n=n||e;m.$house.slider({range:!0,min:e[0],max:e[1],values:[n[0],n[1]],create:function(e,t){m.$house.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+n[0]+"</span>"),m.$houseInputMin.val(n[0]),m.$house.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+n[1]+"</span>"),m.$houseInputMax.val(n[1])},slide:function(e,t){m.$house.find(".ui-slider-handle:eq(0) span").text(t.values[0]),m.$house.find(".ui-slider-handle:eq(1) span").text(t.values[1]),m.$houseInputMin.val(t.values[0]),m.$houseInputMax.val(t.values[1])},stop:d})}(),function(){var n=i("section"),e=a("SectionCount");n=n||e;m.$section.slider({range:!0,min:e[0],max:e[1],values:[n[0],n[1]],create:function(e,t){m.$section.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+n[0]+"</span>"),m.$sectionInputMin.val(n[0]),m.$section.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+n[1]+"</span>"),m.$sectionInputMax.val(n[1])},slide:function(e,t){m.$section.find(".ui-slider-handle:eq(0) span").text(t.values[0]),m.$section.find(".ui-slider-handle:eq(1) span").text(t.values[1]),m.$sectionInputMin.val(t.values[0]),m.$sectionInputMax.val(t.values[1])},stop:d})}(),function(){var n=i("rooms"),e=a("FlatRoomsCount");n=n||e;m.$rooms.slider({range:!0,min:e[0],max:e[1],values:[n[0],n[1]],create:function(e,t){m.$rooms.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+n[0]+"</span>"),m.$roomsInputMin.val(n[0]),m.$rooms.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+n[1]+"</span>"),m.$roomsInputMax.val(n[1])},slide:function(e,t){m.$rooms.find(".ui-slider-handle:eq(0) span").text(t.values[0]),m.$rooms.find(".ui-slider-handle:eq(1) span").text(t.values[1]),m.$roomsInputMin.val(t.values[0]),m.$roomsInputMax.val(t.values[1])},stop:d})}(),function(){var n=i("floors"),e=a("FloorNumber");n=n||e;m.$floors.slider({range:!0,min:e[0],max:e[1],values:[n[0],n[1]],create:function(e,t){m.$floors.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+n[0]+"</span>"),m.$floorsInputMin.val(n[0]),m.$floors.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+n[1]+"</span>"),m.$floorsInputMax.val(n[1])},slide:function(e,t){m.$floors.find(".ui-slider-handle:eq(0) span").text(t.values[0]),m.$floors.find(".ui-slider-handle:eq(1) span").text(t.values[1]),m.$floorsInputMin.val(t.values[0]),m.$floorsInputMax.val(t.values[1])},stop:d})}(),function(){var n=i("square"),e=a("TotalArea");e=[Math.floor(e[0]),Math.ceil(e[1])],n=n||e;m.$square.slider({range:!0,min:e[0],max:e[1],values:[n[0],n[1]],create:function(e,t){m.$square.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+n[0]+"</span>"),m.$squareInputMin.val(n[0]),m.$square.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+n[1]+"</span>"),m.$squareInputMax.val(n[1])},slide:function(e,t){m.$square.find(".ui-slider-handle:eq(0) span").text(t.values[0]),m.$square.find(".ui-slider-handle:eq(1) span").text(t.values[1]),m.$squareInputMin.val(t.values[0]),m.$squareInputMax.val(t.values[1])},stop:d})}(),function(){var n=i("land"),e=a("LandArea");e=[Math.floor(e[0]),Math.ceil(e[1])],n=n||e;m.$land.slider({range:!0,min:e[0],max:e[1],values:[n[0],n[1]],create:function(e,t){m.$land.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+n[0]+"</span>"),m.$landInputMin.val(n[0]),m.$land.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+n[1]+"</span>"),m.$landInputMax.val(n[1])},slide:function(e,t){m.$land.find(".ui-slider-handle:eq(0) span").text(t.values[0]),m.$land.find(".ui-slider-handle:eq(1) span").text(t.values[1]),m.$landInputMin.val(t.values[0]),m.$landInputMax.val(t.values[1])},stop:d})}(),function(){var n=i("price"),e=a("Price");n=n||e;m.$price.slider({range:!0,min:e[0],max:e[1],step:1,values:[n[0],n[1]],create:function(e,t){m.$priceInputValue.text(Number(n[0]).toLocaleString("ru-RU")+" — "+Number(n[1]).toLocaleString("ru-RU")+" руб.")},slide:function(e,t){m.$priceInputValue.text(Number(t.values[0]).toLocaleString("ru-RU")+" — "+Number(t.values[1]).toLocaleString("ru-RU")+" руб.")},stop:d})}(),setTimeout(function(){d()},100)},error:function(){}}),m.$reset.click(function(){var e={};m.$house.length&&(e.house=[m.$house.slider("option","min"),m.$house.slider("option","max")]),m.$section.length&&(e.section=[m.$section.slider("option","min"),m.$section.slider("option","max")]),m.$floors.length&&(e.floors=[m.$floors.slider("option","min"),m.$floors.slider("option","max")]),m.$rooms.length&&(e.rooms=[m.$rooms.slider("option","min"),m.$rooms.slider("option","max")]),m.$square.length&&(e.square=[m.$square.slider("option","min"),m.$square.slider("option","max")]),m.$land.length&&(e.land=[m.$land.slider("option","min"),m.$land.slider("option","max")]),m.$price.length&&(e.price=[m.$price.slider("option","min"),m.$price.slider("option","max")]),t(e),m.$input.each(function(e){var t=p(this),n=t.attr("class"),i=n.substring(0,n.search("input")-1);-1!==String(n).search("min")?t.val(m.$elem.find("."+i+" .ui-slider-handle:eq(0) span").text()):t.val(m.$elem.find("."+i+" .ui-slider-handle:eq(1) span").text())})}),m.$mobileBtn.click(function(e){e.preventDefault(),m.$mobileBtn.find("span:visible").is(".i-show")?(m.$elem.find(".b-filter-body").slideDown(),m.$mobileBtn.find("span").show(),m.$mobileBtn.find("span.i-show").hide()):(m.$elem.find(".b-filter-body").slideUp(),m.$mobileBtn.find("span").hide(),m.$mobileBtn.find("span.i-show").show())}),m.$input.keydown(function(e){if(13===e.which){var t,n,i=p(this),a=i.attr("class"),l=+i.val(),o=a.substring(0,a.search("input")-1),s=o.split("b-filter-")[1],r=m.$elem.find("."+o+" .ui-slider-handle:eq(0) span"),u=m.$elem.find("."+o+" .ui-slider-handle:eq(1) span");if("number"==typeof l){if(-1!==String(a).search("min")){if(t=l,n=+i.siblings("input").val(),t>u.text())return void i.val(r.text());t<m["$"+s].slider("option","min")&&(t=m["$"+s].slider("option","min"),i.val(t))}else{if(n=l,t=+i.siblings("input").val(),n<r.text())return void i.val(u.text());n>m["$"+s].slider("option","max")&&(n=m["$"+s].slider("option","max"),i.val(n))}m.$elem.find("."+o).slider("values",0,t),m.$elem.find("."+o).slider("values",1,n),r.text(t),u.text(n),d()}}}),m.slideFilter=d,m.setValue=t,m.$elem.delegate(".btn","click",function(e){e.stopPropagation()}),m.$elem.delegate("tbody tr","click",function(e){e.preventDefault(),window.location=p(this).data("url")})}p(".b-filter-table").each(function(){var e=p(this).get(0);new Tablesort(e)}),p(".b-filter-item").each(function(){var e=p(this);e.data({Filter:new t(e)})}),setTimeout(function(){var e={};window.location.search&&(e=function(e){for(var t={},n=("?"===e[0]?e.substr(1):e).split("&"),i=0;i<n.length;i++){var a=n[i].split("=");t[decodeURIComponent(a[0])]=decodeURIComponent(a[1]||"")}return t}(window.location.search)),e.type&&p(".b-tabs__item[ data-tab="+e.type+"]").length&&p(".b-tabs__item[ data-tab="+e.type+"]").click(),e.house&&p(".b-filter-item[ data-tab="+e.type+"] .b-filter-house").length&&p(".b-filter-item[ data-tab="+e.type+"]").data("Filter").setValue({house:[e.house,e.house]})},1e3)})}(jQuery);