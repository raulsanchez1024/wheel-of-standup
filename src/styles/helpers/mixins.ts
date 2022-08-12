import { css } from "styled-components";

interface IFlexbox {
  display?: "flex" | "inline-flex";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignItems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "start"
    | "end"
    | "self-start"
    | "self-end";
  justifyItems?:
    | "auto"
    | "normal"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-end"
    | "center"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch";
  alignContent?:
    | "normal"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "start"
    | "end"
    | "baseline"
    | "first baseline"
    | "last baseline";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right"
    | "center";
  shrink?: number;
  grow?: number;
  basis?: string | number;
}

export const flexbox = ({
  display,
  direction,
  wrap,
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
  shrink,
  grow,
  basis,
}: IFlexbox = {}) => css`
  display: ${display || "flex"};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  align-items: ${alignItems};
  justify-items: ${justifyItems};
  align-content: ${alignContent};
  justify-content: ${justifyContent};
  flex-shrink: ${shrink};
  flex-grow: ${grow};
  flex-basis: ${basis};
`;
