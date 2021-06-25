import { render } from "@testing-library/react";
import NavBar from "./NavBar";


//smoke test
it('renders the div without crashing', () => {
    render(<NavBar />)
});

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<NavBar />);
    expect(asFragment()).toMatchSnapshot()
});
