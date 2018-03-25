import * as types from './mutation-types';

export const setSelectedFieldType = ({commit}, type) => {
  commit(types.SET_ADD_FIELD_SELECTED_TYPE, type);
};
