export interface Answer{
    answer: string
    points: number
}

export interface Question {
    id: number
    content: string
    answers: Answer[]
}


export interface Result {
    id: number
    result: string
    link: string
}
