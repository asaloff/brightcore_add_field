import * as types from './mutationTypes';

export const setSelectedFieldType = ({commit}, type) => {
  commit(types.SET_ADD_FIELD_SELECTED_TYPE, type);
};

export const addSelectOption = ({commit}, value) => {
  commit(types.ADD_SELECT_OPTION, value);
};

export const removeSelectOption = ({commit}, index) => {
  commit(types.REMOVE_SELECT_OPTION, index);
};

export const setTagGroup = ({commit}, group) => {
  commit(types.SET_TAG_GROUP, group);
};

export const toggleAddFieldGroup = ({commit}) => {
  commit(types.TOGGLE_ADD_FIELD_GROUP);
};

export const addFieldGroup = ({commit}, name) => {
  commit(types.ADD_FIELD_GROUP, name);
};

export const setFieldGroup = ({commit}, group) => {
  commit(types.SET_FIELD_GROUP, group);
};
