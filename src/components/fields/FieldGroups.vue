<template>
  <div class="field-groups col-4 scroller">
    <div class="add-group-head">
      <h5 class="field-heading">Field Groups</h5>
      <span @click="toggleAddFieldGroup()" class="add-group-button btn btn-primary">
        {{toggleSymbol($store)}}
      </span>
    </div>
    <span class="small-info-text">Choose a group for this input</span>
    <FieldGroupCard
      v-for="(fieldGroup, index) in $store.state.addField.fieldGroups"
      :fieldGroup="fieldGroup"
      :key="index"
    />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import FieldGroupCard from './FieldGroupCard';
  import he from 'he';

  export default {
    methods: {
      ...mapActions([
        'toggleAddFieldGroup'
      ]),
      toggleSymbol(store) {
        return store.state.addField.showAddGroup ? he.decode('&times;') : he.decode('&plus;');
      }
    },
    components: {
      FieldGroupCard
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';

  .field-groups {
    height: 100%;
    border: $border-style;
    border-radius: 5px;
    background-color: $darker-background;
    overflow-y: scroll;
    align-items: flex-end

    h5 {
      font-size: 1em;
      margin-top: 15px;
      margin-bottom: 0;
    }

    .add-group-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
</style>
