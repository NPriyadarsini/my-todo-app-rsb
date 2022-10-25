import React from 'react';

import { FilterBar } from './FilterBar';
// import * as ButtonStories from './Button.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'My Designs/Atoms/FilterBar',
	component: FilterBar,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FilterBar { ...args }/>;

export const Button = Template.bind({});
Button.args = {

	filters: [{ b1: 'all' }, { b2: 'active' }, { b3: 'completed' }],
};
