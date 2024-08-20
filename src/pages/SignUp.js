import React from 'react'
import Template from '../components/core/Auth/Template'
import signupImage from '../assets/Images/signup.webp'

const SignUp = () => {
  return (
    <div>
      <Template
        heading={'Tham gia cùng hàng triệu người học lập trình với Ant&Create miễn phí'}
        desc1={'Xây dựng kỹ năng cho hôm nay, ngày mai và xa hơn nữa.'}
        desc2={'Giáo dục để bảo vệ sự nghiệp của bạn trong tương lai.'}
        image={signupImage}
        formType={'signup'}
      />
    </div>
  )
}

export default SignUp
