function Header() {
	return (
		<nav className='lime'>
			<div className='nav-wrapper'>
				<a href='/' className='brand-logo'>
					React Movies
				</a>
				<ul id='nav-mobile' className='right hide-on-small-only'>
					<li>
						<a
							href='https://github.com/Gramazeka-Reachyourgoals/my-movie-project'
							target='_blank'
							rel='noreferrer'
						>
							Repo
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
