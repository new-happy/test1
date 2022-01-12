<template>
	<div class="wrap">
		<div class="time_box">
			<p v-for="(item,index) in houseList" :style="{'transform':'rotate('+index * 30+'deg)'}">{{item}}</p>
		</div>
		<div class="pointer">
			<div class="hour_hand" :style="{'transform':'rotate('+ HoursDeg +'deg)'}"></div>
			<div class="minute_hand" :style="{'transform':'rotate('+ MinutesDeg +'deg)'}"></div>
			<div class="second_hand" :style="{'transform':'rotate('+ SecondsDeg +'deg)'}"></div>
			<div class="spot"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				houseList:['Ⅻ','Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ','Ⅸ','Ⅹ','Ⅺ'],
				HoursDeg:0,
				MinutesDeg:0,
				SecondsDeg:0,
				inrerval:''
			}
		},
		computed: {},
		methods: {
			timeStart(){
				let that = this
				clearInterval(this.inrerval)
				this.inrerval = setInterval(function(){
					let myDate = new Date();
					let Hours = myDate.getHours(); //获取当前小时数(0-23) 
					let Minutes = myDate.getMinutes(); //获取当前分钟数(0-59) 
					let Seconds = myDate.getSeconds(); //获取当前秒数(0-59) 
					that.HoursDeg = Hours * 30 + (Minutes * 0.5)
					that.MinutesDeg = Minutes * 6 +(Seconds * 0.1)
					that.SecondsDeg = Seconds * 6 
				},1000)
			}
		}
	}
</script>

<style>
	.wrap{
		width: 500px;
		height: 500px;
		position: fixed;
		left: calc(50% - 250px);
		top: calc(50% - 250px);
		border-radius: 50%;
		padding: 30px;
		box-sizing: border-box;
	}
	.time_box{
		width:100%;
		height: 100%;
		position: relative;
	}
	.time_box p{
		position: absolute;
		top: 0;
		left: calc(50% - 15px);
		font-size: 20px;
		font-weight: bold;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		transform-origin: center 200px; 
	}
	.pointer{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #000;
		position: absolute;
		left: calc(50% - 10px);
		top: calc(50% - 10px);
	}
	.hour_hand,.minute_hand,.second_hand{
		position: absolute;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		
	}
	.second_hand{
		width: 4px;
		height: 160px;
		left: calc(50% - 2px);
		top: calc(50% - 160px);
		background-color: #000;
		transform-origin: center 160px; 
	}
	.minute_hand{
		width: 6px;
		height: 120px;
		left: calc(50% - 3px);
		background-color: yellow;
		top: calc(50% - 120px);
		transform-origin: center 120px; 
	}
	.hour_hand{
		width: 8px;
		height: 80px;
		left: calc(50% - 4px);
		background-color: red;
		top: calc(50% - 80px);
		transform-origin: center 80px; 
	}
	.spot{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #000;
		position: absolute;
		left: calc(50% - 10px);
		top: calc(50% - 10px);
		z-index: 5;
	}
</style>
