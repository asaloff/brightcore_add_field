<template>
  <div id="app">
    <Nav />
    <AddField />
  </div>
</template>

<script>
  import Nav from './components/Nav';
  import AddField from './components/fields/AddField';

  export default {
    components: {
      Nav,
      AddField
    }
  };
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>
