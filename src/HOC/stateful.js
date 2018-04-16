import { compose } from "recompose";
import connect from "app/HOC/connect";
import withState from "app/HOC/withState";

export default compose(withState, connect);