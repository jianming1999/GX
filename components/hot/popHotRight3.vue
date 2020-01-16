<template>
  <div class="canvas_box">
		<canvas id="ca" class="canvas" width="600" height="300"></canvas>
  </div>
</template>
<style type="text/css">
	.canvas_box{text-align: center;}
	.canvas_box .canvas{width: 300px;height:150px;}
</style>
<script>
	import common from '~/assets/js/common.js'
	export default {
		mounted(){
			if(process.server) return;
			window.requestNextAnimationFrame = (function () {
		      var originalWebkitRequestAnimationFrame = undefined,
		          wrapper = undefined,
		          callback = undefined,
		          geckoVersion = 0,
		          userAgent = navigator.userAgent,
		          index = 0,
		          self = this;

		      // Workaround for Chrome 10 bug where Chrome
		      // does not pass the time to the animation function

		      if (window.webkitRequestAnimationFrame) {
		         // Define the wrapper

		         wrapper = function (time) {
		           if (time === undefined) {
		              time = +new Date();
		           }
		           self.callback(time);
		         };

		         // Make the switch

		         originalWebkitRequestAnimationFrame = window.webkitRequestAnimationFrame;    

		         window.webkitRequestAnimationFrame = function (callback, element) {
		            self.callback = callback;

		            // Browser calls the wrapper and wrapper calls the callback

		            originalWebkitRequestAnimationFrame(wrapper, element);
		         }
		      }

		      // Workaround for Gecko 2.0, which has a bug in
		      // mozRequestAnimationFrame() that restricts animations
		      // to 30-40 fps.

		      if (window.mozRequestAnimationFrame) {
		         // Check the Gecko version. Gecko is used by browsers
		         // other than Firefox. Gecko 2.0 corresponds to
		         // Firefox 4.0.

		         index = userAgent.indexOf('rv:');

		         if (userAgent.indexOf('Gecko') != -1) {
		            geckoVersion = userAgent.substr(index + 3, 3);

		            if (geckoVersion === '2.0') {
		               // Forces the return statement to fall through
		               // to the setTimeout() function.

		               window.mozRequestAnimationFrame = undefined;
		            }
		         }
		      }

		      return window.requestAnimationFrame   ||
		         window.webkitRequestAnimationFrame ||
		         window.mozRequestAnimationFrame    ||
		         window.oRequestAnimationFrame      ||
		         window.msRequestAnimationFrame     ||

		         function (callback, element) {
		            var start,
		                finish;

		            window.setTimeout( function () {
		               start = +new Date();
		               callback(start);
		               finish = +new Date();

		               self.timeout = 1000 / 60 - (finish - start);

		            }, self.timeout);
		         };
		      })();
			// (2-(0.2*7)) / (1+5+12+12+5+12+10) = 0.01
			// 1 = 0.01
			// 5 = 0.05
			// 12 = 0.12
			// ..
			function to2Fixed(number){
				return Number((number).toFixed(2));
			}
			//绘制tooltip提示文字
		    function drawToolTip(txtLoc, x, y) {
		        ctx.save();
		        var padding = 5;
		        var font = "14px arial";
		        ctx.font = font;
		        ctx.textBaseline = 'bottom';
		        ctx.fillStyle = 'rgba(0,0,0,0.4)';
		 
		        //绘制ToolTip背景
		        var width = ctx.measureText(txtLoc).width + 20;
		        var height = parseInt(font, 10);
		        ctx.fillRect(x + 10, y-height, width+padding*2, height+padding*2);
		 
		        //绘制ToolTip文字
		        ctx.fillStyle = 'white';
		        ctx.fillText(txtLoc, x+padding+10, y+padding);
		 
		        ctx.restore();
		    }
		    function onMouseMove(e){
			  // 取得画布上被单击的点
		      clickX = e.pageX - canvas.offsetLeft;
		      clickY = e.pageY - canvas.offsetTop;
		    }
		    
			
			var canvas = document.getElementById('ca');
			var ctx = canvas.getContext('2d');
			var clickX,clickY;
			canvas.onmousemove = onMouseMove;
			ctx.scale(2,2);
			var curValMap = {cur1:0,cur2:0,cur3:0,cur4:0,cur5:0}, nowDt = new Date().getTime();
			function draw(opts){
				var total = 2,
					startX = opts.startX || 150,
					startY = opts.startY || 150,
					radius = opts.radius || 37,
					valFont = opts.valFont || '30px bold Arial',
					descFont = opts.descFont || '14px bold Arial',
					valFix = opts.valFix || {x:0,y:0},
					descFix = opts.descFix || {x:0,y:0},
					blank = 0.1,
					cur = opts.cur,
					edg = 0,
					arr = [0.02, 0.1, 0.24, 0.24, 0.1, 0.24, 0.2],
					step = 0,
					arrSum = 0;
				for (var i = 0; i < arr.length; i++){
					arrSum += arr[i];
				}	

				step = to2Fixed((total - blank * arr.length) / arrSum);		
				
				ctx.beginPath();
				ctx.lineWidth=1;
				ctx.arc(startX,startY,radius,0,Math.PI*2);
				ctx.strokeStyle = '#13418a';
				ctx.fillStyle='#1a1864';
				ctx.fill();
				ctx.stroke();

				ctx.beginPath();
				ctx.lineWidth=2;
				ctx.arc(startX,startY,radius+3,0,Math.PI*2);
				ctx.strokeStyle = opts.strokeStyle;
				ctx.stroke();


				for (var i = 0; i < arr.length; i++){
					edg = to2Fixed(cur + arr[i] * step);
					ctx.beginPath();
					ctx.arc(startX,startY,radius+10,Math.PI*cur,Math.PI*edg);
					ctx.stroke();
					cur = to2Fixed(edg + blank);
				}

				ctx.font=valFont;
				ctx.fillStyle = opts.strokeStyle;
				ctx.fillText(opts.val,startX+valFix.x,startY+valFix.y);

				ctx.font=descFont;
				ctx.fillText(opts.desc,startX+descFix.x,startY+descFix.y);
				ctx.closePath();
			}
			function start(){
				
					// 清除上一次的矩形
			    	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height );
					draw({
						cur: curValMap.cur1+=0.005,
						val: 3,
						startX: 150,
						startY: 80,
						radius: 34,
						desc: '今日过期',
						strokeStyle: '#9746d3',
						valFont: '24px bold Arial',
						valFix: {
							x: -8,
							y: 0
						},
						descFont: '14px bold Arial',
						descFix: {
							x: -28,
							y: 20
						}
					});
					draw({
						cur: curValMap.cur2-=0.005,
						val: 5,
						startX: 50,
						startY: 40,
						radius: 22,
						desc: '受理黄灯',
						strokeStyle: '#d18733',
						valFont: '14px bold Arial',
						valFix: {
							x: -5,
							y: 0
						},
						descFont: '10px bold Arial',
						descFix: {
							x: -18,
							y: 12
						}
					});
					draw({
						cur: curValMap.cur3+=0.005,
						val: 1,
						startX: 250,
						startY: 40,
						radius: 22,
						desc: '办结黄灯',
						strokeStyle: '#d18733',
						valFont: '14px bold Arial',
						valFix: {
							x: -5,
							y: 0
						},
						descFont: '10px bold Arial',
						descFix: {
							x: -18,
							y: 12
						}
					});
					draw({
						cur: curValMap.cur4-=0.005,
						val: 3,
						startX: 50,
						startY: 114,
						radius: 22,
						desc: '受理红灯',
						strokeStyle: '#b0374b',
						valFont: '14px bold Arial',
						valFix: {
							x: -5,
							y: 0
						},
						descFont: '10px bold Arial',
						descFix: {
							x: -18,
							y: 12
						}
					});
					draw({
						cur: curValMap.cur5+=0.005,
						val: 0,
						startX: 250,
						startY: 114,
						radius: 22,
						desc: '办结红灯',
						strokeStyle: '#b0374b',
						valFont: '14px bold Arial',
						valFix: {
							x: -5,
							y: 0
						},
						descFont: '10px bold Arial',
						descFix: {
							x: -18,
							y: 12
						}
					});
					if(clickX !== undefined && clickY !== undefined){
						drawToolTip("颜色：xxxxx", clickX, clickY);	
					}
					
				requestNextAnimationFrame(start);
			}
			start();
		}
	}
</script>