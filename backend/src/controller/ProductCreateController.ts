import { Request, Response } from "express";
import { ProductCreate } from "../modules/ProductCreate";

export class ProductCreateController {
    async handle(req: Request, res: Response) {
        const { id,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            category,
            thumbnail,
            images } = req.body;

        const productCreate = new ProductCreate();

        const result = productCreate.execute ({id,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            category,
            thumbnail,
            images});
        
        return res.status(201).json(result);

    }
}