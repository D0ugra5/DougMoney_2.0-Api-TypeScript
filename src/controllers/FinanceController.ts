import { Request, Response } from 'express';
import AccountModels from '../models/AccountModels';
import mongoose from 'mongoose';
class FinanceController {
    FinanceExpenses(request: Request, response: Response) {
        let { title, type, category, amount } = request.body;
        const account = new AccountModels({
            title,
            type,
            category,
            amount,
            teste: 2,
        })
        return account.save().then(() => response.status(200).send({ Save: true }))

    }

    FinanceConsult(request: Request, response: Response) {
        AccountModels.find().sort({_id:'desc'})
            .exec()
            .then((results) => {

                let ResutlsOrderBy = results
                results.sort((data) => data.amount - data.amount)
                response.status(200).json({
                    Account: results,
                    count: results.length
                })
            }).catch((err) => response.status(500).json({
                message: err.message,
                err
            }))
    }


    DeleteFinance(request: Request, response: Response) {
        
        
        console.log(request.params.id)
        AccountModels.remove({ _id: request.params.id }).then((data) => {

            return response.status(202).send({ Delete: true })
        }).catch((err) => response.status(202).send({ Delete: false }))
    } 

    UpdateFinance(request:Request, response:Response){
        
    }

}


export default new FinanceController();


