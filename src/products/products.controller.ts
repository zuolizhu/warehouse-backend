import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AddProductDto } from './dto/add-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Product> {
        return this.productsService.findOne(id);
    }

    @Post()
    addProduct(@Body() addProductDto: AddProductDto): Promise<Product> {
        return this.productsService.addProduct(addProductDto);
    }

    @Put(':id')
    updateProduct(@Body() updateProductDto: AddProductDto, @Param('id') id): Promise<Product>{
        return this.productsService.updateProduct(id, updateProductDto);
    }

    @Delete(':id')
    removeProduct(@Param('id') id): Promise<Product> {
        return this.productsService.removeProduct(id);
    }
}
