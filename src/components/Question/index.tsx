import React, {ReactNode} from 'react';
import './styles.scss';
import cx from 'classnames';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isHighlighted?: boolean;
    isAnswered?: boolean;
}

const Question = ({content, author, children, isHighlighted = false, isAnswered = false}: QuestionProps) => {
    return (
        <div className={cx('question', {answered: isAnswered}, {highlighted: isHighlighted})}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name}/>
                    <span>{author.name}</span>
                </div>
                <div>{children}</div>
            </footer>
        </div>
    )
}

export default Question;