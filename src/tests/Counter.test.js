// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';
// import the Counter component here

beforeEach(() => {
	render(<Counter ></Counter >);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText('0');
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', async() => {
  // Complete the unit test below based on the objective in the line above
  await userEvent.click(screen.getByText('+'));
  const incrementCount = screen.getByText('1');
  expect(incrementCount).toBeInTheDocument();
});

test('clicking - decrements the count', async() => {
	await userEvent.click(screen.getByText('-'));
  const decrementCount = screen.getByText('-1');
  expect(decrementCount).toBeInTheDocument();
  // Complete the unit test below based on the objective in the line above
});
