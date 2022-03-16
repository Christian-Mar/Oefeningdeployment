import './App.css';
import { useImage } from './useAxios';


function App() {
	
	const { data, loading, error } = useImage('https://picsum.photos/200');

	return (
		<div className='App'>
			<header className='App-header'>
				{(() => {
					if (error) return <p>OH NOOOO... 💥</p>;
					if (loading) return <p>LOADING... 👏</p>;
					return <img src={data} className='App-logo' alt='logo'></img>;
				})()}
			</header>
		</div>
	);
}

export default App;
