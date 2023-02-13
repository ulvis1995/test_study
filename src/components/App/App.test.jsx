import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  it('App renders', () => {
    render(<App />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Find course:')).toBeInTheDocument();
  });

  it('typing in SearchBox works', () => {
    render(<App />);

    expect(screen.queryByDisplayValue(/React/)).toBeNull();

    userEvent.type(screen.getByRole('textbox'), 'React');

    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
  });

  it('search filter is working', () => {
    render(<App />);

    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/javascript/)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'script');

    expect(screen.queryByText(/Vue/)).toBeNull();
    expect(screen.queryByText(/javascript/)).toBeInTheDocument();
  });
});
