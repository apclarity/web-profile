import React from 'react'
import AuthLayouts from '../../components/templates/AuthLayouts'
import FormLogin from '../../components/organism/FormLogin'

const RegisterPage = () => {
    return (
        <div>
            <AuthLayouts title="Register">
                <FormLogin />
            </AuthLayouts>
        </div>
    )
}

export default RegisterPage