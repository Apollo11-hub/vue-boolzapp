const app = new Vue({
el:"#app",

data:{

mainUser:
    {
        name:"Antonio",
        avatar:"_io",
        visible:true,
        messages:[]
    },

users:[

    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Stai tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Marina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
],

newMessageToPush:"",

chatSelectorIndex:0,

increase:0,

timer:0,

filterName: "",

toggleWindow: false,

},

methods: {


// Funzione per avere l'indice chat
    selectChat(index){
        this.chatSelectorIndex = index;
    },
//// Funzione per avere dinamicamente l'ultimo accesso
    lastDateFunction(index){
        if(this.users[index].messages[this.users[index].messages.length -1].status == 'received'){
            return this.users[index].messages[this.users[index].messages.length -1].date
        }else{
            return this.users[index].messages[this.users[index].messages.length -1]
        }
    },
// Funzione che pusha il messaggio scritto
    newMessageFunction(index){
        
        const newMessage =
        {
            date:dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message:this.newMessageToPush,
            status:"sent"
        }
        
        if (this.newMessageToPush.length > 0) {
            this.users[index].messages.push(newMessage)
            this.increase++
        }
        this.newMessageToPush = "";
    },
// Funzione che pusha il messaggio automatico
    autoAnswereFunction(index){
        
        const newMessage =
        {
            date:dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message:"Okè",
            status:"received"
        }
        if(this.increase > 0){
            this.users[index].messages.push(newMessage)
        }
        clearTimeout(this.timer)
        this.increase = 0;
    },
// Funzione a tempo che innesca la funzione sopra
    setTimeOutFuncion(){

        this.timer = setInterval(() => {
            this.autoAnswereFunction(this.chatSelectorIndex)
    }, 1000);
        console.log(this.timer)
    },

    // filterUsersByName() {
    //     let filterUsers = this.users.filter((user) => {
    //         return user.name.toLowerCase().includes(this.filterName.toLowerCase());
    //     })
    //     return filterUsers
    // },

    filterFunction(index){
     console.log(this.user.visible);
    }
    
},

mounted(){

    this.filterFunction(this.chatSelectorIndex)
}


})