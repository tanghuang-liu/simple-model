<template>
  <el-dialog
    width="30%"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div class="trans"><el-button type="text" @click="goto">>>>转去登录</el-button></div>
  </el-dialog>
</template>
<script>
export default {
  name: 'LoginDialog',
  methods: {
    goto() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.trans{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  ::v-deep.el-button{
   font-size: 25px;
   font-weight: bold;
  }
}
</style>
