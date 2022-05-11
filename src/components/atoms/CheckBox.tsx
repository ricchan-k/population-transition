import { FC } from "react";
import { CheckPopulationData } from "../../types/checkPopulationData";

type Props = {
  code: number;
  label: string;
  index: number;
  onChangeCheckBox: (arg0: CheckPopulationData) => void;
};

export const CheckBox: FC<Props> = (props) => {
  const { code, label, index, onChangeCheckBox } = props;

  return (
    <>
      <div className="form-check">
        <label className="form-check-label p-2" htmlFor={`id_${index}`}>
          <input
            className="form-check-input"
            type="checkbox"
            value={code}
            name="prefecture_checkbox"
            id={`id_${index}`}
            onChange={(event) => {
              let checkPopulationData: CheckPopulationData = {
                prefCode: code,
                prefName: label,
                checkFlg: event.target.checked,
              };
              onChangeCheckBox(checkPopulationData);
            }}
          />
          &nbsp;
          {label}
        </label>
      </div>
    </>
  );
};
