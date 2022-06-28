import React from 'react';

const Movie = ({ film }) => {
	return (
		<div className='card col s12 m6 xl4'>
			<div className='card-image'>
				<img style={{ maxHeight: 400 }} src={film.Poster} alt='poster' />
			</div>
			<div className='card-content'>
				<span className='card-title'>{film.Title}</span>
				<div
					className='wrap'
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<span>{film.Type}</span>
					<p>{film.Year}</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
