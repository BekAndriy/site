import { createStore } from 'redux';

const playlist = function (state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [
			...state,
			action.playload
		];
	}
	return state;
}

export default createStore(playlist);
module.exports = playlist;
