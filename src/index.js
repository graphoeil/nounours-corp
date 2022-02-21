// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NounoursProvider } from './context/Context';

// ReactDOM
ReactDOM.render(
	<React.StrictMode>
		<NounoursProvider>
			<App />
		</NounoursProvider>
	</React.StrictMode>,
	document.getElementById('root')
);