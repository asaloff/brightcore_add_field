<template>
    <div class="field-info col-8 scroller">
      <div class="field-info col-12">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label>Display Label</label>
              <input type="text" name="display-label" class="form-control" v-model="label" @blur="setReference()">
              <span class="small-info-text">For display purposes, spaces allowed</span>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label>Reference Name</label>
              <input
                type="text"
                name="reference"
                :class="`form-control ${validateReference()}`"
                v-model="reference"
              >
              <span class="small-info-text">
                Used to reference in calculations,
                <span :class="validateReference()">no spaces allowed</span>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <AddOptionsInput />
          <DefaultValueInput />
        </div>
        <SelectOptions v-show="$store.state.addField.selectedField === 'Select'"/>
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label>Custom Validation</label>
              <input
                v-model="customValidation"
                type="text"
                name="custom-validation"
                :class="`form-control ${validateRegex()}`"
              >
              <span class="small-info-text">
                Any <span :class="validateRegex()">regex pattern</span> can be used for custom validation
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <Tags />
        </div>
      </div>
    </div>
</template>

<script>
  import AddOptionsInput from './AddOptionsInput';
  import DefaultValueInput from './DefaultValueInput';
  import SelectOptions from './SelectOptions';
  import Tags from './Tags';

  export default {
    data() {
      return {
        label: '',
        reference: '',
        customValidation: ''
      };
    },
    methods: {
      setReference() {
        this.reference = this.label.trim().toLowerCase().split(' ').join('-');
      },
      validateReference() {
        return this.reference.includes(' ') ? 'invalid' : '';
      },
      validateRegex() {
        if (this.customValidation === '') return;
        if (!this.customValidation.startsWith('/')) return 'invalid';
        const segs = this.customValidation.slice(1).split('/');
        try {
          new RegExp(segs[0], segs[1]);
        } catch(e) {
          return 'invalid';
        }
      }
    },
    components: {
      AddOptionsInput,
      DefaultValueInput,
      SelectOptions,
      Tags
    }
  };
</script>

<style lang='scss'>
  @import '../../styles/index.scss';

  .field-info.col-8 {
    padding-left: 0;
    overflow: auto;
  }
</style>
