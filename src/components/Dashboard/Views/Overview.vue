<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <slide-card id="slides">

        </slide-card>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <slide-card id="trending-slides">

        </slide-card>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <slide-card id="latest-slides" :sliderType="'latest'" :sliderTitle="'Les dernières actualités'">

        </slide-card>
      </div>
    </div>
  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import SlideCard from 'components/UIComponents/Cards/SlideCard.vue'

  export default {
    components: {
      StatsCard,
      ChartCard,
      SlideCard
    },
    data () {
      return {
      }
    }
  }

</script>
<style>

</style>
