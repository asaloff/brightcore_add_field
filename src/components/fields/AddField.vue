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
      <div class="add-field-buttons col-12">
        <div class="row justify-content-between">
          <div class="col-4 btn-col">
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
          <div class="col-4 btn-col">
            <div class="row justify-content-end">
              <button class="btn btn-default btn-after">Cancel Changes</button>
              <button class="btn btn-danger">Delete Input</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import FieldTypes from './FieldTypes';
  import FieldDetails from './FieldDetails';
  import serialize from 'form-serialize';


  export default {
    data() {
      return {
        title: "Commercial Property",
        height: `${window.innerHeight - 180}px`
      };
    },
    methods: {
      onSubmit(e) {
        const form = serialize(e.target, { hash: true });
        debugger;
      }
    },
    components: {
      FieldTypes,
      FieldDetails
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';
  @import '../../styles/buttons.scss';

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
    margin-bottom: 15px;
  }

  .add-field-row {
    height: 100%;
  }

  .add-field-buttons {
    margin-bottom: 15px;
  }
</style>
