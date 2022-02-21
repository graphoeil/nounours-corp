// Imports
import React, { useState } from 'react';
import $ from 'jquery';

// Fonction
const Email = () => {
	
	// State
	const[email, setEmail] = useState('');
	const[emailValide, setEmailValide] = useState(false);
	const[formulaireEnvoye, setFormulaireEnvoye] = useState(false);

	// Check email
	const checkEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
		if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
			setEmailValide(true);
		} else {
			setEmailValide(false);
		}
	};

	// Envoi du formulaire
	const submitFormulaire = (e) => {
		e.preventDefault();
		const url = 'http://www.graphoeilmultimedia.com/reactDev/nounoursCorp/utils/envoiMail.php';
		const donnees = { 'email':email };
		$.post(url, donnees).promise().done(animeEnvoi).fail(erreurFormulaire);
	};

	// Animation d'envoi du formulaire
	const animeEnvoi = () => {
		setEmailValide(false);
		setFormulaireEnvoye(true);
	};

	// Erreur d'envoi du formulaire
	const erreurFormulaire = () => {
		console.log('Une erreur est survenue durant l\'envoi du formulaire');
	};

	// Return
	return(
		<form className={ formulaireEnvoye ? 'envoye' : '' }>
			<input type="email" name="email" placeholder="Votre e-mail..." required
				value={ email } onChange={ checkEmail } disabled={ formulaireEnvoye }/>
			<button type="submit" onClick={ submitFormulaire } disabled={ !emailValide }>
				<span></span><span></span><span></span>
			</button>
		</form>
	);

};

// Export
export default Email;