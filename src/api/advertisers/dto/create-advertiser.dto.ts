
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdvertiserDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  public email: string;
}