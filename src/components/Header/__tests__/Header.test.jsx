import { createMemoryHistory } from 'history';
import { fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Header } from '../Header';
import { Route, Switch } from 'react-router-dom';

const MockSiteNavigation = () => <Switch>
    <Route path="/contact">
        <div data-testid="contact-page" />
    </Route>
    <Route path="/team">
        <div data-testid="team-page" />
    </Route>
    <Route path="/firm">
        <div data-testid="firm-page" />
    </Route>
    <Route path="/">
        <div data-testid="splash-page" />
    </Route>
</Switch>

test('Full app navigation', () => {
    const history = createMemoryHistory();
    const { getByTestId, getByText, getByAltText } = render(
        <Router history={history}>
            <Header />
            <MockSiteNavigation />
        </Router>
    );
    expect(getByTestId('splash-page')).toBeInTheDocument();
    fireEvent.click(getByAltText('menu'));
    fireEvent.click(getByText('Firm'));
    expect(getByTestId('firm-page')).toBeInTheDocument();
})

test('Bad navigation routes to homepage', () => {
    const history = createMemoryHistory();
    history.push('/bad-route')
    const { getByTestId } = render(
        <Router history={history}>
            <Header />
            <MockSiteNavigation />
        </Router>
    );
    expect(getByTestId('splash-page')).toBeInTheDocument();
})

test('Renders correctly', () => {
    const { container, getByAltText } = render(<Header />)
    expect(getByAltText('logo')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})