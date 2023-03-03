import { useNavigate, Outlet } from "react-router-dom"
import styled from "styled-components"
const Header = () => {
  const navigate = useNavigate()

  const goToAuthPage = () => {
    navigate("/todo")
  }
  return (
    <>
      <Headers>
        <button onClick={goToAuthPage}>Logout</button>
      </Headers>
      <Outlet />
    </>
  )
}

export default Header

const Headers = styled.div`
  /* background-color: */
  padding:40px;
  
`