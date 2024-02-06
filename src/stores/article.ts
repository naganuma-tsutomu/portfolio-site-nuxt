import type { Article } from '../types/article'

export const useArticleStore = defineStore('article', {
  state: (): Article => {
    return {
      _id: '',
      title: '',
      slug: '',
      body: '',
      coverImage: Array(),
    }
  },
  actions: {
    setActiveArticle(article: Article) {
      this._id = article._id
      this.title = article.title
      this.slug = article.slug
      this.body = article.body
      this.coverImage = article.coverImage
    },
  },
})