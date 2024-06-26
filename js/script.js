// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.




const {createApp} = Vue;

createApp({
    data(){
        return{
            logoImg: "img/boolean-logo.png",
            newTask: '',
            tasks: [
                {
                    "testo": "Fai la spesa",
                    "avanzamento": false,
                },
                
                {
                    "testo": "Piega i panni dall'asciugatrice",
                    "avanzamento": false,
                },

                {
                    "testo": "Rifai il letto",
                    "avanzamento": true,
                },

                {
                    "testo": "Porta fuori il cane",
                    "avanzamento": true,
                },

                {
                    "testo": "Finisci la missione secondaria",
                    "avanzamento": false,
                },
            ]
        };
    },

    methods:{
        // moltoUtile(){
        //     console.log(this.tasks[0]);
        // },

        removeTask(index){
            this.tasks.splice(index, 1)
        },

        addTask(){

            if(this.newTask.length >= 5){
                this.tasks.unshift({
                    "testo": this.newTask,
                    "avanzamento": false,
                });

                this.newTask = '';
            }

        },

        check(index){

            if(this.tasks[index].avanzamento === true){
                this.tasks[index].avanzamento = false;
            }else{
                this.tasks[index].avanzamento = true;
            }

            console.log(this.tasks[index].avanzamento);
        },
    }

}).mount("#container")