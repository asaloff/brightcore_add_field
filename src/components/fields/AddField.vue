<template>
  <div class="container-fluid">
    <h1>{{title}} - Add Field</h1>
    <form @submit.prevent="onSubmit">
      <div class="add-field col-12" :style="'height: ' + height">
        <div class="add-field-row row">
          <FieldTypes />
          <FieldDetails />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  import FieldTypes from './FieldTypes';
  import FieldDetails from './FieldDetails';

  export default {
    data() {
      return {
        title: "Commercial Property",
        height: `${window.innerHeight - 180}px`
      };
    },
    components: {
      FieldTypes,
      FieldDetails
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';

  .container-fluid {
    padding: 0 30px;
  }

  h1 {
    font-size: 2em;
    font-weight: 300;
    padding: 25px 0 15px 0;
    color: #5b5d5d;
  }

  .add-field {
    border: $border-style;
    border-radius: 5px;
    background-color: $white;
    min-height: 440px;
  }

  .add-field-row {
    height: 100%;
  }
</style>
