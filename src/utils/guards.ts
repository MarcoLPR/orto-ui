export const accountIsValid = (account: unknown): account is string =>
  typeof account === "string";
