type Status = 'Stopped' | 'Playing' | 'Paused'
type StateType = {
	 volume: number // in percents
	 trackUrl: string // 'https://blabla.com/track01.mp3',
	 currentPlayPosition: number // milliseconds,
	 status: Status
}
export const playerReducer = (state: StateType, action: any) => {
	 switch (action.type) {
			case 'TRACK-VOLUME-CHANGED':
				 return {
						...state,
						volume: 20
				 }
			default:
				 return state
	 }
}


test('test', () => {


	 const muteTrackAC = () => ({type: 'TRACK-MUTED'})
	 const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
	 const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
	 const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

	 const state: StateType = {
			status: 'Stopped',
			currentPlayPosition: 1213,
			trackUrl: 'https://blabla.com/track01.mp3',
			volume: 100
	 }
	 const newState = playerReducer(state, changeVolumeAC(20))
	 expect(newState.volume).toBe(20)
	 console.log(newState.volume === 20)

})


