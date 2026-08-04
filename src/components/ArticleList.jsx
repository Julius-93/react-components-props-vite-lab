import Article from "./Article"

/**
 * ArticleList Component
 * Displays all blog articles.
 * Used by App.
 */

function ArticleList({ posts }) {
  const articleComponents = posts.map(post => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ))

  return (
    <main>
      {articleComponents}
    </main>
  )
}

export default ArticleList