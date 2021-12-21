import React, {useState} from 'react'
import Layout from '../../../components/common/Layout'
import LoginPresenter from '../../../presenters/Auth/LoginPresenter'
import MainPresenter from '../../../presenters/Main/MainPresenter'

const MainContainer = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // 로그인 여부에 따라 화면 변환
  // 이걸 여기서 처리해도 상관 없나
  return (
    <Layout>
      {isLoggedIn && <MainPresenter />}
      {!isLoggedIn && <LoginPresenter />}
    </Layout>
  )
}

export default MainContainer
