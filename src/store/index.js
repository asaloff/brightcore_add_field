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
    selectedFieldGroup: null,
    form: {
      selectOptions: []
    },
    fieldGroups: [
      { name: 'Rental Vehicle Coverage Package', fields: [ { name: 'foo' }, { name: 'bar' }, { name: 'baz' } ] }
    ],
    showAddGroup: false
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
