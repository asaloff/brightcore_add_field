<template>
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
</template>

<script>
  export default {
    data() {
      return {
        customValidation: ''
      };
    },
    methods: {
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
  };
</script>
