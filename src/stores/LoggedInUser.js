import { defineStore } from 'pinia';

export const useLoggedInUserStore = defineStore('useLoggedInUser', {
  id: 0,

  // define state
  state: () => ({
    name: 'John Doe',
    email: 'fake@notreal.com',
    username: 'jd123',
  }),

  getters: {},
  actions: {},
});
