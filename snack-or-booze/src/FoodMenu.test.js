import { render} from "@testing-library/react";
import Menu from "./FoodMenu";
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const snacks = [
	{
		id          : 'nachos',
		name        : 'Nachos',
		description : 'An American classic!',
		recipe      : 'Cover expensive, organic tortilla chips with Cheez Whiz.',
		serve       : 'Serve in a hand-thrown ceramic bowl, garnished with canned black olives'
	},
	{
		id          : 'hummus',
		name        : 'Hummus',
		description : 'Sure to impress your vegan friends!',
		recipe      : 'Purchase one container of hummus.',
		serve       : 'Place unceremoniously on the table, along with pita bread.'
	},
	{
		id          : 'arugula-and-walnut-salad',
		name        : 'Arugula and Walnut Salad',
		description : 'Tart and delicious.',
		recipe      :
			'Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil.',
		serve       : 'Place on tiny, precious little plates.'
	}
];


//smoke test
it('renders the div without crashing', () => {
    render(
        <MemoryRouter initialEntries={[ '/snacks' ]}>
            <Menu items={snacks} title='Snacks' />
        </MemoryRouter>)
});

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(
        <MemoryRouter initialEntries={[ '/snacks' ]}>
        <Menu items={snacks} title='Snacks' />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot()
});


    