import Routing from "./Routes";
import theme from "./Providers/theme";
import MainThemeProvider from "./Providers/theme-provider";
import {ChakraProvider} from "@chakra-ui/react";

function App() {

    return (
        <ChakraProvider theme={theme}>
            <MainThemeProvider>
                <Routing/>
            </MainThemeProvider>
        </ChakraProvider>
    );
}

export default App;
