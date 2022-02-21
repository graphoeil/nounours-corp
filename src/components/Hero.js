// Imports
import React from 'react';
import Email from "./Email";
import Iphone from "./Iphone";

// Fonction
const Hero = () => {

	// Return
	return(
		<section>

			{/* Gauche */}
			<article>
				<h1>Transformez votre passion en business en ligne !</h1>
				<p>Chez <span>Nounours Corp.</span> on adore l'informatique, le web 
				et les nouvelles technologies, mais on aime également les voyages, 
				la gastronomie, les jeux vidéos, la peinture et le cinéma.</p>
				<Email/>
			</article>
			{/* Gauche */}

			{/* Iphone */}
			<Iphone/>
			{/* Iphone */}

		</section>
	);

};

// Export
export default Hero;