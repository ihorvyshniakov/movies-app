import React from 'react';
import { PreloaderCircle } from '../components/PreloaderCircle';

const API_KEY = process.env.REACT_APP_API_KEY;

// TODO: fix bug with reloading item page
// TODO: add some styling

class ItemPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: {},
			loading: true
		};
	}

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${this.props.id}`)
			.then(response => response.json())
			.then(data => this.setState({ movie: data, loading: false }))
			.catch(err => {
				console.error(err);
				this.setState({ loading: false });
			});
	}

	render() {
		const { movie, loading } = this.state;
		const {
			Plot,
			Actors,
			Country,
			Writer,
			imdbRating,
			Poster,
			Title,
			Year,
			Type
		} = movie;

		if (loading) {
			return <PreloaderCircle />;
		}

		return (
			<div className='item-page'>
				<div className='card'>
					<div className='card-content'>
						<h1>{Title}</h1>
						<p>Year: {Year}</p>
						<p>Type: {Type}</p>
						<p>Description: {Plot}</p>
						<p>Actors: {Actors}</p>
						<p>Country: {Country}</p>
						<p>Writer: {Writer}</p>
						<p>Rating imdbRating: {imdbRating}</p>
						<button className='waves-effect waves-light btn'>
							Watch
						</button>
					</div>
				</div>
				<div className='card'>
					<div className='card-image'>
						<img src={Poster} alt='poster' />
					</div>
				</div>
			</div>
		);
	}
}

export default ItemPage;
