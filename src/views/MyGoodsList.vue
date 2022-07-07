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
            v-model="scope.row.inputValue"
            v-if="scope.row.inputVisible"
            v-focus
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
            style="margin-right: 8px"
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="clickFn(scope.row.id)">
            删除
          </button>
          <button class="btn btn-danger btn-sm" v-permission='power'>编辑</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable';
export default {
  data() {
    return {
      list: [],
      power:'admin'
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/goods',
      }).then((res) => {
        // console.log(res.data.data);
        this.list = res.data.data;
      });
    },
    clickFn(val) {
      // console.log(val);
      this.list = this.list.filter((ele) => ele.id !== val);
    },
    enterFn(obj) {
      if (obj.inputValue.trim() == '') alert('请输入内容');
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    },
  },
  directives: {
    permission: {
      inserted(ele, binding, vnode) {
        const arr = ['admin', 'test', 'developer'];
        if (arr.includes(vnode.context[binding.expression])) {
          ele.style.display = 'inline-block';
        } else {
          ele.style.display = 'none';
        }
      },
    },
  },
};
</script>

<style></style>
