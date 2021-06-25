import React, {useContext} from 'react';
import logoImg from "../../assets/images/logo.svg";
import darkLogoImg from "../../assets/images/logo-dark.svg";
import moonImg from "../../assets/images/moon.svg";
import sunImg from "../../assets/images/sun.svg";
import RoomCode from "../RoomCode";
import Button from "../Button";
import ReactSwitch from "react-switch";
import {ThemeContext} from "styled-components";
import {database} from "../../services/firebase";
import {useHistory} from "react-router-dom";
import {Content, HeaderStyled, moonIcon, ReactSwitchStyle, sunIcon} from './styles';

type Props = {
    toggleTheme(): void;
    roomId: string;
}

const Header = ({roomId, toggleTheme}: Props) => {
    const {colors, title} = useContext(ThemeContext)
    const history = useHistory();

    async function handleCloseRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        });
        history.push('/');
    }

    return (
        <HeaderStyled>
            <Content>
                <img src={(title === 'dark') ? darkLogoImg : logoImg} alt="LetmeAsk"/>
                <div className='button-group'>
                    <RoomCode code={roomId}/>
                    <Button isOutlined onClick={handleCloseRoom}>Encerrar sala</Button>
                    <ReactSwitchStyle>
                        <ReactSwitch
                            checked={title === 'dark'}
                            onChange={toggleTheme}
                            uncheckedIcon={<img src={sunImg} alt="sun" style={sunIcon}/>}
                            checkedIcon={<img src={moonImg} alt="moon" style={moonIcon}/>}
                            height={20}
                            width={50}
                            onColor={colors.primary}
                        />
                    </ReactSwitchStyle>
                </div>
            </Content>
        </HeaderStyled>
    )
}

export default Header;