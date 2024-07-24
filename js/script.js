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

    }
}).mount('#app');