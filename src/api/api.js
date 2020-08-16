const API_URL = 'http://localhost:9999/';
const API_READ_ALL = API_URL+'edenbook/';
const API_READ_BOOK = API_URL+'edenbook/book/';
const API_INSERT_BOOK = API_URL+'edenbook/insert/';
const API_DELETE_BOOK = API_URL+'edenbook/delete/';
const API_UPDATE_BOOK = API_URL+'edenbook/update/';
const APU_READ_ALL_AUTHORS = API_URL+'edenbook/authors/';


export default{    
    async fetchBooks() {
        const res = await fetch(API_READ_ALL);          
        return res.json();
    },
    async fetchBook(id) {
        const res = await fetch(API_READ_BOOK+id);  
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
}
    