
$(document).ready(function() {
	
	$('#header').hide();
	
	$('body').css("overflow", "hidden");
	$('.main_images div').hide();
	$('.main_text div').hide();

	$(window).scroll(function(){
		myNav = $(document).scrollTop();
		if (myNav<=20){
			$('#header').hide(500);
			$('body').css("overflow", "hidden");}
	});
	

/*++++++++++++++++++++++++++++++++++++++++++++   HOME   +++++++++++++++++++++*/		
	  
	  
    $('#home_nav').click(function(){
		$('#header').fadeOut(1500);
		$('#photos_nav').removeClass('photos_active')
		$('#blog_nav').removeClass('blog_active')
		$('#contact_nav').removeClass('contact_active')
	});

  
  	$('#photos_nav1 a').click(function(){
		$('#header').fadeIn(2000)
		$('#photos_nav').addClass('photos_active')
		$('#blog_nav').removeClass('blog_active')
		$('#contact_nav').removeClass('contact_active')
	});
	
	
	$('#photos_nav').click(function(){
		$(this).addClass('photos_active')
		$('#blog_nav').removeClass('blog_active')
		$('#contact_nav').removeClass('contact_active')
	});
		
	$('#blog_nav1 a').click(function(){
		$('#header').fadeIn(2000)
		$('#blog_nav').addClass('blog_active');
		$('#photos_nav').removeClass('photos_active')
		$('#contact_nav').removeClass('contact_active')
	});
	
	$('#blog_nav').click(function(){
		$(this).addClass('blog_active')
		$('#photos_nav').removeClass('photos_active')
		$('#contact_nav').removeClass('contact_active')
	});
	
	$('#contact_nav1 a').click(function(){
		$('#header').fadeIn(2000)
		$('#contact_nav').addClass('contact_active')
		$('#blog_nav').removeClass('blog_active')
		$('#photos_nav').removeClass('photos_active')
	});

	$('#contact_nav').click(function(){
		$(this).addClass('contact_active')
		$('#photos_nav').removeClass('photos_active')
		$('#blog_nav').removeClass('blog_active')
	});	
	
	
	$('#nav li a').click(function(){
		$('.main_images div').hide(5);
		$('.main_text div').hide(5);
		});
		

/*++++++++++++++++++++++++++++++++++++++++++++   photos   +++++++++++++++++++++*/

	$('#container_gushan').click(function() {
		$('#image_gushan, #description_gushan').toggle(1000);
		$('#image_langqi,#image_wuyi,#image_taimu, #image_biye,#description_langqi, #description_taimu, #description_wuyi, #description_biye').hide();
	});
	
		$('#container_langqi').click(function() {
		$('#image_langqi, #description_langqi').toggle(1000);
		$('#image_gushan, #description_gushan, #image_taimu,#image_wuyi, #image_biye,#description_taimu, #description_wuyi, #description_biye').hide();
	});
		
	$('#container_taimu').click(function() {
			$('#image_taimu, #description_taimu').toggle(1000);
			$('#image_gushan, #description_gushan, #image_langqi,#image_wuyi, #image_biye,#description_langqi, #description_wuyi, #description_biye').hide();
		});
		
				
    $('#container_wuyi').click(function() {
			$('#image_wuyi, #description_wuyi').toggle(1000);
			$('#image_gushan, #description_gushan, #image_taimu,#image_langqi, #image_biye,#description_taimu, #description_langqi, #description_biye').hide();
		});
		
     $('#container_biye').click(function() {
			$('#image_biye, #description_biye').toggle(1000);
			$('#image_gushan, #description_gushan, #image_taimu,#image_langqi, #image_wuyi,#description_taimu, #description_langqi, #description_wuyi').hide();
		});
		
	 $('#image_gushan').click(function() {
		 $('#image_gushan, #description_gushan').toggle(1000);
		 });
		 
      $('#image_langqi').click(function() {
		 $('#image_langqi, #description_langqi').toggle(1000);
		 });
		 
	 $('#image_taimu').click(function() {
		 $('#image_taimu, #description_taimu').toggle(1000);
		 });
	 
	 $('#image_wuyi').click(function() {
		 $('#image_wuyi, #description_wuyi').toggle(1000);
		 });
	 
	 $('#image_biye').click(function() {
		 $('#image_biye, #description_biye').toggle(1000);
		 });
/*++++++++++++++++++++++++++++++++++++++++++++   POSTER   +++++++++++++++++++++*/


	

	$('#container_man').click(function() {
			$('#image_man, #description_man').toggle(1000)
			$('#image_lighthouse, #image_road, #image_instruments, #image_raa_tour, #image_lady, #image_oscar, #description_oscar, #description_lighthouse, #description_road, #description_instruments, #description_lady, #description_raa_tour').hide();
		});
		
	$('#container_oscar').click(function() {
			$('#image_oscar, #description_oscar').toggle(1000)
			$('#image_lighthouse, #image_road, #image_instruments, #image_raa_tour, #image_lady, #description_lighthouse, #description_road, #description_instruments, #description_lady, #description_raa_tour').hide();
		});
/*++++++++++++++++++++++++++++++++++++++++++++   BLOG   +++++++++++++++++++++*/	 

	$('#container_QQ').click(function() {
			$('#image_QQ, #description_QQ').toggle(1000);
			$('#image_csdn, #description_csdn').hide();
		});
	
	
	$('#container_csdn').click(function() {
			$('#image_csdn, #description_csdn').toggle(1000);
			$('#image_QQ, #description_QQ').hide();
		});
		
	
	$('#image_QQ').click(function() {
		 $('#image_QQ, #description_QQ').toggle(1000);
		 });	
	
	$('#image_csdn').click(function() {
		 $('#image_csdn, #description_csdn').toggle(1000);
		 });
		






/*++++++++++++++++++++++++++++++++++++++++++++   CONTACT   +++++++++++++++++++++*/
		 
	 
	
});