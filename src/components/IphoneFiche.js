// Imports
import React from 'react';
import { useNounoursContext } from "../context/Context";

// Fonction
const IphoneFiche = (props) => {

	// Contexte
	const { baseImageURL } = useNounoursContext();

	// Variables
	const peluche = props.peluche;
	const { nom, photo, presentation, role, followers, following, photos } = peluche;

	// Return
	return(
		<React.Fragment>
			
			{/* Header */}
			<div className="headerFiche">
				<div className="photoNounours">
					<img src={ `${baseImageURL}/${photo}` } alt={ presentation } />
				</div>
				<h2>{ nom }</h2>
				<h3>{ role }</h3>
				<div className="socialFiche">
					<span><strong>{ followers }</strong>Followers</span>
					<span><strong>{ following }</strong>Following</span>
				</div>
			</div>
			{/* Header */}

			{/* Photos */}
			<div className="photosFiche">
				{
					photos.map((photo, index) => {
						return(
							<div className="photo" key={ index }>
								<img src={ baseImageURL + '/' + photo.img } alt={ photo.legende } />
							</div>
						);
					})
				}
			</div>
			{/* Photos */}

		</React.Fragment>
	);
	
};

// Export
export default IphoneFiche;