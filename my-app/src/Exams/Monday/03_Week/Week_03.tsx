type Status = 'Stopped' | 'Playing' | 'Paused'
type StateType = {
	 volume: number // in percents
	 trackUrl: string // 'https://blabla.com/track01.mp3',
	 currentPlayPosition: number // milliseconds,
	 status: Status
}
export const playerReducer = (state: StateType, action: any) => {
	 switch (action.type) {
			case 'TRACK-STATUS-CHANGED':
				 return {
						...state, volume: action.volume
				 }
			default:
				 return state
	 }
}

const muteTrackAC = () => ({type: 'TRACK-MUTED'})
const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

const state: StateType = {
	 status: 'Stopped',
	 currentPlayPosition: 1213,
	 trackUrl: 'https://blabla.com/track01.mp3',
	 volume: 100
}

const newState = playerReducer(state, changeTrackAC)
console.log(newState.status === 'Paused')
