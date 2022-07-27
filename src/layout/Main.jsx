import React from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

class Main extends React.Component {
	state = {
		movies: [],
	};

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=4abf06ce&s=matrix&page=2')
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search }));
	}

	render() {
		const { movies } = this.state;

		return (
			<main className='container content'>
				<Search />
				{movies.length ? <Movies movies={movies} /> : <Preloader />}
			</main>
		);
	}
}

export default Main;
