<template>
  <div
    :class="`field-type-card col-12 ${checkSelected($store.state.addField.selectedField)}`"
    @click="switchTypes()"
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
      switchTypes() {
        this.setSelectedFieldType(this.type);
        this.clearDefaultFieldValue();
      },
      ...mapActions([
        'setSelectedFieldType',
        'clearDefaultFieldValue'
      ])
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';

  .field-type-card {
    border: $border-style;
    border-radius: 5px;
    background-color: $white;
    padding-top: 15px;
    margin-bottom: 10px;
    cursor: pointer;

    h4 {
      font-weight: 600;
      font-size: 1.1em;
      margin-bottom: 15px;

      i {
        color: $dark-teal;
      }
    }

    p {
      font-size: 12px;
    }

    &:hover, &.selected {
      background-color: $main-teal;
      color: #fff;
      h4 > i, h6 { color: #fff; }
    }
  }
</style>
