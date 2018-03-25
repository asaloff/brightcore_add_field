<template>
  <div class="field-details col-9">
    <h5 class="field-heading" v-show="!!$store.state.addField.selectedField">
      Field Details
    </h5>
    <h5 class="field-heading" v-show="!$store.state.addField.selectedField">
      Please select a field type...
    </h5>

    <div class="selected-type">
      <small v-show="!!$store.state.addField.selectedField">
        Selected Type: <strong>{{$store.state.addField.selectedField}}</strong>
      </small>
    </div>
    <div class="col-12 field-details-content" v-show="!!$store.state.addField.selectedField">
      <div class="row">
        <FieldInfo />
        <FieldGroups />
      </div>
    </div>
  </div>
</template>

<script>
  import FieldInfo from './FieldInfo';
  import FieldGroups from './FieldGroups';

  export default {
    components: {
      FieldInfo,
      FieldGroups
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';
  @import '../../styles/forms.scss';

  .field-details {
    h5.field-heading {
      margin-bottom: 0;
    }

    .selected-type {
      margin-bottom: 10px;
    }

    .field-details-content {
      height: calc(100% - 75px);
      padding-bottom: 15px;

      .row {
        height: 100%
      }
    }
  }

</style>
