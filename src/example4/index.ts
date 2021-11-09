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
  EmailInvalid | UsernameTaken,
  CreateUserSuccess
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
    return Result.left(new EmailInvalid("test"));
  }

  if (!passwordMatchesCriteria()) {
    return Result.left(new UsernameTaken("abc"));
  }

  // Finally
  return Result.right(new CreateUserSuccess("1"));
}

const createUserResult = createUser();

const str = Result.match(
  createUserResult,
  (err) => err.message,
  (newUser) => newUser.id
);
