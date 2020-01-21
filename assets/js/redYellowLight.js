var canvas, ctx, clickX, clickY, curValMap = {cur1:0,cur2:0,cur3:0,cur4:0,cur5:0}, nowDt = new Date().getTime(), globalOption = {};
if(process.browser){
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
}

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

	ctx.fillText(opts.val,startX-(ctx.measureText(opts.val).width / 2),startY+valFix.y);
	ctx.font=descFont;
	ctx.fillText(opts.desc,startX-(ctx.measureText(opts.desc).width / 2),startY+descFix.y);
	ctx.closePath();
}
function parseStr(n){
	if(n === null || n === undefined) return '0';
	return n + '';
}
function start(){
	// 清除上一次的矩形
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height );
	draw({
		cur: curValMap.cur1+=0.005,
		val: parseStr(globalOption.toDayTimout),
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
		val: parseStr(globalOption.acceptYellow),
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
		val: parseStr(globalOption.completeYellow),
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
		val: parseStr(globalOption.acceptHot),
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
		val: parseStr(globalOption.completeHot),
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
	// if(clickX !== undefined && clickY !== undefined){
		// drawToolTip("颜色：xxxxx", clickX, clickY);	
	// }
	
	requestNextAnimationFrame(function(){
		start()
	});
}
function init(options){				
	canvas = document.getElementById(obj.eId);
	ctx = canvas.getContext('2d');
	ctx.scale(2,2);
	curValMap = {cur1:0,cur2:0,cur3:0,cur4:0,cur5:0}, nowDt = new Date().getTime();
	globalOption = Object.assign({
		// 今日过期
		toDayTimout: 0,
		// 受理黄灯 
		acceptYellow: 0,
		// 办结黄灯
		completeYellow: 0,
		// 受理红灯
		acceptHot: 0,
		// 办结红灯
		completeHot: 0
	}, options || {})
	start();
}
export default {
	init: function init(options){
		let boxEl = document.getElementById(options.eId),
			canvasArray = boxEl.getElementsByTagName('canvas');
		if(canvasArray.length > 0){
			canvas = canvasArray[0];
		}else{
			canvas = document.createElement('canvas');
			canvas.width = 600;
			canvas.height = 300;
			canvas.style.width = '300px';
			canvas.style.height = '150px';
			boxEl.appendChild(canvas);
		}
		ctx = canvas.getContext('2d');
		ctx.scale(2,2);
		curValMap = {cur1:0,cur2:0,cur3:0,cur4:0,cur5:0}, nowDt = new Date().getTime();
		globalOption = Object.assign({
			// 今日过期
			toDayTimout: 0,
			// 受理黄灯 
			acceptYellow: 0,
			// 办结黄灯
			completeYellow: 0,
			// 受理红灯
			acceptHot: 0,
			// 办结红灯
			completeHot: 0
		}, options || {})
		start();
	}
}