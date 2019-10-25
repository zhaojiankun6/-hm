<template>
  <div></div>
</template>

<script>
export default {
  directives: {
    focus: {
      inserted (el) {
        el.children[0].focus()
      }
    }
  }
}
</script>

<style>

</style>
