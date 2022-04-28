import {add, multply} from "./01";
import exp from "constants";

test('sum  should be correct', () => {
		const num1 = 1
		const num2 = 2
		const resultAdd = add(1,2)
		const resultMult = multply(2,5)
		expect(resultAdd).toBe(3)
		expect(resultMult).toBe(10)


})