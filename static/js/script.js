
$(document).ready(function() {


			/*function show_fullpage(){
				TweenLite.to($("#fullpage"), 0.6, {opacity: 1});
			}*/

			/* fullpage_js();*/
			/*end logo, logo shadow, company name text, and tagline animations*/



		/*Fullpage.js custom predefined attribute

		function fullpage_js(){*/

			$('#fullpage').fullpage({

				navigationPosition: 'right',
				navigationTooltips: ['Home', 'Services', 'Contact'],
				/*css3: true,*/
				resize: true,
				afterLoad: function(anchorLink, index){

						  //home
						  if(anchorLink == 'home'){

						  }else

						  if(anchorLink == 'services'){

						  	$('.services').find('.row.box').animate({marginLeft:'0px',opacity:1},1000);
						  }else
						  

						  //contact
						  if(anchorLink == 'contact'){
								//moving the image
								$('.contact').find('.back-img svg').fadeIn(500,function(){
									$('.contact').find('.form-box').delay(100).animate({opacity:.9},2000, 'easeOutExpo');
								}); 

								$('.contact').find('.social-icon svg').fadeIn(500);
							}
						  /*//section 3
						  if(anchorLink == '3rdPage'){
								//moving the image
								$('#section2').find('.intro').delay(500).animate({
									 left: '0%'
								}, 1500, 'easeOutExpo');
							}*/
						},

						responsiveHeight: 100,
						scrollOverflow: true,
						scrollOverflowOptions: {
							scrollbars: true,
							mouseWheel: true,
							hideScrollbars: false,
							fadeScrollbars: false,
							disableMouse: true
						}
					});


			/*}end Fullpage.js custom predefined attribute*/

			TweenMax.to($(".scroll_down i"), 1, {scale:1.4,repeat:-1});

			$('ul.tabs').tabs();
			$('select').material_select();
			$('.button-collapse').sideNav({
		menuWidth: 300, // Default is 240
		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	}
	);
			$('.collapsible').collapsible();

			/*contact form color change when select*/
			$('#select-form').change("slow",function() {

				var form_selected = $('#select-form').find(":selected").val();

				if ( form_selected == 'contact_form' ) {
					$('#message').attr("placeholder", "Let us know when we call you back");
					$(".contact .social-icon path").css({"stroke": "#2196f3","transition":"all 1s"});
					$(".contact .social-icon text").css({"fill": "#2196f3","transition":"all 1s"});
					$(".contact .back-img path").css({"fill": "#2196f3","transition":"all 1s"});
					$(".buttonss").css({"background": "#2196f3","transition":"all 1s"});
					$(".dropdown-content li>span").css({"color": "#2196f3"});
					$( ".resume-work" ).addClass( "hide" );
					$( "#submit-btn" ).removeClass( "light-green darken-2 amber darken-3" ).addClass( "blue darken-1" );

				}
				else if ( form_selected == 'work_with_us' ) {
					$('#message').attr("placeholder", "Add cover letter and attach your resume");
					$(".contact .social-icon path").css({"stroke": "#8bc34a","transition":"all 1s"});
					$(".contact .social-icon text").css({"fill": "#8bc34a","transition":"all 1s"});
					$(".contact .back-img path").css({"fill": "#8bc34a","transition":"all 1s"});
					$(".buttonss").css({"background": "#8bc34a","transition":"all 1s"});
					$(".dropdown-content li>span").css({"color": "#8bc34a"});
					$( ".resume-work" ).removeClass( "hide" );
					$( "#submit-btn" ).removeClass( "blue darken-1 amber darken-3" ).addClass( "light-green darken-2" );
				}
				else{
					$('#message').attr("placeholder", "Enter problem description");
					$(".contact .social-icon path").css({"stroke": "#ffa000 ","transition":"all 1s"});
					$(".contact .social-icon text").css({"fill": "#ffa000 ","transition":"all 1s"});
					$(".contact .back-img path").css({"fill": "#ffa000","transition":"all 1s"});
					$(".buttonss").css({"background": "#ffa000","transition":"all 1s"});
					$(".dropdown-content li>span").css({"color": "#ffa000"});
					$( ".resume-work" ).addClass( "hide" );
					$( "#submit-btn" ).removeClass( "light-green darken-2 blue darken-1" ).addClass( "amber darken-3" );
				}
				$(function() {
					/*Materialize.updateTextFields();*/
				});
			});/*end contact form color change when select*/


			

			/*home page animations*/			

			/*------------------------------------------------------------------------------Managed*/
			$( ".Managed" ).mouseenter(function() {
				$(".sub-Managed").addClass("active");	
				$(".mang-serv-main").addClass("z_index-dept");			
			});
			$( ".mang-serv-main" ).mouseleave(function() {
				$(".sub-Managed").removeClass("active");
				$(".mang-serv-main").removeClass("z_index-dept");
			});
			/*------------------------------------------------------------------------------Mobility*/
			$( ".Mobility" ).mouseenter(function() {
				$(".sub-Mobility").addClass("active");	
				$(".mobility-main").addClass("z_index-dept");			
			});
			$( ".mobility-main" ).mouseleave(function() {
				$(".sub-Mobility").removeClass("active");
				$(".mobility-main").removeClass("z_index-dept");
			});
			/*------------------------------------------------------------------------------Security*/
			$( ".Security" ).mouseenter(function() {
				$(".sub-Security").addClass("active");	
				$(".security-main").addClass("z_index-dept");			
			});
			$( ".security-main" ).mouseleave(function() {
				$(".sub-Security").removeClass("active");
				$(".security-main").removeClass("z_index-dept");
			});
			/*------------------------------------------------------------------------------Analytics*/
			$( ".Analytics" ).mouseenter(function() {
				$(".sub-Analytics").addClass("active");	
				$(".analytics-main").addClass("z_index-dept");			
			});
			$( ".analytics-main" ).mouseleave(function() {
				$(".sub-Analytics").removeClass("active");
				$(".analytics-main").removeClass("z_index-dept");
			});
			/*------------------------------------------------------------------------------HANA*/
			$( ".HANA" ).mouseenter(function() {
				$(".sub-HANA").addClass("active");	
				$(".hana-main").addClass("z_index-dept");			
			});
			$( ".hana-main" ).mouseleave(function() {
				$(".sub-HANA").removeClass("active");
				$(".hana-main").removeClass("z_index-dept");
			});
			/*------------------------------------------------------------------------------Cloud*/
			$( ".Cloud" ).mouseenter(function() {
				$(".sub-Cloud").addClass("active");	
				$(".cloud-main").addClass("z_index-dept");			
			});
			$( ".cloud-main" ).mouseleave(function() {
				$(".sub-Cloud").removeClass("active");
				$(".cloud-main").removeClass("z_index-dept");
			});
			/*------------------------------------------------------------------------------ END*/



});/* end document*/