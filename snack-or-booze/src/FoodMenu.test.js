import { render } from "@testing-library/react";
import FoodMenu from "./FoodMenu";


//smoke test
it('renders the div without crashing', () => {
    render(<FoodMenu />)
});

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<FoodMenu />);
    expect(asFragment()).toMatchSnapshot()
});
