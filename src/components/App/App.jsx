import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'components/GlobalStyles';
import { lightTheme, darkTheme, coloredTheme } from '../../theme/theme';

import CalculatorFC from 'components/Calculator';
import Settings from 'components/Settings';

const App = () => {
  const currentTheme = useSelector(state => state.settings.theme);

  const theme = {
    light: lightTheme,
    dark: darkTheme,
    colored: coloredTheme,
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <Settings />
        <CalculatorFC />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
};
export default App;
