const API_URL = 'http://localhost:9999/';
const API_READ_ALL = API_URL+'edenbook/';
const API_READ_BOOK = API_URL+'edenbook/book/';
const API_INSERT_BOOK = API_URL+'edenbook/insert/';
const API_DELETE_BOOK = API_URL+'edenbook/delete/';
const API_UPDATE_BOOK = API_URL+'edenbook/update/';
const APU_READ_ALL_AUTHORS = API_URL+'edenbook/authors/';
const API_READ_COMMENTS = API_URL+'edenbook/readcomments/';
const API_ADD_COMMENTS = API_URL+'edenbook/addcomment/';
const API_NEWS = "https://newsapi.org/v2/everything?q=book&from=2020-08-20&to=2020-08-20&sortBy=popularity&apiKey=eed39cf371d04783aa85d8f258030d56";
const API_FRESH_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=eed39cf371d04783aa85d8f258030d56"
const API_WEATHER = "http://api.openweathermap.org/data/2.5/weather?lang=en&units=metric&zip=6725,hu&appid=53a8a64a78d4bc026804722d8a88eb29";

export default{    
    async fetchNews(){
      const res = await fetch(API_NEWS);
      return res.json();
    },
    async fetchFreshNews(){
      const res = await fetch(API_FRESH_NEWS);
      return res.json();
    },
    async fetchBooks() {
        const res = await fetch(API_READ_ALL);          
        return res.json();
    },
    async fetchBook(id) {
        const res = await fetch(API_READ_BOOK+id);  
        return res.json();
    },
    async addComment(comment){
      console.log(comment);
      
      await fetch(
        API_ADD_COMMENTS,
        {
          method: 'POST',
          body: JSON.stringify(comment)
        }
      )
    },
    async fetchComments(id){
      const res = await fetch(API_READ_COMMENTS+id);  
      return res.json();
    },
    async insertBook(book) {
        await fetch(
            API_INSERT_BOOK,
            {
              method: 'POST',
              body: JSON.stringify(book)
            }
          )
    },
    async deleteBook(bookId) {
        await fetch(
            API_DELETE_BOOK+bookId,
            {
              method: 'POST',
              body: bookId
            }
        )
    },
    async updateBook(book){
            await fetch(
            API_UPDATE_BOOK,
            {
              method: 'POST',
              body: JSON.stringify(book)
            }
        )
    },
    async fetchAuthors() {
      const res = await fetch(APU_READ_ALL_AUTHORS);
      console.log(res);
      return res.json();
    },
    async fetchWeather(){
      const res = await fetch(API_WEATHER);
      return res.json();
    }
}
    