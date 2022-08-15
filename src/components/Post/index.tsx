import { useCallback, useEffect, useState } from 'react'
import { formattedDateTitle, publishedDateRelativeToNow } from '../../utils/date'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { useComments } from '../hooks/useComments'
import styles from './Post.module.css'

type TAuthor = {
  avatarUrl: string
  name: string
  role: string
}

type TContent = {
  type: string
  content: string
  id: number
}

interface IPostProps {
  author: TAuthor
  publishedAt: Date
  content: TContent[]
}

export const Post = ({ author, publishedAt, content }: IPostProps) => {
  const {
    initialComments,
    newComment,
    newCommentChange,
    setNewComment,
    handleNewCommentInvalid,
    isDisabled,
  } = useComments()

  const [comments, setComments] = useState([...initialComments])

  const onSubmitNewComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setComments([...comments, newComment])
    setNewComment('')
  }

  const onDeleteComment = (comment: string) => {
    const commentsWithoutDeleteOne = comments.filter(item => item !== comment)
    setComments(commentsWithoutDeleteOne)
  }

  const contentInfo = (content: TContent[]) => {
    return content.map(item => {
      switch (item.type) {
        case 'paragraph':
          return <p key={item.content}>{item.content}</p>
        case 'link':
          return (
            <p key={item.content}>
              <a href="#">{item.content}</a>
            </p>
          )
        default:
      }
    })
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedDateTitle(publishedAt)} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow(publishedAt)}
        </time>
      </header>

      <div className={styles.content}>{contentInfo(content)}</div>

      <form onSubmit={event => onSubmitNewComment(event)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newComment}
          onChange={event => newCommentChange(event)}
          onInvalid={event => handleNewCommentInvalid(event)}
          required
        />

        <footer>
          <button type="submit" disabled={isDisabled}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment key={comment} content={comment} onDeleteComment={onDeleteComment} />
        ))}
      </div>
    </article>
  )
}
