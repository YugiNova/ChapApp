export const UpdateUser = (data) => {
    return{
        type: "user/SignIn",
        payload: data
    }
}

export const UpdateConversationList = (data) => {
    return{
        type:`chat/conversationList`,
        payload: data
    }
}

export const UpdateConversation = (data) => {
    return{
        type:`chat/conservation`,
        payload: data
    }
}

export const ResetState = (data) => {
    return{
        type:`resetState`,
        payload: data
    }
}

export const UpdateTheme = (data) => {
    return{
        type:`theme/Update`,
        payload: data
    }
}