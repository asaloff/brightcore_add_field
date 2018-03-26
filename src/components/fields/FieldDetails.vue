<template>
  <div class="field-details col-9">
    <div class="field-details-head">
      <h5 class="field-heading" v-if="!$store.state.addField.selectedField">
        Please select a field type...
      </h5>
      <div>
        <h5 class="field-heading" v-if="!!$store.state.addField.selectedField">
          Field Details
        </h5>
        <div class="selected-type">
          <small v-if="!!$store.state.addField.selectedField">
            Selected Type: <strong>{{$store.state.addField.selectedField}}</strong>
          </small>
        </div>
      </div>
      <AddGroupForm />
    </div>
    <div class="col-12 field-details-content" v-if="!!$store.state.addField.selectedField">
      <div class="row">
        <FieldInfo />
        <FieldGroups />
      </div>
    </div>
  </div>
</template>

<script>
  import AddGroupForm from './AddGroupForm';
  import FieldInfo from './FieldInfo';
  import FieldGroups from './FieldGroups';

  export default {
    components: {
      AddGroupForm,
      FieldInfo,
      FieldGroups
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';
  @import '../../styles/forms.scss';

  .field-details {
    .field-details-head {
      display: flex;
      justify-content: space-between;
    }

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
