import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { clearHistory } from "../../store/slice/settingsSlice";
import { setTheme } from '../../store/slice/settingsSlice';
import {
  StyledTitle,
  StyledSelect,
  StyledOption,
  // StyledButton,
  StyledWrapper,
  // StyledSpan,
} from './styled';

const options = [
  { value: 'light', name: 'Light Theme' },
  { value: 'dark', name: 'Dark Theme' },
  { value: 'colored', name: 'Colored Theme' },
];

const Settings = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.settings.theme);
  // console.log("Settings ~ theme", theme);

  const handleChangeTheme = e => {
    dispatch(setTheme(e.target.value));
  };

  // const resetAllHistory = () => {
  //   dispatch(clearHistory())
  // }

  return (
    <StyledWrapper>
      <StyledTitle>Settings</StyledTitle>
      <StyledSelect value={theme} onChange={handleChangeTheme}>
        {options.map(({ value, name }) => (
          <StyledOption
            isToggle={value === theme ? true : false}
            key={value}
            value={value}
          >
            {name}
          </StyledOption>
        ))}
      </StyledSelect>
      {/* <StyledButton onClick={resetAllHistory}>Clear All History</StyledButton> */}
    </StyledWrapper>
  );
};

export default Settings;
