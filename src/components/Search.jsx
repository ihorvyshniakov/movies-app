import React from 'react';

class Search extends React.Component {
	state = {
		search: '',
		type: 'all',
	};

	handleKey = e => {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	};

	handleFilter = e => {
		this.setState(
			() => ({ type: e.target.dataset.type }),
			() => this.props.searchMovies(this.state.search, this.state.type)
		);
	};

	render() {
		const { search, type } = this.state;

		return (
			<div className='row'>
				<div className='input-field'>
					<input
						className='validate'
						id='email_inline'
						type='search'
						placeholder='Search'
						value={search}
						onChange={e => this.setState({ search: e.target.value })}
						onKeyDown={this.handleKey}
					/>
					<button
						className='btn search-btn'
						onClick={() => this.props.searchMovies(search, type)}
					>
						Search
					</button>
				</div>
				<div className='filter'>
					<label>
						<input
							className='with-gap'
							name='type'
							data-type='all'
							type='radio'
							onChange={this.handleFilter}
							checked={type === 'all'}
						/>
						<span>All</span>
					</label>
					<label>
						<input
							className='with-gap'
							name='type'
							data-type='movie'
							type='radio'
							onChange={this.handleFilter}
							checked={type === 'movie'}
						/>
						<span>Movies only</span>
					</label>
					<label>
						<input
							className='with-gap'
							name='type'
							data-type='series'
							type='radio'
							onChange={this.handleFilter}
							checked={type === 'series'}
						/>
						<span>Series only</span>
					</label>
				</div>
			</div>
		);
	}
}

export { Search };
