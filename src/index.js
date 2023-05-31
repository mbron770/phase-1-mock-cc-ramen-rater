// write your code here
function fetchRamens(){
    const url = 'http://localhost:3000/ramens'
    fetch(url)
    .then(response => response.json())
    .then(ramens => ramens.forEach(ramen => renderRamens(ramen)))

}

function renderRamens(ramen) {
    const ramenMenuDiv = document.querySelector('#ramen-menu')
    const ramenImage = document.createElement('img')
    ramenImage.src = ramen.image
    ramenMenuDiv.append(ramenImage)
    ramenImage.addEventListener('click', () =>  {
        renderClickedRamensImages(ramen)

    })
}

function renderClickedRamensImages(ramen) {
    const ramenImage = document.getElementsByClassName('detail-image')[0]
    ramenImage.src = ramen.image
    const ramenName = document.getElementsByClassName('name')[0]
    ramenName.textContent = ramen.name
    const restaurantName = document.getElementsByClassName('restaurant')[0]
    restaurantName.textContent = ramen.restaurant

    //ramen rating and comment 
    const ramenRating = document.querySelector('#rating-display')
    ramenRating.textContent = ramen.rating
    const ramenComment = document.querySelector('#comment-display')
    ramenComment.textContent = ramen.comment
}  

function addNewRamen(){
    const newRamenForm = document.querySelector('#new-ramen')
    newRamenForm.addEventListener('click', e => {
        submitNewRamenForm(e)
    })
}

function submitNewRamenForm(e) {
    e.preventDefault()
    //grab ramenmenu and comment area 
    const ramenMenuDiv = document.querySelector('#ramen-menu')

    //get info
    const newRamenNameText = document.querySelector('#new-name').value 
    const newRestaurantText = document.querySelector('#new-restaurant').value
    const newRamenImageText = document.querySelector('#new-image').value
    const newRamenRatingText = document.querySelector('#new-rating').value
    const newRamenCommentText = document.querySelector('#new-comment').value
    
    //set info 
    const newRamenName = document.getElementsByClassName('name')[0]
    newRamenName.textContent = newRamenNameText

    const newRestaurantName = document.getElementsByClassName('restaurant')[0]
    newRestaurantName.textContent = newRestaurantText

    const newRamenImage = document.createElement('img')
    newRamenImage.src = newRamenImageText
    ramenMenuDiv.append(newRamenImage)

    const newRamenRating = document.querySelector('#rating-display')
    newRamenRating.textContent = newRamenRatingText
    
    const newRamenComment = document.querySelector('#comment-display')
    newRamenComment.textContent = newRamenCommentText

    //click on new image and render in
    newRamenImage.addEventListener('click', () =>  {
        renderNewClickedRamensImages(newRamenImageText, newRamenNameText, newRestaurantText)

    })
    document.querySelector('#new-ramen').reset() 
}

function renderNewClickedRamensImages(newRamenImageText, newRamenNameText, newRestaurantText) {
    const newRamenImage = document.getElementsByClassName('detail-image')[0]
    newRamenImage.src = newRamenImageText
    const newRamenName = document.getElementsByClassName('name')[0]
    newRamenName.textContent = newRamenNameText
    const newRestaurantName = document.getElementsByClassName('restaurant')[0]
    newRestaurantName.textContent = newRestaurantText

}

document.addEventListener('DOMContentLoaded', () => {
    fetchRamens()
    addNewRamen()   
})