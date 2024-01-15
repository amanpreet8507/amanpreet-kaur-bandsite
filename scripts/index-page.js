// let commentsArray = [
//     { name: 'Connor Walton', date: '02/17/2021', comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' },
//     { name: 'Emilie Beach', date: '01/09/2021', comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' },
//     { name: 'Miles Acosta', date: '12/20/2020', comment: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.` }
//   ];
import BandSiteApi from "./band-site-api.js";

const apiKey = "0c1318a1-0c91-4df5-9cfa-b8cbad39d045";
const bandSiteApi = new BandSiteApi(apiKey);

const commentForm = document.getElementById("commentForm");
const commentsContainer = document.querySelector(".comments__container");

function displayComment(comment) {
  // Create elements for the comment
  const commentSectionEl = document.createElement("section");
  const commentDetailsDivEl = document.createElement("div");
  const nameAndDateDivEl = document.createElement("div");
  const commentDivEl = document.createElement("div");
  const profileImageEl = document.createElement("img");
  const nameEl = document.createElement("p");
  const dateEl = document.createElement("p");
  const commentEl = document.createElement("p");

  // Add classes to elements
  commentSectionEl.classList.add("comments__container-section");
  commentDetailsDivEl.classList.add("comments__container-comment-details");
  nameAndDateDivEl.classList.add("comments__container-name-date");
  commentDivEl.classList.add("comments__container-comment-div");
  profileImageEl.classList.add("comment-section__profile-img");
  nameEl.classList.add("comments__container-name");
  dateEl.classList.add("comments__container-date");
  commentEl.classList.add("comments__container-comment");

  // Append elements to the DOM
  nameAndDateDivEl.appendChild(nameEl);
  nameAndDateDivEl.appendChild(dateEl);
  commentDivEl.appendChild(commentEl);
  commentDetailsDivEl.appendChild(nameAndDateDivEl);
  commentDetailsDivEl.appendChild(commentDivEl);
  commentSectionEl.appendChild(profileImageEl);
  commentSectionEl.appendChild(commentDetailsDivEl);
  commentsContainer.appendChild(commentSectionEl);

  // Populate elements with comment data
  profileImageEl.innerHTML = comment.image;
  nameEl.innerText = comment.name;
  dateEl.innerText = comment.date;
  commentEl.innerText = comment.comment;
}

// Get Old comments
// commentsArray.forEach(displayComment);
const displayOldComments = async () => {
  try {
    const oldComments = await bandSiteApi.getComments();
    console.log(oldComments);
    return oldComments.forEach(displayComment);
  } catch (error) {
    console.error("Error displayOldComments: ", error);
  }
};

// Call displayOldComments function
displayOldComments();

// addEventListener
commentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Getting user input
  const nameValue = event.target.name.value;
  const imgValue = event.target.commentsImg.value;
  const commentValue = event.target.comment.value;

  const options = { year: "numeric", month: "2-digit", day: "2-digit" };

  // Create a new comment object
  const newComment = {
    image: imgValue,
    name: nameValue,
    date: new Date().toLocaleDateString(undefined, options),
    comment: commentValue,
  };
  console.log(newComment);
  // // Push the new comment to the array
  // commentsArray.push(newComment)

  // Display the new comment on the page
  // displayComment(newComment)

  // Post New Commentsa
  try {
    const postComment = await bandSiteApi.postComment(newComment);
    displayComment(postComment);
    // Clear the form
    commentForm.reset();
  } catch (error) {
    console.error("Error post new comment: ", error);
  }
});
