<template>
	<view class="content">
		<view class="tabs">
			<text v-for="(item,index) in tabs" @click="hadleAdd(item.tab)">{{item.text}}</text>
		</view>
		<!-- <text>姓名:{{name}}</text>
		<text>年龄:{{num}}</text> -->
		<view class="text-area">
			<!-- <text v-for="(item,index) in list" @click="addAsync({age:item.age})" :id="item.uid" :key="item.uid"
				class="title">{{item.name}}</text>
			<text v-for="(item,index) in list1" :id="item.uid" :key="item.uid" class="title">{{item.name}}</text> -->
			<button type="default" @click="jump">点击{{txt}}</button>
			
		</view>
	</view>
</template>

<script>
	// import {
	// 	mapState,
	// 	mapGetters,
	// 	mapMutations,
	// 	mapActions
	// } from 'vuex'
	import {
		getList,
	} from '@/api/test.js';
	export default {
		data() {
			return {
				title: 'Hello',
				list1: '',
				txt: '',
				tabs: [{
						tab: 'all',
						text: '全部'
					},
					{
						tab: 'good',
						text: '精华'
					},
					{
						tab: 'share',
						text: '分享'
					},
					{
						tab: 'ask',
						text: '问答'
					},
					{
						tab: 'job',
						text: '招聘'
					},
				],
				
			}
		},
		onLoad() {
			// console.log(this.$store)
			this.hadleAdd('all')
		},
		computed: {
			// ...mapState({
			// 	list: (state) => state.obj.list,
			// 	name: 'name',
			// 	num: 'num'
			// }),
			// ...mapGetters(['addNum'])

		},
		methods: {
			// ...mapMutations(['addAge']),
			// ...mapActions(['addAssync']),
			hadleAdd(tab) {
				getList({
					catalog: 1,
				}).then(res => {
					console.log(res.data);
					this.$store.dispatch('addAsync',res.data.data)
				})
			},
			jump(){
				uni.navigateTo({
				     url: '/pages/list/list',
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
