import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};

export const SearchPanel: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <div className="max-w-3xl border rounded-lg mx-auto p-3">
        <p className="">ι½ιεΊη</p>
        {children}
      </div>
    </>
  );
});
