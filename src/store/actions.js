import * as types from './mutation-types';

export const setSelectedFieldType = ({commit}, type) => {
  commit(types.SET_ADD_FIELD_SELECTED_TYPE, type);
};

export const setDisplayLabel = ({commit}, value) => {
  commit(types.SET_ADD_FIELD_DISPLAY_LABEL, value);
};

export const clearDisplayLabel = ({commit}) => {
  commit(types.CLEAR_ADD_FIELD_DISPLAY_LABEL);
};

export const setReferenceName = ({commit}, value) => {
  commit(types.SET_ADD_FIELD_REFERENCE_NAME, value);
};

export const clearReferenceName = ({commit}) => {
  commit(types.CLEAR_ADD_FIELD_REFERENCE_NAME);
};

export const setDefaultFieldValue = ({commit}, value) => {
  commit(types.SET_ADD_FIELD_DEFAULT_VALUE, value);
};

export const clearDefaultFieldValue = ({commit}) => {
  commit(types.CLEAR_ADD_FIELD_DEFAULT_VALUE);
};
