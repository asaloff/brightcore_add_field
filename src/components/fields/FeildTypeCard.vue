<template>
  <div
    :class="`field-card col-12 ${checkSelected($store.state.addField.selectedField)}`"
    @click="setSelectedFieldType(type)"
  >
    <h4 class="type-card-heading">
      <i :class="`fa ${type.icon}`"></i>
      {{type.name}}
    </h4>
    <h6 class="small-info-text">Definition</h6>
    <p>{{type.definition}}</p>
    <h6 class="small-info-text">Default Display</h6>
    <p>{{type.display}}</p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['type'],
    methods: {
      checkSelected(stateSelected) {
        return this.type.name === stateSelected ? 'selected' : '';
      },
      ...mapActions([
        'setSelectedFieldType'
      ])
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';
  @import '../../styles/card.scss';
</style>
