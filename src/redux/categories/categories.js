// Add constat action type for status.
const CHECKSTATUS = 'CHECKSTATUS';

// Add action creater to check status.
export const checkStatus = () => ({
  type: CHECKSTATUS,
});

// Add reducer for checkstatus.
const bookStatusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return ['Under construction'];
    default:
      return state;
  }
};

export default bookStatusReducer;
