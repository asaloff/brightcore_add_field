import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import * as actions from './actions';

import fieldTypes from './fieldTypes';

Vue.use(Vuex);

const state = {
  addField: {
    fieldTypes,
    selectedField: null,
    form: {
      displayLabel: '',
      reference: '',
      defaultValue: '',
      tagGroup: null
    }
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
