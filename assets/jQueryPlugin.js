// jQuery code to initialize the counterUp plugin

$(document).ready(function () {

    // TYped Plugin
    var typed = new Typed('#typewriter', {
        strings: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Wordpress'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true
    });

    $('.typewriter').each(function () {
        var el = $(this);
        var text = el.text();
        el.html('');
        var i = 0;
        var timer = setInterval(function () {
            if (i < text.length) {
                el.append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50); // typing speed
    });


    // GSAP Animation
    gsap.registerPlugin(TextPlugin);

    gsap.to("#animatedText", {
        duration: 15,
        text: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
        ease: "power1.inOut",
        delay: 0.5
    });

});