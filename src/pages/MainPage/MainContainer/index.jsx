import React, {useState} from 'react'
import Layout from '../../../components/common/Layout'
import LoginPresenter from '../../../presenters/Auth/LoginPresenter'

const MainContainer = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // 로그인 여부에 따라 화면 변환
  return (
    <Layout>
      {isLoggedIn && <div>메인</div>}
      {!isLoggedIn && <LoginPresenter />}
    </Layout>
  )
}

export default MainContainer
