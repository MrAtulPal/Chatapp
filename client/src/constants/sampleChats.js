export const sampleChats = [
    {
        _id: 1,
        name: "John",
        message: "Hi",
        members: [1, 2],
        groupChat: false,
        avatar: ["https://cdn-icons-png.flaticon.com/512/149/149071.png"],
    },
    {
        _id: 2,
        name: "Jane",
        message: "Hi",
        members: [1, 2],
        groupChat: true,
        avatar: ["https://cdn-icons-png.flaticon.com/512/149/149071.png", "https://cdn-icons-png.flaticon.com/512/149/149071.png"],
    },
    {
        _id: 3,
        name: "John",
        message: "Hi",
        members: [1, 2],
        groupChat: false,
        avatar: ["https://cdn-icons-png.flaticon.com/512/149/149071.png"],
    },
    {
        _id: 4,
        name: "Jane",
        message: "Hi",
        members: [1, 2],
        groupChat: false,
        avatar: ["https://cdn-icons-png.flaticon.com/512/149/149071.png"],
    },
]

export const sampleUser = [
    {
        _id: 1,
        name: "Jane",
        message: "Hi",
        members: [1, 2],
        groupChat: false,
        avatar: ["https://cdn-icons-png.flaticon.com/512/149/149071.png"],
    },
    {
        _id: 2,
        name: "Harry",
        message: "Hi",
        members: [1, 2],
        groupChat: false,
        avatar: ["https://cdn-icons-png.flaticon.com/512/149/149071.png"],
    }

]

export const sampleNotification = [
    {
        sender:{
            avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            name: "Jane",
        },
        _id: 1
    },
    {
        sender:{
            avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            name: "Harry",
        },
        _id: 2
    }
] 

export const sampleMessage = [
    {
        attachments: [
            {
                public_id: 'sfs',
                url: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
        ],
        content: "Whats up niggas!",
        _id: 'dsfs',
        sender: {
            _id: 'fsd',
            name: 'atulknowsme'
        },
        chat: 'chatId',
        createdAt: "2024-02-12T21:00:00.000Z"
    },
    {
        attachments: [
            {
                public_id: 'sfs',
                url: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
        ],
        content: "party at ma house tonight!",
        _id: 'dsf',
        sender: {
            _id: 'fsda',
            name: 'atulknowsme'
        },
        chat: 'chatId',
        createdAt: "2024-02-12T21:00:00.000Z"
    },
]