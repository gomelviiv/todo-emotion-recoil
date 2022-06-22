interface IRouteElement {
  appTitle: string;
  path?: string;
  exact?: boolean;
  element?: React.FC;
}

export default IRouteElement;
