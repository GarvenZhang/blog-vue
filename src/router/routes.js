import Index from '../modules/index';
import Tag from '../modules/tag';
import User from '../modules/user';
import Detail from '../modules/detail';
import Template from '../modules/template/index.vue';

const routes = [{
		path: '/',
		component: Index,
		name: 'index'
	},
	{
		name: 'tag',
		path: '/tag',
		component: Tag,
	},
	{
		name: 'user',
		path: '/user',
		component: User,
	}, {
		name: 'detail',
		path: '/detail',
		component: Detail,
	},

];

export default routes;
