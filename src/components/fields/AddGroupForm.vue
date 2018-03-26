<template>
  <div v-if="addGroupShown($store)" class="add-group-form card col-4">
    <div class="input-group">
      <input type="text" class="form-control" v-model="input">
      <div class="input-group-append">
        <span class="btn btn-primary" @click="addGroup()">Add</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        input: ''
      };
    },
    methods: {
      ...mapActions([
        'addFieldGroup',
        'toggleAddFieldGroup'
      ]),
      addGroupShown(store) {
        const { addField } = store.state;
        return !!addField.selectedField && addField.showAddGroup;
      },
      addGroup() {
        if (!this.input) return;
        this.addFieldGroup(this.input);
        this.input = '';
        this.toggleAddFieldGroup();
      }
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';

  .add-group-form.card {
    padding: 10px 10px 5px;
    margin: 10px 0;
    border: $border-style;
    background-color: $darker-background;

    .btn {
      padding: 7px 11px;
    }
  }
</style>
