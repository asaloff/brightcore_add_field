<template>
  <div class="tags col-12">
    <h6 class="field-heading">Tags</h6>
    <div class="row">
      <div class="col-6">
        <label class="tag-label">Tag Group</label>
        <span
          v-for="tagGroup in $store.state.addField.tagGroups"
          @click="setTagGroup(tagGroup)"
          :class="`badge hover-badge ${checkSelected(tagGroup, $store.state.addField.selectedTagGroup)}`"
        >
          {{tagGroup.name}}
        </span>
      </div>
      <div class="col-6">
        <label class="tag-label">Tags</label>
        <span
          class="small-info-text"
          v-show="!$store.state.addField.selectedTagGroup"
        >
          Select a tag group to see individual tags
        </span>
        <span
          v-for="tag in $store.state.addField.selectedTagGroup.tags"
          class="badge"
        >
          {{tag}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      checkSelected(group, stateSelected) {
        return stateSelected && stateSelected.name === group.name ? 'selected' : '';
      },
      ...mapActions([ 'setTagGroup' ])
    }
  };
</script>

<style lang="scss">
  @import '../../styles/index.scss';

  .tags {
    .tag-label {
      margin-top: 10px;
      display: block;
    }
    .hover-badge {
      cursor: pointer;

      &:hover, &.selected {
        color: $white;
        background-color: $dark-teal;
        border-color: $dark-teal;
      }
    }
  }
</style>
