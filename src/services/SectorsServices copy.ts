import fetch from "../axios";

export const getSectorsServices = function () {
  return fetch({
    url: `/v1/stores/mysectors`,
    method: "get",
  });
};

export const getSectorServices = function (sectorId: number) {
  return fetch({
    url: `/v1/stores/mystores/?sector${sectorId}`,
    method: "get",
  });
};
