<template>
  <div class="col-6" v-show="$store.state.addField.selectedField === 'Select'">
    <div class="form-group">
      <label>Add Select Option</label>
      <input type="text" class="form-control" v-model.trim="option" @keydown.enter.prevent="addOption()">
      <span class="small-info-text">Input value and press enter to add it to the options</span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        option: ''
      };
    },
    methods: {
      ...mapActions([
        'addSelectOption'
      ]),
      addOption() {
        if (this.option) this.addSelectOption(this.option);
        this.option = '';
      }
    }
  };
</script>
