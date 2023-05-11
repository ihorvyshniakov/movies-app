import React from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Route, Routes } from 'react-router-dom';
import ItemPage from './ItemPage';
import { PreloaderCircle } from '../components/PreloaderCircle';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
	state = {
		movies: [],
		loading: true
	};

	searchMovies = (search, type = 'all') => {
		this.setState({ loading: true });
		fetch(
			`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
				type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then(response => response.json())
			.then(data =>
				this.setState({ movies: data.Search, loading: false })
			)
			.catch(err => {
				console.error(err);
				this.setState({ loading: false });
			});
	};

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
			.then(response => response.json())
			.then(data =>
				this.setState({ movies: data.Search, loading: false })
			)
			.catch(err => {
				console.error(err);
				this.setState({ loading: false });
			});
	}

	render() {
		const { movies, loading } = this.state;

		return (
			<main className='container content'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Search searchMovies={this.searchMovies} />
								{loading ? (
									<PreloaderCircle />
								) : (
									<Movies movies={movies} />
								)}
							</>
						}
					/>
					{movies?.map(movie => (
						<Route
							key={movie.imdbID}
							path={`/imbdID-${movie.imdbID}`}
							element={
								<ItemPage id={movie.imdbID} movie={movie} />
							}
						/>
					))}
				</Routes>
			</main>
		);
	}
}

export default Main;
