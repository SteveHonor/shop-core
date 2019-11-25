import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
  UseGuards
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { CreateProductDTO } from '../dto/create-product.dto';
import { Product } from '../interfaces/product.interface';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }
  
  // add a Product
  @Post('/create')
  async addProduct(@Res() res, @Body() CreateProductDTO: CreateProductDTO) {
    const Product = await this.productsService.addProduct(CreateProductDTO);
    return res.status(HttpStatus.OK).json({
      message: "Product has been created successfully",
      Product
    })
  }
  
  // Retrieve products list
  @Get()
  async getAllCometition(@Res() res): Promise<Product[]> {
    const products = await this.productsService.getAllProduct();
    return res.status(HttpStatus.OK).json(products);
  }

  // Fetch a particular Product using ID
  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productsService.getProduct(productID);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json(product);
  }

  // Update a Product's details
  @Put('/update')
  async updateProduct(@Res() res, @Query('productID') productID, @Body() CreateProductDTO: CreateProductDTO) {
    const product = await this.productsService.updateProduct(productID, CreateProductDTO);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product has been successfully updated',
      product
    });
  }

  // Delete a Product
  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productID') productID) {
    const product = await this.productsService.deleteProduct(productID);
    if (!product) throw new NotFoundException('Product does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Product has been deleted',
      product
    })
  }
}
