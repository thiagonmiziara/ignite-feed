import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'

import styles from './Comment.module.css'

interface ICommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export const Comment = ({ content, onDeleteComment }: ICommentProps) => {
  const [likeCount, setLikeCount] = useState(0)

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1)
  }

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/67029929?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Nunes</strong>
              <time title="11 de maio às 08:00" dateTime="2022-05-11 8:00:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}👏</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
