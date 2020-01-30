<template>
  <div>
    <social-sharing url="https://vuejs.org/" :title="title" :description="description" inline-template>
      <div>
        <network :network="key">
          {{ key }}
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  name: 'socMedButton',
  props: {
    title: String,
    description: String,
    key: String
  },
  data () {
    return {
      imageDir: '../assets/fb-drawn.png'
    }
  },
  computed: {
    imagePath: function () {
      var path = ''
      switch (this.key) {
        case 'facebook':
          path = this.imageDir + 'fb-drawn.png'
          break
        case 'twitter':
          path = this.imageDir + 'tw-drawn.png'
          break
      }
      return path
    }
  }
}
</script>

<style>
.socmed-logo{
  height : 5vw;
  width: auto;
  padding: 2w;
}
</style>
