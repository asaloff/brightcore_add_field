<template>
    <div class="field-info col-8 scroller">
      <div class="field-info col-12">
        <DisplayLabelInput />
        <div class="row">
          <AddOptionsInput />
          <DefaultValueInput />
        </div>
        <SelectOptions v-show="$store.state.addField.selectedField === 'Select'"/>
        <CustomValidationsInput />
        <Tags />
      </div>
    </div>
</template>

<script>
  import DisplayLabelInput from './inputs/DisplayLabelInput';
  import AddOptionsInput from './inputs/AddOptionsInput';
  import DefaultValueInput from './inputs/DefaultValueInput';
  import CustomValidationsInput from './inputs/CustomValidationsInput';
  import SelectOptions from './SelectOptions';
  import Tags from './Tags';

  export default {
    components: {
      DisplayLabelInput,
      AddOptionsInput,
      DefaultValueInput,
      SelectOptions,
      CustomValidationsInput,
      Tags
    }
  };
</script>

<style>
  .field-info.col-8 {
    padding-left: 0;
    overflow: auto;
  }
</style>
