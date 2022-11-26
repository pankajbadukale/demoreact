import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import App from './App';
import { reducer, initialState } from './components/myreducer'
import { ADD_TO_BOX, RM_FROM_BOX } from './components/actionConstants'

describe('App Component', () => {
  test('Check Shoot Button Available', () => {
    render(<App />);
    const linkElement = screen.getByText(/Shoot/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Check button disabled initially', () => {
    render(<App />);
    const linkElement = screen.getByText(/Shoot/i);
    expect(linkElement).toBeDisabled(true);
  })

  test('Box container is visible', () => {
    render(<App />);
    //ui should has box container div on screen
    const boxElement = screen.getByTestId('box-ctr');
    expect(boxElement).toBeVisible();
  })

  test('Circles are rendered', () => {
    render(<App />);
    //one of circle element has available
    const circleElement = screen.getAllByTestId('cir-box');
    expect(circleElement[0]).toBeInTheDocument()
    expect(circleElement.length).toBeGreaterThan(0)
  });

})

describe('Input Component', () => {

  test('Input restricted for aplhabets', () => {
    render(<App />);
    //shoot input
    const shootInput = screen.getByTestId('shootinput');
    //should not have to allow to add alphabets
    fireEvent.change(shootInput, { target: { value: 'abc' } })
    expect(shootInput.value).toBe('')
  });

  test('Validate input against user input event', () => {
    render(<App />);
    //shoot input
    const shootInput = screen.getByTestId('shootinput');
    //shoot button
    const linkElement = screen.getByText(/Shoot/i);
    //should allow number inputs
    fireEvent.change(shootInput, { target: { value: 3 } })
    expect(shootInput.value).toBe("3")
    expect(linkElement).toBeEnabled();
  })

  test('Validate Shoot button event and result after click', () => {
     render(<App />);
    //shoot input
    const shootInput = screen.getByTestId('shootinput');
    //shoot button
    const linkElement = screen.getByText(/Shoot/i);
    fireEvent.change(shootInput, { target: { value: 3 } })
    expect(shootInput.value).toBe("3")
    fireEvent.click(linkElement);
    //circle element
    let boxContainer = screen.getByTestId('box-ctr').querySelectorAll('.onecircle');
    expect(boxContainer.length).toBe(1)
    fireEvent.change(shootInput, { target: { value: 3 } })
    fireEvent.click(linkElement);
    boxContainer = screen.getByTestId('box-ctr').querySelectorAll('.onecircle');
    expect(boxContainer.length).toBe(2)
  })

})

describe('Box Component', () => {
  test('OnClick Of circle that circle should be removed and add back', () => {
   const { debug } = render(<App />);
    //shoot input
    const shootInput = screen.getByTestId('shootinput');
    //shoot button
    const linkElement = screen.getByText(/Shoot/i);
    fireEvent.change(shootInput, { target: { value: 3 } })
    expect(shootInput.value).toBe("3")
    fireEvent.click(linkElement);
    //circle element
    let boxContainer = screen.getByTestId('box-ctr').querySelectorAll('.onecircle');
    expect(boxContainer.length).toBe(2)

  })
})