(function(){
	var fullSVG = document.getElementById('burger'),
		bg = document.getElementById('main-container'),
		topBun = document.getElementById('top-bun'),
		lettuce = document.getElementById('lettuce'),
		beef = document.getElementById('beef'),
		bottomBun = document.getElementById('bottom-bun'),
		stillCheese = document.getElementById('still-cheese'),
		seeds = document.getElementById('seed-group'),
		tomatoes = document.getElementsByClassName('tomatoes'),
		meltingCheese = document.getElementsByClassName('melting-cheese'),
		elements = document.getElementsByClassName('element');

		TweenMax.set(meltingCheese, { y:"-30%", opacity: 0});

		startItems = new TimelineLite();
		startItems.staggerFromTo('.item', 0.6 , {width: '50%', x: "50%", y: "-500%", opacity: 1, scale: 0, ease: Bounce.easeIn}, {width: '100%', x: "0%", y: "0%", scale: 1, ease: Bounce.easeOut }, 0.1)
		.staggerFrom(".seeds", 0.1, {x: 5, opacity: 1, scale: 0, ease: Power0.easeNone, y: -500}, 0.1)
		.to(".seeds", 0.1, {y: "0%"})
		.to(topBun, 0.1 ,{y: "-100%", onStart: throwSeeds})
		.to(lettuce, 0.1 ,{y: "-40%"})
		.to(topBun, 0.1 ,{y: "-0%", onComplete: squeeze})

		TweenMax.fromTo(meltingCheese, 1, { y:"-50%", opacity: 0}, {height: "120%", y: "-8%", opacity: 1, ease:Expo.easeOut, delay: 0.6 } );

		function squeeze() {
			TweenMax.to(lettuce, 0.1 ,{y: "0%"});
			TweenMax.fromTo(beef, 0.5, {x: "-3%", scale: 1.05}, {x: "0%", scale: 1});
			TweenMax.fromTo(topBun, 0.5, {x: "-3%", scale: 1.05}, {x: "0%", scale: 1});
		}

		function throwSeeds(){
			var seedToss = 0.2;
			TweenMax.staggerTo(".seeds", seedToss, {scale: 1.1,  x: "10", ease: Elastic.easeNone, y: -300});
			TweenMax.staggerTo(".seeds", seedToss, {scale: 1, x: "0", delay: seedToss, ease: Elastic.easeNone, y: 0});
		}


})();
