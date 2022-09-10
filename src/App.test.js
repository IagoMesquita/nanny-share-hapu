import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Footer from './components/Footer/inex';
import ShareSection from './components/ShareSection';

describe('Test the main components', () => {
  test(`checks if the Header component has a button with the text "become a nanny share host"`,
    () => {
      render(<Header />);
      const btn = screen.getByText(/become a nanny share host/i);
      expect(btn).toBeInTheDocument();
    });

    test(`checks if the Footer component has a button with the text "create your nanny shate"`,
    () => {
      render(<Footer />);
      const btn = screen.getByText(/create your nanny share/i);
      expect(btn).toBeInTheDocument();
    });

 

});

describe('Test form in ShareSection component', () => {
  test('checks is has input Name', () => {
    render(<ShareSection />);
    const inputName = screen.getByPlaceholderText(/your name/i);
    expect(inputName).toBeInTheDocument()
  })

  test('checks is has input Email', () => {
    render(<ShareSection />);
    const inputEmail = screen.getByPlaceholderText(/your email/i);
    expect(inputEmail).toBeInTheDocument()
  })

  test('checks is has button send Email', () => {
    render(<ShareSection />);
    const btn = screen.getByText(/send/i);
    expect(btn).toBeInTheDocument()
  })
});