// Imports
import React, { useState, useContext } from 'react';

// Contexte
const NounoursContext = React.createContext();

// Provider
const NounoursProvider = ({ children }) => {

	// Variables
	// Base URL
	const baseImageURL = 'http://www.graphoeilmultimedia.com/reactDev/nounoursCorp/imagesWWW';
	// Loader
	const [loaderVisible, setLoaderVisible] = useState(true);
	const [imagesChargees, setImagesChargees] = useState(false);
	// Polygone, animation du fond
	const [polygoneAnime, setPolygoneAnime] = useState(true);

	// Méthodes
	// Loader
	const hideLoader = () => {
		setLoaderVisible(false);
	};
	const dispatchImagesChargees = () => {
		setImagesChargees(true);
	};
	// Polygone, Play ou Pause (bool)
	const animePolygone = (isPlaying) => {
		setPolygoneAnime(isPlaying);
	};

	// Return
	return <NounoursContext.Provider value={ {
		// BaseURL
		baseImageURL,
		// Loader
		loaderVisible, hideLoader,
		imagesChargees, dispatchImagesChargees,
		// Polygone
		polygoneAnime, animePolygone
	} }>{ children }</NounoursContext.Provider>

};

// Custom Hooks
export const useNounoursContext = () => {
	return useContext(NounoursContext);
};

// Export Provider
export { NounoursProvider };