// Imports
import React, { useRef, useEffect } from 'react';
import { useNounoursContext } from "../context/Context";
import $ from 'jquery';
import gsap from 'gsap';

// Fonction
const Loader = () => {

	// Context
	const { imagesChargees, hideLoader } = useNounoursContext();

	// Variables
	const loaderRef = useRef();
	const tlLoader = useRef();

	// Images chargées ? | Diffusé depuis le composant Iphone
	useEffect(() => {
		const $loader = $(loaderRef.current);
		if (imagesChargees){
			setTimeout(() => {
				$loader.fadeOut('slow', function(){
					tlLoader.current.kill();
					hideLoader();
				});
			},500);
		}
	},[imagesChargees, hideLoader, tlLoader]);

	// Animation, didMount
	useEffect(() => {
		const $loader = $(loaderRef.current);
		const $carreRoule = $loader.find('.carreRoule');
		tlLoader.current = gsap.timeline({ repeat:-1, yoyo:true });
		tlLoader.current.to($carreRoule,{ duration:3, left:'90%', rotation:'360', ease:'none' });
	},[]);

	// Return
	return(
		<div className="loader" ref={ loaderRef }>
			<div className="conteneurCarreSol">
				<div className="carreRoule"></div>
				<div className="sol"></div>
			</div>
		</div>
	);

};

// Export
export default Loader;