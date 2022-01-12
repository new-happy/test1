<template>
	<div class="header">
		<view class="tabs">
			<text v-for="(item,index) in tabs" @click="hadleAdd(item.tab)">{{item.text}}</text>
		</view>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				tabs: [{
						tab: 'all',
						text: '主页'
					},
					{
						tab: 'good',
						text: '钟表'
					},
					{
						tab: 'share',
						text: '计算器'
					},
					{
						tab: 'ask',
						text: 'cnode'
					},
					{
						tab: 'job',
						text: '购物车'
					},
				],
				is_show: false
			}
		},
		onLoad() {

		},
		computed: {},
		methods: {
			hadleAdd(tab){
				uni.navigateTo({
					url:'pages/'+tab+'/'+tab
				})
			}
		}
	}
</script>
	
<style scoped>
	.header {
		display: flex;
		align-items: center;
		padding: 12px 5%;
		background: #444;
		font-size: 13px;
		justify-content: flex-end;
		width: 100%;
		box-sizing: border-box;
	}
	
	.header>img {
		width: 120px;
	}
	
	.tabs text {
		padding: 10px 15px;
		color: #fff;
	}
</style>
