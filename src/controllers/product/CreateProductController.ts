import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {

        //pega os dados do corpo da requisição
        const { name, price, description, category_id } = req.body;                

        //Inicializa o servico de criacao de produto
        const createProductService = new CreateProductService();

        //Verifica se foi enviado uma foto
        if(!req.file){
            //retrona o erro
            throw new Error("error upload file")
        }else{
            //Pega o arquivo enviado
            //Dando ctrl+space entre as {}, vai ver os atributos do arquivo
            //originalname: nome original do arquivo
            //filename nome do arquivo gerado pela nossa configuração no multer mas esta mudando para banner (filename: banner)
            const {originalname, filename: banner} = req.file;

            

            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            //Retorna a resposta para o cliente
            return res.json(product);
        }

        
    }    
}

export { CreateProductController };