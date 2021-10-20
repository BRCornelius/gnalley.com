import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { GlobalContext } from '../../../context/global-context';
import { Contact } from '../Contact';

const renderWithContext = (contextObject) => render(<GlobalContext.Provider value={contextObject}><Contact /></GlobalContext.Provider>)

test('It should render properly', () => {
    const { container, getAllByTestId } = render(<Contact />);
    expect(getAllByTestId('input-field')).toHaveLength(6);
    expect(container).toMatchSnapshot()
})

test('It should change new client button when clicked', () => {
    const mockFunction = jest.fn();
    const providerProps = {
        email: '',
        firstNaem: '',
        lastName: '',
        message: '',
        newClient: null,
        open: false,
        phone: '',
        setEmail: mockFunction,
        sendEmail: mockFunction,
        setFirstName: mockFunction,
        setNewClient: jest.fn(() => providerProps.newClient = 'yes'),
        setLastName: mockFunction, setMessage: mockFunction, setOpen: mockFunction, setPhone: mockFunction, emptyContactState: mockFunction
    };
    const {getByText} = renderWithContext(providerProps)
    fireEvent.click(getByText('Yes'))
    expect(providerProps.setNewClient).toHaveBeenCalled();
    expect(providerProps.newClient === 'yes').toBeTruthy();
})