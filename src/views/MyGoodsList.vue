<template>
  <div class="my-goods-list">
    <MyTable :arr="list">
      <template #header>
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
            v-if="scope.row.inputVisible"
            v-focus
            v-model="scope.row.inputValue"
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
          <button
            class="btn btn btn-info btn-sm"
            style="margin-right: 20px"
            v-permission="power"
          >
            编辑
          </button>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>
<script>
import MyTable from '../components/MyTable.vue';
export default {
  data() {
    return {
      power: 'admin',
      list: [],
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      url: 'api/goods',
    }).then((res) => (this.list = res.data.data));
  },
  computed: {},
  methods: {
    del(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    enterFn(obj) {
      if (!obj.inputValue.trim()) return alert('please enter');
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    },
  },
};
</script>
<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
