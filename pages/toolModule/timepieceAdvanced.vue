<template>
	<div class="wrap">
		<div class="month_box" :style="{'transform':'rotate('+ MonthDeg +'deg)'}">
			<p v-for="(item,index) in monthList" :style="{'transform':'rotate('+ deg / monthList.length * index +'deg)'}"><span>{{item}}月</span></p>
		</div>
		<div class="day_box" :style="{'transform':'rotate('+ DayDeg +'deg)'}">
			<p v-for="(item,index) in dayList" :style="{'transform':'rotate('+ deg / dayList.length * index +'deg)'}"><span>{{item}}日</span></p>
		</div>
		<div class="house_box" :style="{'transform':'rotate('+ HoursDeg +'deg)'}">
			<p v-for="(item,index) in houseList" :style="{'transform':'rotate('+ deg / houseList.length * index +'deg)'}"><span>{{item}}时</span></p>
		</div>
		<div class="minutes_box" :style="{'transform':'rotate('+ MinutesDeg +'deg)'}">
			<p v-for="(item,index) in minutesList" :style="{'transform':'rotate('+ deg / minutesList.length * index +'deg)'}"><span>{{item}}分</span></p>
		</div>
		<div class="second_box"  :style="{'transform':'rotate('+ SecondsDeg +'deg)'}">
			<p v-for="(item,index) in secondsList" :style="{'transform':'rotate('+ deg / secondsList.length * index +'deg)'}"><span>{{item}}秒</span></p>
		</div>
		<div class="pointer">
			<p></p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				deg:0,
				monthList:[],
				dayList:[],
				houseList:[],
				minutesList:[],
				secondsList:[],
				monthDays:0,
				MonthDeg:0,
				DayDeg:0,
				HoursDeg:0,
				MinutesDeg:0,
				SecondsDeg:0,
				inrerval:''
			}
		},
		computed: {},
		methods: {
			timeInit(){
				let that = this;
				let myDate = new Date();
				let Year = myDate.getFullYear(); //从 Date 对象以四位数字返回年份。
				let Month = myDate.getMonth(); //从 Date 对象返回月份 (0 ~ 11)。
				let Day = myDate.getDate(); //从 Date 对象返回一个月中的某一天 (1 ~ 31)。
				let Week = myDate.getDay(); //从 Date 对象返回一周中的某一天 (0 ~ 6)。
				let dayList = [];
				that.monthDays = that.mGetDate(Year,Month+1)
				that.monthList = ['一','二','三','四','五','六','七','八','九','十','十一','十二']
				for (let i=0;i<that.monthDays;i++) {
					dayList.push(i+1)
				}
				for (let i=0;i<24;i++) {
					that.houseList.push(i)
				}
				for (let i=0;i<60;i++) {
					that.minutesList.push(i)
					that.secondsList.push(i)
				}
				that.dayList = dayList;
				setTimeout(function(){
					that.timeStart();
				},500)
			},
			timeStart(){
				let that = this
				that.deg = 360
				clearInterval(this.inrerval)
				this.inrerval = setInterval(function(){
					let myDate = new Date();
					let Month = myDate.getMonth(); //从 Date 对象返回月份 (0 ~ 11)。
					let Day = myDate.getDate(); //从 Date 对象返回一个月中的某一天 (1 ~ 31)。
					let Hours = myDate.getHours(); //获取当前小时数(0-23) 
					let Minutes = myDate.getMinutes(); //获取当前分钟数(0-59) 
					let Seconds = myDate.getSeconds(); //获取当前秒数(0-59) 
					that.MonthDeg = 90 - Month * 30;
					that.DayDeg = 90 - (Day - 1) * (360 / that.monthDays);
					that.HoursDeg = 90 - Hours * 15;
					that.MinutesDeg = 90 - Minutes * 6;
					that.SecondsDeg = 90 - Seconds * 6;
				},1000)
			},
			mGetDate(year, month){
				var d = new Date(year, month, 0);
				return d.getDate();
			}
		}
	}
</script>

<style>
	.wrap{
		width: 800px;
		height: 800px;
		position: fixed;
		left: calc(50% - 400px);
		top: calc(50% - 400px);
		border-radius: 50%;
		padding: 30px;
		box-sizing: border-box;
		transform: scale(0.9);
	}
	
	.hour_hand,.minute_hand,.second_hand{
		position: absolute;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
	}
	
	.month_box,.day_box,.house_box,.minutes_box,.second_box{
		position: absolute;
		transition: all 0.6s linear;
		border-radius: 50%;
	}
	.month_box{
		left: calc(50% - 80px);
		top: calc(50% - 80px);
		width:160px;
		height: 160px;
	}
	.day_box{
		left: calc(50% - 160px);
		top: calc(50% - 160px);
		width:320px;
		height: 320px;
	}
	.house_box{
		left: calc(50% - 240px);
		top: calc(50% - 240px);
		width:480px;
		height: 480px
	}
	.minutes_box{
		left: calc(50% - 320px);
		top: calc(50% - 320px);
		width:640px;
		height: 640px
	}
	.second_box{
		left: 0;
		top: 0;
		width:100%;
		height: 100%;
	}
	.month_box p,.day_box p,.house_box p,.minutes_box p,.second_box p{
		position: absolute;
		top: 0;
		font-size: 12px;
		font-weight: bold;
		transition: all 0.4s linear;
		color: #fff;
	}
	.month_box p{
		left: calc(50% - 30px);
		width: 60px;
		height: 30px;
		line-height: 30px;
		transform-origin: center 80px;
	}
	.day_box p{
		left: calc(50% - 15px);
		width: 30px;
		height: 30px;
		line-height: 30px;
		transform-origin: center 160px; 
	}
	.house_box p{
		left: calc(50% - 15px);
		width: 30px;
		height: 30px;
		line-height: 30px;
		transform-origin: center 240px; 
	}
	.minutes_box p{
		left: calc(50% - 15px);
		width: 30px;
		height: 30px;
		line-height: 30px;
		transform-origin: center 320px; 
	}
	.second_box p{
		top: 0px;
		left: calc(50% - 15px);
		width: 30px;
		height: 30px;
		line-height: 30px;
		transform-origin: center 400px; 
	}
	.month_box p span,.day_box p span,.house_box p span,.minutes_box p span,.second_box p span{
		transform: rotate(-90deg);
		display: block;
	}
	.month_box p span{
		text-align: right;
	}
	.day_box p span {
		text-align: center;
	}
	.pointer{
		width: 400px;
		position: absolute;
		left: 50%;
		top: 51.5%;
		height: 2px;
		background-color: #fff;
	}
</style>
