import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from './index';

describe('Tag', () => {
  test('renders Tag', () => {
    render(<Tag>click me</Tag>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Tag', () => {
    const { container } = render(<Tag>click me</Tag>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Tag', () => {
    const { container } = render(<Tag size="small">click me</Tag>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Tag type="primary" onClick={onClick}>click me</Tag>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

