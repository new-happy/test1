import Vue from "vue"
import Vuex from 'vuex'
import * as TYPE from './types.js'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		name: 'ahahah',
		num: 0,
		obj: {
			list: [{
				name: "吃",
				uid: "1",
				age: '15'
			}, {
				name: '猫',
				uid: "2",
				age: '20'
			}],
			txt: '这是什么呢',
		},
		articleList: []

	},
	getters: {
		addNum(state) {
			return state.num + '岁'
		},
	},
	mutations: {
		[TYPE.ADD_AGE](state, payLoad) {
			state.articleList = payLoad
		}
	},
	actions: {
		addAsync: function(context, value) {
			context.commit(TYPE.ADD_AGE, value);
		}
	}
})
