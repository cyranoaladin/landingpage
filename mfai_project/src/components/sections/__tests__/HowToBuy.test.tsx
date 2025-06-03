import { render, screen, fireEvent } from '@testing-library/react';
import HowToBuy from '../HowToBuy';

describe('HowToBuy', () => {
  it('displays title and description', () => {
    render(<HowToBuy />);
    
    expect(screen.getByText(/How to Buy/i)).toBeInTheDocument();
    expect(screen.getByText(/Follow these simple steps/i)).toBeInTheDocument();
  });

  it('displays the three steps', () => {
    render(<HowToBuy />);
    
    expect(screen.getByText(/Connect Your Wallet/i)).toBeInTheDocument();
    expect(screen.getByText(/Buy SOL/i)).toBeInTheDocument();
    expect(screen.getByText(/Join the Private Sale/i)).toBeInTheDocument();
  });

  it('displays the pre-purchase widget', () => {
    render(<HowToBuy />);
    
    expect(screen.getByText(/Pre-purchase \$MFAI/i)).toBeInTheDocument();
    expect(screen.getByText(/Connect Wallet/i)).toBeInTheDocument();
  });

  it('allows wallet connection', () => {
    render(<HowToBuy />);
    
    const connectButton = screen.getByText(/Connect Wallet/i);
    fireEvent.click(connectButton);
    
    expect(screen.getByText(/Available Balance/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount in SOL/i)).toBeInTheDocument();
  });

  it('allows amount input', () => {
    render(<HowToBuy />);
    
    // First connect the wallet
    const connectButton = screen.getByText(/Connect Wallet/i);
    fireEvent.click(connectButton);
    
    // Enter an amount
    const input = screen.getByPlaceholderText('0.00');
    fireEvent.change(input, { target: { value: '1.5' } });
    
    expect(input).toHaveValue('1.5');
  });
}); 