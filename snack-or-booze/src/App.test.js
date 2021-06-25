import { render } from "@testing-library/react";
import App from "./App";


//smoke test
it('renders the div without crashing', () => {
    render(<App />)
});

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot()
});
