import { render } from "@testing-library/react";
import NavBar from "./NavBar";
import { MemoryRouter } from 'react-router-dom';
import React from 'react';


//smoke test

it('renders without crashing', () => {
	render(
		<MemoryRouter initialEntries={[ '/' ]}>
			<NavBar />
		</MemoryRouter>
	);
});
//snapshot test
it('matches loading snapshot', () => {
	const { asFragment } = render(
		<MemoryRouter initialEntries={[ '/' ]}>
			<NavBar />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});