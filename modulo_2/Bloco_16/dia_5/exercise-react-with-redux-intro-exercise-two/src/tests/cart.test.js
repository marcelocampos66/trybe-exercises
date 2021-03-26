import React from 'react';
import renderWithRedux from './helpers';
import Cars from '../Cars';
import userEvent from '@testing-library/user-event';

describe('Testing component Car', () => {
  it('verify if have 3 buttons in the screen', () => {
    const { queryAllByRole } = renderWithRedux(<Cars />);

    const allButtons = queryAllByRole('button', { name: 'move' });
    const expectedLengthOfArray = 3

    expect(allButtons.length).toBe(expectedLengthOfArray);
  });

  it('verify if have 3 images of cars in the screen', () => {
    const { queryAllByRole } = renderWithRedux(<Cars />);

    const allImages = queryAllByRole('img');

    expect(allImages.length).toBe(3)
  });

  it('verify if when you click move button the car move for rigth', () => {
    const { queryAllByText, queryByAltText } = renderWithRedux(<Cars />);

    const buttonMove = queryAllByText(/move/i)
    
    userEvent.click(buttonMove[0]);

    const getFirstImage = queryByAltText('red car');

    expect(getFirstImage.className).toBe('car-right');
  });
});
