import { ReactNode } from "react";
import * as Styled from "./styles";

type Props = {
  children: ReactNode | string;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};
