import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AuthContextProvider} from './contexts/AuthContext'
import {Room} from "./pages/Room";
import {AdminRoom} from "./pages/AdminRoom";
import GlobalStyle from './styles/global';
import {DefaultTheme, ThemeProvider} from "styled-components";
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';
import usePersistedState from "./hooks/usePersistedState";

function App() {

    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? darkTheme : lightTheme)
    }

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AuthContextProvider>
                    <GlobalStyle/>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/rooms/new' component={NewRoom}/>
                        <Route path='/rooms/:id'><Room toggleTheme={toggleTheme}/></Route>

                        <Route path='/admin/rooms/:id'><AdminRoom toggleTheme={toggleTheme}/></Route>
                    </Switch>
                </AuthContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
