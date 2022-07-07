<template>
  <div>
    MyGoodsSearch <br />
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        a:{{ item.a }} b:{{ item.b }}
      </li>
    </ul>
    <button @click="clickFn">click</button>

    <div>info:a:{{ info.a }}</div>
    <div>info:b:{{ info.b }}</div>
    <button @click="clickFn1">click11</button>
  </div>
</template>

<script>
export default {
  name: "TabbarMyGoodsSearch",

  data() {
    return {
      arr: [
        {
          a: 1,
        },
      ],
      info: {
        a: 1,
      },
    };
  },

  mounted() {},

  methods: {
    clickFn() {
      // this.arr[0].a = 11000;
      this.arr[0].b = 10000;
      console.log(this.arr[0]);
    },
    clickFn1() {
      // this.info.a = 1;
      this.info.b = 12;
      console.log(this.info);
    },
  },
};
</script>

<style scoped></style>
