import { defineStore } from 'pinia';

export const usePostsStore = defineStore('usePostsStore', {
  id: 0,

  // define state
  state: () => ({
    posts: [, 'post 1', 'post 2', 'post 3', 'post 4', 'post 5'],
  }),

  // ACCESSING GETTERS

  // 1.  via the "this" keyword using traditional function declaration
  //     and method shorthand.  cannot use arrow function
  //     does not work with arrow functions because
  //     of the way arrow functions treat the scope of "this"
  getters_wayOne: {
    // traditional function
    postsCount: function () {
      return this.posts.length;
    },
    // method shorthand
    postsCount() {
      return this.posts.length;
    },
    // cannot access state using "this" with an arrow function
    //X postsCount: ()=> this.posts.length
  },

  // 2.  via a state parameter on the getter function.
  //     this is meant to encourage use of arrow functions
  //     for short, precise getters
  getters: {
    // arrow function
    postsCount: (state) => state.posts.length,

    // use "this" to access other getters (no arrow functions)
    // but this code doesn't work
    // postsCountMessage() {return ${this.postsCount} posts available}
  },
  actions: {},
});
