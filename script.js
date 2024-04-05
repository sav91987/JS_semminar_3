"use strict";

/* 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером. */

/* document.addEventListener("DOMContentLoaded", function (e) {
  console.log("все теги прогрузились");
}); */

/* 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены. */

/* window.addEventListener("load", function (e) {
  console.log("страница загрузилась");
}); */

/* 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование. */

/* const findSuperEl = function () {
  const superEl = document.querySelectorAll(".super_element");
  console.log(superEl);
  if (superEl.length !== 0) {
    superEl.forEach((element) => {
      console.log(`Класс "super_element" присутствует в элементе "${element.tagName.toLowerCase()}"`);
    });
  } else {
    console.log('У данного элемента нет класса "super_element"');
  }
};
 */

document.addEventListener("click", function (e) {
  const el = e.target.classList;
  const tag = e.target.tagName;

  if (el.length !== 0) {
    el.forEach((element) => {
      if (element === "super_element") {
        console.log(
          `Класс "super_element" присутствует в элементе "${tag.toLowerCase()}"`
        );
      }
    });
  } else {
    console.log('В данном элементе нет класса "super_element"');
  }
});

/* 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea." */

/* const textAreaEl = document.querySelector('textarea');
textAreaEl.addEventListener("mouseover", function (e) {
    console.log("Вы навели на textarea.");
  }); */

/* 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование. */

const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', function(e) {
    console.log(e.target.innerHTML);
});

/* 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами. */

//Возможно, потому что поиск по тэгу приоритетней поиска по классу.

/* 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li. */

/* const liEls = document.querySelectorAll('li');
for (let i = 1; i < liEls.length; i+=2) {
    liEls[i].style.backgroundColor = 'red';
} */
