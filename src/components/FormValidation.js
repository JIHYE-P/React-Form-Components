import React from 'react'
import PhoneInput from './Phone'
import EmailInput from './Email'

const FormValidation = ({children, validated}) => {
  return <>
    <form className={validated}>
      <div className="form-group">
        <PhoneInput></PhoneInput>
      </div>
      <div className="form-group">
        <EmailInput></EmailInput>
      </div>
    </form>
    {children}
  </>
}

export default FormValidation