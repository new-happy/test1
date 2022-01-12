<template>
	<view class="content">
		<Header></Header>
		<view class="tool_content">
			<button type="default" @click="getTime()">点击获取</button>
			<TimepieceAdvanced ref="toolContent"></TimepieceAdvanced>
		</view>
	</view>
</template>

<script>
	import {
		getList
	} from '@/api/test.js';
	import TimepieceAdvanced from '../toolModule/timepieceAdvanced'
	import Header from '../toolModule/header'
	export default {
		components: {
			Header,
			TimepieceAdvanced
		},
		data() {
			return {
				is_show: false
			}
		},
		onLoad() {

			
		},
		computed: {},
		methods: {
			getTime(){
				this.$refs.toolContent.timeInit();
			}
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.tool_content {
		width: 100%;
		height: calc(100vh - 42px);
		background-image: url(../../static/images/bg.jpg);
		background-size: 100% 100%;
	}
</style>
