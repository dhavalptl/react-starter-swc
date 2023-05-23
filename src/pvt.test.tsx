import "@testing-library/jest-dom/extend-expect";
import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('App title', () => {
        render(<App />)
        expect(screen.getAllByText(/Welcome to application/))
    })
})