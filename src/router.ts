import { Router } from 'express';
import FinanceConsult from './controllers/FinanceConsult'
import FinanceController from './controllers/FinanceController';




const router = Router();


router.post('/NecessaryExpenses', FinanceController.FinanceExpenses);
// Consulta de todas as Contas 
router.get('/financeConsult', FinanceController.FinanceConsult);
//deleta as rotas 
router.delete('/DeleteFinance/:id', FinanceController.DeleteFinance);
//UpdateFinance
router.put("/UpdateFinance", FinanceController.UpdateFinance);

//Finance Consult 
router.get('/FinanceData', FinanceConsult.FinanceDate)


export default router

