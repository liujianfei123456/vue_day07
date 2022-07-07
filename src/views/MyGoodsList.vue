<template>
  <div class="my-goods-list">
    <MyTable :arr="list">
      <template #title>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-focus
            v-model="scope.row.inputValue"
            v-if="scope.row.inputVisible"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-success btn-sm " style="margin-right:8px" v-show="isShow">
            <!-- <span class="badge badge-success">Success</span> -->
            编辑
          </button>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      isShow:'admin',
      list: [],
    }
  },
  created() {
    this.$axios({
      url: '/api/goods',
    }).then((res) => {
      // console.log(res.data.data);
      this.list = res.data.data
    })
  },
  methods: {
    delFn(id) {
      this.list = this.list.filter((ele) => ele.id != id)
    },
    enterFn(obj) {
        console.log(obj);
      if (obj.inputValue.trim() == '') {
        return alert('enter message')
      }
      obj.tags.push(obj.inputValue)
      obj.inputValue = ''
    },
  },
}
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
