export const makeClientMiddleware = makeClient => store => next => action => {
  if (action.withClient) {
    makeClient(store.getState().something)
      .then(client => action.withClient(client)(store.dispatch))
    ;
  } else {
    next(action);
  }
};

export default makeClientMiddleware;
