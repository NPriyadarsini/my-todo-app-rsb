import { React } from 'react';
import Input from './input.js';
import { FilterBar } from '../../../stories/FilterBar';
import { Button } from '../../../stories/FilterBar.stories.jsx';
import ActionButton from './actionButton';
import TodoManager from '../../../services/todoManager.js';

const UserInputs = (context) => {
	const { actions } = context;

	return (
		<div className="userInputs" role="userInputs">
			<div className="input">
				{Input(context)}
				{ActionButton(context)}
			</div>
			<br/>
			<FilterBar
				{ ...Button.args }
				role="filterButton"
				disabled={ TodoManager.hasNoTodos(context) }
				onClick={ (evt) => actions.setFilter(evt.target.value) }
			/>
			<br/>
		</div>
	);
};

export default UserInputs;
