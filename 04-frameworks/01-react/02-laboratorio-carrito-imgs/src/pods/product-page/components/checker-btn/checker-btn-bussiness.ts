import { Palette } from "@mui/material/styles";

export interface HoverStates {
  DEFAULT: string;
  HOVER: string;
}

export interface ButtonTexts {
  UNCHECKED: HoverStates;
  CHECKED: HoverStates;
}

export const TEXT_DEF: ButtonTexts = {
  UNCHECKED: { DEFAULT: "Add to Cart", HOVER: "Add to Cart" },
  CHECKED: { DEFAULT: "In Cart", HOVER: "Remove Item" },
};

export const colors = (
  isHovering:boolean,
  palette: Palette,
  isSelected: boolean
) => {
  const { primary, secondary, warning } = palette;
  const bgColorDefault = () => (isSelected ? secondary.light : primary.light);
  const textColorDefault = () => (isSelected ? primary.light : secondary.light);

  return {
    bg: isHovering ? warning.light : bgColorDefault(),
    textColor: isHovering ? primary.light : textColorDefault(),
  };
};