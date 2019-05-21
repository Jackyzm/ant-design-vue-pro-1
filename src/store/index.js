import Vue from "vue";
import Vuex from "vuex";
import form from "./modules/form";
import analysis from "./modules/dashboard/analysis";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    form,
    analysis
  }
});
