import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AddProductDto } from './dto/add-product.dto';

@Controller('products')
export class ProductsController {
    @Get()
    findAll(): string {
        return 'Get all products';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Product ${id}`;
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
