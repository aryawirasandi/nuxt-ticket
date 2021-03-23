import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
    list: [],
    progress : false,
})

export const mutations = {
    SUBMIT_TICKET(state, payload){
        state.progress = true;
        let id = uuidv4();
        let data = {
            id,
            ...payload,
            status : false,
        }
        state.list = [...state.list, data]
        state.progress = false;
    },
}

export const actions = {
    SUBMIT_TICKET({commit}, payload){
        commit("SUBMIT_TICKET", payload);
    }
}

export const getters = {
    GET_ALL_TICKETS(state){
        return state.list
    },
    GET_PROGRESS(state){
        return state.progress;
    }
}