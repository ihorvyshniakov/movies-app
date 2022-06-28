import React from 'react';

function Movie(props) {
	const {
		Title: title,
		Year: year,
		imbdID: id,
		Type: type,
		Poster: poster,
	} = props;

	return (
		<div id={id} className='card movie'>
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
		</div>
	);
}

export { Movie };
