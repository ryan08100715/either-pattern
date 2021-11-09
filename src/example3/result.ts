/**
 * either pattern
 *
 * 對成功/失敗進行封裝，返回值可自行進行判斷成功或失敗並取得對應值。
 *
 * 注意事項：
 *   ts為結構類型系統，因此在幫成功or失敗建模時，要注意空類別
 */

export type Either<S, F> = Success<S, F> | Failure<S, F>;

export class Success<S, F> {
  readonly value: S;

  constructor(value: S) {
    this.value = value;
  }

  isSuccess(): this is Success<S, F> {
    return true;
  }

  isFailure(): this is Failure<S, F> {
    return false;
  }
}

export class Failure<S, F> {
  readonly value: F;

  constructor(value: F) {
    this.value = value;
  }

  isSuccess(): this is Success<S, F> {
    return false;
  }

  isFailure(): this is Failure<S, F> {
    return true;
  }
}

export function success<S, F>(value: S): Either<S, F> {
  return new Success<S, F>(value);
}

export function failure<S, F>(value: F): Either<S, F> {
  return new Failure<S, F>(value);
}
