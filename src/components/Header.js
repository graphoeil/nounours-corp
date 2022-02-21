// Imports
import React, { useState, useEffect, useRef } from 'react';
import { useNounoursContext } from "../context/Context";
import $ from 'jquery';
import gsap from 'gsap';
import menu from '../data/menu';

// Fonction
const Header = () => {

	// Contexte
	const { animePolygone } = useNounoursContext();

	// State
	const [menuOuvert, setMenuOuvert] = useState(false);
	const [ombreVisible, setOmbreVisible] = useState(false);
	const [overlayVisible, setOverlayVisible] = useState(false);

	// Variables
	const headerRef = useRef();
	const tlMenu = useRef();

	// DidMount, animation du menu en version mobile
	useEffect(() => {

		// Variables
		const $header = $(headerRef.current);
		const $overlayMobile = $header.find('.overlayMobile');
		const $nav = $header.find('nav');
		const $navBtn = $nav.children('a');

		// Animation
		tlMenu.current = gsap.timeline({ paused:true });
		tlMenu.current
		.set($nav,{ display:'block' })
		.set($overlayMobile,{ display:'block', opacity:0 })
		.set($navBtn,{ opacity:0 })
		.add('pausePolygone')
		.to($overlayMobile,{ duration:0.5, opacity:1, ease:'power2.inOut' },'pausePolygone+=0.3')
		.fromTo($navBtn,{ x:gsap.utils.wrap([-100,100]) },{ duration:0.3, x:0, opacity:1, ease:'power4.inOut', 
			clearProps:'all', stagger:{ each:0.1 } },'pausePolygone+=0.5');

	},[]);

	// Window events
	/* Diffuse animePolygone vers le contexte puis vers Polygone.js pour l'arrêter 
	ou reprendre l'animation, retire également tous les styles si l'écran devient
	plus grand que 768px, gère aussi le state ombreVisible en fonction du scroll */
	useEffect(() => {

		// Variables
		const $header = $(headerRef.current);
		const $overlayMobile = $header.find('.overlayMobile');
		const $nav = $header.find('nav');
		const $navBtn = $nav.children('a');
		const $window = $(window);

		// Window resize
		$window.on('resize orientationchange', function(){
			if ($window.width() >= 768){
				setMenuOuvert(false);
				animePolygone(true);
				setOverlayVisible(false);
				$nav.add($navBtn).add($overlayMobile).removeAttr('style');
			}
		}).trigger('resize');

		// Window scroll, ombre sur innerHeader
		$window.on('scroll', function(){
			let scrollVal = $window.scrollTop();
			if (scrollVal > 1){
				setOmbreVisible(true);
			} else {
				setOmbreVisible(false);
			}
		}).trigger('scroll');

		// Clean
		return () => {
			$window.off('resize orientationchange scroll');
		};

	},[animePolygone]);
	

	// Gestion du menu mobile
	const openCloseMenu = () => {
		if (menuOuvert){
			setMenuOuvert(false);
			animePolygone(true);
			setOverlayVisible(false);
			tlMenu.current.timeScale('1.5');
			tlMenu.current.reverse();
		} else {
			setMenuOuvert(true);
			animePolygone(false);
			setOverlayVisible(true);
			tlMenu.current.timeScale('1');
			tlMenu.current.restart();
			tlMenu.current.play();
		}
	};

	// Return
	return(
		<header ref={ headerRef }>
			{/* innerHeader */}
			<div className={ `innerHeader ${ ombreVisible ? 'ombre' : '' }` }>

				{/* logoHeader */}
				<div className="logoHeader">Nounours corp.</div>
				{/* logoHeader */}

				{/* btnMenuMobile */}
				<div className="btnMenuMobile" onClick={ openCloseMenu }>
					<div className={ `barresMenuMobile ${ menuOuvert ? 'ouvert' : '' } ` }>
						<span></span><span></span><span></span>
					</div>
				</div>
				{/* btnMenuMobile */}

				{/* Overlay mobile, la class visible passe pointer-events à visible pour
				éviter de pouvoir accéder aux éléments derrière l'overlay (notamment l'input) */}
				<div className={ `overlayMobile ${ overlayVisible ? 'visible' : '' }` }></div>
				{/* Overlay mobile */}

				{/* menu */}
				<nav>
				{
					menu.map((lien, index) => {
						// Variables
						const { label, url, title } = lien;
						// Return
						return <a href={ url } title={ title } key={ index }
							onClick={ (e) => { e.preventDefault(); } }>
							{ label }
						</a>;
					})
				}
				</nav>
				{/* menu */}

			</div>
			{/* innerHeader */}
		</header>
	);
};

// Export
export default Header;