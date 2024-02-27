import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import UserProvider from './context/UserContext';
import AuthProvider from './context/AuthContext'
import ModalProvider from './context/ModalContext'
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
   <UserProvider>
    <ModalProvider>
       <App />
    </ModalProvider>
   </UserProvider>
    </AuthProvider>
)