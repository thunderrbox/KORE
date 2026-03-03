import {CheckCircle} from "lucide-react"

interface FormErrorProps{
    message:string;
};
import React from 'react'

const FormSuccess= ({message}:FormErrorProps) => {

    if(!message) return null;
  return (
    <div className="bg-emerald-300 p-2! rounded-md flex items-center gap-x-2 text-sm text-green-900 ">
        <CheckCircle className="h-3 w-3 text-green-900"/>
        <p>{message}</p>
      
    </div>
  )
}

export default FormSuccess;
