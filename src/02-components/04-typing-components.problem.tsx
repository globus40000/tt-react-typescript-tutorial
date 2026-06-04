import React from "react";

interface IButtonProps {
  className: string;
}

export const Button = (props: IButtonProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
