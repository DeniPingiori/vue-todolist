const { createApp} = Vue;

createApp({
    data(){
        return {
            tasks: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Seguire la lezione',
                    done: true
                },
                {
                    text: "fare l'esercizio del giorno", 
                    done:true
                },
                {
                    text: 'Portare a spasso doggo', 
                    done: false
                }, 
                {
                    text: 'Preparare il pranzo',
                    done: false
                }
            ]
        }
    },
    methods:{
        deleteTask(index) {
            if(confirm('Sei sicuro di voler cancellare questo task?')){
                
            }
          this.tasks.splice(index, 1);  
        }
    }
}).mount('#app');