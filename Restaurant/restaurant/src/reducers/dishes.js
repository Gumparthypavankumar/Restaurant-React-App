import { ADD_COMMENT, GET_DISH, GET_DISHES} from '../actions/types';

const initialState = {
  dishes : [],
  dish : {
    comments:[]
  }
}
// initialState.dishes = [
//   {
//     id: "0",
//     name: "Uthappizza",
//     image: "../images/uthappizza.png",
//     category: "mains",
//     featured: true,
//     label: "Hot",
//     price: "4.99",
//     description:
//       "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives.",
//     comments: []
//   },
//   {
//     id: "1",
//     name: "Zucchipakoda",
//     image: "../images/zucchipakoda.png",
//     category: "appetizer",
//     featured: false,
//     label: "",
//     price: "1.99",
//     description:
//       "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
//     comments: []
//   },
//   {
//     id: "2",
//     name: "Vadonut",
//     image: "../images/vadonut.png",
//     category: "appetizer",
//     featured: false,
//     label: "New",
//     price: "1.99",
//     description:
//       "A quintessential ConFusion experience, is it a vada or is it a donut?",
//     comments: []
//   }
// ]

const dishes = (state = initialState, action) => {
    switch(action.type){
        case GET_DISHES:
            return {
                ...state,
                dishes:action.payload
            };
        case GET_DISH:
          return {
            ...state,
            dish: action.payload
          };
        case ADD_COMMENT:
          return {
            ...state,
            dish : {...state.dish,
            comments : [{name:action.payload.name,comment:action.payload.comment,date:action.payload.date},...state.dish.comments]},
            dishes : state.dishes.map(dish => dish.id === action.payload.id ?  {...dish,comments : [{name:action.payload.name,comment:action.payload.comment,date:action.payload.date},...dish.comments]} : dish)
          };
        default:
            return state;
    }
}

export default dishes;