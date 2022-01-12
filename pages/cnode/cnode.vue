<template>
	<view class="content">
		<div class="header">
			<img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
			<view class="tabs">
				<text v-for="(item,index) in tabs" @click="hadleAdd(item.tab)">{{item.text}}</text>
			</view>
		</div>
		<view class="tab_list">
			<list></list>
		</view>
	</view>
</template>

<script>
	import {getList} from '@/api/test.js';
	import list from '../toolModule/list'
	export default {
		components:{
			list
		},
		data() {
			return {
				tabs: [
					{tab: 'all',text: '全部'},
					{tab: 'good',text: '精华'},
					{tab: 'share',text: '分享'},
					{tab: 'ask',text: '问答'},
					{tab: 'job',text: '招聘'},
				],
				is_show:false
			}
		},
		onLoad() {
			
			this.hadleAdd('all')
		},
		computed: {},
		methods: {
			hadleAdd(tab) {
				let that = this
				getList({
					tab: tab,
				}).then(res => {
					console.log(res.data);
					this.$store.dispatch('addAsync',res.data.data)
				})
			},

		}
	}
</script>

<style scoped>
	.header{
		display: flex;
		align-items: center;
		padding: 12px 5%;
		background: #444;
		font-size: 13px;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
	}
	.header>img{
		width: 120px;
	}
	.tabs text{
		padding: 10px 15px;
		color: #fff;
	}
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
