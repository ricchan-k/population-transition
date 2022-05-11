import { FC, useEffect } from "react";
import { Title } from "./components/atoms/Title";
import { Chart } from "./components/atoms/Chart";

import { PrefectureCheckBoxList } from "./components/molecules/PrefectureCheckBoxList";
import { useGetPrefectureList } from "./hooks/useGetPrefectureList";
import { useGetPopulation } from "./hooks/useGetPopulation";
import { SearchPanel } from "./components/organisms/SearchPanel";
import { GraphArea } from "./components/organisms/GraphArea";

const graphOptions: {} = {
  maintainAspectRatio: false,
};

export const App: FC = () => {
  // 都道府県リスト
  const { getPrefectureList, prefectures } = useGetPrefectureList();
  // 人口構成のリスト
  const { getPopulationData, populationDataList } = useGetPopulation();

  useEffect(() => getPrefectureList(), []);

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <Title>各都道府県の人口の推移(予測含む)</Title>
        <SearchPanel>
          <PrefectureCheckBoxList
            prefecture={prefectures}
            onChangeCheckBox={getPopulationData}
          />
        </SearchPanel>
        <GraphArea>
          {populationDataList ? (
            <Chart data={populationDataList} options={graphOptions} />
          ) : (
            ""
          )}
        </GraphArea>
      </div>
    </>
  );
};
