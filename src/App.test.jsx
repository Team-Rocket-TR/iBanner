import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render(<App />);
  }

  it('renders app title', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('BannerMaker');
  });
});
