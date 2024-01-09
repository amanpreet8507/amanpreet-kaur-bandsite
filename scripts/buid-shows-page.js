const showHeading = ["DATE", "VENUE", "LOCATION"
]

const showsList = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    }
]

  
  // Function to create and render show elements
  function renderShows() {
    const showsContainer = document.querySelector('.shows-container');
    // Create elements
    // Containing single DATE, VENUE, LOCATION headings only for tablet and destop screen
    const headingsCardEl = document.createElement('div')

    const headingDateEl = document.createElement('p')
    const headingVenueEl = document.createElement('p')
    const headingLocationEl = document.createElement('p')
    const headingButtonEl = document.createElement('button')

    // Add Classes for headings
    headingsCardEl.classList.add('headings-card')
    headingDateEl.classList.add('headings-card__date')
    headingVenueEl.classList.add('headings-card__venue')
    headingLocationEl.classList.add('headings-card__location')
    headingButtonEl.classList.add('button')
    headingButtonEl.classList.add('headings-card__button')
    // Set InnerText
    headingDateEl.innerText = 'DATE'
    headingVenueEl.innerText = 'VENUE'
    headingLocationEl.innerText = 'LOCATION'
    headingButtonEl.innerText = 'BUY TICKETS'

    // Append Child to Parent
    headingsCardEl.appendChild(headingDateEl)
    headingsCardEl.appendChild(headingVenueEl)
    headingsCardEl.appendChild(headingLocationEl)
    headingsCardEl.appendChild(headingButtonEl)
    showsContainer.appendChild(headingsCardEl)

    showsList.forEach((show) => {
    // Create elements
      const showCardEl = document.createElement('div')
      const dateHeadingEl = document.createElement('p')
      const venueHeadingEl = document.createElement('p')
      const locationHeadingEl = document.createElement('p')
      const dateEl = document.createElement('p')
      const venueEl = document.createElement('p')
      const locationEl = document.createElement('p')
      const ticketsButtonEl = document.createElement('button')

    // Add classes
      showCardEl.classList.add('shows-container__card')
      dateHeadingEl.classList.add('shows-container__heading')
      dateEl.classList.add('shows-container__date')
      venueHeadingEl.classList.add('shows-container__heading')
      venueEl.classList.add('shows-container__venue')
      locationHeadingEl.classList.add('shows-container__heading')
      locationEl.classList.add('shows-container__location')
      ticketsButtonEl.classList.add('button')


    // Set innerText
      dateHeadingEl.innerText = showHeading[0]
      venueHeadingEl.innerText = showHeading[1]
      locationHeadingEl.innerText = showHeading[2]
      dateEl.innerText = show.date
      venueEl.innerText = show.venue
      locationEl.innerText = show.location
      ticketsButtonEl.innerText = `BUY TICKETS`

       
  
    // Add event listeners for hover and click
       showCardEl.addEventListener('mouseover', () => {
         showCardEl.classList.add('hovered');
       });
  
       showCardEl.addEventListener('mouseout', () => {
         showCardEl.classList.remove('hovered');
       });
  
       showCardEl.addEventListener('click', () => {
         document.querySelectorAll('.shows-container__card').forEach((item) => {
           item.classList.remove('selected');
         });
  
         showCardEl.classList.add('selected');
       });

      // append child to parent
      showsContainer.appendChild(showCardEl)
      showCardEl.appendChild(dateHeadingEl)
      showCardEl.appendChild(dateEl)
      showCardEl.appendChild(venueHeadingEl)
      showCardEl.appendChild(venueEl)
      showCardEl.appendChild(locationHeadingEl)
      showCardEl.appendChild(locationEl)
      showCardEl.appendChild(ticketsButtonEl)
    });
  }
  
  // Initial render
  renderShows();
  

