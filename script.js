"use strict";
//(div.innerHTML = `<a href="${data.data.children[i].data.url}"> ✔ ${data.data.children[i].data.title}</a>`)
const btn = document.querySelector(".dugme");

const div = document.querySelector(`.div`);

const renderError = (msg) => {
  div.innerHTML = `ERORR: ${msg}`;
};

const req = () => {
  let t = document.querySelector("input").value;
  fetch(`https://www.reddit.com/r/javascript.json`)
    .then((response) => response.json())
    .then(function (data) {
      let kk = data.data.children.entries();
      div.innerHTML = ``;
      div.innerHTML += `<ol>`;
      if (t.startsWith(`Show`.toLowerCase()) == true) {
        div.innerHTML = `\n <a href="${data.data.children[0].data.url}"> ✔ ${data.data.children[0].data.title} </a>`;
      } else if (t.startsWith(`Your`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[1].data.url}"> ✔ ${data.data.children[1].data.title} </a>`;
      } else if (t.startsWith(`Send`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[2].data.url}"> ✔ ${data.data.children[2].data.title} </a>`;
      } else if (t.startsWith(`Help`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[3].data.url}"> ✔ ${data.data.children[3].data.title} </a>`;
      } else if (t.startsWith(`A note`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[4].data.url}"> ✔ ${data.data.children[4].data.title} </a>`;
      } else if (t.startsWith(`HTTP`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[5].data.url}"> ✔ ${data.data.children[5].data.title} </a>`;
      } else if (t.startsWith(`Ideas`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[6].data.url}"> ✔ ${data.data.children[6].data.title} </a>`;
      } else if (t.startsWith(`TheStorage`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[7].data.url}"> ✔ ${data.data.children[7].data.title} </a>`;
      } else if (t.startsWith(`Component`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[8].data.url}"> ✔ ${data.data.children[8].data.title} </a>`;
      } else if (t.startsWith(`Are`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[9].data.url}"> ✔ ${data.data.children[9].data.title} </a>`;
      } else if (t.startsWith(`No code`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[10].data.url}"> ✔ ${data.data.children[10].data.title} </a>`;
      } else if (t.startsWith(`ToolJet`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[11].data.url}"> ✔ ${data.data.children[11].data.title} </a>`;
      } else if (t.startsWith(`vite`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[12].data.url}"> ✔ ${data.data.children[12].data.title} </a>`;
      } else if (t.startsWith(`How`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[13].data.url}"> ✔ ${data.data.children[13].data.title} </a>`;
      } else if (t.startsWith(`vite`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[14].data.url}"> ✔ ${data.data.children[14].data.title} </a>`;
      } else if (t.startsWith(`2D`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[15].data.url}"> ✔ ${data.data.children[15].data.title} </a>`;
      } else if (t.startsWith(`Why does`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[16].data.url}"> ✔ ${data.data.children[16].data.title} </a>`;
      } else if (t.startsWith(`SVGcode`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[17].data.url}"> ✔ ${data.data.children[17].data.title} </a>`;
      } else if (t.startsWith(`Medusa`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[18].data.url}"> ✔ ${data.data.children[18].data.title} </a>`;
      } else if (t.startsWith(`I made`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[19].data.url}"> ✔ ${data.data.children[19].data.title} </a>`;
      } else if (t.startsWith(`GitHub`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[20].data.url}"> ✔ ${data.data.children[20].data.title} </a>`;
      } else if (t.startsWith(`Release`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[21].data.url}"> ✔ ${data.data.children[21].data.title} </a>`;
      } else if (t.startsWith(`Are there`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[22].data.url}"> ✔ ${data.data.children[22].data.title} </a>`;
      } else if (t.startsWith(`Debugging`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[23].data.url}"> ✔ ${data.data.children[23].data.title} </a>`;
      } else if (t.startsWith(`Is it common`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[24].data.url}"> ✔ ${data.data.children[24].data.title} </a>`;
      } else if (t.startsWith(`Is Intersection`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[25].data.url}"> ✔ ${data.data.children[25].data.title} </a>`;
      } else if (t.startsWith(`New state`.toLowerCase()) === true) {
        div.innerHTML = `\n <a href="${data.data.children[26].data.url}"> ✔ ${data.data.children[26].data.title} </a>`;
      } else {
        for (const [i, bla] of kk) {
          div.innerHTML += ` <li><a href="${bla.data.url}">[${i}]     ${bla.data.title}</a></li>`;
        }
      }
      div.innerHTML += `</ol>`;
    })

    .catch((err) => renderError(err));

  div.style.opacity = 1;
};
const tekst = `Saturday is my best day!`;
console.log(tekst.search(`day`));

btn.addEventListener(`click`, req);

const asc = document.querySelector(`.asc`);
const desc = document.querySelector(`.desc`);
const arr = `Aleksandar`;

asc.addEventListener(`click`, () => {
  document.querySelector(`.text`).innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    document.querySelector(`.text`).innerHTML += `${arr[i]}`;
  }
});

desc.addEventListener(`click`, () => {
  document.querySelector(`.text`).innerHTML = ``;
  for (let i = arr.length - 1; i >= 0; i--) {
    document.querySelector(`.text`).textContent += `${arr[i]}`;
  }
});
