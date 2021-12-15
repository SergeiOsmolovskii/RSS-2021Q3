import { createElement } from '../settings/sort-settings';

const toysCadrContainer: HTMLElement = document.querySelector('.toys-cadr-container');

export class Card {
  name: string;
  count: number;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
  num: number;

  constructor(
    name: string,
    num: number,
    count: number,
    year: number,
    shape: string,
    color: string,
    size: string,
    favorite: boolean
  ) {
    (this.name = name),
      (this.num = num),
      (this.count = count),
      (this.year = year),
      (this.shape = shape),
      (this.color = color),
      (this.size = size),
      (this.favorite = favorite);
  }

  addCard() {
    const toyCard = createElement(['toy-card'], 'div', toysCadrContainer);
    const toyCardTitle = createElement(['toy-card__title'], 'p', toyCard);
    toyCardTitle.textContent = this.name;
    const toyCardImageBlock = createElement(['toy-card__image-block'], 'div', toyCard);
    const toyCardImage = createElement(['toy-card__image'], 'img', toyCardImageBlock);
    toyCardImage.setAttribute(
      'src',
      `https://raw.githubusercontent.com/SergeiOsmolovskii/stage1-tasks/christmas-task/assets/toys/${this.num}.png`
    );
    toyCardImage.setAttribute('alt', this.name);

    const toyCardInfo = createElement(['toy-card__info'], 'div', toyCard);
    const toyCardCountTitle = createElement(['toy-card__count-title'], 'p', toyCardInfo);
    toyCardCountTitle.textContent = 'Count: ';
    const toyCardCount = createElement(['toy-card__count'], 'span', toyCardCountTitle);
    toyCardCount.textContent = this.count.toString();

    const toyCardYearTitle = createElement(['toy-card__year-title'], 'p', toyCardInfo);
    toyCardYearTitle.textContent = 'Purchase year: ';
    const toyCardYear = createElement(['toy-card__year'], 'span', toyCardYearTitle);
    toyCardYear.textContent = this.year.toString();

    const toyCardShapeTitle = createElement(['toy-card__shape-title'], 'p', toyCardInfo);
    toyCardShapeTitle.textContent = 'Shape: ';
    const toyCardShape = createElement(['toy-card__shape'], 'span', toyCardShapeTitle);
    toyCardShape.textContent = this.shape;

    const toyCardColorTitle = createElement(['toy-card__color-title'], 'p', toyCardInfo);
    toyCardColorTitle.textContent = 'Color: ';
    const toyCardColor = createElement(['toy-card__color'], 'span', toyCardColorTitle);
    toyCardColor.textContent = this.color;

    const toyCardSizeTitle = createElement(['toy-card__size-title'], 'p', toyCardInfo);
    toyCardSizeTitle.textContent = 'Size: ';
    const toyCardSize = createElement(['toy-card__size'], 'span', toyCardSizeTitle);
    toyCardSize.textContent = this.size;

    const toyCardFavoriteTitle = createElement(['toy-card__favorite-title'], 'p', toyCardInfo);
    toyCardFavoriteTitle.textContent = 'Favorite: ';
    const toyCardFavorite = createElement(['toy-card__favorite'], 'span', toyCardFavoriteTitle);

    if (this.favorite === true) {
      toyCard.classList.add('toy-card--favorite');
      toyCardFavorite.textContent = 'Yes';
    } 
    else toyCardFavorite.textContent = 'No';
  }
}
