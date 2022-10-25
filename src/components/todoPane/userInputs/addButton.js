import { React } from 'react';

const AddButton = (context) => {
	const { actions } = context;

	return (
		<button
			role="addButton"
			onClick={ () => actions.addTodo() }
		>
			Add
		</button>
	);
};

export default AddButton;
