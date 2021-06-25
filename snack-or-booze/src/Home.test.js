import { render } from "@testing-library/react";
import Home from "./Home";


//smoke test
it('renders the div without crashing', () => {
    render(<Home />)
});

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot()
});
