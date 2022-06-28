import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import React, { useEffect, useState } from 'react';

function App() {
	const [filmsList, setFilmsList] = useState([]);

	useEffect(() => {
		fetch('http://www.omdbapi.com/?apikey=4abf06ce&s=matrix')
			.then(response => {
				return response.json();
			})
			.then(receivedFilmsData => {
				setFilmsList(receivedFilmsData.Search);
			});
	}, []);

	return (
		<>
			<Header />
			<Main filmsList={filmsList} />
			<Footer />
		</>
	);
}

export default App;
