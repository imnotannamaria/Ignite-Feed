import './global.css'
import styles from './App.module.css'

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Post } from './components/Post';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'Web Developer',
        },
        content:[
            {
                type: 'paragraph',
                content: 'Fala galeraa 👋'
            },
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {
                type: 'link',
                content: 'jane.design/doctorcare'
            }
        ],
        publishedAt: new Date('2022-06-07 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/imnotannamaria.png',
            name: 'Anna Maria',
            role: 'Full-Stack Web Developer',
        },
        content:[
            {
                type: 'paragraph',
                content: 'Fala galeraa 💓'
            },
            {
                type: 'paragraph',
                content: 'Comecei hoje a estudar a parte do back-end, alguem tem uma dica pra me dar? 📕'
            },
            {
                type: 'link',
                content: 'anna.design/linkShare'
            }
        ],
        publishedAt: new Date('2022-06-06 20:00:00'),
    }
]

export function App() {
    return (
            <>
                <Header />

                <div className={styles.wrapper}>
                    <Sidebar />
                    <main>
                        {posts.map(post => {
                            return (
                                <Post 
                                    key={post.id}
                                    author={post.author}
                                    content={post.content}
                                    publishedAt={post.publishedAt}
                                />
                            )
                        })}
                    </main>
                </div>
            </>
    )
}
