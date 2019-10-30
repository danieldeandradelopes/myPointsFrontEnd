import produce from 'immer';

const INITIAL_STATE = {
  points: null,
};

export default function points(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@points/REGISTER_POINTS_SUCCESS': {
        draft.points = action.payload.points;
        break;
      }

      default:
    }
  });
}
