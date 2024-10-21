import {
    IsAlphanumeric,
    IsEmail,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
  } from 'class-validator';
const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{6}$/;

export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
  @MinLength(3, { message: 'Username must have atleast 3 characters.' })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsInt()
  age: number;

 

  @IsNotEmpty()
  // @Matches(passwordRegEx, {
  //   message: `Password must contain Minimum 6 characters, 
  //   at least one uppercase letter, 
  //   one lowercase letter, 
  //   one number and 
  //   one special character`,
  // })
  password: string;
}
