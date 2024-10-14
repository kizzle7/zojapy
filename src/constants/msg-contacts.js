import user1 from "../Assets/chat-user-1.svg"
import user2 from "../Assets/user2.svg"
import user3 from "../Assets/user3.svg"
import user4 from "../Assets/user4.svg"
import user5 from "../Assets/user5.svg"
import user6 from "../Assets/user6.svg"

export const contacts = [
    {
        id: 1, name: "Lisa Roy", message: "Hi, are you Avaialble Tommorrow?", time: '10:35 AM', image: user1, count: 0, chats: [{
            incoming: ['Hi, How are you doing today?'], outgoing: ['Hi, are you Avaialble Tommorrow?']
        }]
    },
    {
        id: 2, name: "Jamie Taylor", message: `Nice one
        Will Do it tommorrow`, time: '10:35 AM', isCheck: false, count: 1, image: user6,
        chats: [{
            incoming: ['How is your day going champ?'], outgoing: ['Nice one Will Do it tommorrow']
        }]
    },
    {
        id: 3, name: "Jason Roy", message: `That’s Great. I am Looking forward to having a great start.`, time: '10:35 AM', isCheck: true, image: user3, chats: [{
            incoming: [`I am loking forward to having a great chat with you ?`], outgoing: ['That’s Great. I am Looking forward to having a great start']
        }]
    },
    {
        id: 4, name: "Amy Frost", message: `Hi, will you start working on the chat app right now?`, time: '10:35 AM', isCheck: true, image: user4, chats: [{
            incoming: ['I hope you are doing well?'], outgoing: ['Hi, will you start working on the chat app right now?']
        }]
    }, {
        id: 5, name: "Paul Wilson", message: `Nice one
                    see you tommorrow champ`, time: '10:35 AM', isCheck: true, count: 1, image: user5, chats: [{
            incoming: ['How are you there?'], outgoing: ['Nice one see you tommorrow champ']
        }]
    }, {
        id: 6, name: "Anna Williams", message: `??`, time: '10:35 AM', isCheck: false, image: user2, count: 1, chats: [{
            incoming: ['Can i talk to you?'], outgoing: ['??']
        }]
    },

]