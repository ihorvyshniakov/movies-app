import React from 'react';
import Movie from './Movie';

const Movies = ({ filmsList }) => {
	return (
		<div className='row'>
			{filmsList.map(film => (
				<Movie key={film.imdbID} film={film} />
			))}
		</div>
	);
};

export default Movies;
