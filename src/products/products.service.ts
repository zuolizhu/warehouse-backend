import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}
    
    async findAll(): Promise<Product[]> {
        return await this.productModel.find();
    }

    async findOne(id: string): Promise<Product> {
        return await this.productModel.findOne({ _id: id });
    }

    async addProduct(product: Product): Promise<Product> {
        const newProduct = new this.productModel(product);
        return await newProduct.save();
    }

    async updateProduct(id: string, product: Product): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, product, { new: true });
    }

    async removeProduct(id: string): Promise<Product> {
        return await this.productModel.findByIdAndRemove(id);
    }

}
