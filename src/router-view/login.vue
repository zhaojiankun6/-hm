<template>
  <div>
    <button type="button" @click.prevent="fn">登录页面</button>
  </div>
</template>

<script>
export default {
  methods: {
    fn () {
      this.$router.push('/login/add')
    }
  }
}
</script>

<style>

</style>
