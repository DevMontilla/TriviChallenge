import axios from "axios"
import { BASE_API_URL } from "./config/openTrivia"

export const easyQuestions = async () => {
    return await axios.get(`${BASE_API_URL}`, {
        params: {
            amount: 10,
            difficulty: 'easy'
        }
    })
} 

export const intermediateQuestions = async () => {
    return await axios.get(`${BASE_API_URL}`, {
        params: {
            amount: 20,
            difficulty: 'medium'
        }
    })
} 

export const hardQuestions = async () => {
    return await axios.get(`${BASE_API_URL}`, {
        params: {
            amount: 30,
            difficulty: 'hard'
        }
    })
} 

export const leyendQuestions = async () => {
    return await axios.get(`${BASE_API_URL}`, {
        params: {
            amount: 50,
            difficulty: 'hard'
        }
    })
} 