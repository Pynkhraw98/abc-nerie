
    jQuery(function() {
        var comm=0;
        jQuery("#zoom").anythingZoomer({
                clone: true
        });
        jQuery('#zoom').anythingZoomer('disable');
        jQuery('.zoom_in_out').click(function(){
            if(comm==0){
                jQuery('#zoom').anythingZoomer('enable');
                document.getElementById('zoom_in_out_img').src='images/pause.png';
                comm=1;
            }else{
                jQuery('#zoom').anythingZoomer('disable');
                document.getElementById('zoom_in_out_img').src='images/play.png';
                comm=0;
            }
        });
 
    });



 <!--char spacing-->
function set() {
document.getElementById("spacing").style.letterSpacing="2px";
document.getElementById("spacing").style.wordSpacing="4px";
}
function unset(){
document.getElementById("spacing").style.letterSpacing="0px";
document.getElementById("spacing").style.wordSpacing="0px";
}
 $(document).ready(function (){
  $("#char1").click(function set(){
    $("#char1").hide();
    $("#char2").show();
  });
  $("#char2").click(function unset(){
    $("#char2").hide();
   $("#char1").show();
  });
});

<!--end char spacing-->

<!--color scheme-->

$(document).ready(function(){
  $("#more1").click(function(){
	$("body").css({"background": "white", "color": "black"});
    $("header,section,border,.main_menu_area,.body_wrapper, .center,a,li,ol,ul,table,tr,td,th,thead,tbody,aside,nav,menu,article,section,footer,h1,h2,h3,h4,h5,h6,p,.toplinks,.footer-bottom,aside, figure, caption, .news li, footer li a").css({"background": "white", "color":"black"});
	
  });
});

$(document).ready(function(){
  $("#more2").click(function(){
	$("body").css({"background": "black", "color": "white"});
    $("header,section,border,.main_menu_area,.body_wrapper, .center,a,li,ol,ul,table,tr,td,th,thead,tbody,aside,nav,menu,article,section,footer,h1,h2,h3,h4,h5,h6,p,.toplinks,.footer-bottom,aside, figure, caption, .news li, footer li a").css({"background": "black", "color":"white"});
	
  });
});

$(document).ready(function(){
  $("#more3").click(function(){
	$("body").css({"background": "", "color": ""});
  $("header,section,border,.main_menu_area, .body_wrapper, .center,a,li,ol,ul,table,tr,td,th,thead,tbody,aside,nav,menu,article,section,footer,h1,h2,h3,h4,h5,h6,p,.toplinks,.footer-bottom,aside, figure, caption, .news li, footer li a").css({"background": "", "color":""});
		
  });
});
<!--end of color scheme-->


	 $(document).ready(function() { 
		$('#incfont').click(function(){	   
        curSize= parseInt($('#spacing').css('font-size')) + 2;
		if(curSize<=18)
        $('#spacing').css('font-size', curSize);
        });  
		$('#decfont').click(function(){	   
        curSize= parseInt($('#spacing').css('font-size')) - 2;
		if(curSize>=10)
        $('#spacing').css('font-size', curSize);
        });
		$('#rst').click(function(){	   
        curSize= parseInt($('#spacing').css('font-size')) - 0;
		if(curSize=12)
        $('#spacing').css('font-size', curSize);
        }); 
	});
