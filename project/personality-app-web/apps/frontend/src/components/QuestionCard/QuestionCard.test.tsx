import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionCard } from './QuestionCard';
import { Question } from '@personality-app/types';

const mockQuestion: Question = {
  id: 'q1',
  text: 'You regularly make new friends',
  category: 'social',
  dimension: 'E-I',
  options: [
    { id: 'q1-a', text: 'Agree', score: { E: 2 } },
    { id: 'q1-b', text: 'Neutral', score: {} },
    { id: 'q1-c', text: 'Disagree', score: { I: 2 } }
  ]
};

describe('QuestionCard', () => {
  it('should render question text', () => {
    render(<QuestionCard question={mockQuestion} onAnswer={() => {}} />);
    
    expect(screen.getByText('You regularly make new friends')).toBeInTheDocument();
  });

  it('should render all answer options', () => {
    render(<QuestionCard question={mockQuestion} onAnswer={() => {}} />);
    
    expect(screen.getByText('Agree')).toBeInTheDocument();
    expect(screen.getByText('Neutral')).toBeInTheDocument();
    expect(screen.getByText('Disagree')).toBeInTheDocument();
  });

  it('should call onAnswer when option is clicked', () => {
    const onAnswer = vi.fn();
    render(<QuestionCard question={mockQuestion} onAnswer={onAnswer} />);
    
    fireEvent.click(screen.getByText('Agree'));
    
    expect(onAnswer).toHaveBeenCalledWith('q1-a');
  });

  it('should highlight selected option', () => {
    render(
      <QuestionCard 
        question={mockQuestion} 
        onAnswer={() => {}} 
        selectedOptionId="q1-a"
      />
    );
    
    const agreeButton = screen.getByText('Agree').closest('button');
    expect(agreeButton).toHaveClass('border-analyst');
  });
});
