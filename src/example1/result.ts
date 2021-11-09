/**
 * 缺點：
 *   無法對錯誤進行類型建模
 */

export type Type<T> = T | Error;

export function isError<T>(result: Type<T>): result is Error {
  return result instanceof Error;
}

export function isSuccess<T>(result: Type<T>): result is T {
  return !isError(result);
}
