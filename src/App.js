// Imports
import React from 'react';
import './css/displayMain.css';
import { useNounoursContext } from './context/Context';
import Loader from "./components/Loader";
import Polygone from "./components/Polygone";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Fonction
function App(){
	// Context
	const { loaderVisible } = useNounoursContext();
	// Return
	return(
		<React.Fragment>

			{/* Loader */}
			{
				loaderVisible && <Loader/>
			}
			{/* Loader */}

			{/* Polygone */}
			<Polygone/>
			{/* Polygone */}

			{/* Header */}
			<Header/>
			{/* Header */}

			{/* Hero */}
			<Hero/>
			{/* Hero */}

			{/* Footer */}
			<Footer/>
			{/* Footer */}

		</React.Fragment>
	);
};

// Export
export default App;