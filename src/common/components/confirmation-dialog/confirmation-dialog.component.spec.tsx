import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('confirmation dialog spec', () => {
  it('should display dialog and dialog elements when isOpen is True', () => {
    //Arrange
    const LabelProps = {
      closeButton: 'close',
      acceptButton: 'accept',
    };
    const props = {
      title: 'test title',
      children: 'test children',
      onAccept: jest.fn(),
      onClose: jest.fn(),
      isOpen: true,
      labels: LabelProps,
    };
    //Act
    render(
      <ConfirmationDialogComponent {...props}>
        test children
      </ConfirmationDialogComponent>
    );

    const titleElement = screen.getByText('test title');
    const childrenElement = screen.getByText('test children');

    //Assert

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
  it('the button event has to be called', () => {
    //Arrange
    const LabelProps = {
      closeButton: 'close',
      acceptButton: 'accept',
    };
    const props = {
      title: 'test title',
      children: 'test children',
      onAccept: jest.fn(),
      onClose: jest.fn(),
      isOpen: true,
      labels: LabelProps,
    };
    render(<ConfirmationDialogComponent {...props} />);

    const buttonElementClose = screen.getByRole('button', { name: 'close' });
    userEvent.click(buttonElementClose);
    const buttonElementAccept = screen.getByRole('button', { name: 'accept' });
    userEvent.click(buttonElementAccept);
    //Assert
    expect(props.onClose).toHaveBeenCalled();
    expect(props.onAccept).toHaveBeenCalled();
  });
});
