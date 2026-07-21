import { Router } from "express"
import { protect, protectAdmin } from "../middleware/auth.js"
import { createPaySlip, getPaySlipById, getPaySlips } from "../controllers/payslipController.js"

const payslipRouter = Router()

payslipRouter.post("/", protect, protectAdmin, createPaySlip)
payslipRouter.get("/", protect, getPaySlips)
payslipRouter.get("/:id", protect, getPaySlipById)

export default payslipRouter