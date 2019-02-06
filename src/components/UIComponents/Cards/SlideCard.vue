<template>
  <div>
    <transition v-if="modalState.showed" @close="showdetails = false" name="modal">
      <div class="modal-mask" style="color: #337ab7 !important;">
        <div class="modal-wrapper">
          <div class="modal-container text-center">
            <div class="modal-header">
              <slot name="header">
                {{ modalSlide.title }}
              </slot>

              <a href="#" @click="showDetails">
                <i class="ti-close pull-right"></i>
              </a>
            </div>

            <div class="modal-body">
              <img style="width: 500px;" :src="modalSlide.path" :alt="modalSlide.title"/>

              <p class="description">
                {{ modalSlide.description }}
              </p>

              <p class="price"> Prix : {{ modalSlide.priceIT }} €</p>
            </div>

            <div class="modal-footer">
              <slot name="footer">
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class='card'>
      <div class='header'>
        <slot name='title'></slot>
        <p class='category'>
          <slot>{{ sliderTitle }}</slot>
        </p>
      </div>

      <div class='content'>
        <hooper :itemsToShow='3' :infiniteScroll='true' :autoPlay='true' :playSpeed='2000'>
          <slide v-for='slide in sliderData'>
            <img class="slide-img" :src='slide.path' :alt='slide.title' @click="showDetails(slide)">
          </slide>
          <hooper-pagination slot='hooper-addons'></hooper-pagination>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
  import '../../../../node_modules/hooper/dist/hooper.css'
  import '../../../../src/assets/sass/paper/_modal-images.scss'
  import ImageDetails from '../Images/ImageDetails'

  export default {
    name: 'slide-card',
    components: {
      ImageDetails,
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination
    },
    data () {
      return {
        slides: [],
        title: '',
        loading: true,
        showdetails: false,
        modalState: {
          type: Object
        },
        modalSlide: {
          type: Object
        }
      }
    },
    props: {
      sliderTitle: {
        type: String,
        default: ''
      },
      sliderData: {
        type: Array,
        default: () => []
      },
      slideOptions: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    methods: {
      showDetails (image) {
        if (image === undefined) {
          this.modalState.showed = false
        }

        this.modalState.showed = !this.modalState.showed
        this.modalSlide = image
      }
    },
    created () {
      this.modalState = {
        showed: false
      }
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

  .slide-img {
    width: 500px !important;
  }
</style>
