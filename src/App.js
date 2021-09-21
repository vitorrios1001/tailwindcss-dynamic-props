import React from 'react';

import { applyTheme, createTheme } from './utils/theme';

const THEMES = {
  dark: {
    name: 'Dark',
    id: 'dark',
    values: {
      colors: {
        primary: 'blue',
        secondary: 'red',
      },
    },
  },
  light: {
    name: 'Light',
    id: 'light',
    values: {
      colors: {
        primary: 'red',
        secondary: 'blue',
      },
    },
  },
  custom: {
    name: 'Custom',
    id: 'custom',
    values: {
      colors: {
        primary: 'yellow',
        secondary: 'pink',
      },
    },
  },
};

function App() {
  const [themeSelected, setThemeSelected] = React.useState(THEMES.dark.id);

  const handleChangeTheme = (e) => {
    setThemeSelected(e.target.value);
    console.log('e::', e.target.value);
  };

  const createAndApplyTheme = (theme) => {
    const themeObj = THEMES[theme];

    const themeCreated = createTheme({
      primary: themeObj.values.colors.primary,
      secondary: themeObj.values.colors.secondary,
    });

    console.log('themeCreated::', themeCreated);

    applyTheme(themeCreated);
  };

  React.useEffect(() => {
    createAndApplyTheme(themeSelected);
  }, [themeSelected]);

  React.useEffect(() => {
    createAndApplyTheme(themeSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center gap-10'>
      <h1 className='text-primary text-2xl'>
        Theme selected: {THEMES[themeSelected].name}
      </h1>

      <div className='flex flex-col gap-8'>
        {Object.keys(THEMES).map((key) => {
          const theme = THEMES[key];

          return (
            <label key={key}>
              <input
                onChange={handleChangeTheme}
                name='theme'
                value={theme.id}
                type='radio'
                defaultChecked={themeSelected === theme.id}
              />
              {theme.name}
            </label>
          );
        })}

        <div className='flex flex-col gap-8'>
          <button className='p-3 bg-primary text-secondary'>
            Test Button Primary
          </button>

          <button className='p-3 bg-secondary text-primary'>
            Test Button Secondary
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
