import { ReactNode } from "react";
import * as Styled from "./styles";

type Props = {
  children: ReactNode | string;
  disabled?: boolean;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  type?: "default" | "delete";
};

export const Button = ({
  children,
  disabled,
  onClick,
  size = "medium",
  type = "default",
}: Props) => {
  return (
    <Styled.Button
      onClick={onClick}
      disabled={disabled}
      $size={size}
      $type={type}
    >
      {children}
    </Styled.Button>
  );
};
