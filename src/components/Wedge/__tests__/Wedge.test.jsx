import { render } from "@testing-library/react";
import { Wedge } from '../Wedge';

const MockChildComponentOne = () => <h1>First Header</h1>
const MockChildComponentTwo = () => <h2>Second Header</h2>

test('Renders children inside the wedge', () => {
    const { getByText } = render(<Wedge>
        <MockChildComponentOne />
        <MockChildComponentTwo />
    </Wedge>)
    expect(getByText('First Header')).toBeTruthy();
    expect(getByText('Second Header')).toBeTruthy();
})
