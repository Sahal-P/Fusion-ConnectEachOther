import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const PublicRoute = () => {
  const auth = useSelector((state)=>state.auth.value)
  if(auth){
    return <Navigate to={'/'} />
  }
  return (
    <div id="logincontainer">
    <div id="logininviteContainer">
      <Outlet/>
    </div>
  </div>
  )
}
