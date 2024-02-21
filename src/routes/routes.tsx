import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

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
				{/* //TODO */}
				<Route path='/cart' element={<MainPage />} />
				<Route path='*' element={<MainPage />} />
				{/*
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/profile" element={<ProfilePage />} />
        */}
			</Routes>
		</Router>
	);
};
