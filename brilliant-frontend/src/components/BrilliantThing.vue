<template>
  <div class="BrilliantThing">
      <div class="row">
          <div class="brilliant-header">
              {{ header }}
          </div>
      </div>
      <div class="row">
        <div class="brilliant-text">
            #{{brilliantThing.id}} {{ brilliantThing.desc }}
        </div>
      </div>
      <div class="row">
        <SocMedButton v-for="network in socialMediaNetworks" v-bind:title="post.title"
          v-bind:description="post.description"
          v-bind:key="network" />
      </div>
  </div>
</template>

<script>
import SocMedButton from './SocMedButton'

export default {
  name: 'brilliantThing',
  components: {
    SocMedButton
  },
  data () {
    return {
      header: 'Be Happy About...',
      brilliantThing: {
        id: 1,
        desc: 'The Smell of Burning Corpses'
      },
      socialMediaNetworks: [
        'facebook',
        'twitter'
      ]
    }
  },
  computed: {
    post: function () {
      return {
        title: 'Check out my brilliant thing',
        description: `#${this.brilliantThing.id} ${this.brilliantThing.desc} `
      }
    }
  }
}
</script>

<style>
.brilliant-header{
  font-size : 3vw;
}
.brilliant-text{
  font-size : 5vw;
}

</style>
