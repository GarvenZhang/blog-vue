export const mutationTypes = {
	M_SET_TAG_LIST: 'M_SET_TAG_LIST'
};

export const actionTypes = {
	A_GET_TAG_LIST: 'A_GET_TAG_LIST'
};

const initialState = {
	list: []
};

const getters = {

};

const mutations = {
	[mutationTypes.M_SET_TAG_LIST](state, {
		list
	} = {}) {
		state.list = list;
	}
};

const actions = {
	[actionTypes.A_GET_TAG_LIST]({
		commit,
	}) {
		commit(mutationTypes.M_SET_TAG_LIST, {
			list: [{
					name: "html",
					number: "90",
					url: "/"
				},
				{
					name: "css",
					number: "90",
					url: "/"
				},
				{
					name: "js",
					number: "90",
					url: "/"
				}
			]
		})
	}
};

export default {
	namespaced: true,
	state: initialState,
	getters,
	mutations,
	actions
}
