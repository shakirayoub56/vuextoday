import { createStore } from "vuex";

const store = createStore({
    state: {
        name: 'Learning Vuex',
        title: 'started Learning state'
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

    }
})
export default store