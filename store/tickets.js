import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
    lists: [],
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
        state.lists = [...state.lists, data]
        state.progress = false;
    },
    DELETE_TICKET(state, id){
        state.lists = state.lists.filter(list => list.id !== id );
    }
}

export const actions = {
    SUBMIT_TICKET({commit}, payload){
        commit("SUBMIT_TICKET", payload);
    }, 
    DELETE_TICKET({commit}, id){
        commit("DELETE_TICKET", id);
    }
}

export const getters = {
    GET_ALL_TICKETS(state){
        return state.lists
    },
    GET_PROGRESS(state){
        return state.progress;
    }
}