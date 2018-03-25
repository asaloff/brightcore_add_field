<template>
  <div class="select-options">
    <label>Current Options</label>
    <span class="small-info-text" v-show="!$store.state.addField.form.selectOptions.length">
      No options yet. Add them in the above input.
    </span>
    <span
      class="badge"
      v-for="(option, index) in $store.state.addField.form.selectOptions"
    >
      {{option}}
      <span class="close" @click="removeSelectOption(index)">&times;</span>
    </span>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: mapActions([
      'removeSelectOption'
    ])
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';

  .select-options {
    margin-bottom: 10px;

    label {
      display: block;
    }
  }
</style>
