<template>
  <div id="app">
    <Todos v-bind:todos="todos"/>
  </div>
</template>

<script>
import Todos from './components/Todos';

export default {
  name: 'App',
  components: {
    Todos
  },
  data(){
    return {
      todos: [
        {
          id: 1,
          title: "Todo One",
          complete: true
        },
        {
          id: 2,
          title: "Todo Two",
          complete: true
        },
        {
          id: 3,
          title: "Todo Three",
          complete: false
        },
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 4;
}
</style>
