import React, {FormEvent, useContext, useState} from 'react';
import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import darkLogoImg from "../../assets/images/logo-dark.svg";
import Button from "../../components/Button";
import {Link, useHistory} from 'react-router-dom';
import {database} from '../../services/firebase';
import useAuth from "../../hooks/useAuth";
import {ThemeContext} from "styled-components";
import {AsideStyled, MainContent, MainStyled, PageAuth} from "./styles";

const NewRoom = () => {
    const {user} = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');
    const {title} = useContext(ThemeContext);

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()
        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`)
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Criar Sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </MainContent>
            </MainStyled>
        </PageAuth>
    )
}

export default NewRoom;