import {
  IsNotEmpty,
  IsDate,
  IsString,
  IsNumber
} from 'class-validator';


export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly sku: string;

  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsString()
  readonly categories: string

  @IsString()
  readonly images: string;

  @IsString()
  readonly description: string;
  
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  
  @IsDate()
  @IsNotEmpty()
  readonly created: Date;
  
  @IsNotEmpty()
  readonly stock: number;
}