function buildTree(b){var a="plugins/tree/images/";$$("#"+b+" li.folder").each(function(e){var d=e.getChildren("ul");var c=new Element("img",{src:a+"_open.gif",width:18,height:18}).inject(e,"top");if(e.hasClass("root")){e.minus=a+"Rminus.gif";e.plus=a+"Rplus.gif"}else{if(e.hasClass("first")){e.minus=a+"Fminus.gif";e.plus=a+"Fplus.gif"}else{if(e.getNext()){e.minus=a+"Tminus.gif";e.plus=a+"Tplus.gif"}else{e.minus=a+"Lminus.gif";e.plus=a+"Lplus.gif"}}}var f=new Element("img",{src:e.minus,width:18,height:18}).addEvent("click",function(){if(e.hasClass("f-open")){f.setProperty("src",e.plus);c.setProperty("src",a+"_closed.gif");d.each(function(g){g.setStyle("display","none")});e.removeClass("f-open")}else{f.setProperty("src",e.minus);c.setProperty("src",a+"_open.gif");d.each(function(g){g.setStyle("display","block")});e.addClass("f-open")}}).inject(e,"top");if(!e.hasClass("f-open")){f.setProperty("src",e.plus);d.each(function(g){g.setStyle("display","none")});e.removeClass("f-open")}d.each(function(g){var h=g.getChildren("li.doc");h.each(function(i){if(i==h.getLast()&&!i.getNext()){new Element("img",{src:a+"L.gif",width:18,height:18}).inject(i.getElement("span"),"before")}else{new Element("img",{src:a+"T.gif",width:18,height:18}).inject(i.getElement("span"),"before")}})})});$$("#"+b+" li").each(function(c){c.getParents("li").each(function(d){if(d.getNext()){new Element("img",{src:a+"I.gif",width:18,height:18}).inject(c,"top")}else{new Element("img",{src:a+"spacer.gif",width:18,height:18}).inject(c,"top")}})});$$("#"+b+" li.doc").each(function(c){new Element("img",{src:a+"_doc.gif",width:18,height:18}).inject(c.getElement("span"),"before")})};