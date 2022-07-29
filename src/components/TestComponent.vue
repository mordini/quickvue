<template>
  <div class="">
    <h1>Hello, my name is {{ user.name }}</h1>
  </div>
</template>

<script>
// import store for use
import useLoggedInUserStore from '@/stores/loggedInUser';
export default {
  setup() {
    const user = useLoggedInUserStore();

    // access it directly in setup
    // we don't have to use user.state.name
    user.name;

    // or return it to access it in the template
    return user;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
