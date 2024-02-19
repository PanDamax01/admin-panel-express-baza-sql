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
import { replacementsLoader } from './api/loaders/replacementsLoader.js'
import { headerLoader } from './api/loaders/headerLoader.js'
import { SliderPage } from './views/SliderPage/SliderPage.jsx'
import { slidersLoader } from './api/loaders/slidersLoader.js'
import { InformationsPage } from './views/InformationsPage/InformationsPage.jsx'
import { informationsLoader } from './api/loaders/informationsLoader.js'
import { ClassroomPage } from './views/ClassroomPage/ClassroomPage.jsx'
import { classroomsLoader } from './api/loaders/classroomLoader.js'
import { UsersPage } from './views/UsersPage/UsersPage.jsx'
import { usersLoader } from './api/loaders/usersLoader.js'

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
				loader: headerLoader
			},
			{
				path: '/panel/zastepstwa',
				element: <ReplacementsPage />,
				loader: replacementsLoader
			},
			{
				path: '/panel/slider',
				element: <SliderPage />,
				loader: slidersLoader
			},
			{
				path: '/panel/ogloszenia',
				element: <InformationsPage />,
				loader: informationsLoader
			},
			{
				path: '/panel/sale',
				element: <ClassroomPage />,
				loader: classroomsLoader
			},
			{
				path: '/panel/uzytkownicy',
				element: <UsersPage />,
				loader: usersLoader
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
