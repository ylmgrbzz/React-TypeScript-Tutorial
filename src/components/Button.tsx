import React from "react";

type ButtonProps = {
  handleClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
    id: number
  ) => void;
};

const Button = (props: ButtonProps) => {
  return <div onClick={(event) => props.handleClick(event, 1)}>Button</div>;
};

export default Button;
