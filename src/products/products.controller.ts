import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AddProductDto } from './dto/add-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll(): Product[] {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Product {
        return this.productsService.findOne(id);
    }

    @Post()
    addProduct(@Body() addProductDto: AddProductDto): string {
        return `Product Name: ${addProductDto.productName} Description: ${addProductDto.description}`;
    }

    @Put(':id')
    update(@Body() updateProductDto: AddProductDto, @Param('id') id): string {
        return `Updated ${id}, Product Name: ${updateProductDto.productName}`;
    }

    @Delete(':id')
    remove(@Param('id') id): string {
        return `Removed ${id}`;
    }
}
