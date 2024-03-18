import './styled.d.ts';
import React, { useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { DefaultTheme, Theme, ThemeMode } from './types';

export const StorybookGlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.base.black};
  }
`;

export interface ThemeProviderProps extends React.PropsWithChildren {
  mode?: ThemeMode;
  sbMode?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  mode = 'dark', sbMode = false, children 
}) => {
  const theme = useMemo<Theme>(() => {
    const defaultTheme: DefaultTheme = {
      mode: 'dark',
      colors: {
        base: {
          black: '#0E0C15',
          white: '#FFFFFF'
        },
        accent: {
          primary: '#1C64F2',
          primaryLight: '#4785FF',
          strong: '#073CA4',
          strongDown: '#0E3176'
        },
        grayScale: {
          gray1: '#616D8D',
          gray2: '#313E62',
          gray3: '#222B44',
          gray4: '#121825',
          gray5: '#374151',
          gray6: '#9CA3AF'
        },
        premiumGradient: 'linear-gradient(90deg, #1C64F2 -0.39%, #D41CF2 99.61%)',
        critic: '#FE4242',
        orange: '#F29C1C',
        purple: '#941CF2',
        aqua: '#1CB2F2',
        green: '#1ABB34',
        gpt3: '#28A08C',
        gpt4: '#735FFA'
      },
      tablet: {
        maxWidth: '1060px'
      },
      mobile: {
        maxWidth: '550px',
        minWidth: '400px'
      },
      zIndex: {
        headerMenu: 2,
        header: 3,
        backdrop: 4,
        menu: 5,
        modal: 6,
        select: 7,
        notifications: 8,
        tooltip: 9
      },
      header: {
        height: '89px',
        mobile: {
          height: '70px'
        }
      },
      dashboard: {
        header: {
          height: '82px',
          tablet: {
            height: '76px'
          },
          mobile: {
            height: '70px'
          }
        },
        chat: {
          containerWidth: '1009px'
        },
        tablet: {
          maxWidth: '1060px'
        },
        miniTablet: {
          maxWidth: '900px'
        },
        mobile: {
          maxWidth: '600px',
          minWidth: '400px'
        }
      }
    };

    switch (mode) {
      case 'dark': {
        const darkTheme: Theme = {
          ...defaultTheme,
          mode: 'dark',
          default: defaultTheme
        };

        return darkTheme;
      }
      case 'light': {
        const lightTheme: Theme = {
          ...defaultTheme,
          mode: 'light',
          default: defaultTheme,
          colors: {
            ...defaultTheme.colors,
            base: {
              black: '#FFFFFF',
              white: '#0E0C15'
            },
            accent: {
              primary: '#1C64F2',
              primaryLight: '#4785FF',
              strong: '#073CA4',
              strongDown: '#0E3176'
            },
            grayScale: {
              gray1: '#ADB8C0',
              gray2: '#CDD5DA',
              gray3: '#DBE0E4',
              gray4: '#F5F6F7',
              gray5: '#ADB5BD',
              gray6: '#DDE8F3'
            },
          }
        };

        return lightTheme;
      }
    }
  }, [mode]);

  return (
    <StyledThemeProvider theme={theme}>
      {children}
      {sbMode && <StorybookGlobalStyle />}
    </StyledThemeProvider>
  );
};

export * from './types';
export * from './hook';
