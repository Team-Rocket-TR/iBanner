import React from 'react';

import { render } from '@testing-library/react';

import ExportContainer from './ExportContainer';

const mockUseRef = (obj) => () => Object.defineProperty({}, 'current', {
  get: () => obj,
  set: () => {},
});

describe('ExportContainer', () => {
  const useRef = mockUseRef({ refFunction: jest.fn() });

  const renderExportContainer = () => render((
    <ExportContainer
      canvasRef={useRef}
    />
  ));

  it('renders "ExportContainer" component', () => {
    const { container } = renderExportContainer();

    expect(container).not.toBeNull();
  });
});
