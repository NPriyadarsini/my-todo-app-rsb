import React from 'react';
import PropTypes from 'prop-types';
import './filterBar.css';
import { values } from '@laufire/utils/collection';

/**
 * Primary UI component for user interaction
 */
export const FilterBar = ({ filters, ...props }) =>
	<div>
		{filters.map((filter, key) =>
			<button
				key={ key }
				value={ values(filter) }
				type="button"
				className="storybook-button"
				{ ...props }
			>
				{values(filter)}
			</button>)}
	</div>;

FilterBar.propTypes = {

	onClick: PropTypes.func,
	filters: PropTypes.array,
};

FilterBar.defaultProps = {
	onClick: undefined,
	filters: [],
};
