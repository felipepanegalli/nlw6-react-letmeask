import React from 'react';
import copyImg from '../../assets/images/copy.svg'
import { RoomCodeStyled } from './styles';

type RoomCodeProps = {
    code: string;
}

const RoomCode = (props: RoomCodeProps) => {
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code)
    }

    return (
        <RoomCodeStyled className='room-code' onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copiar"/>
            </div>
            <span>Sala #{props.code}</span>
        </RoomCodeStyled>
    )
}

export default RoomCode;