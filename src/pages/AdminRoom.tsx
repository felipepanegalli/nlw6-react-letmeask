import React from 'react';
import logoImg from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'
import '../styles/room.scss'
import RoomCode from "../components/RoomCode";
import {useHistory, useParams} from 'react-router-dom';
import Question from '../components/Question';
import useRoom from '../hooks/useRoom';
import Button from "../components/Button";
import {database} from '../services/firebase';

type RoomParams = {
    id: string;
}

export const AdminRoom = () => {
    // const {user} = useAuth();
    const history = useHistory();
    const params = useParams<RoomParams>()
    const roomId = params.id;
    const {title, questions} = useRoom(roomId);

    async function handleCloseRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        });
        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm("Têm certeza que deseja excluir esta pergunta?")) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return (
        <div id='page-room'>
            <header>
                <div className="content">
                    <img src={logoImg} alt="LetmeAsk"/>
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined onClick={handleCloseRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main className='content'>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
                </div>

                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta"/>
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </div>
    )
}