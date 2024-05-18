import { useState, useEffect } from "react"
import { getUsername } from "../services/auth.services"
// up39 membuat custom hook login meng cut const token setUsername yang ada di product
export const useLogin = () => {
    const [username, setUsername] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
          setUsername(getUsername(token))
        } else {
          window.location.href = "/login"
        }
    }, [])

    return username
}