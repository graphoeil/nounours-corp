// Imports
import React, { useRef, useEffect } from 'react';
import nounours from '../data/nounours';
import { useNounoursContext } from "../context/Context";
import imagesLoaded from 'imagesloaded';
import IphoneFiche from "./IphoneFiche";

// Swiper
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Fonction
const Iphone = () => {

	// Contexte
	const { baseImageURL, dispatchImagesChargees } = useNounoursContext();

	// Iphone ref
	const iphoneRef = useRef();

	// DidMount, imagesLoaded => masquer le loader
	useEffect(() => {

		// Init imagesLoaded
		imagesLoaded(iphoneRef.current, function(){

			// Dispatch images chargées
			dispatchImagesChargees();
			
		});

	},[dispatchImagesChargees]);

	// Return
	return(
		<div className="iphone" ref={ iphoneRef }>

			{/* Iphone SVG */}
			<div className="iphoneSVG">

				{/* Image SVG */}
				<img src={ `${baseImageURL}/svg/iphone/iphone.svg` } alt="iphone xr" />
				{/* Image SVG */}

				{/* Inner iphone, conteneur des fiches */}
				<div className="innerIphone">

					{/* Swiper */}
					<Swiper
					modules={ [Autoplay, Pagination] }
					loop={ true }
					speed={ 1000 }
					autoplay={ { delay:2000, disableOnInteraction:false, pauseOnMouseEnter:true } }
					pagination={{ clickable:true, el:'.iphonePagination' }}
					spaceBetween={ 10 }
					slidesPerView={ 1 }>
						{
							nounours.map((peluche) => {
								return(
									<SwiperSlide key={ peluche.id }>
										<IphoneFiche peluche={ peluche }/>
									</SwiperSlide>
								);
							})
						}
					</Swiper>
					{/* Swiper container */}

				</div>
				{/* Inner iphone */}

				{/* Pagination */}
				<div className="iphonePagination"></div>
				{/* Pagination */}

			</div>
			{/* Iphone SVG */}

		</div>
	);

};

// Export
export default Iphone;