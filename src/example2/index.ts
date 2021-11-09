import * as Result from "./result";

interface NewUser {
  id: number;
}

class UsernameIsTaken extends Error {}

class UsernamePhoneError extends Error {}

function createUser(): Result.Type<
  NewUser,
  UsernameIsTaken | UsernamePhoneError
> {
  function isError() {
    return true;
  }

  if (isError()) {
    return new UsernamePhoneError();
  } else {
    return {
      id: 1,
    };
  }
}

const createUserResult = createUser();

if (Result.isSuccess(createUserResult)) {
  const newUser = createUserResult;
  const userId = newUser.id;
}

if (Result.isError(createUserResult)) {
  const error = createUserResult;
  throw error;
}
