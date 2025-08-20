AOS.init({
	duration: 800,
	easing: 'ease',
	once: true,
	offset: 120
});

jQuery(function($) {
   
   'use strict';
   loader();
   languageSelector();
   siteMenuClone();
   mobileToggleClick();
   onePageNavigation();
   siteIstotope();
   portfolioItemClick();
   owlCarouselPlugin();
   floatingLabel();
   scrollWindow();
   counter();
   jarallaxPlugin();
   contactForm();
   stickyFillPlugin();
   animateReveal();

});

var siteIstotope = function() {
   var $container = $('#posts').isotope({
   itemSelector : '.item',
   isFitWidth: true
 });

 $(window).resize(function(){
   $container.isotope({
	 columnWidth: '.col-sm-3'
   });
 });
 
 $container.isotope({ filter: '*' });

 $('#filters').on( 'click', 'a', function(e) {
	 e.preventDefault();
   var filterValue = $(this).attr('data-filter');
   $container.isotope({ filter: filterValue });
   $('#filters a').removeClass('active');
   $(this).addClass('active');
 });

 $container.imagesLoaded()
 .progress( function() {
   $container.isotope('layout');
 })
 .done(function() {
	 $('.gsap-reveal-img').each(function() {
		   var html = $(this).html();
		   $(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
	   });

	 var controller = new ScrollMagic.Controller();

	 var revealImg = $('.gsap-reveal-img');

	 if ( revealImg.length ) {
		 var i = 0;
		   revealImg.each(function() {

			   var cover = $(this).find('.cover'),
				   revealContent = $(this).find('.reveal-content'),
				   img = $(this).find('.reveal-content img');


			   var tl2 = new TimelineMax();


			   setTimeout(function() {

				   tl2
					   tl2.set(img, {  scale: '2.0', autoAlpha: 1, })
					   .to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
						   tl2.set(revealContent, { autoAlpha: 1 });
						   tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
						   tl2.to(img, 2, { scale: '1.0', ease:Expo.easeOut }, '-=1.5');
					   } } )

			   }, i * 700);

			   

			   var scene = new ScrollMagic.Scene({
				   triggerElement: this,
				   duration: "0%",
				   reverse: false,
				   offset: "-300%",
			   })
			   .setTween(tl2)
			   .addTo(controller);

			   i++;

		   });
	   }
 })

 $('.js-filter').on('click', function(e) {
	 e.preventDefault();
	 $('#filters').toggleClass('active');
 });

}

var loader = function() {
   setTimeout(function() {
	   TweenMax.to('.loader-wrap', 1, { autoAlpha: 0, ease: Power4.easeInOut });
 }, 500); // Increased delay to 500ms for better clarity
 $(".loader-wrap").delay(400).fadeOut("slow");
}

// Language translations
const translations = {
  ro: {
	"menu": "Meniu",
	"nav.top": "Introducere",
	"nav.about": "Despre Mureș Carmeet",
	"nav.carmeets": "Car meet-uri",
	"nav.events": "Evenimente auto selecte",
	"nav.social": "Social media",
	"nav.contact": "Contact",
	"nav.menu-close": "Închide",
	"cover.header": "Meet-uri și evenimente auto private<br>în Târgu Mureș",
	"swipe-up": "Glisați în sus",
	"intro.header": "Introducere",
	"about.header": "Despre Mureș Carmeet",
	"about.info1": "Comunitatea Mureș Carmeet a luat naștere în 2023 la inițiativa formării unei comunități auto selecte în Târgu Mureș.",
	"about.info2": "Din 2023 până în prezent meet-urile sunt organizate periodic la un interval de 2 - 3 săptămâni în timpul sezonului cald, iar o dată pe lună în timpul sezonului rece, în diferite locații din oraș.",
	"meets.header": "Car meet-uri",
	"meets.info": "Car meet-urile organizate de comunitatea Mureș Carmeet sunt întâlniri auto private organizate în diferite locații din Târgu Mureș. Acestea sunt ocazii excelente pentru pasionații auto de a se întâlni pentru a socializa și a-și împărtăși pasiunea pentru automobile.",
	"events.header": "Evenimente auto selecte",
	"collab.header": "Colaboratori evenimente auto selecte",
	"events.info": "Evenimentele selecte sunt organizate doar în timpul sezonului cald, o dată pe lună, la una din locațiile colaboratorilor noștri.",
	"social.header": "Paginile oficiale de contact",
	"social.info": "Pentru a afla detaliile fiecărui meet, precum locația, data și ora meet-ului, este recomandată urmărirea paginii oficiale Mureș Carmeet de pe platforma preferată de socializare din cele de mai jos:",
	"social.bio1": "Meet-uri și evenimente auto locale private,",
	"social.bio2": "organizate în Târgu Mureș, România📍",
	"social.bio3": "începând din 2023",
	"social.insta-info": "Pe Instagram, meet-urile sunt anunțate la <span class=\"bold\">Private Story</span> pentru cei care urmăresc pagina și sunt incluși în lista de <span class=\"bold\">Close Friends</span>.",
	"social.fb-info": "Pe Facebook, meet-urile sunt anunțate pe <span class=\"bold\">Grupul Privat</span> pentru <span class=\"bold\">membrii grupului.</span>",
	"wapp.info": "În cazul în care nu folosiți aplicațiile <span class=\"bold\"><span class=\"wrap-icon icon-instagram\"></span> Instagram</span> sau <span class=\"bold\"> <span class=\"wrap-icon icon-facebook-square\"></span> Facebook</span>, ne puteți contacta pe WhatsApp pe butonul de mai sus <span class=\"bold\">sau</span> la completarea formularului de contact de mai jos, <span class=\"bold\">veți primi pe WhatsApp sau prin SMS</span> detaliile despre fiecare meet precum  locația, data și ora.",
	"contact.header": "Contact",
	"contact.info": "Pentru a primii detaliile fiecărui meet și eveniment precum locația, data și ora, este necesar să completați Prenumele, modelul mașinii și metoda de contact preferată din cele de mai jos:",
	"form.name": "Prenume*",
	"form.car-model": "Modelul mașinii*",
	"form.message": "Mesaj... (opțional)",
	"form.important": "Important: Este necesar să completați toate câmpurile marcate cu *.",
	"form.info": "Toate datele completate în formularul de mai sus sunt confidențiale și nu vor fi redistribuite, vândute sau postate în altă parte.",
	"send.button": "Trimite &nbsp;<span class=\"icon-send2\"></span>",
	// ...add all other keys for RO
  },
  en: {
	"menu": "Menu",
	"nav.top": "Introduction",
	"nav.about": "About Mureș Carmeet",
	"nav.carmeets": "Car meets",
	"nav.events": "Select Car events",
	"nav.social": "Social media",
	"nav.contact": "Contact",
	"nav.menu-close": "Close",
	"cover.header": "Private local car meets and events<br>in Târgu Mureș",
	"swipe-up": "Swipe up",
	"intro.header": "Introduction",
	"about.header": "About Mureș Carmeet",
	"about.info1": "The Mureș Carmeet community was founded in 2023 with the aim of creating a select car community in Târgu Mureș.",
	"about.info2": "Since 2023, the meets are organized periodically every 2 - 3 weeks during the warm season, and once a month during the cold season, in different locations around the city.",
	"meets.header": "Car meets",
	"meets.info": "The car meets organized by the Mureș Carmeet community are private car gatherings organized in different locations in Târgu Mureș. They are great opportunities for car enthusiasts to meet, socialize, and share their passion for cars.",
	"events.header": "Select car events",
	"collab.header": "Private car events collaborators",
	"events.info": "The select car events are organized only during the warm season, once a month, at one of our collaborators' locations.",
	"social.header": "Official contact pages",
	"social.info": "To find out the info of each meet like the location, date and time of the meet, it is recommended to Follow one of the official Mureș Carmeet page of your prefferd social media platform from the ones listed below:",
	"social.bio1": "Private local car meets and events,",
	"social.bio2": "based in Târgu Mureș, Romania📍",
	"social.bio3": "since 2023",
	"social.insta-info": "On Instagram, the meets are announced in the <span class=\"bold\">Private Story</span> for those who follow the page and are included in the <span class=\"bold\">Close Friends</span> list.",
	"social.fb-info": "On Facebook, the meets are announced in the <span class=\"bold\">Private Group</span> for <span class=\"bold\">members of the group.</span>",
	"wapp.info": "In case you do not use <span class=\"bold\">Instagram</span> or <span class=\"bold\">Facebook</span>, you can get in contact on WhatsApp via the button above <span class=\"bold\">or</span> fill out the contact form below, <span class=\"bold\">to be sent to you on WhatsApp or via SMS</span> informations about each meet such as the location, date and time.",
	"contact.header": "Contact",
	"contact.info": "To receive the details of each meet and event like the location, date and time, please provide your First Name, car model and preferred contact method from the ones listed below:",
	"form.name": "First Name*",
	"form.car-model": "Car model*",
	"form.message": "Message (optional)...",
	"form.important": "Important: It is required to fill in all fields marked with *.",
	"form.info": "All data completed in the form above is confidential and wont be redistributed, sold or posted anywhere else.",
	"send.button": "Send &nbsp;<span class=\"icon-send2\"></span>",
	// ...add all other keys for EN
  },
  hu: {
	"menu": "Menü",
	"nav.top": "Bevezetés",
	"nav.about": "Rólunk Mureș Carmeet",
	"nav.carmeets": "Autós találkozók",
	"nav.events": "Autós események",
	"nav.social": "Közösségi média",
	"nav.contact": "Kapcsolat",
	"nav.menu-close": "Bezárás",
	"cover.header": "Privát autós találkozók és események<br>Târgu Mureș-ben",
	"swipe-up": "Görgesd felfelé",
	"intro.header": "Bevezetés",
	"about.header": "Rólunk Mureș Carmeet",
	"about.info1": "A Mureș Carmeet közösség 2023-ban alakult azzal a céllal, hogy egy kiválasztott autós közösséget hozzon létre Târgu Mureș-ben.",
	"about.info2": "2023 óta a találkozókat időszakosan, 2-3 hetente szervezik a meleg évszakban, és havonta egyszer a hideg évszakban, a város különböző helyszínein.",
	"meets.header": "Autós találkozók",
	"meets.info": "A Mureș Carmeet közösség által szervezett autós találkozók privát autós összejövetelek, amelyeket Târgu Mureș különböző helyszínein szerveznek. Ezek nagyszerű lehetőségek az autórajongók számára, hogy találkozzanak, társasági életet éljenek és megosszák szenvedélyüket az autók iránt.",
	"events.header": "Kiválasztott autós események",
	"collab.header": "Privát autós események együttműködők",
	"events.info": "A kiválasztott autós eseményeket csak a meleg évszakban szervezik, havonta egyszer, az együttműködőink egyik helyszínén.",
	"social.header": "Hivatalos kapcsolattartó oldalak",
	"social.info": "A találkozók részleteinek, mint például a helyszín, dátum és idő megismeréséhez, javasoljuk, hogy kövesd a Mureș Carmeet hivatalos oldalát a számodra kedvelt közösségi média platformon az alábbiak közül:",
	"social.bio1": "Privát helyi autós találkozók és események,",
	"social.bio2": "Târgu Mureș-ben, Romániában📍",
	"social.bio3": "2023 óta",
	"social.insta-info": "Az Instagramon a találkozók a <span class=\"bold\">Private Story</span>-ban vannak bejelentve azok számára, akik követik az oldalt és szerepelnek a <span class=\"bold\">Close Friends</span> listában.",
	"social.fb-info": "A Facebookon a találkozók a <span class=\"bold\">Privát Csoportban</span> vannak bejelentve azok számára, akik <span class=\"bold\">tagjai a csoportnak.</span>",
	"wapp.info": "Ha nem használod az <span class=\"bold\">Instagram</span> vagy <span class=\"bold\">Facebook</span> alkalmazásokat, akkor a fenti gombon keresztül WhatsApp-on keresztül léphetsz kapcsolatba velünk <span class=\"bold\">vagy</span> a lenti kapcsolati űrlap kitöltésével, <span class=\"bold\">amelyen keresztül WhatsApp-on vagy SMS-ben</span> megkapod a találkozók részleteit, mint például a helyszín, dátum és idő.",
	"contact.header": "Kapcsolat",
	"contact.info": "A találkozók és események részleteinek, mint például a helyszín, időpont és idő, megismeréséhez kérjük, add meg a Keresztnevedet, autód típusát és az alábbiak közül a preferált kapcsolattartási módot:",
	"form.name": "Keresztnév*",
	"form.car-model": "Autó típusa*",
	"form.message": "Üzenet (opcionális)...",
	"form.important": "Fontos: Kérjük, töltsd ki az összes *-gal jelölt mezőt.",
	"form.info": "A fenti űrlapban megadott adatok bizalmasak, és nem kerülnek újra terjesztésre, eladásra vagy máshol közzétételre.",
	"send.button": "Küldés &nbsp;<span class=\"icon-send2\"></span>",
	// ...add all other keys for HU
  }
};

// Default language constant for easier maintenance
const DEFAULT_LANG = 'ro';

/**
 * Sets the website language and updates all elements with translations.
 * @param {string} lang - The language code to set (e.g., 'ro', 'en', 'hu').
 * Side effects: Updates localStorage, changes document lang attribute, and modifies DOM elements with [data-i18n].
 */
function setLanguage(lang) {

  if (!translations[lang]) {
	// If language is not supported, fallback to default
	lang = DEFAULT_LANG;
  }
  localStorage.setItem('selectedLang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
	const key = el.getAttribute('data-i18n');
	if (translations[lang] && translations[lang][key]) {
	  el.innerHTML = translations[lang][key];
	} else {
	  console.warn(`Missing translation for key: "${key}" in language: "${lang}"`);
	  el.innerHTML = `Translation missing: ${key}`; // user-friendly fallback
	}
  });
}

// Language selector logic
// All language selection event listeners are handled in languageSelector()

// On page load, set language if already selected
window.addEventListener('DOMContentLoaded', function() {
  let lang = localStorage.getItem('selectedLang');
  if (!lang || !translations[lang]) {
	lang = DEFAULT_LANG;
	localStorage.setItem('selectedLang', lang);
  }
  setLanguageAndUpdateNav(lang);
  $("#preloader-overlay").delay(150).fadeOut("slow");
});

function languageSelector() {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
	btn.addEventListener('click', function() {
	  const lang = btn.dataset.lang;
	  if (lang && translations[lang]) {
		setLanguageAndUpdateNav(lang);
		$("#preloader-overlay").delay(150).fadeOut("slow");
		// Optionally, reload or update content here
	  }
	});
  });
}

// Add this after your languageSelector() definition

function updateNavLangSelector() {
  const lang = localStorage.getItem('selectedLang') || DEFAULT_LANG;
  let flag = "images/Romanian.png";
  if (lang === "en") { flag = "images/English.png"; }
  if (lang === "hu") { flag = "images/Magyar.png"; }
//   document.getElementById("current-lang-label").textContent = label;
  document.getElementById("current-lang-flag").src = flag;
//   document.getElementById("current-lang-flag").alt = label;
}

// Show overlay when nav language button is pressed
document.addEventListener("DOMContentLoaded", function() {
  updateNavLangSelector();
  document.getElementById("current-lang-btn").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("preloader-overlay").style.display = "flex";
  });
});

// Update nav selector after language change
// Wrapper function to extend setLanguage behavior without overwriting
function setLanguageAndUpdateNav(lang) {
  setLanguage(lang);
  updateNavLangSelector();
}

// Move the following block into siteMenuClone function for proper initialization
var siteMenuClone = function() {
  $('.js-clone-nav').each(function() {
	var $this = $(this);
	$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-inner');
  });

  var counter = 0;
  $('.unslate_co--site-mobile-menu .has-children').each(function(){
	var $this = $(this);

	$this.prepend('<span class="arrow-collapse collapsed">');

	$this.find('.arrow-collapse').attr({
	  'data-toggle' : 'collapse',
	  'data-target' : '#collapseItem' + counter,
	});

	$this.find('> ul').attr({
	  'class' : 'collapse',
	  'id' : 'collapseItem' + counter,
	});

	counter++;
  });

  $('body').on('click', '.arrow-collapse', function(e) {
	var $this = $(this);
	if ( $this.closest('li').find('.collapse').hasClass('show') ) {
	  $this.removeClass('active');
	} else {
	  $this.addClass('active');
	}
	e.preventDefault();  
  });

  $(window).resize(function() {
	var $this = $(this),
		w = $this.width();

	if ( w > 768 ) {
	  if ( $('body').hasClass('offcanvas') ) {
		$('body').removeClass('offcanvas');
	  }
	}
  });

  $('.js-burger-toggle-menu').click(function(e){
	e.preventDefault();
	if ( $('body').hasClass('offcanvas') ) {
	  $('body').removeClass('offcanvas');
	  $('.js-burger-toggle-menu').removeClass('open');
	} else {
	  $('body').addClass('offcanvas');	
	  $('.js-burger-toggle-menu').addClass('open');
	}
  });
};




// var siteIstotope = function() {


	 
   
// }

var owlCarouselPlugin = function() {

   $('.testimonial-slider').owlCarousel({
   center: false,
   items: 1,
   loop: true,
   stagePadding: 20,
	 margin: 10,
   smartSpeed: 2000,
   autoplay: true,
   autoplayHoverPause: true,
   dots: true,
   nav: true,
   navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

   responsive:{
	   400:{
		 stagePadding: 20,
				 margin: 10,
	   },
	   600:{
		 stagePadding: 100,
				 margin: 50,
	   }
   }
   });
   owlSingleSlider();

   if ( $('.logo-slider').length ) {

	   $('.logo-slider').owlCarousel({
		   center: false,
	   loop: true,
	   stagePadding: 0,
	   margin: 0,
	   smartSpeed: 1000,
	   autoplay: true,
	   autoplayHoverPause: true,
	   dots: false,
	   nav: false,
	   responsive:{
		   400:{
			 items: 2
		   },
		   768:{
			   items: 3
		   },
		   1000:{
			   items: 5
		   }
	   }
	  });
   }

};

var owlSingleSlider = function () {
   if ( $( '.single-slider' ).length ) {
	   $('.single-slider').owlCarousel({
	   center: false,
	   items: 1,
	   loop: true,
	   stagePadding: 0,
	   margin: 0,
	   smartSpeed: 1500,
	   autoplay: true,
	   autoplayHoverPause: true,
	   dots: true,
	   nav: true,
	   navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

	   responsive:{
		 400:{
		   stagePadding: 0,
				   margin: 0,
		 },
		 600:{
		   stagePadding: 0,
				   margin: 0,
		 }
	   }
	   });
   }
}

var floatingLabel = function () {
   $('.form-control').on('input', function() {
	 var $field = $(this).closest('.form-group');
	 if (this.value) {
	   $field.addClass('field--not-empty');
	 } else {
	   $field.removeClass('field--not-empty');
	 }
   });
};



// scroll
var scrollWindow = function() {
   var lastScrollTop = 0;
   $(window).scroll(function(event){
	   var $w = $(this),
			   st = $w.scrollTop(),
			   navbar = $('.unslate_co--site-nav');
			   // sd = $('.js-scroll-wrap');

	   if (st > 150) {
		   if ( !navbar.hasClass('scrolled') ) {
			   navbar.addClass('scrolled');	
		   }
	   } 
	   if (st < 150) {
		   if ( navbar.hasClass('scrolled') ) {
			   navbar.removeClass('scrolled sleep');
		   }
	   } 
	   if ( st > 350 ) {
		   if ( !navbar.hasClass('awake') ) {
			   navbar.addClass('awake');	
		   } 

		   // hide / show on scroll
		   if (st > lastScrollTop){
		 // downscroll code
		 navbar.removeClass('awake');	
		 navbar.addClass('sleep');	
		  } else {
		 // upscroll code
		 navbar.addClass('awake');	
		  }
		  lastScrollTop = st;
		   

	   }
	   if ( st < 350 ) {
		   if ( navbar.hasClass('awake') ) {
			   navbar.removeClass('awake');
			   navbar.addClass('sleep');
		   }
	   }

  

   });

};


var counter = function() {
   
   $('.section-counter').waypoint( function( direction ) {

	   if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

		   var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
		   $(this.element).find('.number-counter').each(function(){
			   var $this = $(this),
				   num = $this.data('number');
			   $this.animateNumber(
				 {
				   number: num,
				   numberStep: comma_separator_number_step
				 }, 
				 {
					 easing: 'swing',
				   duration: 3000
				 }
			   );
		   });
		   
	   }

   } , { offset: '95%' } );

};


var mobileToggleClick = function() {
   $('.js-menu-toggle').click(function(e) {

	   e.preventDefault();

	 if ( $('body').hasClass('offcanvas') ) {
		 $('body').removeClass('offcanvas');
		 $('.js-menu-toggle').removeClass('active');
		 if ( $('.js-burger-toggle-menu').length ) {
			 $('.js-burger-toggle-menu').removeClass('open');
		 }
	 } else {
		 $('body').addClass('offcanvas');	
		 $('.js-menu-toggle').addClass('active');
		 if ( $('.js-burger-toggle-menu').length ) {
			 $('.js-burger-toggle-menu').addClass('open');
		 }
	 }


 });

 // click outisde offcanvas
   $(document).mouseup(function(e) {
   var container = $(".unslate_co--site-mobile-menu");
   if (!container.is(e.target) && container.has(e.target).length === 0) {
	 if ( $('body').hasClass('offcanvas') ) {
			   $('body').removeClass('offcanvas');
			   $('body').find('.js-menu-toggle').removeClass('active');

			   $('body').find('.js-burger-toggle-menu').removeClass('open');
		   }
   }
   }); 
};



// navigation
var onePageNavigation = function() {
 var navToggler = $('.site-menu-toggle');
	$("body").on("click", ".unslate_co--site-nav .site-nav-ul li a[href^='#'], .smoothscroll[href^='#'], .unslate_co--site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
   
   e.preventDefault();

   var $body = $('body');
   if ( $body.hasClass('offcanvas')  ) {
	   $body.removeClass('offcanvas');
	   $('body').find('.js-burger-toggle-menu').removeClass('open');
   }

   var hash = this.hash;
   
	 $('html, body').animate({
	   scrollTop: $(hash).offset().top
	 }, 1000, 'easeInOutExpo');

 });

};


// load ajax page
var portfolioItemClick = function() {
   $('.ajax-load-page').on('click', function(e) {
	   
	   var id = $(this).data('id'),
		   href = $(this).attr('href');

	   if ( $('#portfolio-single-holder > div').length ) {
		   $('#portfolio-single-holder > div').remove();
	   } 

	   TweenMax.to('.loader-portfolio-wrap', 1, { top: '-50px', autoAlpha: 1, display: 'block', ease: Power4.easeOut });

	   $('html, body').animate({
	   scrollTop: $('#portfolio-section').offset().top - 50
	   }, 700, 'easeInOutExpo', function() {
	   });
	   
	   setTimeout(function(){
		   loadPortfolioSinglePage(id, href);
	   }, 100);

	   e.preventDefault();

   });

   // Close
   $('body').on('click', '.js-close-portfolio', function() {

	   setTimeout(function(){
		   $('html, body').animate({
		   scrollTop: $('#portfolio-section').offset().top - 50
		   }, 700, 'easeInOutExpo');
	   }, 200);

	   TweenMax.set('.portfolio-wrapper', { visibility: 'visible', height: 'auto' });
	   TweenMax.to('.portfolio-single-inner', 1, { marginTop: '50px', opacity: 0,  display: 'none', onComplete() {
		   TweenMax.to('.portfolio-wrapper', 1, { marginTop: '0px', autoAlpha: 1, position: 'relative' });

	   } });
	   
   });
};

$(document).ajaxStop(function(){
   setTimeout(function(){
	   TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
   }, 400);
});

var loadPortfolioSinglePage = function(id, href) {
   $.ajax({
	   url: href,
	   type: 'GET',
	   success: function(html) {

		   TweenMax.to('.portfolio-wrapper', 1, { marginTop: '50px', autoAlpha: 0, visibility: 'hidden', onComplete() {
			   TweenMax.set('.portfolio-wrapper', { height: 0 });
		   } })

		   var pSingleHolder = $('#portfolio-single-holder');
		   
		   var getHTMLContent = $(html).find('.portfolio-single-wrap').html();

		   pSingleHolder.append(
			   '<div id="portfolio-single-'+id+
			   '" class="portfolio-single-inner"><span class="unslate_co--close-portfolio js-close-portfolio d-flex align-items-center"><span class="close-portfolio-label">Back to Portfolio</span><span class="icon-close2 wrap-icon-close"></span></span>' + getHTMLContent + '</div>'
		   );

		   setTimeout(function() {
			   owlSingleSlider();
		   }, 10);

		   setTimeout(function() {
			   TweenMax.set('.portfolio-single-inner', { marginTop: '100px', autoAlpha: 0, display: 'none' });
			   TweenMax.to('.portfolio-single-inner', .5, { marginTop: '0px', autoAlpha: 1, display: 'block', onComplete() {

				   TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
			   } });
		   }, 700 );
	   }
   });

   return false;

};

var jarallaxPlugin = function() {
   $('.jarallax').jarallax({
   speed: 0.2,
   type: 'scroll-opacity'
   });
   jarallax(document.querySelectorAll('.jarallax-video'), {
   speed: 0.2,
   videoSrc: 'mp4:images/vid1.mp4',
   videoStartTime: 0,
   videoEndTime: 70,
   });
};

var contactForm = function() {
   if ($('#contactForm').length > 0 ) {
	   $( "#contactForm" ).validate( {
		   rules: {
			   name: "required",
			   email: {
			   	email: true
			   }
		   },
		   messages: {
			   name: "Vă rugăm introduceți un nume. <br> Please enter a name.",
			   email: "Please enter a valid email address"
		   },
		   errorElement: 'span',
		   errorLabelContainer: '.form-error',
		   /* submit via ajax */
		   submitHandler: function(form) {		
			   var $submit = $('.submitting'),
				   waitText = 'Submitting...';

			   $.ajax({   	
				 type: "POST",
				 url: "php/send-email.php",
				 data: $(form).serialize(),

				 beforeSend: function() { 
					 $submit.css('display', 'block').text(waitText);
				 },
				 success: function(msg) {
				  if (msg == 'OK') {
					  $('#form-message-warning').hide();
					   setTimeout(function(){
						  $('#contactForm').fadeOut();
					  }, 1000);
					   setTimeout(function(){
						  $('#form-message-success').fadeIn();   
					  }, 1400);
					  
				   } else {
					  $('#form-message-warning').html(msg);
					   $('#form-message-warning').fadeIn();
					   $submit.css('display', 'none');
				   }
				 },
				 error: function() {
					 $('#form-message-warning').html("Something went wrong. Please try again.");
					$('#form-message-warning').fadeIn();
					$submit.css('display', 'none');
				 }
			 });    		
			 }
		   
	   } );
   }
};

var stickyFillPlugin = function() {
   var elements = document.querySelectorAll('.unslate_co--sticky');
   Stickyfill.add(elements);
};

var animateReveal = function() {


   var controller = new ScrollMagic.Controller();
   
   var greveal = $('.gsap-reveal');

   // gsap reveal
   $('.gsap-reveal').each(function() {
	   $(this).append('<span class="cover"></span>');
   });
   if ( greveal.length ) {
	   var revealNum = 0;
	   greveal.each(function() {
		   var cover = $(this).find('.cover');

		   var tl = new TimelineMax();

		   setTimeout(function() {
			   tl
				   .fromTo(cover, 2, { skewX: 0 }, { xPercent: 101, transformOrigin: "0% 100%", ease:Expo.easeInOut })
		   }, revealNum * 0);
		   
		   var scene = new ScrollMagic.Scene({
			   triggerElement: this,
			   duration: "0%",
			   reverse: false,
			   offset: "-300%",
		   })
		   .setTween(tl)
		   .addTo(controller);

		   revealNum++;

	   });
   }

   // gsap reveal hero
   $('.gsap-reveal-hero').each(function() {
	   var html = $(this).html();
	   $(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
   });
   var grevealhero = $('.gsap-reveal-hero');

   if ( grevealhero.length ) {
	   var heroNum = 0;
	   grevealhero.each(function() {

		   var cover = $(this).find('.cover'),
			   revealContent = $(this).find('.reveal-content');

		   var tl2 = new TimelineMax();

		   setTimeout(function() {

			   tl2
				   .to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
					   tl2.set(revealContent, { x: 0 });
					   tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
				   } } )
		   }, heroNum * 0 );

		   var scene = new ScrollMagic.Scene({
			   triggerElement: this,
			   duration: "0%",
			   reverse: false,
			   offset: "-300%",
		   })
		   .setTween(tl2)
		   .addTo(controller);

		   heroNum++;
	   });
   }

}

