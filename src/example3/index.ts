import * as Result from "./result";

class CreateUserSuccess {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class EmailInvalid {
  public message: string;

  constructor(email: string) {
    this.message = `The email ${email} is invalid.`;
  }
}

class UsernameTaken {
  public message: string;

  constructor(username: string) {
    this.message = `The ${username} is already in use.`;
  }
}

type CreateUserResult = Result.Either<
  CreateUserSuccess,
  EmailInvalid | UsernameTaken
>;

function createUser(): CreateUserResult {
  const isEmailValid = () => {
    return true;
  };
  const userAlreadyExists = () => {
    return false;
  };
  const passwordMatchesCriteria = () => {
    return true;
  };
  const isUsernameTaken = () => {
    return false;
  };

  if (!isEmailValid()) {
    return Result.failure(new EmailInvalid("test"));
  }

  if (!passwordMatchesCriteria()) {
    return Result.failure(new UsernameTaken("abc"));
  }

  // Finally
  return Result.success(new CreateUserSuccess("1"));
}

const createUserResult = createUser();

if (createUserResult.isFailure()) {
  const error = createUserResult.value;
  throw error;
}

if (createUserResult.isSuccess()) {
  const newUser = createUserResult.value;
  const userId = newUser.id;
}
