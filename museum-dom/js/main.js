
/* Gallery */
import creatGallery from './moduls/gallery.js';
import openForm from './moduls/openForm.js';
import addRippleEffect from './moduls/rippleEffect.js';
import addMobileMenu from './moduls/addMobileMenu.js';
import createIFrame from './moduls/createIFrame.js';
import slider from './moduls/slider.js';
import comparisonSlider from './moduls/comparisonSlider.js';
import videoPlay from './moduls/video.js';
import calcTotalPrice from './moduls/calcTotalPrice.js';
import setSelectedDate from './moduls/setSelectedDate.js';
import setSelectedTime from './moduls/setSelectedTime.js';
import formValidation from './moduls/formValidation.js';


creatGallery();
openForm();
addRippleEffect();
addMobileMenu();
createIFrame();

slider({
  nextSlide: '.next-slide',
  prevSlide: '.prev-slide',
  slide: '.slide',
  totalCounter: '#total-slides',
  currentCounter: '#current-slide',
  wrapper: '.main-slider',
  field: '.slides-inner',
  dot: '.square'
});

comparisonSlider();
videoPlay();
calcTotalPrice();
setSelectedDate();
setSelectedTime();
formValidation();

console.log(`
125 / 160
Дополнительный функционал: (Не оценивал, не знаю, считается ли это дополнительным функционалом.)
Добавлена возможность листать видео цифрами от 0 до 9
Промотать вперед на 10 секунд клавишей L
Промотать назад на 10 секунд клавишей J

Не выполнены пункты с слайдером в видео. Упал слайдер, пока исправляю. Слайдер писал сам, не библеотечный.

Частично выполненные пункты:

время можно выбирать с 9:00 до 18:00 с интервалом в 30 минут
Выполненные пункты:

есть возможность перелистывания слайдов влево и вправо кликами по стрелкам
есть возможность перелистывания слайдов кликами по буллетам (квадратики внизу слайдера)
слайды перелистываются плавно с анимацией смещения вправо или влево
перелистывание слайдов бесконечное (зацикленное)
при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем)
при перелистывании слайдов кликами или свайпами меняется номер активного слайда
даже при частых кликах или свайпах нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда
при клике по кнопке "Play" слева внизу на панели видео начинается проигрывание видео, иконка кнопки при этом меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Повторный клик на кнопку останавливает проигрывание видео, иконка меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается
при клике по большой кнопке "Play" по центру видео, или при клике по самому видео, начинается проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Клик на видео, которое проигрывается, останавливает проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается
прогресс-бар отображает прогресс проигрывания видео
перетягивание ползунка прогресс-бара позволяет изменить время с которого проигрывается видео
если прогресс-бар перетянуть до конца, видео останавливается, соответственно, меняется внешний вид кнопок "Play"
при клике на иконку динамика происходит toggle звука и самой иконки (звук включается или выключается, соответственно изменяется иконка)
при перемещении ползунка громкости звука изменяется громкость видео
если ползунок громкости звука перетянуть до 0, звук выключается, иконка динамика становится зачеркнутой
если при выключенном динамике перетянуть ползунок громкости звука от 0, звук включается, иконка громкости перестаёт быть зачёркнутой
при нажатии на кнопку fullscreen видео переходит в полноэкранный режим, при этом видео и панель управления разворачиваются во весь экран. При нажатии на кнопку fullscreen повторно видео выходит из полноэкранного режима. Нажатие на клавишу для выхода из полноэкранного режима Esc не проверяем и не оцениваем
панель управления в полноэкранном режиме визуально выглядит так же, как на макете - кнопки равномерно распределены по всей ширине страницы, относительные размеры между кнопками и ползунками, а также относительные размеры самих кнопок остались прежними
клавиша Пробел — пауза, при повторном нажатии - play
Клавиша M (англ) — отключение/включение звука
Клавиша F — включение/выключение полноэкранного режима
Клавиши SHIFT+, (англ) — ускорение воспроизведения ролика
Клавиши SHIFT+. (англ) — замедление воспроизведения ролика
ползунок можно перетягивать мышкой по горизонтали
ползунок никогда не выходит за границы картины
при перемещении ползунка справа налево плавно появляется нижняя картина
при перемещении ползунка слева направо плавно появляется верхняя картина
при обновлении страницы ползунок возвращается в исходное положение
при прокрутке страницы вниз появление картин секции Galery сопровождается анимацией: изображения плавно поднимаются снизу вверх, увеличиваясь и создавая эффект выплывания. В качестве образца анимации используйте анимацию на сайте Лувра https://www.louvre.fr/
если прокрутить страницу вверх и затем снова прокручивать вниз, анимация появления картин повторяется
при обновлении страницы, если она к тому моменту была прокручена до секции Galery, анимация картин повторяется
при изменении количества билетов Basic и Senior пересчитывается общая цена за них
у каждого типа билетов своя цена (20 €, 25 €, 40 € для Basic и половина этой стоимости для Senior). При изменении типа билета пересчитывается общая цена за них
при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них
когда при клике по кнопке Buy now открывается форма, она уже содержит данные, указанные на странице сайта - количество билетов, их тип, общая цена за них
когда пользователь выбирает дату в форме слева, она отображается в билете справа
нельзя выбрать дату в прошлом
когда пользователь выбирает время в форме слева, оно отображается в билете справа
можно изменить тип билета в поле Ticket type слева при этом меняется тип билета, цена билета и общая стоимость билетов справа
можно изменить количество билетов каждого типа в поле слева при этом меняется количество билетов и общая стоимость билетов справа
валидация имени пользователя. Имя пользователя должно содержать от 3 до 15 символов, в качестве символов могут быть использованы буквы английского или русского алфавита в нижнем или верхнем регистре и пробелы
валидация e-mail должна пропукать только адреса вида username@example.com, где: username - имя пользователя, должно содержать от 3 до 15 символов (буквы, цифры, знак подчёркивания, дефис), не должно содержать пробелов; @ - символ собачки; example - домен первого уровня состоит минимум из 4 латинских букв; com - домен верхнего уровня, отделяется от домена первого уровня точкой и состоит минимум из 2 латинских букв
валидация номера телефона: номер содержит только цифры; без разделения или с разделением на две или три цифры; разделение цифр может быть через дефис или пробел; с ограничением по количеству цифр не больше 10 цифр
при попытке ввода в форму невалидного значения выводится предупреждение, например, "номер телефона может содержать только цифры"
в секции Contacts добавлена интерактивная карта
на карте отображаются маркеры, расположение и внешний вид маркеров соответствует макету
стиль карты соответствует макету
`)