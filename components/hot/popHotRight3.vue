<template>
  <div class="canvas_box" id="canvas_box">
		<!-- <canvas id="ca" class="canvas" width="600" height="300"></canvas> -->
  </div>
</template>
<style type="text/css">
	.canvas_box{text-align: center;}
	.canvas_box .canvas{width: 600px;height: 300px;}
</style>
<script>
	import common from '~/assets/js/common.js'
	import redYellowLight from '~/assets/js/redYellowLight.js'
	export default {
		props: {
			// 今日过期
			toDayTimout: {
				type: Number,
				default: 0
			},
			// 受理黄灯 
			acceptYellow: {
				type: Number,
				default: 0
			},
			// 办结黄灯
			completeYellow: {
				type: Number,
				default: 0
			},
			// 受理红灯
			acceptHot: {
				type: Number,
				default: 0
			},
			// 办结红灯
			completeHot: {
				type: Number,
				default: 0
			}
		}
		mounted(){
			redYellowLight.init({
				eId: 'canvas_box',
				// 今日过期
				toDayTimout: this.props.toDayTimout,
				// 受理黄灯 
				acceptYellow: this.props.acceptYellow,
				// 办结黄灯
				completeYellow: this.props.completeYellow,
				// 受理红灯
				acceptHot: this.props.acceptHot,
				// 办结红灯
				completeHot: this.props.completeHot
			})
		}
	}
</script>