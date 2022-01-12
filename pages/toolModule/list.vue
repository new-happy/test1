<template>
	<view>
		<view>标题列表</view>
		<text v-for="item in articleList">{{item.title}}</text>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			
		},
		computed: {
			...mapState({
				articleList: (state) => state.articleList
			}),
		},
		methods: {
			btn(){
				console.log(this.articleList)
			}
		}
	}
</script>

<style>

</style>
