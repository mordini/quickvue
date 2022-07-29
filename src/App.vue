<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TestComponent feature="X" />
</template>

<script setup lang="ts">
import TestComponent from './components/TestComponent.vue';
import { useCounterStore } from './stores/useCounter'
const counterStore = useCounterStore();
const { counter, name } = counterStore;
export default {
  name: 'App',
  components: {
    TestComponent
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
