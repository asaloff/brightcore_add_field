<template>
  <div class="field-info col-8">
    <div class="field-info col-12">

      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Display Label</label>
            <input type="text" class="form-control" v-model="label" @blur="setLabelAndReference()">
            <span class="small-info-text">For display purposes, spaces allowed</span>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label>Reference Name</label>
            <input type="text" class="form-control" v-model="reference" @blur="setReference()">
            <span class="small-info-text">
              Used to reference in calculations,
              <span :class="validateReference()">no spaces allowed.</span>
            </span>
          </div>
        </div>
      </div>

      <DefaultValueInput />

      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Custom Validation</label>
            <input type="text" class="form-control" >
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
  import { mapActions } from 'vuex';
  import DefaultValueInput from './DefaultValueInput';
  import Tags from './Tags';

  export default {
    data() {
      return {
        label: '',
        reference: ''
      };
    },
    methods: {
      setLabelAndReference() {
        this.reference = this.label.trim().toLowerCase().split(' ').join('-');
        this.setDisplayLabel(this.label);
        this.setReferenceName(this.reference);
      },
      setReference() {
        this.reference = this.label.trim().toLowerCase().split(' ').join('-');
        this.setReferenceName(this.reference);
      },
      validateReference() {
        return this.reference.includes(' ') ? 'red' : '';
      },
      ...mapActions([
        'setDisplayLabel',
        'setReferenceName'
      ])
    },
    components: {
      DefaultValueInput,
      Tags
    }
  };
</script>

<style>
  @import '../../styles/index.scss';

  .field-info {
    padding-left: 0;
  }

  .red {
    color: red;
  }
</style>
