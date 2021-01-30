import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { initialState } from 'slice';

import PreviewContainer from './PreviewContainer';

describe('PreviewContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ initialState }));
  });

  it('renders "PreviewContainer" component', () => {
    const { container } = render(<PreviewContainer />);

    expect(container).not.toBeNull();
  });
});
