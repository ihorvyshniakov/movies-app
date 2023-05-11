import React from 'react';
import { Link } from 'react-router-dom';

function Movie(props) {
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster
	} = props;

	return (
		<Link id={id} className='card movie' to={`imbdID-${id}`}>
			<div className='card-image waves-effect waves-block waves-light'>
				{poster === 'N/A' ? (
					<img
						src={`https://via.placeholder.com/300x400?text=${title}`}
						alt=''
					/>
				) : (
					<img className='activator' src={poster} alt='poster ' />
				)}
			</div>
			<div className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>
					{title}
				</span>
				<p>
					{type} <span className='right'>{year}</span>
				</p>
			</div>
		</Link>
	);
}

export { Movie };
