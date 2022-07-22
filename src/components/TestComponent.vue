<template>
  <div class="">
    <h1>Use me for testing {{ feature }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  props: {
    feature: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
