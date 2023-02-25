export enum ConnectorNames {
  Injected = "injected",
}

export type Login = (connectorId: ConnectorNames) => void;