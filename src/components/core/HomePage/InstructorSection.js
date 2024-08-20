import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import HighlightedText from './HighlightedText'
import CTAButton from './CTAButton';
import Instructor from '../../../assets/Images/Instructor.png'

const InstructorSection = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-20 items-center' >
      <div className=' lg:w-[50%] drop-shadow-[-20px_-20px_rgba(255,255,255)]' >
        <img src={Instructor} alt="Instructor" />
      </div>

      <div className='lg:w-[50%] flex flex-col gap-10' >
        <div className=' lg:w-[50%] text-4xl font-semibold '>
        Trở Thành
              <HighlightedText text={"giảng viên"} />
        </div>
        <div className='font-medium text-base w-[90%] text-richblack-300' >
        Các giảng viên từ khắp nơi trên thế giới đang dạy hàng triệu học viên trên StudyNotion. Chúng tôi cung cấp công cụ và kỹ năng để bạn giảng dạy những gì bạn yêu thích.        </div>

        <div className='w-fit' >
          <CTAButton active={true} linkto={'/signup'} >
            <div className='flex flex-row items-center gap-2' >
            Bắt Đầu Dạy Ngay              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default InstructorSection
