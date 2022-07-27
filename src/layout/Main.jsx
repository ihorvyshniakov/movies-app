import React from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

// TODO: Fix bug of filtering

class Main extends React.Component {
	state = {
		movies: [],
		loading: true,
	};

	searchMovies = (search, type = 'all') => {
		this.setState({ loading: true });
		fetch(
			`http://www.omdbapi.com/?apikey=4abf06ce&s=${search}${
				type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }));
	};

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=4abf06ce&s=matrix`)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }));
	}

	render() {
		const { movies, loading } = this.state;

		return (
			<main className='container content'>
				<Search searchMovies={this.searchMovies} />
				{loading ? <Preloader /> : <Movies movies={movies} />}
			</main>
		);
	}
}

export default Main;
