import { Line } from "react-chartjs-2";
import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Populationdata } from "../../types/api/populationdata";
import { GraphData } from "../../types/graphData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// TODO anyやめたい
type Props = {
  data: Array<Populationdata>;
  options: any;
};

export const Chart: FC<Props> = (props) => {
  const { data, options } = props;

  let graphData = {
    labels: [1960, 1965, 1985],
    datasets: [
      {
        label: "都道府県",
        data: [0],
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  if (data != null) {
    let cData: Array<GraphData> = [];
    let labels: Array<number> = [];

    data.map((pDataList) => {
      // 年の昇順にソート
      pDataList.data.sort(function (a, b) {
        return a.year < b.year ? -1 : 1;
      });
      let prefDataList: Array<number> = [];

      pDataList.data.map((data) => {
        if (cData.length === 0) {
          labels.push(data.year);
        }
        prefDataList.push(data.value);
      });

      cData.push({
        label: pDataList.prefName,
        data: prefDataList,
        borderColor:
          "rgb(" +
          ~~(256 * Math.random()) +
          ", " +
          ~~(256 * Math.random()) +
          ", " +
          ~~(256 * Math.random()) +
          ")",
      });
    });

    graphData = {
      labels: labels,
      datasets: cData,
    };
  }

  return (
    <>
      <Line
        height={300}
        width={1000}
        data={graphData}
        options={options}
        id="chart-key"
      />
    </>
  );
};
