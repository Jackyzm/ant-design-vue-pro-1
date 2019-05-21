import request from "./request";

export async function getCharts() {
  return await request({
    url: "/api/charts",
    methods: "GET"
  });
}
