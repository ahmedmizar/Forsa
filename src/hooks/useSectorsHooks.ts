import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  getBrandsService,
  getSectorsService,
} from "src/services/SectorsServices";

// const getOrderDetails = orderId => {
//   return getOrderDetailsService(orderId);
// };

// export const useOrderDetailsQuery = orderId => {
//   const queryKey = useMemo(() => ['buyer-order-details', orderId], [orderId]);
//   const fetchFn = useMemo(() => () => getOrderDetails(orderId), [orderId]);

//   return useQuery(queryKey, fetchFn, {
//     enabled: !!orderId,
//   });
// };
const getSectors = () => {
  return getSectorsService();
};
export const useSectorsQuery = () => {
  return useQuery({ queryKey: ["todos"], queryFn: getSectors });
};

const getBrands = (sectorId) => {
  return getBrandsService(sectorId);
};

export const useOrderDetailsQuery = (sectorId) => {
  const queryKey = useMemo(() => ["Brands-list", sectorId], [sectorId]);
  const fetchFn = useMemo(() => () => getBrands(sectorId), [sectorId]);

  return useQuery({ queryKey, queryFn: fetchFn, enabled: !!sectorId });
};
