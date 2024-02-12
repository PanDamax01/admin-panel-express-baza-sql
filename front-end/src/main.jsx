import './styles/theme.scss'
import './styles/globals.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './views/LoginPage/LoginPage.jsx'
import { Layout } from './components/Layout/Layout.jsx'
import { HeaderPage } from './views/HeaderPage/HeaderPage.jsx'
import { ReplacementsPage } from './views/ReplacementsPage/ReplacementsPage.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/panel',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <p>home</p>,
			},
			{
				path: '/panel/naglowek',
				element: <HeaderPage />,
			},
			{
				path: '/panel/zastepstwa',
				element: <ReplacementsPage />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
