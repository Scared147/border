<template>
  <div>
    <h1>这是一个自定义页面</h1>
    <p>欢迎来到我的博客！</p>
    <el-button type="success">按钮</el-button>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
  data () {
    return {
      value: new Date()
    }
  },
  created () {
    this.getMapInFo()//页面打开先执行一次的方法
  },
  //方法
  methods: {
    async getMapInFo () {
      const response = await this.$axios.get('/api',{});
      console.log(response)
    }
  }
}
</script>