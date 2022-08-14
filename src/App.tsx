import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

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

export const App = () => {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
