<template>
  <div>
    <MyHeader title="TabBar案例"></MyHeader>
    <div style="margin: 50px 0" >
      <component :is="ComName"> </component>
    </div>

    <MyTabBar :list="tabList" @toggle='toggleFN'></MyTabBar>
  </div>
</template>
<script>
import MyHeader from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
export default {
  data() {
    return {
      ComName: 'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    }
  },
  components: {
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
    MyHeader,
    MyTabBar,
  },
  mounted() {},
  computed: {},
  methods: {
    toggleFN(val){
      this.ComName=val
    }
  },
}
</script>
<style scoped></style>