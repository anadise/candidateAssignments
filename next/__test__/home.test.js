import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import Index from '../src/pages';

describe('renders home page', () => {
  it('should renders the elements without error', async () => {
    render(<Index clients={[]} />);

    const element = await waitFor(() => screen.getByTestId('register-btn'));
    // expect(element).toBeInTheDocument();
  });
});
