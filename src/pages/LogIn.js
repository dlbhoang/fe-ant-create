import React from 'react'
import Template from '../components/core/Auth/Template'
import loginImage from '../assets/Images/login.webp'

const LogIn = () => {
  return (
    <div>
      <Template
        heading={'Chào mừng trở lại'}
        desc1={'Xây dựng kỹ năng cho hôm nay, ngày mai và xa hơn nữa.'}
        desc2={'Giáo dục để bảo vệ sự nghiệp của bạn trong tương lai.'}
        image={loginImage}
        formType={'login'}
      />
    </div>
  )
}

export default LogIn
