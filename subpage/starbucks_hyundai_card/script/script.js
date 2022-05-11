(function($){
var hyundaiCard = {
    init:function(){
        this.section1();
        this.section2();
        this.section3();
        this.section4();
        this.section5();

    },
    section1:function(){

    },
    section2:function(){
        var imgSrc = 'off';
        $('.event01-btn').on({
            click:function(event){
                event.preventDefault();
                $(this).next().stop().slideToggle(300);
                
                if(imgSrc=='off'){
                    imgSrc='on';
                }
                else{
                    imgSrc='off';
                }

                $(this).children().attr('src','./images/plcc_211124_visual3_'+ imgSrc +'_pc.jpg');
            }
        });

    },
    section3:function(){
        var imgSrc = 'off';
        $('.event02-btn').on({
            click:function(event){
                event.preventDefault();
                $(this).next().stop().slideToggle(300);
                
                if(imgSrc=='off'){
                    imgSrc='on';
                }
                else{
                    imgSrc='off';
                }

                $(this).children().attr('src','./images/plcc_211124_visual7_'+ imgSrc +'_pc.jpg');
            }
        });
        var imgSrc = 'off';
        $('.event03-btn').on({
            click:function(event){
                event.preventDefault();
                $(this).next().stop().slideToggle(300);
                
                if(imgSrc=='off'){
                    imgSrc='on';
                }
                else{
                    imgSrc='off';
                }

                $(this).children().attr('src','./images/plcc_211124_visual10_'+ imgSrc +'_pc.jpg');
            }
        });
        var imgSrc = 'off';
        $('.event04-btn').on({
            click:function(event){
                event.preventDefault();
                $(this).next().stop().slideToggle(300);
                
                if(imgSrc=='off'){
                    imgSrc='on';
                }
                else{
                    imgSrc='off';
                }

                $(this).children().attr('src','./images/plcc_211124_visual13_'+ imgSrc +'_pc.jpg');
            }
        });

    },
    section4:function(){
        var imgSrc = 'off';
        $('.event05-btn').on({
            click:function(event){
                event.preventDefault();
                $(this).next().stop().slideToggle(300);
                
                if(imgSrc=='off'){
                    imgSrc='on';
                }
                else{
                    imgSrc='off';
                }

                $(this).children().attr('src','./images/plcc_211124_visual17_'+ imgSrc +'_pc.jpg');
            }
        });


    },
    section5:function(){

    }
}

hyundaiCard.init();

})(jQuery);