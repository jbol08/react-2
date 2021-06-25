import { render } from "@testing-library/react";
import FoodItem from "./FoodItem";


//smoke test
it('renders the div without crashing', () => {
    render(<FoodItem />)
});

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<FoodItem />);
    expect(asFragment()).toMatchSnapshot()
});
