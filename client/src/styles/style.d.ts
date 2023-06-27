import "styled-comopnents";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key: string]: string;
      primary: string;
      liner_primary: string;
    };
    fonts: {
      Head1: SerializedStyles;
      Body1: SerializedStyles;
    };
  }
}
