<template>
    <div class="player-container">
        <vue3-video-player @play="playFunc" @pause="pauseFunc" :src="source">
        </vue3-video-player>
    </div>
</template>
<script>
const videoSource = [
  {
    src: 'https://static.smartisanos.cn/common/video/smartisan-tnt-jianguo.mp4',
    resolution: '240p'
  },
  {
    src: 'https://static.smartisanos.cn/common/video/smartisan-tnt-jianguo.mp4',
    resolution: '360p'
  }, {
    src: 'https://static.smartisanos.cn/common/video/smartisan-tnt-jianguo.mp4',
    resolution: '720p'
  }, {
    src: 'https://static.smartisanos.cn/common/video/smartisan-tnt-jianguo.mp4',
    resolution: '1080p'
  }
]

export default {
    data(){
        return{
            source:videoSource
        }
    },
    methods: {
      
    }
}
</script>
<style scoped></style>