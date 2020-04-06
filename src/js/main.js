// // создаем переменную для кнопки батон и создаем (в файле индекс.эчтимл) идентификатор батон
// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close');

// // добавить отслеживающих событий с помощью эддИвенЛистенер какое событие - в скобках
// // переменная батон.событие
button.addEventListener('click', function() {
    // это будет выполняться, когда пользователь кликнет на кнопку баттон.
    // то есть когда произойдет событие прописанное в ('' 
    // с помощью фразы классЛист можно найти список всех классов у этого модального окна
    modal.classList.add('modal_active');
    // с помощью .эдд добавляем класс модел_эктив (который скрыт в документе модел.сасс) 
    // таким образом этот класс добавляется к модел при клике на кнопку, соответственно
    // модельное окно всплывает 
});

close.addEventListener('click', function() {
    // обращаемся к переменной клос, по клику работает функция:
    // находится список классов, ремув - удаляет класс модел_актив
    modal.classList.remove('modal_active');
});



// // // обращение ко всему документу
// // $(document)

// // // что бы обратиться к id (т.е. к элементу) нужно проверить загрузился ли файл с помощью конструкции $('document').ready(function(){});
// // // ВНУТРИ можно обратиться к элементу с идентификатором id с помощью знака $, например, $('#id')
// $('document').ready(function(){
    
// });
// // короткая версия проверки: $(function(){});

