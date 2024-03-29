import iconDashboard from '../assets/dashboard.png'
import iconSlider from '../assets/slider.png'
import iconTable from '../assets/table.png'
import iconHeader from '../assets/header.png'
import iconAnnouncements from '../assets/announcements.png'
import iconSettings from '../assets/settings.png'
import iconUsers from '../assets/users.png'

export const CATEGORIES = [
	{
		title: 'Strony',
		list: [
			{
				title: 'Panel',
				path: '/panel',
				icon: iconDashboard,
			},
			{
				title: 'Nagłówek',
				path: '/panel/naglowek',
				icon: iconHeader,
			},
			{
				title: 'Zastępstwa',
				path: '/panel/zastepstwa',
				icon: iconTable,
			},
			{
				title: 'Slider',
				path: '/panel/slider',
				icon: iconSlider,
			},
			{
				title: 'Ogłoszenia',
				path: '/panel/ogloszenia',
				icon: iconAnnouncements,
			},
			{
				title: 'Sale',
				path: '/panel/sale',
				icon: iconTable,
			},
		],
	},
	{
		title: 'Opcje',
		list: [
			{
				title: 'Użytkownicy',
				path: '/panel/użytkownicy',
				icon: iconUsers,
			},
			{
				title: 'Ustawienia',
				path: '/panel/ustawienia',
				icon: iconSettings,
			},
		],
	},
]

export const NAME_CONVERSION = {
	naglowek: 'nagłówek',
	zastepstwa: 'zastępstwa',
	ogloszenia: 'ogłoszenia',
	użytkownicy: 'użytkownicy',
	slider: 'slider',
	panel: 'panel',
	ustawienia: 'ustawienia'
}

export const REPLACEMENTS = [
	{ title: 'Lekcja', key: 0 },
	{ title: 'Nauczyciel', key: 1 },
	{ title: 'Odział', key: 2 },
	{ title: 'Przedmiot', key: 3 },
	{ title: 'Sala', key: 4 },
	{ title: 'Zastępca', key: 5 },
	{ title: 'Okres', key: 6 },
]
