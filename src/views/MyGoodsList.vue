<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-focus
            v-model="scope.row.inputValue"
            v-if="scope.row.inputShow"
            @blur="scope.row.inputShow = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputShow = true"
          >
            +Tag
          </button>
          <span
            style="margin-right: 8px"
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
          <button class="btn btn-primary btn-sm " v-permission="power" >
            编辑
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
//拿数据
//created
import MyTable from '../components/MyTable.vue'
export default {
  data() {
    return {
      list: [],
      power:'admin'
    }
  },
  components: {
    MyTable,
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/goods',
      }).then((res) => {
        console.log(res.data.data)
        res.data.data.forEach((ele) => {
          ele.inputShow = false
        })
        this.list = res.data.data
      })
    },
    del(id) {
      const index = this.list.findIndex((obj) => obj.id === id)
      this.list.splice(index, 1)
    },
    enterFn(obj) {
      // 回车
      // console.log(obj.inputValue);
      if (obj.inputValue.trim() == '') {
        return alert('请输入数据')
      }

      obj.tags.push(obj.inputValue) // 表单里的字符串状态tags数组
      obj.inputValue = ''
    },
  },
}
</script>

<style></style>
