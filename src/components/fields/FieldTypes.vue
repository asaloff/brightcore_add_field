<template>
  <div class="field-types col-3">
    <h5 class="field-heading">Field Types</h5>
    <div class="filter-types form-group">
      <label>Filter Types</label>
      <input type="text" class="form-control" v-model="filter">
    </div>
    <div class="selected-type">
      <small v-show="!!$store.state.addField.selectedField">
        Currently selected: {{uppercaseFirst($store.state.addField.selectedField)}}
      </small>
    </div>
    <FeildTypeCard
      v-for="type in $store.state.addField.fieldTypes"
      v-show="filterType(type)"
      :key="type.name"
      :type="type"
    />
  </div>
</template>

<script>
  import FeildTypeCard from './FeildTypeCard';
  import { uppercaseFirst } from '../../helpers/format';

  export default {
    data() {
      return {
        filter: ''
      };
    },
    methods: {
      filterType(type) {
        return this.filter === '' ||
          type.name.toLowerCase().includes(this.filter.toLowerCase());
      },
      uppercaseFirst
    },
    components: {
      FeildTypeCard
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';
  @import '../../styles/forms.scss';

  .field-types {
    height: 100% !important;
    background-color: $darker-background;
    border-right: $border-style;
    overflow: scroll;

    .filter-types {
      margin-bottom: 5px;
    }

    .selected-type {
      margin-bottom: 10px;
    }
  }
</style>
