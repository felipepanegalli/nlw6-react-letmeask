import React from 'react';
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'
import {useParams} from 'react-router-dom';
import Question from '../../components/Question';
import useRoom from '../../hooks/useRoom';
import {database} from '../../services/firebase';
import Header from "../../components/Header";
import { PageRoom, RoomTitle } from './styles';

type RoomParams = {
    id: string;
}

type Props = {
    toggleTheme(): void;
}

export const AdminRoom = ({toggleTheme, ...props}: Props) => {
    // const {user} = useAuth();

    const params = useParams<RoomParams>()
    const roomId = params.id;
    const {title, questions} = useRoom(roomId);

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm("Têm certeza que deseja excluir esta pergunta?")) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    async function handleCheckQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({isAnswered: true});
    }

    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({isHighlighted: true});
    }

    return (
        <PageRoom>
            <Header roomId={roomId} toggleTheme={toggleTheme}/>
            <main className='content'>
                <RoomTitle>
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
                </RoomTitle>

                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question key={question.id}
                                      content={question.content}
                                      author={question.author}
                                      isAnswered={question.isAnswered}
                                      isHighlighted={question.isHighlighted && !question.isAnswered}
                            >
                                {!question.isAnswered && (
                                    <>
                                        <button type="button" onClick={() => handleCheckQuestion(question.id)}>
                                            <img src={checkImg} alt="Marcar pergunta como respondida"/>
                                        </button>
                                        <button type="button" onClick={() => handleHighlightQuestion(question.id)}>
                                            <img src={answerImg} alt="Destacar pergunta"/>
                                        </button>
                                    </>
                                )}
                                <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                                    <img src={deleteImg} alt="Remover pergunta"/>
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </PageRoom>
    )
}