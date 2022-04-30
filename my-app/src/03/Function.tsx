export type StudentType = {
	 name: string
	 age: number
	 isActive: boolean
	 adress: AdressType
	 tech: Array<TechType>
}
type AdressType = {
	 street: string
	 city: string
	 country: string

}

type TechType = {
	 id: number
	 title: string
}

export const addSkill = (student: StudentType, skill: string) => {
	 student.tech.push({
				id: 4,
				title: 'TS'
		 }
	 )
}


