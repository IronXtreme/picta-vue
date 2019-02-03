<template>
  <div class="card">
    <div class="header">
      <slot name="title"></slot>
      <p class="category">
        <slot name="subTitle"></slot>
      </p>
    </div>
    <div class="content">
      <hooper :itemsToShow="3" :infiniteScroll="true" :autoPlay="true" :playSpeed="2000">
        <slide>
          <img src="http://domainedesfinets.fr/v2/wp-content/uploads/2014/05/Les-Ocres-500x200.jpg" alt="test">
        </slide>
        <slide>
          <img src="http://ekladata.com/2mnuNiaJzGojoYYOlhFURVpgJ0A@500x200.jpg" alt="test">
        </slide>
        <slide>
          <img src="http://www.tangram-architectes.com/wp-content/uploads/2018/11/18.09-Groupe-Scolaire-Simone-Veil-Vue-rue-07-%C2%A9SOImages-projet-500x200.jpg" alt="test">
        </slide>
        <slide>
          <img src="http://a54.idata.over-blog.com/500x247/2/14/41/49/slg-paysage/maisons-eclusieres/120908Frise-APS.jpg" alt="test">
        </slide>
        <slide>
          <img src="http://delapaztur.tur.ar/test/wp-content/uploads/2018/08/banner-2-2-500x200.jpg" alt="test">
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
  </div>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper'
  import '../../../../node_modules/hooper/dist/hooper.css'

  export default {
    name: 'slide-card',
    components: {
      Hooper,
      Slide,
      HooperNavigation,
      HooperPagination
    },
    props: {
      headerTitle: {
        type: String,
        default: 'Slide title'
      },
      slideOptions: {
        type: Object,
        default: () => {
          return {}
        }
      },
      slideData: {
        type: Object,
        default: () => {
          return {
          }
        }
      }
    },
    data () {
      return {
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
</style>
