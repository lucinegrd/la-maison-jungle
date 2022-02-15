import monstera from '../assets/monstera.jpg'
import ficus_lyrata from '../assets/ficus_lyrata.jpeg'
import pothos_argente from '../assets/pothos_argente.jpg'
import olivier from '../assets/olivier.jpg'
import yucca from '../assets/yucca.jpg'
import geranium from '../assets/geranium.jpg'
import succulent from '../assets/succulent.jpg'
import basilique from '../assets/basilique.jpg'
import aloe from '../assets/aloe.jpg'


export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price:15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: ficus_lyrata,
		price:25
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos_argente,
		isSpecialOffer :true,
		oldPrice:13,
		price:10
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: yucca,
		isSpecialOffer:true,
		oldPrice:25,
		price:20
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basilique,
		price:3
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		isSpecialOffer:true,
		oldPrice:30,
		price:20
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: geranium,
		price:15
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: aloe,
		isSpecialOffer:true,
		oldPrice:5,
		price:3
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price:5
	}
]