
let ul = document.querySelector("ul")
let sbtn = document.querySelector(".sbtn")
let btn = document.querySelector(".btn")
let reset = document.querySelector(".reset")
let result = document.querySelector(".result")
let count = 0


let arr = ["mahabub","shakib","shanto","rakib","shamul","azad", "mamun"]

arr.map(item=>{
  ul.innerHTML += `<li> ${item} </li>`
})



btn.addEventListener("click", function(){
  ul.innerHTML = ""
  // console.log(sbtn.value)
  arr.map(item=>{
    if(item.toLowerCase().includes(sbtn.value.toLowerCase())){
      // ul.innerHTML += `<li style="background:yellow"> ${item} </li>`
      let larr = []

      item.split("").map(letter=>{
        if(letter.toLowerCase() == sbtn.value.toLowerCase()){
          larr.push(`<span style="background: yellow">${letter} </span>`)
          count++
        }else{
          larr.push(letter)
          console.log(length.larr)
        }
      })
      ul.innerHTML += `<li>${larr.join("")}</li>`
      result.innerHTML = count
    }
  })
})
reset.addEventListener("click",function(){
  count = 0
  ul.innerHTML = ""
  sbtn.value = ""
  arr.map(item=>{
    ul.innerHTML += `<li> ${item} </li>`
  })
  
  
})