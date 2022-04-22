const url = 'http://acnhapi.com/v1a/villagers/'
const btn = document.querySelector('#btn')
const villagerImg = document.querySelector('#villagerImg')
const villagerName = document.querySelector('#villagerName')
const villagerSpecies = document.querySelector('#species')
const villagerPersonality = document.querySelector('#personality')
const villagerSaying = document.querySelector('#saying')
const villagerBirthday = document.querySelector('#birthday')

btn.addEventListener('click', getCharacter)
function getCharacter(){
    let random = Math.floor(Math.random() * 391)
    console.log(random)
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data)
    btn.classList.remove('fixed')
    document.querySelector('#card').classList.remove('hidden')
    if (document.querySelector('span')){
        document.querySelector('.spec').remove()
        document.querySelector('.pers').remove()
    } 
    console.log(data[random])
    villagerImg.src = data[random].image_uri
    villagerName.innerText = data[random].name['name-USen']
    let span1 = document.createElement('span')
    span1.classList.add('spec')
    villagerSpecies.appendChild(span1)
    span1.innerHTML = data[random].species 
    let span2 = document.createElement('span')
    span2.classList.add('pers')
    villagerPersonality.appendChild(span2)
    span2.innerHTML = data[random].personality 
    villagerSaying.innerText =  data[random].saying
    villagerBirthday.innerText =  data[random]['birthday-string']


})
}
//data.forEach(character => {
// data[i]
//}