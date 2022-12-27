<template>
    <h1>first</h1>

    <!-- we will get the value from state in the below p tag -->
    <p>{{ $store.state.title}}</p>
    <button @click="clickme">click me</button>
    <child />
</template>
<script>
import child from './child.vue'
export default{
    name:'first',
    components:{
        child
    },
    methods:{
        clickme(){
            //easy way to chnge title
            // this.$store.state.title="Happy Now"
            // this.$store.commit('newTitle','new title has been changed now by use of mutations') 
           
            // passing multiple values by using object

            // this.$store.commit('newTitle',{title:'multiple values pass through objects??'}) 
            
        //    another way of writing the code
           this.$store.commit({
            type:'newTitle',
            title:'New Again Data'
           })
        // type is simply the muatation and title is the property or (object in payload) which we have wrote in mutation    
            


        // actions we use dispatch here instead of commit
        // this.$store.dispatch({
        //     type:'setnewTitle',
        //     title:'Title action Data'
        //    })

        //    promise -------2nd way
        // this.$store.dispatch({
        //     type:'setnewTitle',
        //     title:'Title action Data'
        //    }).then((response)=>{
        //     console.log('called', response)
        //    })

        //    -----------3rd way if we want use action in action
        this.$store.dispatch({
            type:'setnewTitle2',
            title:'Title action Data 2'
        })

        }
    }
}
</script>