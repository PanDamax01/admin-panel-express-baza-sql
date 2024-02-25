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
import { SliderPage } from './views/SliderPage/SliderPage.jsx'
import { InformationsPage } from './views/InformationsPage/InformationsPage.jsx'
import { ClassroomPage } from './views/ClassroomPage/ClassroomPage.jsx'
import { UsersPage } from './views/UsersPage/UsersPage.jsx'
import { loader } from './api/loader.js'
import { actionsReplacement } from './components/FormRows/FormRows.jsx'

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
				loader: async () => loader('headers')
			},
			{
				path: '/panel/zastepstwa',
				element: <ReplacementsPage />,
				action: actionsReplacement,
				loader: async () => loader('replacements')
			},
			{
				path: '/panel/slider',
				element: <SliderPage />,
				loader: async () => loader('sliders')
			},
			{
				path: '/panel/ogloszenia',
				element: <InformationsPage />,
				loader: async () => loader('informations')
			},
			{
				path: '/panel/sale',
				element: <ClassroomPage />,
				loader: async () => loader('classrooms')
			},
			{
				path: '/panel/uzytkownicy',
				element: <UsersPage />,
				loader: async () => loader('users')
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
