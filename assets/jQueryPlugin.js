// jQuery code to initialize the counterUp plugin

$(document).ready(function () {

    // TYped Plugin
    var typed = new Typed('#typewriter', {
        strings: [
            'HTML - The structure of the web.',
            'CSS - Styling that brings designs to life.',
            'JavaScript - The language of interactivity.',
            'Tailwind CSS - Utility-first CSS framework.',
            'Bootstrap - Responsive design made easy.',
            'jQuery - Simplifying JavaScript tasks.'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1200,
        startDelay: 800,
        loop: true,
        showCursor: true,
        cursorChar: '..',
        smartBackspace: true // Only backspace what doesn't match the previous string
    });
    var typed = new Typed('#typewriter2', {
        strings: [
            'Customization that fits your needs.',
            'Speed Optimization for blazing-fast performance.',
            'Website Management made effortless.'
        ],
        typeSpeed: 40,
        backSpeed: 25,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true // Only backspace what doesn't match the previous string
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