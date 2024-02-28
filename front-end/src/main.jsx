import './styles/theme.scss'
import './styles/globals.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//page
import { Layout } from './components/Layout/Layout.jsx'
import { LayoutUsers } from './components/LayoutUsers/LayoutUsers.jsx'
import { LoginPage } from './views/LoginPage/LoginPage.jsx'
import { HeaderPage } from './views/HeaderPage/HeaderPage.jsx'
import { ReplacementsPage } from './views/ReplacementsPage/ReplacementsPage.jsx'
import { SliderPage } from './views/SliderPage/SliderPage.jsx'
import { InformationsPage } from './views/InformationsPage/InformationsPage.jsx'
import { ClassroomPage } from './views/ClassroomPage/ClassroomPage.jsx'
import { UsersPage } from './views/UsersPage/UsersPage.jsx'
import { NotFound } from './views/NotFound/NotFound.jsx'

//actions
import { loader } from './api/loader.js'
import { actionsReplacement } from './components/FormRows/FormRows.jsx'
import { actionsHeader } from './components/HeaderForm/HeaderForm.jsx'
import { Error } from './components/Error/Error.jsx'
import { actionsSlider } from './components/SliderForm/SliderForm.jsx'
import { actionsInformations } from './components/InformationsForm/InformationsForm.jsx'
import { AddUserPage } from './views/AddUserPage/AddUserPage.jsx'

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
		errorElement: <Error />,
		children: [
			{
				path: '',
				element: <p>home</p>,
			},
			{
				path: '/panel/naglowek',
				element: <HeaderPage />,
				action: actionsHeader,
				loader: async () => loader('headers'),
			},
			{
				path: '/panel/zastepstwa',
				element: <ReplacementsPage />,
				action: actionsReplacement,
				loader: async () => loader('replacements'),
			},
			{
				path: '/panel/slider',
				element: <SliderPage />,
				action: actionsSlider,
				loader: async () => loader('sliders'),
			},
			{
				path: '/panel/ogloszenia',
				element: <InformationsPage />,
				action: actionsInformations,
				loader: async () => loader('informations'),
			},
			{
				path: '/panel/sale',
				element: <ClassroomPage />,
				loader: async () => loader('classrooms'),
			},
			{
				path: '/panel/uzytkownicy',
				element: <LayoutUsers />,
				children: [
					{
						path: '',
						element: <UsersPage />,
						loader: async () => loader('users'),
					},
					{
						path: '/panel/uzytkownicy/:userId',
						element: <p>uzytkownik</p>,
					},
					{
						path: '/panel/uzytkownicy/dodaj',
						element: <AddUserPage />,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
