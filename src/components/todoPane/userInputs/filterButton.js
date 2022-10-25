import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const FilterButton = (context) => {
	const { data, actions } = context;
	const { label, name } = data;

	return (
		<button
			key={ name }
			role="filterButton"
			disabled={ TodoManager.hasNoTodos(context) }
			onClick={ () => actions.setFilter(name) }
		>
			{label}
		</button>
	);
};

export default FilterButton;
