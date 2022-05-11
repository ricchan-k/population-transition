import { useState, useCallback } from "react";
import axios from "axios";
import { Populationdata } from "../types/api/populationdata";
import { CheckPopulationData } from "../types/checkPopulationData";

const RESAS_API_BASE_URL = "https://opendata.resas-portal.go.jp";
const API_KEY = process.env.REACT_APP_RESAS_API_KEY || "";

export const useGetPopulation = () => {
  const [populationDataList, setPopulationDataList] = useState<
    Array<Populationdata>
  >([]);

  const getPopulationData = useCallback(
    (props: CheckPopulationData) => {
      const { prefCode, prefName, checkFlg } = props;
      // 現在の配列を新しい配列にコピー
      let newPopulationDataList = [...populationDataList];

      if (checkFlg) {
        if (
          newPopulationDataList.findIndex(
            (value) => value.prefName === prefName
          ) !== -1
        )
          return;

        axios
          .get(
            RESAS_API_BASE_URL +
              "/api/v1/population/composition/perYear?cityCode=-&prefCode=" +
              String(prefCode),
            {
              headers: { "X-API-KEY": API_KEY },
            }
          )
          .then((result) => {
            newPopulationDataList.push({
              prefName: prefName,
              data: result.data.result.data[0].data,
            });

            setPopulationDataList(newPopulationDataList);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        const deleteIndex = newPopulationDataList.findIndex(
          (value) => value.prefName === prefName
        );
        if (deleteIndex === -1) return;
        newPopulationDataList.splice(deleteIndex, 1);
        setPopulationDataList(newPopulationDataList);
      }
    },
    [populationDataList]
  );

  return { getPopulationData, populationDataList };
};
