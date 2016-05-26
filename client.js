export const makeClient = () => Promise.resolve({
  authorizeToggleTodo: text => new Promise(
    resolve => setTimeout(() => resolve(text.length > 0), 500)
  ),
});

export default makeClient;
