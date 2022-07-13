// Add constat action type for status.
const CHECK_STATUS = 'CHECK_STATUS';

// Add action creater to check status.
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Add reducer for checkstatus.
const bookStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ['Under construction'];
    default:
      return state;
  }
};

export default bookStatusReducer;
