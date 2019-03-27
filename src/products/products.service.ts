import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [
        {
            id: "x000000001",
            productName: "Wood Mouse Pad",
            description: "Comfortable maple wood made mouse pad",
            quantity: 70
        },
        {
            id: "x000000002",
            productName: "USB-C Cable",
            description: "Durable USB Type C cable for phone charging and data transfering",
            quantity: 12
        }
    ];

    findAll(): Product[] {
        return this.products;
    }

    findOne(id: string): Product {
        return this.products.find(product => product.id === id);
    }

}
