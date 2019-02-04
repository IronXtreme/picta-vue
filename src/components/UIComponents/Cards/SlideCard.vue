<template>
  <div class="card">
    <div class="header">
      <slot name="title"></slot>
      <p class="category">
        <slot>{{ sliderTitle }}</slot>
      </p>
    </div>
    <div class="content">
      <hooper :itemsToShow="3" :infiniteScroll="true" :autoPlay="true" :playSpeed="2000">
        <slide v-for="slide in slides">
          <img :src="slide.path" :alt="slide.title">
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </div>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
  import '../../../../node_modules/hooper/dist/hooper.css'
  import FeedApi from '../../../services/api/Feed'

  export default {
    name: 'slide-card',
    components: {
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination,
      FeedApi
    },
    data () {
      return {
        slides: [],
        sliderTitle: ''
      }
    },
    props: {
      sliderTitle: {
        type: String,
        default: ''
      },
      sliderType: {
        type: String,
        default: ''
      },
      slideOptions: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    methods: {
      getSlides: function () {
        // this.slides = FeedApi.getSlides()
        this.slides = [
          {
            id: 1,
            title: 'test image 4',
            path: 'https://images-eu.ssl-images-amazon.com/images/I/517n-QOI5iL._AC_US200_.jpg'
          },
          {
            id: 2,
            title: 'test image 2',
            path: 'https://images-eu.ssl-images-amazon.com/images/I/512jHfHnwfL._AC_US200_.jpg'
          },
          {
            id: 3,
            title: 'test image 1',
            path: 'http://domainedesfinets.fr/v2/wp-content/uploads/2014/05/Les-Ocres-500x200.jpg'
          }
        ]
      },
      getTrendingSlides: function () {
        // this.trendingSlides = FeedApi.getTrendingSlides()
        this.slides = []
      },
      getLatestSlides: function () {
        // this.latestSlides = FeedApi.getLatestSlides()
        this.slides = [
          {
            id: 1,
            title: 'test image 1',
            path: 'https://images-eu.ssl-images-amazon.com/images/I/517n-QOI5iL._AC_US200_.jpg'
          },
          {
            id: 2,
            title: 'test image 2',
            path: 'https://images-eu.ssl-images-amazon.com/images/I/512jHfHnwfL._AC_US200_.jpg'
          },
          {
            id: 3,
            title: 'test image 3',
            path: 'http://domainedesfinets.fr/v2/wp-content/uploads/2014/05/Les-Ocres-500x200.jpg'
          }
        ]
      }
    },
    beforeMount: function () {
      let vm = this
      switch (vm.sliderType) {
        case 'trending':
          this.getTrendingSlides()
          break
        case 'latest':
          this.getLatestSlides()
          break
        default:
          this.getSlides()
      }

      this.sliderTitle = vm.sliderTitle
    }
  }
</script>

<style scoped>
  .hooper-slide {
    height: 200px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border: 2px solid #fff;
    font-size: 30px;
    border-radius: 10px;
  }
</style>
