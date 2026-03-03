import {AlertCircle} from "lucide-react"

interface FormErrorProps{
    message:string;
};
import React from 'react'

const FormError = ({message}:FormErrorProps) => {

    if(!message) return null;
  return (
    <div className="bg-destructive/50 p-2! rounded-md flex items-center gap-x-2 text-sm text-white ">
        <AlertCircle className="h-3 w-3 text-white"/>
        <p>{message}</p>
      
    </div>
  )
}

export default FormError;
