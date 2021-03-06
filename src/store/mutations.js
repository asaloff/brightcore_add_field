import * as types from './mutationTypes';

export const mutations = {
  [types.SET_ADD_FIELD_SELECTED_TYPE] (state, type) {
    state.addField.selectedField = type.name;
  },

  [types.ADD_SELECT_OPTION] (state, value) {
    state.addField.form.selectOptions.push(value);
  },

  [types.REMOVE_SELECT_OPTION] (state, index) {
    state.addField.form.selectOptions.splice(index, 1);
  },

  [types.SET_TAG_GROUP] (state, group) {
    state.addField.selectedTagGroup = group;
  },

  [types.TOGGLE_ADD_FIELD_GROUP] (state) {
    state.addField.showAddGroup = !state.addField.showAddGroup;
  },

  [types.ADD_FIELD_GROUP] (state, name) {
    state.addField.fieldGroups.push({ name, fields: [] });
  },

  [types.SET_FIELD_GROUP] (state, group) {
    state.addField.selectedFieldGroup = group;
  }
};
