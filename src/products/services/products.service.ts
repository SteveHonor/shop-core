import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../interfaces/product.interface';
import { CreateProductDTO } from '../dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}
  // fetch all Products
  async getAllProduct(): Promise<Product[]> {
    const Products = await this.productModel.find().exec();
    return Products;
  }
  // Get a single Product
  async getProduct(ProductID: number): Promise<Product> {
    const Product = await this.productModel.findById(ProductID).exec();
    return Product;
  }
  // post a single Product
  async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const createdProduct = new this.productModel(createProductDTO);
    return await createdProduct.save();
  }
  // Edit Product details
  async updateProduct(ProductID: number, createProductDTO: CreateProductDTO): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      ProductID, createProductDTO, { 
        new: true 
      }
    );
    return updatedProduct;
  }
  // Delete a Product
  async deleteProduct(productID: number): Promise<any> {
    const deletedProduct = await this.productModel.findByIdAndRemove(productID);
    return deletedProduct;
  }
}