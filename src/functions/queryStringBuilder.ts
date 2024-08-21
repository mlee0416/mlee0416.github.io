export interface IIndexable<T = any> {
  [key: string]: T;
}
export const queryStringBuilder = (obj: IIndexable) => {
  const params = new URLSearchParams(obj);
  return params;
};
