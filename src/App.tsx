import { GameRequest } from '@utility/RequestToGetGames/GameRequest';
import { MyRoutes } from '@routes/routes';

function App() {
	return (
		<>
			<GameRequest />
			<MyRoutes />
		</>
	);
}

export default App;
