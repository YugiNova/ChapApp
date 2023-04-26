import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import PrivateRoute from './routers/PrivateRoute';
import PublicRoute from './routers/PublicRoute';
import ChatPage from './pages/ChatPage';
import { Provider } from 'react-redux';
import store from './redux/reducer';
import FriendList from './components/ChatRoom/FriendList';
import Conversations from './components/ChatRoom/Conversations';
import GroupsChat from './components/ChatRoom/GroupsChat';
import Welcome from './components/ChatRoom/Welcome';

const router = createBrowserRouter([
  {
    path: "/ChapApp/",
    element: <PublicRoute component={<SignInPage/>}/>  
  },
  {
    path: "/ChatApp/SignUp",
    element: <PublicRoute component={<SignUpPage/>}/>  
  },
  {
    path: "/ChatApp/Chat",
    element: <PrivateRoute component={<ChatPage/>}/>,
    children: [
      {
        path: "FriendList",
        element: <FriendList/>
      },
      {
        path: "Conversations",
        element: <Conversations/>,
        children: [
          {path: "Messages/:id"},
          {
            path:"Messages/welcome",
            element: <Welcome/>
          }
        ]
      },
      {
        path: "GroupsChat",
        element: <GroupsChat/>
      }
    ]
  }
])

const App = () => {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    
  );
}

export default App;
