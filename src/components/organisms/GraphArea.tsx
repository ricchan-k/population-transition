import { ReactNode, FC } from "react";

type Props = {
  children: ReactNode;
};
export const GraphArea: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <div className="mx-auto p-10">{children}</div>
    </>
  );
};
