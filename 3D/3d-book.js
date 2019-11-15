
class Next {

  constructor(_DOM, Next_DOM) {
    this._DOM = _DOM
    this.Next_DOM = Next_DOM
    this.run()
  }
  run() {
    this._DOM.style.animation = "next 1.5s linear forwards"

    setTimeout(() => {
      console.log(`改变`);
      console.log(this.Next_DOM);

      let num = Number(this._DOM.dataset.page)
      
      
      this._DOM.innerHTML = this.Next_DOM.innerHTML
      this._DOM.classList.add(`z-${num + 1}`)
      this._DOM.style.zIndex = zIndex * 10


    }, 750)
  }
}

class Up {
  constructor(_DOM, Next_DOM) {
    this._DOM = _DOM
    this.Next_DOM = Next_DOM
    this.run()
  }
  run() {
    this._DOM.style.animation = "up 1.5s linear forwards"

    setTimeout(() => {
      console.log(`改变`);

      let num = Number(this._DOM.dataset.page)

      this._DOM.classList.add(`z-${num + 1}`)
      this._DOM.style.zIndex = zIndex * 10
      this._DOM.innerHTML = this.Next_DOM.innerHTML

    }, 750)
  }
}


let zIndex = 100
// 书-左面
const left = document.querySelectorAll('.box-left')
// 书-右面
const right = document.querySelectorAll('.box-right')
// 点击按钮
const input = document.getElementsByTagName('input')


for (let i = 0; i < input.length; i++) {
  input[i].onclick = () => {
    console.log(input[i].name);
    switch (input[i].name) {
      case "next":
        new Next(right[i - 1 < 0 ? 0 : i - 1], left[i + 1])
        break;
      case "up":
        new Up(left[i - 1 < 0 ? 0 : i - 1], right[i])
        break;
    }
  }
}

