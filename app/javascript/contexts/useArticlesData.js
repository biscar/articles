import useStores from "./useStores";
import {useObserver} from "mobx-react-lite";

export default function useArticlesData() {
  const { articlesStore } = useStores();

  return useObserver(() => (
    {
      articles: articlesStore.articles,
      articleTypes: articlesStore.articleTypes,
      stories: articlesStore.stories,
    }))
}
