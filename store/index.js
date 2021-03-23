export const state = () => ({
    forms: {
        firstname : "",
        lastname : "",
        currentJob : "",
        address : "",
    }
})

export const mutations = {
    CHANGE_INPUT(state, payload){
       const { type, value } = payload;
        state.forms = {
            ...state.forms,
            [type] : value
        }
    },
    CLEAR_FORM(state){
         Object.keys(state.forms).map(item => {
             state.forms[item] = ""
         })
         return state.forms
    }
}

export const actions = {
    CHANGE_INPUT({commit}, payload){
        commit("CHANGE_INPUT",  payload);
    },
    CLEAR_FORM({commit}){
        commit("CLEAR_FORM");
    }
    
}

export const getters = {
    forms(state){
        return state.forms
    },
}