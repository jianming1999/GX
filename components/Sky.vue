<template>
  <canvas id="skyCanvas"></canvas>
</template>

<script>
  export default {
    data () {
      return {}
    },
    created () {
    },
    // html挂载在页面后,进行数据初始化
    mounted () {
      let canvas = document.getElementById('skyCanvas')
      let ctx = canvas.getContext('2d')
      let w = canvas.width = window.innerWidth
      let h = canvas.height = window.innerHeight
      let hue = 255
      let stars = []
      let count = 0
      let maxStars = 250 //星星数量

      let canvas2 = document.createElement('canvas')
      let ctx2 = canvas2.getContext('2d')
      canvas2.width = 100
      canvas2.height = 100
      let half = canvas2.width / 2
      let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
      gradient2.addColorStop(0.025, '#CCC')
      gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
      gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
      gradient2.addColorStop(0.25, 'transparent')
      ctx2.fillStyle = gradient2
      ctx2.beginPath()
      ctx2.arc(half, half, half, 0, Math.PI * 2)
      ctx2.fill()

      function random(min, max) {
        if (arguments.length < 2) {
          max = min
          min = 0
        }

        if (min > max) {
          var hold = max
          max = min
          min = hold
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function maxOrbit(x, y) {
        var max = Math.max(x, y),
          diameter = Math.round(Math.sqrt(max * max + max * max))
        return diameter / 2;
        //星星移动范围，值越大范围越小，
      }

      var Star = function () {
        this.orbitRadius = random(maxOrbit(w, h))
        this.radius = random(60, this.orbitRadius) / 6
        //星星大小
        this.orbitX = w / 2
        this.orbitY = h / 2
        this.timePassed = random(0, maxStars)
        this.speed = random(this.orbitRadius) / 2000000
        //星星移动速度
        this.alpha = random(2, 10) / 65

        count++
        stars[count] = this
      }

      Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10)

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05
        }

        ctx.globalAlpha = this.alpha
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
        this.timePassed += this.speed
      }

      for (var i = 0; i < maxStars; i++) {
        new Star()
      }

      function animation() {
        ctx.globalCompositeOperation = 'destination-atop'
        ctx.globalAlpha = 0.2; //尾巴
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter'
        for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw()
        }
        window.requestAnimationFrame(animation)
      }

      animation()
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  #skyCanvas {
    width: 100% !important;
    height: 100% !important;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }
</style>
