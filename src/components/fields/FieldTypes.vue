<template>
  <div class="field-types col-3 scroller">
    <h5 class="field-heading">Field Types</h5>
    <div class="filter-types form-group">
      <label>Filter Types</label>
      <input type="text" class="form-control" v-model="filter">
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
      }
    },
    components: {
      FeildTypeCard
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';

  .field-types {
    height: 100%;
    background-color: $darker-background;
    border-right: $border-style;
    overflow: auto;

    .filter-types {
      margin-bottom: 20px;
    }
  }
</style>
