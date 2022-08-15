import { createContext, ReactNode, useContext, useState } from 'react'

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
interface IComment {
  initialComments: string[]
  newComment: string
  setNewComment: React.Dispatch<React.SetStateAction<string>>
  posts: IPostProps[]
  isDisabled: boolean
  newCommentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleNewCommentInvalid: (event: React.FormEvent<HTMLTextAreaElement>) => void
}

const CommentContext = createContext<IComment>({} as IComment)

export function CommentProvider({ children }: { children: ReactNode }) {
  const posts = [
    {
      id: Math.random(),
      author: {
        avatarUrl: 'https:github.com/thiagonmiziara.png',
        name: 'Thiago Nunes',
        role: 'Web Developer',
      },
      content: [
        { type: 'paragraph', id: Math.random(), content: 'Fala galera 👋' },
        {
          type: 'paragraph',
          id: Math.random(),
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil reiciendis veniam architecto, nam nulla laborum laboriosam!',
        },
        { type: 'link', id: Math.random(), content: 'thiago.developer/doctorcare' },
      ],
      publishedAt: new Date(),
    },
    {
      id: Math.random(),
      author: {
        avatarUrl: 'https:github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat',
      },
      content: [
        { type: 'paragraph', id: Math.random(), content: 'Fala dev 👋' },
        {
          type: 'paragraph',
          id: Math.random(),
          content:
            'Lorem ipsum dolor sit amet consecetur adipisicing elit. Animi nihil reiciendis veniam architecto, nam nulla laborum laboriosam!',
        },
        { type: 'link', id: Math.random(), content: 'diego.developer/doctorcare' },
      ],
      publishedAt: new Date(),
    },
  ]
  const initialComments = ['Primeiro comentário']
  const [newComment, setNewComment] = useState('')

  const newCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.currentTarget.setCustomValidity('')
    setNewComment(event.target.value)
  }

  const handleNewCommentInvalid = (event: React.FormEvent<HTMLTextAreaElement>) => {
    event.currentTarget.setCustomValidity('Esse campo é obrigatório!')
  }

  const isDisabled = newComment.length === 0

  return (
    <CommentContext.Provider
      value={{
        initialComments,
        newComment,
        newCommentChange,
        setNewComment,
        posts,
        handleNewCommentInvalid,
        isDisabled,
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}

export function useComments() {
  return useContext(CommentContext)
}
