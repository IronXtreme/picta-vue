<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <slide-card :key="sliderKey" :sliderData="slides" :sliderTitle="'Les actualités'">

        </slide-card>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <slide-card :key="sliderTrendingKey" :sliderData="trendingSlides" :sliderTitle="'Les plus populaires'">

        </slide-card>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <slide-card id="latest-slides" :key="sliderLatestKey" :sliderData="latestSlides" :sliderTitle="'Les dernières actualités'">

        </slide-card>
      </div>
    </div>
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import SlideCard from 'components/UIComponents/Cards/SlideCard.vue'
  import FeedApi from '../../../services/api/Feed'

  export default {
    components: {
      StatsCard,
      ChartCard,
      SlideCard,
      FeedApi
    },
    data () {
      return {
        slides: [],
        trendingSlides: [],
        latestSlides: [],
        sliderKey: 0,
        sliderTrendingKey: 0,
        sliderLatestKey: 0
      }
    },
    beforeMount () {
      this.getSlides()
      this.getTrendingSlides()
      this.getLatestSlides()
    },
    methods: {
      getSlides () {
        FeedApi.get()
          .then(response => {
            this.slides = response.data
            this.sliderKey += 1
          }).catch(error => console.log(error))
      },
      getTrendingSlides: function () {
        FeedApi.getTrending()
          .then(response => {
            this.trendingSlides = response.data
            this.sliderTrendingKey += 1
          }).catch(error => console.log(error))
      },
      getLatestSlides: function () {
        FeedApi.getLatest()
          .then(response => {
            this.latestSlides = response.data
            this.sliderLatestKey += 1
          }).catch(error => console.log(error))
      }
    }
  }

</script>
<style>

</style>
