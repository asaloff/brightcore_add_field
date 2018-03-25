<template>
  <div class="field-info col-8">
    <div class="field-info col-12">

      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Display Label</label>
            <input type="text" class="form-control" v-model="label" @blur="setReference()">
            <span class="small-info-text">For display purposes, spaces allowed</span>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label>Reference Name</label>
            <input type="text" class="form-control" v-model="reference">
            <span class="small-info-text">
              Used to reference in calculations,
              <span :class="referenceError()">no spaces allowed.</span>
            </span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Default Value</label>
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>

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
  import Tags from './Tags';

  export default {
    data() {
      return {
        label: '',
        reference: ''
      };
    },
    methods: {
      setReference() {
        this.reference = this.label.trim().toLowerCase().split(' ').join('-');
      },
      referenceError() {
        return this.reference.includes(' ') ? 'red' : '';
      }
    },
    components: {
      Tags
    }
  };
</script>

<style>
  @import '../../styles/index.scss';
  @import '../../styles/forms.scss';

  .field-info {
    padding-left: 0;
  }

  .red {
    color: red;
  }
</style>
