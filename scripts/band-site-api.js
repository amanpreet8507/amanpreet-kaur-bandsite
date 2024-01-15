// const apiKey = "0c1318a1-0c91-4df5-9cfa-b8cbad39d045"

// API comment: post, get and put
// https://project-1-api.herokuapp.com/comments?api_key=0c1318a1-0c91-4df5-9cfa-b8cbad39d045

// API shows: get
// https://project-1-api.herokuapp.com/showdates?api_key=0c1318a1-0c91-4df5-9cfa-b8cbad39d045

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = "0c1318a1-0c91-4df5-9cfa-b8cbad39d045",
    this.baseUrl = "https://project-1-api.herokuapp.com/"
  }

  // PostComment object
  postComment = async (comment) => {
    const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
    const userData = {
      name: comment.name,
      comment: comment.comment,
    };
    try {
      const response = await axios.post(url, userData);
      const finalOutput = response.data;
      return finalOutput;
    } catch (error) {
      console.error("Error PostComment: ", error);
    }
  };

  // GetComments object
  getComments = async () => {
    const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
    try {
      const response = await axios.get(url);
      const finalOutput = response.data;
      // Sort comments array based on timestamp
      const sortedCommentsArray = finalOutput.sort(
        (a, b) => a.timestamp - b.timestamp
      );
      return sortedCommentsArray;
    } catch (error) {
      console.error("Error GetComment: ", error);
    }
  };

  // GetShows object
  getShows = async () => {
    const url = `${this.baseUrl}showdates?api_key=${this.api}`
    try {
      const response = await axios.get(url);
      const finalOutput = response.data;
      console.log(finalOutput)
      return finalOutput;
    } catch (error) {
      console.error("Error GetShows: ", error);
    }
  };
}

export default BandSiteApi;
