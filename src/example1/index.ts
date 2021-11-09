import * as Result from "./result";

interface NewUser {
  id: number;
}

type CreateUserResult = Result.Type<NewUser>;

function createUser(): CreateUserResult {
  return {
    id: 1,
  };
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
