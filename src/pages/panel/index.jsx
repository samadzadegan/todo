import { withAuth } from "../../patterns/withAuth";

function Panel({ auth }) {
  return <h2>Panel</h2>;
}

export default withAuth(Panel);
