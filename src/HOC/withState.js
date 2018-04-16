import { compose, withState, withHandlers } from "recompose";

export default compose(
    withState('state', 'setInnerState', { }),
    withHandlers({
        setState: ({ state, setInnerState }) => newState => setInnerState({ ...state, ...newState }),
    })
)