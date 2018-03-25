<template>
  <div class="row">
    <div class="col-6">
      {{$store.state.addField.form}}
      <div class="form-group">
        <label>Default Value</label>
        <input
          v-model="inputValue"
          v-show="$store.state.addField.selectedField !== 'Select'"
          @blur="formatValue($store.state.addField.selectedField)"
          :type="getType($store.state.addField.selectedField)"
          class="form-control"
        >
        <select
          v-model="inputValue"
          v-show="$store.state.addField.selectedField === 'Select'"
          @blur="formatValue($store.state.addField.selectedField)"
          class="form-control"
        >

        </select>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        inputValue: ''
      };
    },
    methods: {
      ...mapActions([
        'setDefaultFieldValue'
      ]),
      formatValue(type) {
        if (type === 'Number') {
          this.inputValue = parseInt(this.inputValue) || '';
        } else if (type === 'Currency') {
          this.inputValue = parseFloat(this.inputValue).toFixed(2) || '';
        }

        this.setDefaultFieldValue(this.inputValue);
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
