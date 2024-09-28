import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';


import { ThemeProvider } from './components/theme-provider.tsx';
import './index.css';
import router from './router/router.tsx';
import { Toaster } from './components/ui/toaster.tsx';
import {ApiContextProvider}  from './context/apiContext.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>

		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<ApiContextProvider>
			<RouterProvider router={router} />
			</ApiContextProvider>
			<Toaster/>
		</ThemeProvider>
	</StrictMode>,
);
