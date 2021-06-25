import { render } from "@testing-library/react";
import NewItemForm from "./NewItemForm";


//smoke test
it('renders the div without crashing', () => {
    render(<NewItemForm />)
});

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<NewItemForm />);
    expect(asFragment()).toMatchSnapshot()
});
