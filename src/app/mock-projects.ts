import { Project } from './project';

export const projets : Project[]= [
	{
		id: 1,
		name:'Face Toulouse',
		imgUrl: 'assets/face.png',
		imgDetail: 'assets/face.png',
		techno: 'PHP, October CMS, Bootstrap',
		shortDescription: 'Création site vitrine pour la Fondation Agir Contre Exclusion',
		detailedDescription: "Suite à un problème survenu sur leur serveur, le client a perdu leur site. Il avait donc besoin d'un nouveau site web pour donner plus de visibilité à leurs activités et qui leur servira un outil de communication particulièrement auprès des futures entreprises entreprises adhérentes.",
		contribution: " Ma contribution au sein d'une équipe de 3 développeurs : création de la page actualités, création d'un plug-in pour afficher le dernier article"
	},

	{
		id: 2,
		name:'Blog MM',
		imgUrl: 'assets/blog.png',
		imgDetail: 'assets/blog.png',
		techno: 'Laravel, Bootstrap',
		shortDescription: 'Création moteur de blog',
		detailedDescription:"Dans le cadre de la certification de ma formation de developpeur web, j'ai réalisé en binôme ce moteur de blog sans avoir recours à aucun CMS",
		contribution: 'création du dashboard de la zone admin, création des fonctionnalités qui permettent de créer, consulter, supprimer ou éditer un article'
	}
]