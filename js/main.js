document.addEventListener("DOMContentLoaded", function() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "100%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "100%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax4"})
					.setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax5"})
					.setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax6"})
					.setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#parallax7"})
					.setTween("#parallax3 > div", {y: "100%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);
    });