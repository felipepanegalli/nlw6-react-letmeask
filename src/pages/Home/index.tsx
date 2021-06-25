import {useHistory} from 'react-router-dom';
import React, {FormEvent, useContext, useState} from 'react';
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import darkLogoImg from "../../assets/images/logo-dark.svg";
import googleIconImg from '../../assets/images/google-icon.svg'
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import {database} from "../../services/firebase";
import {ThemeContext} from "styled-components";
import {AsideStyled, MainStyled, PageAuth, MainContent, Separator } from './styles';

const Home = () => {
    const history = useHistory();
    const {signInWithGoogle, user} = useAuth();
    const [roomCode, setRoomCode] = useState('');
    const {title} = useContext(ThemeContext);

    async function handleCreateRoom() {
        console.log(user)
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();
        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists.');
            return;
        }

        if (roomRef.val().endedAt) {
            alert('Room already closed.');
            return;
        }

        history.push(`/rooms/${roomCode}`)
    }

    return (
        <PageAuth>
            <AsideStyled>
                <img src={illustrationImg} alt="Illustration"/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </AsideStyled>
            <MainStyled>
                <MainContent>
                    <img src={(title === 'dark') ? darkLogoImg : logoImg} alt="Logo da aplicação"/>

                    <button className='create-room' onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google"/>
                        Cria sua sala com o Google
                    </button>

                    <Separator>ou entre em uma sala</Separator>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">Entrar na Sala</Button>
                    </form>
                </MainContent>
            </MainStyled>
        </PageAuth>
    )
}

export default Home;