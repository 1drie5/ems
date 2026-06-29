import { useCallback, useEffect, useState } from "react"
import { dummyEmployeeData, dummyPayslipData } from "../assets/assets"
import Loading from "../components/Loading"
import PaySlipList from "../components/payslip/PaySlipList"
import GeneratePaySlipForm from "../components/payslip/GeneratePayslipForm"
const Payslips = () => {
  const [payslips, setPayslips] = useState([])
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const isAdmin = true

  const fetchPayslips = useCallback(async ()=>{
    setPayslips(dummyPayslipData)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  
  useEffect(()=>{
    fetchPayslips()
  },[fetchPayslips])

  useEffect(()=>{
    if(isAdmin) setEmployees(dummyEmployeeData)
  },[isAdmin])
  
  if (loading) return <Loading />


  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="page-title">Payslips</h1>
          <p className="page-subtitle">{isAdmin ? "Generate and manage employee payslips" : "Your payslip history"}</p>
        </div>
        {isAdmin && <GeneratePaySlipForm employees={employees} onSuccess={fetchPayslips}/>}
      </div>
      <PaySlipList payslips={payslips} isAdmin={isAdmin}/>
    </div>
  )
}

export default Payslips