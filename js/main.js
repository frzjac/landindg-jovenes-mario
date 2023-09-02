$(document).ready(function () {
        var controller = new ScrollMagic.Controller();

        // Function to animate text with AnimatedCSS
        function animateTextIn(element) {
                $(element).addClass("animated fadeIn"); // You can change the animation class here
        }

        // Set up animations for each section
        function setSectionAnimation(section, triggerElement) {
                var sectionTween = gsap.from(section, { opacity: 0, y: -50, duration: 1, ease: "power3.out" });

                var scene = new ScrollMagic.Scene({
                triggerElement: triggerElement,
                triggerHook: 0.7,
                reverse: false,
                })
                .setTween(sectionTween)
                // .on("enter", function () {
                //         animateTextIn(section.find(".animated-text"));
                // })
                .addTo(controller);
        }

        // Set animations for each section and trigger
        setSectionAnimation($("#parallax1"), "#parallax1", false);
        setSectionAnimation($("#parallax2"), "#parallax2", true);
        setSectionAnimation($("#parallax3"), "#parallax3", true);
        // Add more sections and triggers as needed
    });
    