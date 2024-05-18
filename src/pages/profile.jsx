// up58 MEMBUAT CUSTOM HOOK agar ketika login user bisa ke profile setelah diakses ketika berhasil login dan memisahkan useeffect menjadi sebuah fungsi custom hook. atau user define hook 

import React from 'react'
import { useLogin } from '../hooks/useLogin'


const profilePage = () => {
    const username = useLogin()
  return (
    <div>
      <h1>profile</h1>
      username : {username}
    </div>
  )
}

export default profilePage
