import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post("/create")
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO)	{
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: "Product successfully created",
            product
        });
    };

    @Get("/")
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products
        });
    }

    @Get("/:productID")
    async getProduct(@Res() res, @Param("productID") productID) {
        const product = await this.productService.getProduct(productID)
        return res.status(HttpStatus.OK).json({
            product
        });
    }

    @Delete("/delete/:productID")
    async deleteProduct(@Res() res, @Param("productID") productID) {
        const productDeleted = await this.productService.deleteProduct(productID);
        return res.status(HttpStatus.OK).json({
            message: "Product successfully deleted",
            productDeleted
        });
    }

    @Put("/update/:productID")
    async updateProduct(@Res() res, @Param("productID") productID, @Body() createProductDTO: CreateProductDTO) {
        const productUpdated = await this.productService.updateProduct(productID, createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: "Product successfully updated",
            productUpdated
        });
    }
}
