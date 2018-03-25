<template>
  <div class="field-groups col-4">
    <h5 class="field-heading">Field Groups</h5>
    <span class="small-info-text">Choose a group for this input</span>
  </div>
</template>

<script></script>

<style lang="scss">
  @import '../../styles/index.scss';

  .field-groups {
    height: 100%;
    border: $border-style;
    border-radius: 5px;
    background-color: $darker-background;
    overflow-y: scroll;

    h5 {
      font-size: 1em;
      margin-top: 15px;
      margin-bottom: 0;
    }
  }
</style>
