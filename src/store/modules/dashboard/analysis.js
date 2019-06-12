import { getCharts } from "@/utils/api";

const state = {
  chartData: {},
  loading: true
};

const mutations = {
  setChartData: (state, chartData) => {
    state.chartData = chartData;
  },
  clearChartData: state => {
    state.chartData = {};
  },
  changeLoading: (state, loading) => {
    state.loading = loading;
  }
};

const actions = {
  getChartData({ commit }) {
    getCharts().then(res => {
      if (res) {
        commit("setChartData", res.data);
        commit("changeLoading", false);
      }
    });
  },
  clearChartData({ commit }) {
    commit("clearChartData");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
