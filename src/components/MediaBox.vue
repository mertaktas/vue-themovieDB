<template>
  <div class="media">
    <CardLoading v-show="cardLoading" :key="i" v-for="i in 12" />
    <Card v-for="(data, index) in datas" :data="data" :key="index" />
   </div>
</template>

<script>
import Card from '@/components/Card.vue'
import CardLoading from '@/components/CardLoading.vue'
import { mapState } from "vuex";
export default {
    data() {
      return {
        loadCard: null
      }
    },
    name: 'mediaBox',
    props: {
      datas: Object,
      loading: Boolean
    },
    components: {
        Card,
        CardLoading,
    },
    computed: {
      ...mapState(['cardLoading']),
    }
}
</script>

<style lang="scss" scoped>

.media {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 40px;
    margin-bottom: 10px;
  }
</style>