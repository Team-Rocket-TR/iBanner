import React from 'react';

import { render } from '@testing-library/react';

import BannerMakerHeader from './BannerMakerHeader';

describe('BannerMakerHeader', () => {
  function renderHeader({ theme }) {
    return render((
      <BannerMakerHeader theme={theme} />
    ));
  }

  const alt = 'iBanner Logo';
  const lightThemeLogo = '/image/iBanner_logo_black.png';
  const darkThemeLogo = '/image/iBanner_logo_white.png';

  context('when light theme', () => {
    it('it renders light logo', () => {
      const { getByRole } = renderHeader({ theme: 'light' });

      const logo = getByRole('img');
      expect(logo).toHaveAttribute('alt', alt);
      expect(logo).toHaveAttribute('src', lightThemeLogo);
    });
  });

  context('when dark theme', () => {
    it('it renders dark logo', () => {
      const { getByRole } = renderHeader({ theme: 'dark' });

      const logo = getByRole('img');
      expect(logo).toHaveAttribute('alt', alt);
      expect(logo).toHaveAttribute('src', darkThemeLogo);
    });
  });
});
