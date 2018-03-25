import * as types from './mutation-types';

export const mutations = {
  [types.SET_ADD_FIELD_SELECTED_TYPE] (state, type) {
    state.addField.selectedField = type.name;
  },

  [types.SET_ADD_FIELD_DISPLAY_LABEL] (state, value) {
    state.addField.form.displayLabel = value;
  },

  [types.CLEAR_ADD_FIELD_DISPLAY_LABEL] (state) {
    state.addField.form.displayLabel = '';
  },

  [types.SET_ADD_FIELD_REFERENCE_NAME] (state, value) {
    state.addField.form.reference = value;
  },

  [types.CLEAR_ADD_FIELD_REFERENCE_NAME] (state) {
    state.addField.form.reference = '';
  },

  [types.SET_ADD_FIELD_DEFAULT_VALUE] (state, value) {
    state.addField.form.defaultValue = value;
  },

  [types.CLEAR_ADD_FIELD_DEFAULT_VALUE] (state) {
    state.addField.form.defaultValue = '';
  }
};
