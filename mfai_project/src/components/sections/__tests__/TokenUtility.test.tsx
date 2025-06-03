import { render, screen } from '@testing-library/react';
import TokenUtility from '../TokenUtility';

describe('TokenUtility', () => {
  it('affiche le titre principal', () => {
    render(<TokenUtility />);
    expect(screen.getByText(/\$MFAI Token Utility/i)).toBeInTheDocument();
  });

  it('affiche les utilités du token', () => {
    render(<TokenUtility />);
    
    expect(screen.getByText(/Protocol Access & Activation/i)).toBeInTheDocument();
    expect(screen.getByText(/Cognitive Lock™ Staking/i)).toBeInTheDocument();
    expect(screen.getByText(/Proof-of-Skill Token™/i)).toBeInTheDocument();
    expect(screen.getByText(/Synaptic Governance™/i)).toBeInTheDocument();
    expect(screen.getByText(/Proof-of-Vision Incubator™/i)).toBeInTheDocument();
    expect(screen.getByText(/Neuro-Dividend™/i)).toBeInTheDocument();
  });

  it('affiche les niveaux de staking', () => {
    render(<TokenUtility />);
    
    expect(screen.getByText(/Cognitive Lock™ Basic/i)).toBeInTheDocument();
    expect(screen.getByText(/Cognitive Lock™ Premium/i)).toBeInTheDocument();
    expect(screen.getByText(/Cognitive Lock™ Elite/i)).toBeInTheDocument();
  });

  it('affiche les détails de staking pour chaque niveau', () => {
    render(<TokenUtility />);
    
    // Vérifier les APY
    expect(screen.getByText('15%')).toBeInTheDocument();
    expect(screen.getByText('25%')).toBeInTheDocument();
    expect(screen.getByText('35%')).toBeInTheDocument();

    // Vérifier les périodes de lock
    expect(screen.getAllByText('30 jours')).toBeTruthy();
    expect(screen.getAllByText('90 jours')).toBeTruthy();
    expect(screen.getAllByText('180 jours')).toBeTruthy();
  });

  it('affiche le CTA pour explorer les utilités', () => {
    render(<TokenUtility />);
    expect(screen.getByText(/Explore All Protocol Utilities/i)).toBeInTheDocument();
  });
}); 