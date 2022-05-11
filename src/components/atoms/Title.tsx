import { FC } from "react";

type Props = {
  children: string;
};

export const Title: FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
        {children}
      </h2>
    </>
  );
};
