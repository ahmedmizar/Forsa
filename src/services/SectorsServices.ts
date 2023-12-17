import fetch from "../axios";

export const getSectorsService = function () {
  return fetch({
    url: `stores/mysectors/`,
    method: "get",
  });
};

export const getBrandsService = function (sectorId: number) {
  console.log("sectorId", sectorId);
  return fetch({
    url: `stores/mystores/?sector=${sectorId}`,
    method: "get",
  });
};
