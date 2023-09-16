// загрузка DOM
document.addEventListener('DOMContentLoaded', function(){
    const sliderBlock = document.querySelector('.carousel-inner'); // блок карусели
    
    const btnSliderCollection = document.querySelectorAll('.btn'); // коллекция кнопок
    const btnSliderArray = Array.from(btnSliderCollection); // преобразуем коллекцию в массив

    const textSlide = document.querySelector('.carousel-description'); // текст под картинкой

    let currentIndex = 0; // текущий индекс
    const updateSlide = () => { // функция по обновлению слайда, кнопки и текста
        btnSliderArray.forEach(function(button, index){ // перебор массива на элементы и индексы
            if (currentIndex === index) { // если текущий индекс равен индексу элемента
                button.classList.add('active'); // добавить элементу из массива класс active
            } else {
                button.classList.remove('active'); // у других убрать класс active
            }
        })
        sliderBlock.className = 'carousel-inner'; // обновляем класс у блока карусели
        sliderBlock.classList.add(`slide_${currentIndex + 1}`); // добавляем класс slide с выбранным индексом

        // класс slide_(1,2 ... 6) прописаны в CSS
        // учитывая какой слайд выбран, я заменяю текст под картинкой

        if (sliderBlock.classList.contains('slide_1')) { // если блок карусели содержит класс slide_1
            textSlide.innerText = "We've grown up..."; // заменить текст на 
        } else if (sliderBlock.classList.contains('slide_2')) { // если slide_2 ... то текст ...
            textSlide.innerText = "If Starfield freezes for you, then you simply didn’t buy Skyrim";
        } else if (sliderBlock.classList.contains('slide_3')) {
            textSlide.innerText = "Wake up to reality";
        } else if (sliderBlock.classList.contains('slide_4')) {
            textSlide.innerText = "The main thing is that he does not have a guitar case!";
        } else if (sliderBlock.classList.contains('slide_5')) {
            textSlide.innerText = "Who is this? Who is this? This is my brother, dude";
        } else if (sliderBlock.classList.contains('slide_6')) {
            textSlide.innerText = "I'll go, just remember that you abandoned your brother";
        }

        // также добавляю класс show
        // в CSS отвечает за плавную смену текста через прозрачность с 0% до 100%
        textSlide.classList.add('show');
    }
    
    // переходим к самому клику
    btnSliderArray.forEach(function(button, index){ // перебор массива на элементы их индексы
        button.addEventListener('click', function(){ // если элемент индекса кликнут
            currentIndex = index; // установить текущий индекс индексом элемента
            textSlide.classList.remove('show'); // удалить класс show
            setTimeout(updateSlide, 300); // запустить функцию обновления с задержкой 300мс
        })
    });
});

// по плавному обновлению текста:
// в html прописан класс show у слайда по умолчанию (у первого при загрузке страницы)
// и происходит следующее:
// при клике на элемент, класс стирается и текст становится прозрачным 100%
// после клика идёт задержка обновления слайда, чтобы текст успел скрыться до того, как появиться новый текст
// затем после окончания задержки запускается функция по обновлению слайда
// внутри которого прописано установление класса show к элементу текущего индекса
// так старый текст плавно заменяется на новый