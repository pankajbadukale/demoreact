import { ADD_TO_BOX, RM_FROM_BOX } from "./actionConstants";

const shuffle = () => {
  const colrs = [
    '#DFFF00',
    '#FFBF00',
    '#FF7F50',
    '#DE3163',
    '#6495ED',
  ];

  const shuffled = colrs.sort(() => 0.5 - Math.random());

  return shuffled.map((v, i) => ({color: v, order: i+1}));
};

export const initialState = {
    circles: shuffle(),
    inbox: [],
};

export function reducer(state, action) {
  switch (action.type) {

    case ADD_TO_BOX:
        let cirObj = state.circles.splice(action.payload - 1, 1);
        state.inbox = [...state.inbox, ...cirObj];
      return {...state};

    case RM_FROM_BOX:
      state.circles.push(action.payload)
      state.circles.sort((a, b) => {
        return a.order - b.order
      })
      state.inbox = state.inbox.filter(v => v.color !== action.payload.color)
      return {...state};

    default:
      return state;
  }
}