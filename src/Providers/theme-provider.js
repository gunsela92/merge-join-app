import styled ,{ ThemeProvider, createGlobalStyle } from "styled-components";
import InterLight from "../assets/fonts/Inter/Inter-Light-BETA.otf";
import InterBold from "../assets/fonts/Inter/Inter-Bold.otf";
import Inter from "../assets/fonts/Inter/Inter-Regular.otf";
import InterItalic from "../assets/fonts/Inter/Inter-Italic.otf";
import InterSemibold from "../assets/fonts/Inter/Inter-SemiBold.otf"

const MainContainer = styled.div`
  width:100vw;
  height: 100vh;
  background: ${({ theme }) => theme.backgrounds.mainBackground};
  * {
    scrollbar-width: auto;
    scrollbar-color: #035487 #ffffff;
  }
  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #035487;
    border-radius: 10px;
  }
`;

const theme = {
  colors: {
    cardTextColor: "#000000",
    cardColor: "#ffffff",
    gray: "#757575",
    white: "#FFFFFF",
    black: "#000000",
    noBgTextColor: "#000000",
    borderColor: "rgba(210,210,210,0.41)",
    orangeColor: "#FF9A3A",
    successColor: "#28A745",
    dangerColor: "#DC3545",
    warningColor: "#E0A800",
    infoColor: "#17A2B8",
    transparentBlack: "rgba(0,0,0,0.4)"
  },
  backgrounds: {
    mainBackground: "#1A202C",
    modalBackground: "#2D3748",
    headerBackground: "#151515",
    darkBackground: "#102738",
    copsBackground: "#C4C4C4",
    wantedBackground: "#1A2540",
    inputBackground: "#091e2a",
    lightBackground: "#23405E",
    greyBackground: "#303030",
  },
  borderColors: {
    grayBorder: "#b4b4b4",
    darkGray: "#6a6a6a"
  },
  fonts: {
    regular: "Interregular",
    light: "Interlight",
    bold: "Interbold",
    italic: "Interitalic",
    semibold: "Intersemibold",
  },
  fontSizes: {
    extraSmall: "10px",
    tiny: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "20px",
    titleLarge: "26px"
  },
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Interregular';
    src: url(${Inter});
  }
  @font-face {
    font-family: 'Interlight';
    src: url(${InterLight});
  }
  @font-face {
    font-family: 'Interbold';
    src: url(${InterBold});
  }
  @font-face {
    font-family: 'Interitalic';
    src: url(${InterItalic});
  }
  @font-face {
    font-family: 'InterSemibold';
    src: url(${InterSemibold});
  }
  body {
    font-family: ${({ theme }) => theme.fonts.regular};
    margin: 0;
  }
`;

const MainThemeProvider = ({ children }) => {

  return (
      <ThemeProvider theme={theme}>
        <MainContainer>
          <GlobalStyle />
          {children}
        </MainContainer>
      </ThemeProvider>
  );
};

export default MainThemeProvider;