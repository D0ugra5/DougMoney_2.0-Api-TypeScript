import { Router } from 'express';
import FinanceController from './controllers/FinanceController';
const router = Router();


router.post('/NecessaryExpenses',FinanceController.FinanceExpenses);
// Consulta de todas as Contas 
router.get('/financeConsult', FinanceController.FinanceConsult);
//deleta as rotas 
router.post('/DeleteFinance', FinanceController.DeleteFinance);
//UpdateFinance
router.put("/UpdateFinance", FinanceController.UpdateFinance);
export default router
 
