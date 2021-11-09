/**
 * example1 的改良，新增了錯誤的類型模型。
 *
 * 缺點：
 *   無法將 Type<T, E> 在定義給新 type，否則會導致類型丟失
 */

export type Type<T, E extends Error> = T | E;

export function isError<T, E extends Error>(result: Type<T, E>): result is E {
  return result instanceof Error;
}

export function isSuccess<T, E extends Error>(result: Type<T, E>): result is T {
  return !isError(result);
}
