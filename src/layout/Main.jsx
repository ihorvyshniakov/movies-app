import Movies from '../components/Movies';

const Main = ({ filmsList }) => {
	return (
		<main className='container content'>
			<Movies filmsList={filmsList} />
		</main>
	);
};

export default Main;
