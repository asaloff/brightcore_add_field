<template>
  <div class="col-6">
    {{$store.state.addField.form.defaultValue}}
    <div class="form-group">
      <label>Default Value</label>
      <input
        v-model="inputValue"
        v-if="$store.state.addField.selectedField !== 'Select'"
        @blur="formatValue($store.state.addField.selectedField)"
        :type="getType($store.state.addField.selectedField)"
        name="default-value"
        class="form-control"
      >
      <select
        v-model="inputValue"
        v-if="$store.state.addField.selectedField === 'Select'"
        @blur="formatValue($store.state.addField.selectedField)"
        name="default-value"
        class="form-control"
      >
        <option value="" selected></option>
        <option v-for="option in $store.state.addField.form.selectOptions">
          {{option}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputValue: ''
      };
    },
    methods: {
      formatValue(type) {
        if (type === 'Number') {
          this.inputValue = parseInt(this.inputValue) || '';
        } else if (type === 'Currency') {
          this.inputValue = parseFloat(this.inputValue).toFixed(2) || '';
        }
      },
      getType(typeString) {
        switch (typeString) {
          case 'Text':
          case 'VIN':
            return 'text';
          case 'Date':
            return 'date';
          case 'Number':
          case 'Currency':
            return 'number';
          default:
            return 'text';
        }
      }
    }
  };

</script>
