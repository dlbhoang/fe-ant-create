import React from 'react'
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Trò chuyện với chúng tôi",
    description: "Đội ngũ thân thiện của chúng tôi sẵn sàng trợ giúp.",
    details: "ant&create@gmail.com",
  },
  {
    icon: "BiWorld",
    heading: "Ghé thăm chúng tôi",
    description: "Hãy đến và chào hỏi tại trụ sở văn phòng của chúng tôi.",
    details: "31 Trịnh Đình Thảo,Hoà Thạnh,Tân Phú,Hồ Chí Minh",
  },
  {
    icon: "IoCall",
    heading: "Gọi cho chúng tôi",
    description: "Thứ Hai - Thứ Sáu Từ 8 giờ sáng đến 5 giờ chiều",
    details: "+123 456 7869",
  },
]

const ContactDetails = () => {
  return (
    <div className='flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6' >
      {
        contactDetails.map((data, ind) => {
          const Icon = Icon1[data.icon] || Icon2[data.icon] || Icon3[data.icon]

          return (
            <div className='flex flex-col gap-[2px] text-richblack-200 p-3 text-sm' >
              <div className='flex flex-row gap-3 items-center ' >
                <Icon size={25} />
                <h1 className='text-richblack-5 font-semibold text-lg' >{data.heading}</h1>
              </div>

              <p className='font-medium' >{data.description}</p>
              <p className='font-medium' >{data.details}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ContactDetails
