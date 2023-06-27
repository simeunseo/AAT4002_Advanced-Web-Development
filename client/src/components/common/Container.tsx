import React from "react";
import { styled } from "styled-components";
import theme from "@src/styles/theme";

const Container = ({ children }: React.PropsWithChildren) => {
  return <St.Container>{children}</St.Container>;
};

export default Container;

const St = {
  Container: styled.div`
    position: fixed;

    width: 100vw;
    height: 100%;

    background: ${theme.colors.liner_primary};
  `,
};
