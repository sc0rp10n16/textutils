import React from 'react';

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
	return (
		<>
			<Navbar title="TextUtils" aboutText="About TextUtils" />
			
			<div className="container my-3">
				<TextForm className="my-3" heading="Enter the text to analyze" />
				<About />
			</div>
		</>
	);
}

export default App;
