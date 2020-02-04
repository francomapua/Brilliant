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
        <social-sharing :url="post.url" :title="post.title" :description="post.description" inline-template>
          <div>
            <network network="facebook">
              <img class="socmed-logo" src="../assets/fb-drawn.png" />
            </network>
            <network network="twitter">
              <img class="socmed-logo" src="../assets/tw-drawn.png" />
            </network>
          </div>
        </social-sharing>
      </div>
      <div class="row">
        <button class='handDrawnBtn lined thick' v-on:click="getBrilliantThing">One more!</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'brilliantThing',
  data () {
    return {
      header: 'Be Happy About...',
      brilliantThing: {},
      socMedNetworks: [
        'facebook',
        'twitter'
      ]
    }
  },
  computed: {
    post: function () {
      return {
        url: window.location.url,
        title: `#${this.brilliantThing.id} ${this.brilliantThing.desc} Check out my brilliant thing`,
        description: `#${this.brilliantThing.id} ${this.brilliantThing.desc} `
      }
    }
  },
  methods: {
    getBrilliantThing () {
      var dummyData = [
        { id:	1, desc: 'Ice cream' },
        { id:	2, desc: 'Samgyupsal' },
        { id:	3, desc: 'Puppies that lick you' },
        { id:	4, desc: 'Al dente pasta' },
        { id:	5, desc: 'Rollercoaster rides' },
        { id:	6, desc: 'Freshly washed laundry' },
        { id:	7, desc: 'Discovering a new song' },
        { id:	8, desc: 'Video games' },
        { id:	9, desc: 'Chocolate milkshares' },
        { id:	10, desc: 'Beach trips' },
        { id:	11, desc: 'The smell of new books' },
        { id:	12, desc: 'The smell of fresh paint' },
        { id:	13, desc: 'The smell of fresh bread' },
        { id:	14, desc: 'Hearing your first compliment in a while' },
        { id:	15, desc: 'Massages' },
        { id:	16, desc: 'Getting the thread through the needle on the first try' },
        { id:	17, desc: 'Waking up seconds before your alarm goes off' },
        { id:	18, desc: 'Getting the USB in on the first try' },
        { id:	19, desc: 'Merging without and conflicts' },
        { id:	20, desc: 'Having your code run on the first try' },
        { id:	21, desc: 'Placing first in a competition' },
        { id:	22, desc: 'Jamming' },
        { id:	23, desc: 'Cooking' },
        { id:	24, desc: 'Kobe' }
      ]

      var cacheId = this.brilliantThing.id
      while (this.brilliantThing.id === cacheId) {
        this.brilliantThing = dummyData[Math.floor(Math.random() * dummyData.length)]
      }
    }
  },
  mounted () {
    this.getBrilliantThing()
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
.socmed-logo{
  height : 4vw;
  width: auto;
  margin: 1vw;
}

.handDrawnBtn {
      background:transparent;
      font-family:'Gloria Hallelujah', cursive;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #41403E;
      padding:0.5rem 0.5rem;
      margin:0 0.5rem;
      font-size:3vw;

      border-top-left-radius: 255px 15px;
      border-top-right-radius: 15px 225px;
      border-bottom-right-radius: 225px 15px;
      border-bottom-left-radius:15px 255px;
      border:solid 3px #41403E;
}
.handDrawnBtn :hover{
  box-shadow:2px 8px 4px -6px hsla(0,0%,0%,.3);
}

</style>
