import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import * as actions from './actions';

import fieldTypes from './fieldTypes';
import tagGroups from './tagGroups';

Vue.use(Vuex);

const state = {
  addField: {
    fieldTypes,
    tagGroups,
    selectedField: null,
    selectedTagGroup: null,
    form: {
      selectOptions: []
    }
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
