import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { PictureEntityCheckedVM } from "../../product-page.vm";
import { cartContext } from "@/core/cart-context";
import { ButtonTexts, colors, TEXT_DEF } from "./checker-btn-bussiness";

interface Props {
  product: PictureEntityCheckedVM;
  buttonTexts?: ButtonTexts;
}

export const CheckerBtn: React.FC<Props> = (props: Props) => {
  const { product, buttonTexts = TEXT_DEF } = props;
  const label = { inputProps: { "aria-label": "Checked product" } };
  const { cartProducts, setCartProducts } = useContext(cartContext);
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const colorHandler = colors(isHovering, useTheme().palette, product.selected);

  const getButtonTexts = <Key extends keyof ButtonTexts>(
    TextDefObj: ButtonTexts,
    key: Key,
    hover: boolean
  ): string => TextDefObj[key][hover ? "HOVER" : "DEFAULT"];

  const onChangeHandler = (e: { target: { checked: boolean } }) => {
    if (e.target.checked) {
      product.selected = true;
      setCartProducts([...cartProducts, product]);
    } else {
      product.selected = false;
      setCartProducts([
        ...cartProducts.filter((elem) => elem.id !== product.id),
      ]);
    }
  };

  return (
    <Box
      display={"flex"}
      component="label"
      paddingX={1.5}
      paddingY={0.2}
      borderRadius={"15px"}
      bgcolor={colorHandler.bg}
      color={colorHandler.textColor}
      alignContent="center"
      alignItems={"center"}
      justifyContent="center"
      width={"100%"}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Typography variant="button" component="span">
        {getButtonTexts(
          buttonTexts,
          product.selected ? "CHECKED" : "UNCHECKED",
          isHovering
        )}
      </Typography>
      <Checkbox
        {...label}
        id={`check_${product.id}`}
        checked={product.selected}
        onChange={onChangeHandler}
        sx={{ color: `${colorHandler.textColor}` }}
      />
    </Box>
  );
};