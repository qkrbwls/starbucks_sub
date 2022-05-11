(function($, window){

    var starBucks = {
          init: function(){
              this.header();
              this.section1();
              this.section2Notice();  
              this.section2Slide();   
              this.section4();
              this.section5();
              this.section6();
              this.section7();
              this.section8();
              this.goTop();
              this.quickMenu();
          },
          header:function(){

              $('.berger-btn').on({
                click: function(){
                    $('#mobileNav').addClass('addMobile');
                    $('.mobile-container').stop().animate({left:0},600);
                }
              });

              $(window).resize(function(){
                if($(window).width()>960){

                  if(t==false){
                    t=true 
                    $('.mobile-close').trigger('click');
                   }
                  }
                  else{ 
                    t=false;
                }
              });

              function mobileNavfn(){
                $('.mobile-container').stop().animate({left:110+'%'},300, function(){
                  $('#mobileNav').removeClass('addMobile'); 
              });
            }

              $('.mobile-close').on({
                click:function(){
                  mobileNavfn();
              
                }
              });

              $('.mobile-container li a').on({ 
                click:function(){
                  $(this).toggleClass('addMobile');
                  $(this).next('div').slideToggle(300);
                  $('.mobile-container li a.none-sub').removeClass('addMobile');

                }
              });

              $('.find-btn').on({
                  click: function(){
                      $('.find-box').toggleClass('addInput');
                  }
              });

              $('.main-btn').on({
                  mouseenter: function(){
                    $('.main-btn').removeClass('addCurrent');
                    $(this).addClass('addCurrent');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(600,'easeOutExpo');
                  },
                  focusin :function(){ 
                    $('.main-btn').removeClass('addCurrent');
                    $(this).addClass('addCurrent');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(600,'easeOutExpo');
                  }
              });

              $('#nav').on({
                  mouseleave: function(){
                    $('.main-btn').removeClass('addCurrent');
                    $('.sub').stop().slideUp(600,'easeOutExpo');
                  }
              });
          },

          section1: function(){
             function ani(){
                $('.img').eq(0).stop().animate({opacity:1},600, function(){
                    $('.img').eq(1).stop().animate({opacity:1},600, function(){
                        $('.img').eq(2).stop().animate({opacity:1},600, function(){
                            $('.img').eq(3).stop().animate({opacity:1},600, function(){
                                $('.img').eq(4).stop().animate({opacity:1},600);
                            });
                        });
                    });
                });
             }
             setTimeout(ani, 600);
          },

          section2Notice: function(){
            var cnt = 0;

                function mainSlide(){
                    $('.notice')                   .css({zIndex:1}).stop().animate({top:24},0);
                    $('.notice').eq(cnt==0?4:cnt-1).css({zIndex:2}).stop().animate({top: 0},0);
                    $('.notice').eq(cnt)           .css({zIndex:3}).stop().animate({top:24},0).animate({top:0},1000);
                }

                function nextCount(){
                    cnt++; 
                    if(cnt>4){cnt=0}
                    mainSlide();
                }

                function autoTimer(){
                    setInterval(nextCount, 3000);
                }

                setTimeout(autoTimer, 100);
          },

          section2Slide: function(){
              var cnt = 0;
              var setId = null;
              var winW = $(window).innerWidth()*0.9;   
                
                function resizeFn(){

                    if( $(window).innerWidth()<=819 ){
                      winW = $(window).innerWidth()*0.9;
                    }
                    else{ 
                      winW = 819;
                    }
                    
                    $('.slide').css({width: winW });
                    $('.slide-wrap').stop().animate({left:-winW*cnt}, 0);
                }
                resizeFn();


                $(window).resize(function(){
                    resizeFn();
                });

                  function mainSlide(){
                     $('.slide-wrap').stop().animate({left:-winW*cnt}, 600, function(){
                         if(cnt>2){cnt=0}
                         if(cnt<0){cnt=2}
                         $('.slide-wrap').stop().animate({left:-winW*cnt}, 0);
                         $('.slide').removeClass('addCurrent');         
                         $('.slide').eq(cnt+1).addClass('addCurrent'); 
                     });
                     pageEvent();
                  }

                  function nextCount(){
                    cnt++;
                    mainSlide();
                  }

                  function prevCount(){
                    cnt--;
                    mainSlide();
                  }

                  function autoTimer(){
                    setId = setInterval(nextCount, 3000);
                  }
               
                  function pageEvent(){
                    $('.page-btn')        .children().attr('src','./images/main_prom_off.png')
                    $('.page-btn').eq(cnt==3?0:cnt).children().attr('src','./images/main_prom_on.png')

                  }

                 $('.page-btn').each(function(idx){
                    $(this).on({
                      click: function(e){
                        e.preventDefault();
                        cnt = idx;
                        mainSlide();
                        stopFn() 
                      }
                    });
                 });

                  function stopFn(){
                    $('.play-btn').children().attr('src','./images/main_prom_play.png');
                    $('.play-btn').removeClass('on'); 

                    clearInterval(setId);
                  }
                  function playFn(){
                    $('.play-btn').children().attr('src','./images/main_prom_stop.png');
                    $('.play-btn').addClass('on');  

                    autoTimer();
                  }

                   $('.play-btn').on({
                     click: function(e){
                       e.preventDefault();

                          if( $(this).hasClass('on') ){ 
                            stopFn();
                          }
                          else{
                            playFn();
                          }
                     }
                   });
                    
                   $('.next-btn').on({
                     click: function(e){
                       e.preventDefault();
                       stopFn(); 
                       nextCount();
                     }
                   });

                   $('.prev-btn').on({
                    click: function(e){
                      e.preventDefault();
                      stopFn(); 
                      prevCount();
                    }
                  });

                  $('.promotion-btn').on({
                    click: function(e){
                      e.preventDefault();

                      if( $(this).hasClass('close')  ){ 
                        $('#slide').stop().slideDown(600);
                        $(this).removeClass('close');
                        playFn();
                      }
                      else{ 
                        $('#slide').stop().slideUp(600);
                        $(this).addClass('close');
                        stopFn();
                        cnt=0;
                        mainSlide(); 
                      }
                      
                    }
                  });

                  $('.slide-wrap').on({
                    mouseenter: function(e){
                      e.preventDefault();
                      stopFn();
                    },
                    mouseleave: function(e){
                      e.preventDefault();
                      playFn();
                    }
                  });
          },
         
          section4: function(){

              $(window).scroll(function(){

                  if( $(window).scrollTop() == 0 ){
                    $('#section4').removeClass('addAni');
                  }

                  if( $(window).scrollTop() > 500 ){
                      $('#section4').addClass('addAni');
                  }

              });
          },

          section5: function(){
              var sec3Top = $('#section3').offset().top-200;

                  $(window).scroll(function(){

                      if( $(window).scrollTop() == 0 ){
                        $('#section5').removeClass('addFadein');
                      }

                      if( $(window).scrollTop() >= sec3Top ){
                        $('#section5').addClass('addFadein');
                      }
                  });

          },

          section6: function(){
              var sec4Top = $('#section4').offset().top;

                  $(window).scroll(function(){

                      if( $(window).scrollTop() == 0 ){
                          $('#section6').removeClass('addAni')
                      }
                      
                      if( $(window).scrollTop() >= sec4Top ){
                          $('#section6').addClass('addAni')
                      }

                  });
          },

          section7: function(){
            var sec6Top = $('#section6').offset().top-200;

                $(window).scroll(function(){

                    if( $(window).scrollTop() == 0 ){
                        $('#section7').removeClass('addFade')
                    }
                    
                    if( $(window).scrollTop() >= sec6Top ){
                        $('#section7').addClass('addFade')
                    }

                });
          },

          section8: function(){
            var sec6Top = $('#section6').offset().top+200;

                $(window).scroll(function(){
                    if( $(window).scrollTop() == 0 ){
                        $('#section8').removeClass('addAni')
                    }
                    if( $(window).scrollTop() >= sec6Top ){
                        $('#section8').addClass('addAni')
                    }
                });

                //반응형
                var leftW=null;
                var leftH=null;

                function leftResize(){

                  winW = $(window).innerWidth();          
                  if( winW <= 960 ){    
                    leftW = winW * 0.38125;                 
                    leftH = leftW * 0.85246; 
                  }
                  else{
                    leftW = 366;
                    leftH = 312;
                  }
                  $('#section8 .left').css({ width:leftW, height:leftH });

                }
                leftResize();

                $(window).resize(function(){
                  leftResize();
                });
          },     

          goTop: function(){
            
            $('.go-top').stop().fadeOut(1000);

            $(window).scroll(function(){
                if( $(window).scrollTop() >=100 ){
                    $('.go-top').stop().fadeIn(1000);
                }
                else{
                    $('.go-top').stop().fadeOut(1000);
                }
            });
          },

          quickMenu: function(){
              var quicTop1 = ($(window).height() - 96)/2;
              var quicTop2 = 150;
                  
                  function quickMenuFn(){
                    $('.quick-menu').stop().animate({top: $(window).scrollTop() + quicTop2 }, 600, "easeOutExpo");
                  }                               
              
                  quickMenuFn();

              $(window).scroll(function(){
                  quickMenuFn();
              });
          }
    }  
    
    starBucks.init();  


})(jQuery, window);