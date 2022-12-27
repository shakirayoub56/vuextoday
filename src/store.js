import { createStore } from "vuex";

const store = createStore({
    state: {
        name: 'Learning Vuex',
        title: 'started Learning state',
        secretKey:888,
        sno:786,
    },
    // we will change the state with muations now
    mutations: {
        newTitle(state, payload) {
            // state.title="Changed Title"+ payload
            // passing multiple values by using object
            state.title = "Changed Title " + payload.title

        }
    },
    //actions commit mutations
    //Instead of mutating the state, actions commit mutations.
    //Actions can contain arbitrary asynchronous operations.
    actions: {
        // setnewTitle(context, payload) {
        //     setTimeout(()=>{
        //         context.commit('newTitle', payload)
        //         console.log("called")
        //     },2000)
           

            // newTitle came from mutation thats why we said we are commiting mutations here
            // context.commit('newTitle', { title: 'Changed data through action' })
            // context.commit('newTitle', payload)

            // now if it will take time then


            // use promise now
            setnewTitle(context, payload) {
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                                context.commit('newTitle', payload)
                                resolve("resolved all ok")
                        
                },2000)
                
           
        })
    },
    setnewTitle2(context){
        context.dispatch({
            type:'setnewTitle',
            title:'Title action Data 2'
        }).then((response)=>{
            console.log('wait....', response)
        
        })
    }

    },
    // getters
    getters:{
        hashAdd(state){
            return state.secretKey+'###'
        },


        // if we are having two getters then we need to do this previous getter we need to call in new getter and it will get updated new
        //getter wll call another getter we use the getter parameter 
        hashnewAdd(state, getters){
            return state.sno+'**'+getters.hashAdd;
        },
        newSecret :(state)=>(data)=>{
         return data+'$$$'+state.secretKey
        }

    }
})
export default store