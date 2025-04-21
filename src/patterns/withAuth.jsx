export function withAuth(Component) {
  let auth = true;

  if (auth) {
    // eslint-disable-next-line react/display-name
    return (props) => <Component auth={true} {...props} />;
  }

  // eslint-disable-next-line react/display-name
  return (props) => <h2>You do not have access!!</h2>;
}
