import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Chip, useTheme } from "@mui/material";
import { Box } from "@/common/components";
import classes from "./product-page.styles.css";
import { CheckerBtn } from "./components/checker-btn/checker-btn.component";
import { PictureEntityCheckedVM } from "./product-page.vm";

interface Props {
  children?: React.ReactNode;
  productList: PictureEntityCheckedVM[];
}

export const ProductPageComponent: React.FC<Props> = (props: Props) => {
  const { productList, children } = props;
  const { secondary } = useTheme().palette;

  return (
    <>
      <Typography variant="h3" fontSize={25} marginY="2rem">
        Hi! Pick your favorite pictures and add them to your shopping cart:
      </Typography>
      <Box
        component="ul"
        display="grid"
        gridTemplateColumns=" repeat(auto-fit, minmax(200px, 1fr))"
        rowGap="3.5rem"
        columnGap="3.5rem"
        padding="1rem 6rem"
      >
        {productList.map((product) => (
          <Box
            component="li"
            key={product.id}
            bgcolor={"white"}
            border={`1px solid ${secondary.main}`}
            display="flex"
            flexWrap="wrap"
            borderRadius="5px"
            overflow="hidden"
            sx={{ listStyle: "none" }}
          >
            <Box
              overflow={"hidden"}
              height={"180px"}
              width={"100%"}
              position={"relative"}
              zIndex={1}
              bgcolor={"lightgray"}
            >
              <img className={classes.productImg} src={product.picUrl} alt="" />
            </Box>

            <Stack padding={"1rem"} width="100%" spacing={"0.5rem"}>
              <Chip label={`Id: ${product.id}`} sx={{width:'100px'}}/>
              <Typography variant="h6" component="h6">
                {product.title}
              </Typography>
              <Typography variant="h5" color={secondary.main}>
                {product.price}€
              </Typography>
              <CheckerBtn product={product} />
            </Stack>
            
          </Box>
        ))}
      </Box>
      {children}
    </>
  );
};
