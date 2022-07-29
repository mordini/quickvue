<template>
  <p>{{ postsCount }} posts available</p>
</template>

<script>
// import store for use
import usePostsStore from '@/stores/PostsStore';
export default {
  setup() {
    const PostsStore = usePostsStore();
    return { postsCount: PostsStore.postsCount };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
