// // write your code here
// function fetchRamens(){
//     const url = 'http://localhost:3000/ramens'
//     fetch(url)
//     .then(response => response.json())
//     .then(ramens => ramens.forEach(ramen => renderRamens(ramen)))
// }

// function renderRamens(ramen) {
//     const ramenMenuDiv = document.querySelector('#ramen-menu')
//     const ramenImage = document.createElement('img')
//     ramenImage.src = ramen.image
//     ramenMenuDiv.append(ramenImage)
//     ramenImage.addEventListener('click', () => renderClickedRamensImages(ramen))
// }

// function renderClickedRamensImages(ramen) {
//     const ramenImage = document.getElementsByClassName('detail-image')[0]
//     ramenImage.src = ramen.image
//     const ramenName = document.getElementsByClassName('name')[0]
//     ramenName.textContent = ramen.name
//     const restaurantName = document.getElementsByClassName('restaurant')[0]
//     restaurantName.textContent = ramen.restaurant

//     //ramen rating and comment 
//     const ramenRating = document.querySelector('#rating-display')
//     ramenRating.textContent = ramen.rating
//     const ramenComment = document.querySelector('#comment-display')
//     ramenComment.textContent = ramen.comment
// }  

// function addNewRamen(){
//     const newRamenForm = document.querySelector('#new-ramen')
//     newRamenForm.addEventListener('submit', e => submitNewRamenForm(e))
// }

// function submitNewRamenForm(e) {
//     e.preventDefault()
//     //grab ramenmenu and comment area 
//     const ramenMenuDiv = document.querySelector('#ramen-menu')

//     //get info
    
//     //refactor the below code 
//     //syntx for event.target 
//     //e.target.the name of the html element.value
//     //if it has dashes in the name use bracket notation - event.target['name_of_html_element].value

//     const newRamenNameText = e.target.name.value
//     const newRestaurantText = e.target.restaurant.value
//     const newRamenImageText = e.target['new-image'].value
//     const newRamenRatingText = e.target['new-rating'].value
//     const newRamenCommentText = e.target['new-comment'].value

//     //set info 
//     const newRamenImage = document.createElement('img')
//     newRamenImage.src = newRamenImageText
//     ramenMenuDiv.append(newRamenImage)

//     //click on new image and render in
//     newRamenImage.addEventListener('click', () => renderNewClickedRamensImages(newRamenImageText, newRamenNameText, newRestaurantText, newRamenRatingText, newRamenCommentText))

//     document.querySelector('#new-ramen').reset() 
// }

// function renderNewClickedRamensImages(newRamenImageText, newRamenNameText, newRestaurantText, newRamenRatingText, newRamenCommentText) {
//     const newRamenImage = document.getElementsByClassName('detail-image')[0]
//     newRamenImage.src = newRamenImageText
//     const newRamenName = document.getElementsByClassName('name')[0]
//     newRamenName.textContent = newRamenNameText
//     const newRestaurantName = document.getElementsByClassName('restaurant')[0]
//     newRestaurantName.textContent = newRestaurantText
//     const newRamenRating = document.querySelector('#rating-display')
//     newRamenRating.textContent = newRamenRatingText
//     const newRamenComment = document.querySelector('#comment-display')
//     newRamenComment.textContent = newRamenCommentText

// }

// document.addEventListener('DOMContentLoaded', () => {
//     fetchRamens()
//     addNewRamen()  
// })


const url = 'http://localhost:3000/ramens'
fetch(url)
.then(response => response.json())
.then(ramens => ramens.forEach(ramen => renderRamen(ramen)))

const newRamenForm = document.querySelector('#new-ramen')
newRamenForm.addEventListener('submit', e => addRamen(e))

function renderRamen(ramen) {
    const ramenMenu = document.querySelector('#ramen-menu')
    const ramenImage = document.createElement('img')
    ramenImage.src = ramen.image
    ramenImage.alt = ramen.name
    ramenImage.addEventListener('click', () => {
        const clickedImage = document.querySelector('.detail-image')
        clickedImage.src = ramen.image

        document.querySelector('.name').textContent = ramen.name
        document.querySelector('.restaurant').textContent = ramen.restaurant
        document.querySelector('#rating-display').textContent = ramen.rating
        document.querySelector('#comment-display').textContent = ramen.comment
    
    })
    ramenMenu.append(ramenImage)
}

function addRamen(e){
    e.preventDefault()
    renderRamen({
        'name': e.target.name.value,
        'restaurant': e.target.restaurant.value,
        'image': e.target.image.value,
        'rating': e.target.rating.value,
        'comment': e.target['new-comment'].value,
    })
     
    e.target.reset()

}
