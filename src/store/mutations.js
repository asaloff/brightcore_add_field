import * as types from './mutation-types';

export const mutations = {
  [types.SET_ADD_FIELD_SELECTED_TYPE] (state, type) {
    state.addField.selectedField = type.name;
  }
};
