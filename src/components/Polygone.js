// Imports
import React, { useRef, useEffect } from 'react';
import $ from 'jquery';
import gsap from 'gsap';
import { useNounoursContext } from "../context/Context";

// Fonction
const Polygone = () => {

	// Contexte
	const { polygoneAnime, baseImageURL } = useNounoursContext();

	// Variables
	const polygoneRef = useRef();
	const tlPolygone = useRef();

	// Animation, didMount
	useEffect(() => {
		const $polygone = $(polygoneRef.current);
		tlPolygone.current =  gsap.timeline({ repeat:-1 });
		tlPolygone.current.to($polygone,{ duration:90, rotation:'+=360', transformOrigin:'center center', ease:'none' });
	},[]);

	// Animation play / pause | Diffusé depuis le menu (Header.js)
	useEffect(() => {
		if (polygoneAnime){
			tlPolygone.current.play();
		} else {
			tlPolygone.current.pause();
		}
	},[polygoneAnime]);

	// Return
	return(
		<div className="backgroundPolygone">
			<div className={ `polygone ${!polygoneAnime ? 'ouvert' : ''}` } ref={ polygoneRef }>
				<img src={ `${baseImageURL}/svg/Polygon.svg` } alt="un polygone" />
			</div>
		</div>
	);

};

// Export
export default Polygone;