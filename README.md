## Description

A simple warehouse rest API backend, built with [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```



### Database configuration

Change the `src/config/keys.ts` file to match your database setting:

```typescript
export default { mongoURI: '' }
```



## Running the backend

```bash
$ npm run start:dev
```



## Testing with Postman

To add a product into the database, send a `post` request to `http://localhost:3000/products/` with data below:

```json
{
   "productName": "Wood Mouse Pad",
   "description": "Comfortable maple wood made mouse pad",
   "quantity": 70
}
```



To update a product information, for example, to update the quantity of the pillow with its id `5c9adcf4431cb3b3e07feaf3`, just send a `put` request to `http://localhost:3000/products/5c9adcf4431cb3b3e07feaf3` with data:

```json
{
   "quantity": 77
}
```



To verify if the quantity of the pillow was updated, send a `get` request with the product id: `http://localhost:3000/products/5c9adcf4431cb3b3e07feaf3`.



To remove a product from the database, just send a `delete` request with the product id: `http://localhost:3000/products/5c9adcf4431cb3b3e07feaf3`.
