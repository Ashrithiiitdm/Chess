import { SignUp } from '@clerk/clerk-react'
import React from 'react'

export default function SignUpPage() {
  return (
    <div>
        <SignUp signInUrl='/login' afterSignUpUrl={'/game'} />
    </div>
  )
}
