import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { GamePage } from '@pages/GamePage';
import { LogPage } from '@pages/LogPage';
import { MainPage } from '@pages/MainPage';
import { ProfilePage } from '@pages/Profile';
import { RegPage } from '@pages/RegPage';

export const MyRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/reg' element={<RegPage />} />
				<Route path='/login' element={<LogPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/game/:id' element={<GamePage />} />
				<Route path='/cart' element={<MainPage />} />
				<Route path='*' element={<MainPage />} />
				{/* //TODO */}
				<Route path='/cart' element={<MainPage />} />
				<Route path='*' element={<MainPage />} />
			</Routes>
			{/*
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/profile" element={<ProfilePage />} />
        */}
		</Router>
	);
};
