import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('should render progress text', () => {
    render(<ProgressBar current={5} total={24} />);
    
    expect(screen.getByText('5 / 24')).toBeInTheDocument();
  });

  it('should calculate correct percentage', () => {
    const { container } = render(<ProgressBar current={12} total={24} />);
    
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
  });

  it('should show 100% when complete', () => {
    const { container } = render(<ProgressBar current={24} total={24} />);
    
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
  });

  it('should have accessible label', () => {
    render(<ProgressBar current={5} total={24} />);
    
    expect(screen.getByLabelText(/progress/i)).toBeInTheDocument();
  });
});
