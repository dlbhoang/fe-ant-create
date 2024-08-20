import React, { useEffect, useState } from 'react'
import HighlightedText from '../components/core/HomePage/HighlightedText'
import Footer from '../components/common/Footer'
import FoundingStory from '../assets/Images/FoundingStory.png'
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage.js/Quote'
import StudyNotionStats from '../components/core/AboutPage.js/StudyNotionStats'
import LearningGrid from '../components/core/AboutPage.js/LearningGrid'
import ContactUsForm from '../components/core/ContactPage/ContactUsForm'
import { getAllReviews } from '../services/operations/otherServices';
import ReviewsSlider from '../components/common/ReviewsSlider'
import Spinner from '../components/common/Spinner'


const About = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllReviews = async () => {
      setLoading(true);
      const response = await getAllReviews();
      if (response) {
        setReviews(response);
      }
      setLoading(false);
    }
    fetchAllReviews();
  }, [])


  return (
    <div className='text-white' >
      {/* Section 1 */}
      <div className='bg-richblack-700' >
        <div className='relative w-11/12 mx-auto max-w-maxContent flex flex-col justify-between py-20' >
          <h1 className='text-center font-semibold text-4xl mx-auto lg:w-[70%]' >Đổi mới giáo dục trực tuyến cho một
            <HighlightedText text={'Tương lai sáng lạn'} />
          </h1>

          <p className='mx-auto lg:w-[70%] mt-3 text-center font-medium text-richblack-300' >
          Ant&Create dẫn đầu trong việc cách mạng hóa giáo dục trực tuyến. Chúng tôi tận tâm tạo ra một tương lai tươi sáng hơn bằng cách cung cấp các khóa học tiên tiến, áp dụng công nghệ mới nhất và xây dựng một cộng đồng học tập năng động.          </p>

          <div className='sm:h-[70px] mt-10 lg:h-[150px]' ></div>

          <div className=' absolute bottom-0 translate-y-[30%] left-[50%] translate-x-[-50%] w-full grid grid-cols-3 gap-3 lg:gap-5' >
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className='bg-richblack-900 border-b border-richblack-700' >
        <div className='mt-[100px] w-11/12 mx-auto max-w-maxContent flex flex-col justify-between' >
          <Quote />
        </div>
      </div>

      {/* Section 3 */}
      <div className='bg-richblack-900'>
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col justify-between mt-10' >

          <div className='flex flex-col lg:flex-row items-center justify-between gap-10' >
            <div className='flex flex-col gap-10 lg:w-[50%] my-10' >
              <h1 className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]' >Câu chuyện hình thành</h1>
              <p className='font-medium text-richblack-300 lg:w-[95%]' >                Nền tảng e-learning của chúng tôi ra đời từ tầm nhìn chung và đam mê thay đổi cách học. Bắt đầu từ một nhóm các nhà giáo dục, chuyên gia công nghệ và những người yêu thích học hỏi, chúng tôi nhận thấy nhu cầu về các cơ hội học tập linh hoạt và chất lượng cao trong thế giới số hiện đại.</p>

              <p className='font-medium text-richblack-300 lg:w-[95%]' >                Với kinh nghiệm thực tiễn trong giáo dục, chúng tôi hiểu rõ những hạn chế của hệ thống giáo dục truyền thống. Chúng tôi tin rằng giáo dục không nên bị giới hạn trong lớp học hay bởi ranh giới địa lý. Chúng tôi hình dung một nền tảng có thể phá vỡ những rào cản này và giúp mọi người từ mọi tầng lớp phát huy tối đa tiềm năng của mình.</p>
            </div>

            <div >
              <img src={FoundingStory} alt="" className='shadow-[0_0_20px_0] shadow-[#FC6767]' />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-between lg:gap-10 mb-20'>
            <div className='flex flex-col gap-5 lg:gap-10 lg:w-[40%] mt-10 lg:mt-0'>
              <h1 className=' text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#FF512F] to-[#F09819]' >Tầm nhìn của chúng tôi</h1>
              <p className='font-medium text-richblack-300 lg:w-[95%]' >Với tầm nhìn đó, chúng tôi bắt tay vào xây dựng một nền tảng học trực tuyến đổi mới. Đội ngũ chuyên gia của chúng tôi đã nỗ lực không ngừng để phát triển một nền tảng mạnh mẽ và dễ sử dụng, kết hợp công nghệ tiên tiến với nội dung hấp dẫn, tạo ra một trải nghiệm học tập tương tác và năng động.</p>
            </div>

            <div className='flex flex-col  gap-5 lg:gap-10 lg:w-[40%] mt-10 lg:mt-0'>
              <h1 className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]' >Sứ mệnh của chúng tôi </h1>
              <p className='font-medium text-richblack-300 lg:w-[95%]' >                Sứ mệnh của chúng tôi không chỉ dừng lại ở việc cung cấp khóa học trực tuyến. Chúng tôi muốn tạo ra một cộng đồng học viên sôi nổi, nơi mọi người có thể kết nối, hợp tác và học hỏi lẫn nhau. Chúng tôi tin rằng tri thức phát triển trong môi trường chia sẻ và đối thoại, và chúng tôi thúc đẩy điều này thông qua các diễn đàn, buổi học trực tiếp và cơ hội kết nối.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Section 4 */}
      <div className='bg-richblack-700' >
        <StudyNotionStats />
      </div>

      {/* Section 5 */}
      <div className='bg-richblack-900' >
        <div className='w-11/12 mt-20 mx-auto flex flex-col justify-between gap-10 text-white'>
          <LearningGrid />
        </div>
      </div>

      {/* Section 6 */}
      <div className='bg-richblack-900' >
        <div className='w-11/12 mt-20 mx-auto flex flex-col justify-between text-white'>
          <h2 className=' text-4xl font-semibold text-center text-richblack-5' >Liên hệ</h2>
          <p className=' text-richblack-300 text-center mt-3' >Chúng tôi rất muốn hỗ trợ bạn. Vui lòng điền vào biểu mẫu này.</p>
          <div className='mx-auto mt-12'>
            <ContactUsForm />
          </div>
        </div>
      </div>

      <div className='bg-richblack-900' >
        <div className='w-11/12 mt-5 mx-auto flex flex-col justify-between text-white' >
          <div className='mt-8' >
            <h2 className='text-center text-3xl md:text-4xl font-semibold mt-8' >
            Đánh giá từ những người học khác
            </h2>

            <div className='' >
              {
                loading ?
                  (
                    <div className='min-h-[150px] grid place-items-center' >
                      <Spinner />
                    </div>
                  )
                  :
                  (
                    <div>
                      <ReviewsSlider reviews={reviews} />
                    </div>
                  )
              }
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About
