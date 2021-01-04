import React from 'react';

import { render } from '@testing-library/react';

import BannerTopic from './BannerTopic';

describe('BannerTopic component', () => {
  function renderBannerTopic() {
    return render(<BannerTopic />);
  }

  it('renders component title', () => {
    const { container } = renderBannerTopic();

    expect(container).toHaveTextContent('Banner Topic');
  });

  it("renders input entered banner's topic", () => {
    const { getByLabelText } = renderBannerTopic();

    expect(getByLabelText('topic')).not.toBeNull();
  });
});
