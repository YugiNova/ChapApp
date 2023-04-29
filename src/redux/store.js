const initState = {
  user: {
    uid: "",
    displayName: "",
    email: "",
    imageUrl: "",
    role: "",
    friend_list: [],
    recieved_invite: [],
    sended_invite: [],
    conversations: [],
  },
  conversationList: [],
  conversation: {
    id: "",
    users: [],
    message: [],
  },
  theme: {
    status: "dark",
    primaryColor: "#7269ef",
    sidebarBg: "#36404a",
    listBg: "#303841",
    chatBg: "#262e35",
    primaryFont: "white",
    secondaryFont: "#a6b0cf",
    listItemActive: "#36404a",
    sidebarItemActive: "#262e35",
  },
  showChat: "translateX(0)",
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case `user/SignIn`:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case `user/SignUp`:
      return {
        ...state,
        user: { ...action.payload },
      };
    case `chat/conversationList`:
      return {
        ...state,
        conversationList: action.payload,
      };
    case `chat/conservation`:
      return {
        ...state,
        conversation: {
          ...state.conversation,
          ...action.payload,
        },
      };
    case `theme/Update`:
      return {
        ...state,
        theme: {
          ...state.theme,
          ...action.payload,
        },
      };
    case `chat/show`:
      return {
        ...state,
        showChat: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
