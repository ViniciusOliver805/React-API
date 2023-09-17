import { Product } from "@prisma/client"

import { prisma } from '../prisma/client';

import { ProductDTO } from "./dtos/ProductDTO";

export class ProductCreate {
    async execute({ id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images,
    }: ProductDTO): Promise<Product> {
        //Verificando se o produto ja existe
        const productAlreadyExists = await prisma.product.findUnique({
            where: {
                id
            }
        })

        
        //Recebendo o produto da api

        const product = await prisma.product.create({
            data: {
                id,
                title,
                description,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                thumbnail,
                images,
            }
        })
        return product;
    }
}