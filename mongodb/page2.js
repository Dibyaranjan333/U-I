$(document).ready(function(){
	
		$("#d1").hover(function () {
			console.log("hiih");
			
			$( "#c1" ).addClass( "coll6" );
			$("#c1 img").css({"display": "block","height": "20px","margin-left": "44%","margin-top":"20px","position": "absolute"});
		})
		$("#d1").mouseleave(function () {
			$( "#c1" ).removeClass( "coll6" );
			$("#c1 img").css({"display": "none"});
		})
	
	
		$("#d2").hover(function () {
			
			$( "#c2" ).addClass( "coll6" );
			$("#c2 img").css({"display": "block","height": "20px","margin-left": "44%","margin-top":"20px","position": "absolute"});
		})
		$("#d2").mouseleave(function () {
			$( "#c2" ).removeClass( "coll6" );
			$("#c2 img").css({"display": "none"});
		})
		
		$("#d3").hover(function () {
			$( "#c3" ).addClass( "coll6" );
			$("#c3 img").css({"display": "block","height": "20px","margin-left": "44%","margin-top":"20px","position": "absolute"});
		})
		$("#d3").mouseleave(function () {
			$( "#c3" ).removeClass( "coll6" );
			$("#c3 img").css({"display": "none"});
		})
		
		
		$("#d4").hover(function () {
			$( "#c4" ).addClass( "coll6" );
			$("#c4 img").css({"display": "block","height": "20px","margin-left": "44%","margin-top":"20px","position": "absolute"});
		})
		$("#d4").mouseleave(function () {
			$( "#c4" ).removeClass( "coll6" );
			$("#c4 img").css({"display": "none"});
		})
		
		$("#d5").hover(function () {
			$( "#c5" ).addClass( "coll6" );
			$("#c5 img").css({"display": "block","height": "20px","margin-left": "44%","margin-top":"20px","position": "absolute"});
		})
		$("#d5").mouseleave(function () {
			$( "#c5" ).removeClass( "coll6" );
			$("#c5 img").css({"display": "none"});
		})
		
		
		$("#d6").hover(function () {
			$( "#c6" ).addClass( "coll6" );
			$("#c6 img").css({"display": "block","height": "20px","margin-left": "44%","margin-top":"20px","position": "absolute","transition-delay": "1s"});
		})
		$("#d6").mouseleave(function () {
			$( "#c6" ).removeClass( "coll6" );
			$("#c6 img").css({"display": "none"});
		})
		
		
		$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".absolute1").addClass("absolute2");
    } else {
      $(".absolute1").removeClass("absolute2");
    }
  });
		
		
	
			
			var x=false;
			$("#div33").click(function () {
			
				console.log("hiii");
				if(x==false){
					$("#myNav").addClass( "show" );
					$("body").css({"overflow":"hidden"});
					x=true;
				}
				else{
					$( "#myNav" ).removeClass( "show" );
					$(".hhhh").css({"overflow-y":"auto"});
					x=false;
				}
				
				
				
			/* $( "#myNav" ).addClass( "show" );
			var x=true; */
			})
			
			
			
						
			
			
			
		
});

















/* function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

 */









// $(document).ready(function(){
  // $(window).scroll(function() {
    // if ($(document).scrollTop() > 50) {
      // $("p").addClass("test");
    // } else {
      // $("p").removeClass("test");
    // }
  // });
// });



    // display: block;
    // width: 20px;
    // height: 20px;
    // margin-left: 170px;