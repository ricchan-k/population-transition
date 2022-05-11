import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};

export const SearchPanel: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <div className="max-w-3xl border rounded-lg mx-auto p-3">
        <p className="">都道府県</p>
        {children}
      </div>
    </>
  );
});
