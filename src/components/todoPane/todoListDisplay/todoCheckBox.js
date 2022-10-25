import { React } from 'react';

const CheckBox = (context) => {
	const { data, actions } = context;
	const { completed } = data;

	return (
		<input
			role="toggleTodo"
			type="checkbox"
			checked={ completed }
			onChange={ () => actions.toggleTodo(data) }
		/>);
};

export default CheckBox;
