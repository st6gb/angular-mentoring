interface ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: Date;
  description: string;
}

interface IUser {
  id: string;
  firstName?: string;
  LastName?: string;
  password?: string;
  email: string;
}

export class Course implements ICourse {
  readonly id: string;
  title: string;
  creationDate: Date;
  duration: Date;
  description: string;
  topRated: boolean;

  constructor(data: Partial<Course>) {
    Object.assign(this, data);
  }
}

export class User implements IUser {
  readonly id: string;
  firstName?: string;
  LastName?: string;
  password?: string;
  email: string;

  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }
}
