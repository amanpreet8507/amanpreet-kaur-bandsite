import BandSiteApi from "./band-site-api.js";
import { convertTimeStampToDate } from "./band-site-api.js";

const bandSiteApi = new BandSiteApi("0c1318a1-0c91-4df5-9cfa-b8cbad39d045");

const showHeading = ["DATE", "VENUE", "LOCATION"];

// const showsList = [
//     { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA"},
//     { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA" },
//     { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA"},
//     { date: "Mon Sept 06 2021",venue: "Ronald Lane", location: "San Francisco, CA"},
//     { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA"},
//     { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA"} ]

// Function to create and render show elements
const renderShows = async () => {
  try {
    const showsList = await bandSiteApi.getShows();

    const showsContainer = document.querySelector(".shows-container");
    // Create elements
    // Containing single DATE, VENUE, LOCATION headings only for tablet and destop screen
    const headingsCardEl = document.createElement("div");

    const headingDateEl = document.createElement("p");
    const headingVenueEl = document.createElement("p");
    const headingLocationEl = document.createElement("p");
    const headingButtonEl = document.createElement("button");

    // Add Classes for headings
    headingsCardEl.classList.add("headings-card");
    headingDateEl.classList.add("headings-card__date");
    headingVenueEl.classList.add("headings-card__venue");
    headingLocationEl.classList.add("headings-card__location");
    headingButtonEl.classList.add("button");
    headingButtonEl.classList.add("headings-card__button");
    // Set InnerText
    headingDateEl.innerText = "DATE";
    headingVenueEl.innerText = "VENUE";
    headingLocationEl.innerText = "LOCATION";
    headingButtonEl.innerText = "BUY TICKETS";

    // Append Child to Parent
    headingsCardEl.appendChild(headingDateEl);
    headingsCardEl.appendChild(headingVenueEl);
    headingsCardEl.appendChild(headingLocationEl);
    headingsCardEl.appendChild(headingButtonEl);
    showsContainer.appendChild(headingsCardEl);

    showsList.forEach((show) => {
      // Create elements
      const showCardEl = document.createElement("div");
      const dateHeadingEl = document.createElement("p");
      const venueHeadingEl = document.createElement("p");
      const locationHeadingEl = document.createElement("p");
      const dateEl = document.createElement("p");
      const venueEl = document.createElement("p");
      const locationEl = document.createElement("p");
      const ticketsButtonEl = document.createElement("button");

      // Add classes
      showCardEl.classList.add("shows-container__card");
      dateHeadingEl.classList.add("shows-container__heading");
      dateEl.classList.add("shows-container__date");
      venueHeadingEl.classList.add("shows-container__heading");
      venueEl.classList.add("shows-container__venue");
      locationHeadingEl.classList.add("shows-container__heading");
      locationEl.classList.add("shows-container__location");
      ticketsButtonEl.classList.add("button");

      // Use convertTimestampToDate function to show actual date
      const formatDate = convertTimeStampToDate(show.date)
      // Set innerText
      dateHeadingEl.innerText = showHeading[0];
      venueHeadingEl.innerText = showHeading[1];
      locationHeadingEl.innerText = showHeading[2];
      dateEl.innerText = formatDate;
      venueEl.innerText = show.place;
      locationEl.innerText = show.location;
      ticketsButtonEl.innerText = `BUY TICKETS`;

      // append child to parent
      showsContainer.appendChild(showCardEl);
      showCardEl.appendChild(dateHeadingEl);
      showCardEl.appendChild(dateEl);
      showCardEl.appendChild(venueHeadingEl);
      showCardEl.appendChild(venueEl);
      showCardEl.appendChild(locationHeadingEl);
      showCardEl.appendChild(locationEl);
      showCardEl.appendChild(ticketsButtonEl);

      // Add event listeners for clicked show effect
      showCardEl.addEventListener("click", () => {
        document.querySelectorAll(".shows-container__card").forEach((card) => {
          item.classList.remove("show__clicked");
        });

        showCardEl.classList.add("show__clicked");
      });
    });
  } catch (error) {
    console.error("Error render shows: ", error);
  }
};

// Initial render
renderShows();
