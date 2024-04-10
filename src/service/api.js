const api = {
    fetchBooks: async () => {
      const response = await fetch("https://d1krvzwx5oquy1.cloudfront.net/books.json");
      const data = await response.json();
      return data;
    },
  };
  
  export default api;