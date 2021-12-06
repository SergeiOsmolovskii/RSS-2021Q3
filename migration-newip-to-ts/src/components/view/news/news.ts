import './news.css';

export interface ISourceNews {
  id: string;
  name: string;
}
export interface IData {
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: ISourceNews;
  title: string;
  url: string;
  urlToImage: string;
}
class News {
  draw(data: Array<IData>) {
    const news = data.length >= 10 ? data.filter((_item: IData, idx: number) => idx < 10) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item: IData, idx: number) => {
      const newsClone: Node = <HTMLElement>newsItemTemp.content.cloneNode(true);

      if (idx % 2) (<HTMLElement>newsClone).querySelector('.news__item').classList.add('alt');

      ((<HTMLElement>newsClone).querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (<HTMLElement>newsClone).querySelector('.news__meta-author').textContent = item.author || item.source.name;
      (<HTMLElement>newsClone).querySelector('.news__meta-date').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      (<HTMLElement>newsClone).querySelector('.news__description-title').textContent = item.title;
      (<HTMLElement>newsClone).querySelector('.news__description-source').textContent = item.source.name;
      (<HTMLElement>newsClone).querySelector('.news__description-content').textContent = item.description;
      (<HTMLElement>newsClone).querySelector('.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    document.querySelector('.news').innerHTML = '';
    document.querySelector('.news').appendChild(fragment);
  }
}

export default News;
