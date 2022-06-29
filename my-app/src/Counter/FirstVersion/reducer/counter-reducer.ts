import {SetValueCounter} from "../SetValueCounter";

export type DisabledButton = {
	 type: 'DISABLED'
	 maxNum: number
	 startNum: number
}

export type ActionType = DisabledButton

export const counterReducer = (state: SetValueCounter, action: ActionType) => {
	 switch (action.type) {
			case 'DISABLED':
				 return action.maxNum < 1 || action.maxNum <= action.startNum || action.startNum < 0
			default:
				 throw new Error('Error')
	 }
}
export const disabledButtonAC = (maxNum: number, startNum: number): DisabledButton => {
	 return {type: 'DISABLED', maxNum, startNum}
}