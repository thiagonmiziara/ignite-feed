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
  const { initialComments, newComment, newCommentChange, handleCreateNewComment } = useComments()

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

      <form onSubmit={event => handleCreateNewComment(event)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newComment}
          onChange={event => newCommentChange(event)}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {initialComments.map(comment => (
          <Comment key={comment} content={comment} />
        ))}
      </div>
    </article>
  )
}
