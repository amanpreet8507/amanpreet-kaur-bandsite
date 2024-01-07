let commentsArray=[]
const commentForm = document.getElementById('commentForm');

// parent
const commentsContainer = document.querySelector('.comments__container')


// addEventListener
commentForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // create elements******************************************
    // main div containing each comment section
    const commentSectionEl = document.createElement('section')

    // image div and commentdetails div element
    //const imgDivEl = document.createElement('div')
    const commentDetailsDivEl = document.createElement('div')

    // name and date div element
    const nameAndDateDivEl = document.createElement('div')
    const commentDivEl = document.createElement('div')

    // individual elements for image, name, date and comment
    const profileImageEl = document.createElement('img')
    const nameEl = document.createElement('p')
    const dateEl = document.createElement('p')
    const commentEl = document.createElement('p')

    // give classes to elements *********************************
    // main div class
    commentSectionEl.classList.add('comments__container-section')

    // image div and commentdetails class
    //imgDivEl.classList.add('comments__container-img-div')
    commentDetailsDivEl.classList.add('comments__container-comment-details')

    // name and date div class and a seprate comment div only conataining comment
    nameAndDateDivEl.classList.add('comments__container-name-date')
    commentDivEl.classList.add('comments__container-comment-div')
    // individual elements classes
    profileImageEl.classList.add('comment-section__profile-img')
    nameEl.classList.add('comments__container-name')
    dateEl.classList.add('comments__container-date')
    commentEl.classList.add('comments__container-comment')

    // append to parent*******************************************
    // appending to image div and commentdetails div
    //imgDivEl.appendChild(profileImageEl)


    // appending individual name and date element to nameAndDateDivEl
    nameAndDateDivEl.appendChild(nameEl)
    nameAndDateDivEl.appendChild(dateEl)

    // appending commentEl to commentDivEl
    commentDivEl.appendChild(commentEl)

    // appending nameAndDateDivEl and commentDivEl to commenDetailsDivEl
    commentDetailsDivEl.appendChild(nameAndDateDivEl)
    commentDetailsDivEl.appendChild(commentDivEl)

    // apend to main parent div
    commentSectionEl.appendChild(profileImageEl)
    commentSectionEl.appendChild(commentDetailsDivEl)

    // append to commentsContainer created in index.html
    commentsContainer.appendChild(commentSectionEl)

    // getting the user given value
    const nameValue = event.target.name.value
    const imgValue = event.target.commentsImg.value
    const commentValue = event.target.comment.value

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    // new object in array
    const newComment = {
        image: imgValue,
        name: nameValue,
        date: new Date().toLocaleDateString(undefined, options),
        comment: commentValue
    }

    // populate elements
    profileImageEl.innerHTML= newComment.image
    nameEl.innerText = newComment.name
    dateEl.innerText = newComment.date
    commentEl.innerText = newComment.comment

    // push object to array
    commentsArray.push(newComment)

    console.log(commentsArray)

    commentForm.reset()
})

