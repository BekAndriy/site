export const OPEN_USER_SETTINGS = 'OPEN_USER_SETTINGS';
export const USER_PAGE = 'USER_PAGE';

export function playlist (state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [
			...state,
			action.playload
		];
	}
	return state;
}

export function search(state = [], action) {
	switch (action.type) {
		case OPEN_USER_SETTINGS:
			return [
				...state,
				{
					search: action.search,
				}
			]
		default:
		return state
	}
}

export function userPage(state = [], action) {
	switch (action.type) {
		case USER_PAGE:
			return [
				...state,
				action.user
			]
		default:
		return state
	}
}