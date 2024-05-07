$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const aboutsec = document.querySelector('.about');
const skillsec = document.querySelector('.skills');
const projectsec = document.querySelector('.projects');
const certificationssec = document.querySelector('.teams');
const competitionssec = document.querySelector('.competitions');
const contactsec = document.querySelector('.contact');


const options = {
    threshold:0.1
};
const observer = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        console.log(entry.target);
        const intersecting = entry.isIntersecting;
        if(intersecting){
            entry.target.classList.add('aboutOn');
            entry.target.classList.add('skillsOn');
            entry.target.classList.add('projectsOn');
            entry.target.classList.add('teamsOn');
            entry.target.classList.add('competitionsOn');
            entry.target.classList.add('contactOn');
        }
    })
}, options);

observer.observe(aboutsec);
observer.observe(skillsec);
observer.observe(projectsec);
observer.observe(certificationssec);
observer.observe(competitionssec);
observer.observe(contactsec);