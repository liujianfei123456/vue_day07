<template>
  <div>
    <MyHeader title="tabbar案列"></MyHeader>
    <div style="margin:45px 0">
      <component :is='isName'></component>
    </div>
    <MyTabBar :list='tabList' @changeName='changeNameFn'></MyTabBar>
    
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'
// import MyTable from './components/MyTable.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
export default {
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },
  data() {
    return {
      isName:'MyGoodsList',
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
  methods:{
    changeNameFn(val){
      this.isName= val
    }
  }
}
</script>

<style></style>
