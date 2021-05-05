$(function(){



	// Меню навигаций основное
	
	$('.menu__btn').on('click', function(){
		$('.form').toggleClass('form--active');
		$('.body').toggleClass('body--hiden');
	});
	$('.menu__btn').on('click', function(){
		$('.menu__btn').toggleClass('btn--close');
	});	
	//кнопка с буквами при скролле

	$('.content__nav-btn').on('click', function(){
		$('.content__nav').toggleClass('nav--active');
	});



	//Присвоение класса при скролле 


	window.addEventListener('scroll', () =>{
  		let scrollDIstance = window.scrollY;

  		// console.log(scrollDIstance)

  		document.querySelectorAll('.content__info-href').forEach((el, i)=>{
  			if(el.offsetTop - document.querySelector('.content__nav').clientHeight <=  scrollDIstance){
  				document.querySelectorAll('.content__nav a').forEach((el)=>{
  					if (el.classList.contains('anchor-activ')) {
  						el.classList.remove('anchor-activ');
  					}  					
  				});

  				// console.log(i)
  				document.querySelectorAll('.content__nav-link')[i].classList.add('anchor-activ');
  			}
  		});

  		document.querySelectorAll('.content__info-anchor').forEach((el, i)=>{
  			if(el.offsetTop - document.querySelector('.content__info-anchor').clientHeight <= 320 + scrollDIstance){
  				document.querySelectorAll('.content__info-anchor').forEach((el)=>{
  					if (el.classList.contains('anchor-activ')) {
  						el.classList.remove('anchor-activ');
  					}  					
  				});
  				document.querySelectorAll('.content__info-anchor')[i].classList.add('anchor-activ');
  			}
  		});

  		//index begin war 

  		document.querySelectorAll('.begin-vat__box-info-bg').forEach((el, i)=>{
  			if(el.offsetTop - document.querySelector('.begin-vat__box-info-bg').clientHeight <= -100 + scrollDIstance){
  				document.querySelectorAll('.begin-vat__box-info-bg').forEach((el)=>{
  					if (el.classList.contains('activ--begin')) {
  						el.classList.remove('activ--begin');
  					}  					
  				});
  				document.querySelectorAll('.begin-vat__box-info-bg')[i].classList.add('activ--begin');
  			}
  		});

	});

	//Меню алфавита 

	$(window).scroll(function() {
	let height = $(window).scrollTop();

     /*Если сделали скролл на 100px задаём новый класс для header*/
	if(height > 100){
	$('.content__nav-btn').addClass('btn--active');
	} else{
     /*Если меньше 100px удаляем класс для header*/
	$('.content__nav-btn').removeClass('btn--active');
	}

	 /*Если сделали скролл на 100px задаём новый класс для header*/
	if(height > 100){
	$('.content__nav').addClass('nav--off');
	} else{
     /*Если меньше 100px удаляем класс для header*/
	$('.content__nav').removeClass('nav--off nav--active');
	}
	});





});