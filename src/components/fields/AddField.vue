<template>
  <div class="container-fluid add-field-container">
    <h1>{{title}} - Add Field</h1>
    <form @submit.prevent="onSubmit">
      <div class="add-field col-12">
        <div class="add-field-row row">
          <FieldTypes />
          <FieldDetails />
        </div>
      </div>
      <AddFieldCommitButtons />
    </form>
  </div>
</template>

<script>
  import FieldTypes from './FieldTypes';
  import FieldDetails from './FieldDetails';
  import AddFieldCommitButtons from './AddFieldCommitButtons';

  export default {
    data() {
      return {
        title: "Commercial Property"
      };
    },
    methods: {
      onSubmit() {
        return false;
      }
    },
    components: {
      FieldTypes,
      FieldDetails,
      AddFieldCommitButtons
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';
  @import '../../styles/buttons.scss';

  .add-field-container {
    padding: 0 30px;

    .add-field {
      border: $border-style;
      border-radius: 5px;
      background-color: $white;
      min-height: 440px;
      margin-bottom: 15px;
      height: calc(100vh - 180px);
    }

    .add-field-row {
      height: 100%;
    }
  }
</style>
