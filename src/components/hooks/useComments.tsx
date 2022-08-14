import { createContext, ReactNode, useContext, useState } from 'react'

interface IComment {
  initialComments: string[]
  newComment: string
  newCommentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleCreateNewComment: (event: React.FormEvent<HTMLFormElement>) => void
  deleteComment: (comment: string) => void
}

const CommentContext = createContext<IComment>({} as IComment)

export function CommentProvider({ children }: { children: ReactNode }) {
  const [initialComments, setInitialComments] = useState(['Primeiro comentário'])
  const [newComment, setNewComment] = useState('')

  const handleCreateNewComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setInitialComments([...initialComments, newComment])
    setNewComment('')
  }

  const newCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value)
  }

  const deleteComment = (comment: string) => {
    const commentsFiltered = initialComments.filter(item => item !== comment)
    setInitialComments(commentsFiltered)
  }

  return (
    <CommentContext.Provider
      value={{
        initialComments,
        newComment,
        newCommentChange,
        handleCreateNewComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}

export function useComments() {
  return useContext(CommentContext)
}
