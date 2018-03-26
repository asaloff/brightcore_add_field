<template>
  <div class="field-card group-card col-12">
    <span class="group-name">{{fieldGroup.name}}</span>
    <span class="small-info-text">{{displayFieldAmount()}}</span>
  </div>
</template>

<script>
  export default {
    props: ['fieldGroup'],
    methods: {
      displayFieldAmount() {
        const amount = this.fieldGroup.fields.length;
        return amount === 1 ? '1 other field' : `${amount} other fields`;
      }
    }
  };
</script>

<style>
  @import '../../styles/index.scss';
  @import '../../styles/card.scss';
</style>
