<template>
  <div
    :class="`field-card group-card col-12 ${checkSelected($store.state)}`"
    @click="setFieldGroup(fieldGroup)"
  >
    <span class="group-name">{{fieldGroup.name}}</span>
    <span class="small-info-text">{{displayFieldAmount()}}</span>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['fieldGroup'],
    methods: {
      ...mapActions([
        'setFieldGroup'
      ]),
      displayFieldAmount() {
        const amount = this.fieldGroup.fields.length;
        return amount === 1 ? '1 other field' : `${amount} other fields`;
      },
      checkSelected(state) {
        const selected = state.addField.selectedFieldGroup;
        return selected && selected.name === this.fieldGroup.name ? 'selected' : '';
      }
    }
  };
</script>
