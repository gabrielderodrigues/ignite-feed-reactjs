import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/gabrielderodrigues.png" 
            />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Oliveira</strong>
                            <time 
                                title="24 de maio às 12:02"
                                dateTime="2024-05-24 12:03:10">
                                    Cerca de 1h atrás
                            </time>
                        </div>

                        <button 
                            onClick={handleDeleteComment}
                            title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}