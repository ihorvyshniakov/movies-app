import React from 'react';
import { Movie } from './Movie';
import NotFoundImg from '../sources/not-found.png';

function Movies(props) {
	const { movies = [] } = props;

	return movies.length ? (
		<div className='movies'>
			{movies.map(movie => (
				<Movie key={movie.imdbID} {...movie} />
			))}
		</div>
	) : (
		<div className='not-found'>
			<img src={NotFoundImg} alt='Nothing found' />
			<h3>We didn't find anything</h3>
		</div>
	);
}

export { Movies };
