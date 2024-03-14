$(document).ready(function(){
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleclass('active');
        $('#mobile_btn').find('i').toggleclass('fa-x');
    });

    const sections = $('section');
    const navItems = $('nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        const scrollposition = $(window).scrolltop() - header.outerHeight();

        let activeSectionIndex = 0;
        
        if(scrollposition <= 0) {
            header.css('box-shadow', 'none')
        } else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBtottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addclass('active');
    });
});