import React from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import theme from "@src/styles/theme";

const Container = ({ children }: React.PropsWithChildren) => {
  return <St.Container>{children}</St.Container>;
};

export default Container;

const St = {
  Container: styled(motion.div)`
    position: fixed;

    width: 37.5rem;
    height: 100%;

    background: ${theme.colors.liner_primary};
    overflow-y: scroll;
  `,
};
