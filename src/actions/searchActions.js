export const SEARCH_QUERY = 'SEARCH_QUERY';

export const searchByQuery = (searchKey) => ({
  type: SEARCH_QUERY,
  payload: searchKey,
});
