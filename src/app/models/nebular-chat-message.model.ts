// TODO
class NebularChatMessageUser {
    name!: any
    avatar!: any
}

export class NebularChatMessage {
    text!: any
    date!: Date
    reply!: any
    user!: NebularChatMessageUser
    longitude?: any
    latitude?: any
    quote?: any
    files?: any
    type?: any
}
