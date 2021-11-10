import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import globalStyles from './styles';
import 'poppins-font';

ReactDOM.render(
	<ThemeProvider theme={globalStyles}>
		{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
		<CssBaseline />
		<App />
	</ThemeProvider>,
	document.getElementById('app')
);
