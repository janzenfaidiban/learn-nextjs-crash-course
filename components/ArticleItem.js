import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt ? article.excerpt : article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleList