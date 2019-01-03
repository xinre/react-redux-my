const themeReducer = (state={}, action) => {
    state={
        text:'tang'
    };
    switch (action.type) {
      case 'CHANGE_TEXT':
        return { ...state, text: action.themetext }
      default:
        return state
    }
  }
  export {themeReducer};