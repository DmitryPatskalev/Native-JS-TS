import exp from "constants";

export const reducer = (state: any, action: any) => {
	 switch (action.type) {
			case 'TRACK-LIKED':
				 return {
						...state,
						[action.trackId]: {
							 ...state[action.trackId],
							 likesCount: state[action.trackId].likesCount + 1
						}
				 }
			default:
				 return state
	 }
}
test('test', () => {
	 const likeTrackAC = (trackId: number) => ({type: 'TRACK-LIKED', trackId})


	 const state = {
			12: {id: 12, likesCount: 10},
			14: {id: 14, likesCount: 2},
			100: {id: 100, likesCount: 0},
	 }
	 const newState = reducer(state, likeTrackAC(14))
	 expect(newState[14].likesCount).toBe(3)

})


