import { Router } from 'express'
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from '../controllers/employeeController'


const employeeRouter = Router()

employeeRouter.get('/', getEmployees)
employeeRouter.post('/', createEmployee)
employeeRouter.put('/:id', updateEmployee)
employeeRouter.delete('/:id', deleteEmployee)