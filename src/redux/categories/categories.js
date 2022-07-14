// Add constat action type for status.
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Add action creater to check status.
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Add reducer for checkstatus.
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ['Comming Soon'];
    default:
      return state;
  }
};

export default categoryReducer;
