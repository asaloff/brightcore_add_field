<template>
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
</template>

<script>
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
      validateReference() {
        return this.reference.includes(' ') ? 'invalid' : '';
      }
    }
  };
</script>
