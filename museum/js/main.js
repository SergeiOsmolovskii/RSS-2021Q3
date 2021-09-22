const progress = document.querySelectorAll('.control-input');
  
progress.forEach(item =>item.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4)`
}))

/* Gallery */
const pictureInnerContainer = document.querySelector('.picture-inner-container');

let imgCount = 15;
let imgArr = [...Array(+`${imgCount}`).keys()].map(item => item +1)

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(imgArr)

imgArr.map(item => {
  const img = document.createElement('img');
  //img.classList.add('gallery-img')
  img.src = `./assets/img/gallery/galery${item}.jpg`;
  img.alt = `galery${item}`;
  pictureInnerContainer.append(img);
})
