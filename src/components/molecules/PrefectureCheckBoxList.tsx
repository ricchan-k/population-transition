import { FC, memo } from "react";
import { Prefecture } from "../../types/api/prefecrure";
import { CheckPopulationData } from "../../types/checkPopulationData";

import { CheckBox } from "../atoms/CheckBox";

type Props = {
  prefecture: Array<Prefecture>;
  onChangeCheckBox: (arg0: CheckPopulationData) => void;
};

export const PrefectureCheckBoxList: FC<Props> = memo((props) => {
  const { prefecture, onChangeCheckBox } = props;
  return (
    <>
      <div className="flex justify-left flex-wrap">
        {prefecture?.map((data, index) => {
          return (
            <>
              <CheckBox
                code={data.prefCode}
                label={data.prefName}
                index={index}
                key={index}
                onChangeCheckBox={onChangeCheckBox}
              />
            </>
          );
        })}
      </div>
    </>
  );
});
