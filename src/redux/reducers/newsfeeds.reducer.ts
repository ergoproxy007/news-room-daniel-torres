  const initialState: any = {
  };
  
  export default function (state = initialState, action: any): any {
    switch (action.type) {
      case 0: {
          console.log("anything");
          return state
      }
      default:
        return state;
    }
  }
  