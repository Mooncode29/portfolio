import { PlaygroundProject } from './playground-project';

export const playgroundProjects : PlaygroundProject[]= [
	{
		id: 1,
		imgPath: '',
		name: 'What day is it?',
		description:"création d'une app qui permet de connaitre le jour de la semaine en fonction d'une date fournie par l'utlisateur",
		techno:'jQuery, moment.js'
	},
	{
		id: 2,
		imgPath: '',
		name: 'Top Chrono',
		description:"création d'un chronomètre",
		techno:'Javascript, jQuery, Semantic-UI '
	},
	{
		id: 3,
		imgPath: '',
		name: 'To do list',
		description:"création d'une app qui permet de mieux organiser son travail. Il s'agit d'un projet d'initiation à React",
		techno:'React'
	},
	{
		id: 4,
		imgPath: '',
		name: 'Hello Christmas',
		description:"un projet pédagogique pour se familiariser aevc ES6",
		techno:'ES6'
	},
	{
		id: 5,
		imgPath: '',
		name: 'Copie Airbnb',
		description:"reproduction de la page d'accueil du site Airnb pour se familiariser avec Sass",
		techno:'Html5, Sass'
	}
]