const main = document.querySelector('.main');

const goHome = () => {

    const categoryDiv = document.createElement('DIV');
    const categoryDivArtict = document.createElement('DIV');
    const categoryDivPictures = document.createElement('DIV');
    const artistTitle = document.createElement('H2');
    const picturesTitle = document.createElement('H2');
    
    categoryDiv.classList.add('categories');
    categoryDivArtict.classList.add('category');
    categoryDivArtict.setAttribute('id', 'artist');
    categoryDivArtict.dataset.group = 0;
    categoryDivArtict.dataset.name = 'Artist';

    categoryDivPictures.classList.add('category');
    categoryDivPictures.setAttribute('id', 'pictures');
    categoryDivPictures.dataset.group = 1;
    categoryDivPictures.dataset.name = 'Pictures';
    
    artistTitle.textContent = 'Artist';
    picturesTitle.textContent = 'Pictures';

    main.append(categoryDiv);
    categoryDiv.append(categoryDivArtict);
        categoryDivArtict.append(artistTitle);
    categoryDiv.append(categoryDivPictures);
    categoryDivPictures.append(picturesTitle);   
}

export default goHome;