import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HighlightedText from '../components/core/HomePage/HighlightedText'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import CTAButton from '../components/core/HomePage/CTAButton';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Banner from '../assets/Images/banner.mp4'
import Footer from '../components/common/Footer'
import ReviewsSlider from '../components/common/ReviewsSlider';
import Spinner from '../components/common/Spinner';
import { getAllReviews } from '../services/operations/otherServices';


const Home = () => {
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
    <div className=' bg-richblack-900 flex flex-col font-inter min-h-screen w-screen'>
      <div className='bg-richblack-900' >
        <div className=' relative mx-auto flex flex-col items-center justify-between  w-11/12 max-w-maxContent text-white gap-8' >


          <Link to={'/signup'}>
            <div className='rounded-full bg-richblack-800 text-richblack-200 mt-16 p-1 mx-auto w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] group transition-all duration-200 hover:scale-95 hover:drop-shadow-none '>
              <div className=' flex flex-row items-center gap-2 font-bold rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 '>
              Trở thành người hướng dẫn
                <FaArrowRight />
              </div>
            </div>
          </Link>

          <div className='text-4xl text-center font-semibold' >
          Nắm bắt cơ hội để            
          <HighlightedText text={'tăng thu nhập trực tuyến'} />
          </div>

          <div className='-mt-3 w-11/12 text-center text-lg text-richblack-300 font-bold'>
            <p className='' >          Tham gia các khóa học kiếm tiền online của chúng tôi để học hỏi các chiến lược hiệu quả nhất, linh hoạt theo thời gian và địa điểm của bạn. Bạn sẽ có quyền truy cập vào nguồn tài liệu đa dạng, hướng dẫn chi tiết, và sự hỗ trợ từ các chuyên gia, giúp bạn nhanh chóng đạt được mục tiêu tài chính</p>
          </div>

          <div className='mt-8 flex flex-row gap-7' >
            <CTAButton active={true} linkto={'/signup'} >
            Tìm hiểu thêm            </CTAButton>

            <CTAButton active={false} linkto={'/login'} >
            Đặt bản demo            </CTAButton>
          </div>

          <div className='mx-3 my-7 transition-all duration-200 shadow-[10px_-5px_50px_-5px] shadow-blue-200' >
            <video className='drop-shadow-[20px_20px_rgba(255,255,255)] rounded-md' muted loop autoPlay src={Banner} />
          </div>


          {/* Code Section 1 */}
          <div>
            <CodeBlocks
              flexDir={'lg:flex-row'}

              heading={
                <div className='text-4xl font-semibold text-white' >
                Phát triển kỹ năng                  <HighlightedText text={"kiếm tiền trực tuyến"} />
                  {' '}
                  với các khóa học của chúng tôi.                </div>
              }

              subHeading="Chương trình học của chúng tôi được xây dựng bởi những chuyên gia hàng đầu trong lĩnh vực kiếm tiền online. Với nhiều năm kinh nghiệm thực tiễn, họ sẽ chia sẻ những bí quyết và chiến lược hữu ích, giúp bạn nhanh chóng nắm bắt và áp dụng các phương pháp kiếm tiền hiệu quả nhất trên mạng."
              ctaBtn1={{
                btnText: "Thử ngay",
                linkto: '/signup',
                active: true
              }}

              ctaBtn2={{
                btnText: "Tìm hiểu thêm",
                linkto: '/login',
                active: false
              }}

              codeText={`AntCreate không chỉ dạy bạn, mà còn hướng dẫn bạn biến kiến thức thành thu nhập thực tế. 💰 Với hỗ trợ từ cộng đồng và chúng tôi, bạn sẽ xây dựng sự nghiệp bền vững và đạt được tự do tài chính trong thế giới số. 🌟`}         
              codeColor='text-yellow-25'
              noOfLines={14}
              codeBlockId={'codeblock1'}
            />
          </div>

          {/* Code Section 2 */}
          <div>
            <CodeBlocks
              flexDir={'lg:flex-row-reverse'}

              heading={
                <div className='text-4xl w-[60%] font-semibold text-white' >
                Bắt đầu                  <HighlightedText text={"hành trình kiếm tiền online"} />
                </div>
              }

              subHeading="Hãy trải nghiệm ngay. Với chương trình học của chúng tôi, bạn sẽ bắt đầu áp dụng các phương pháp kiếm tiền online thực tiễn ngay từ những bài học đầu tiên, giúp bạn nhanh chóng tạo ra thu nhập."
              ctaBtn1={{
                btnText: "Tiếp tục học",
                linkto: '/signup',
                active: true
              }}

              ctaBtn2={{
                btnText: "Tìm hiểu thêm",
                linkto: '/login',
                active: false
              }}

              codeText={`AntCreate mở ra cơ hội kiếm tiền online dễ dàng và hiệu quả. 📚 Với các công cụ và phương pháp đã được chứng minh, bạn sẽ nhanh chóng nắm vững các kỹ năng như freelance, affiliate marketing, và kinh doanh online. 🚀 Tất cả giúp bạn tạo ra nguồn thu nhập không giới hạn từ bất cứ đâu.
              `}
              codeColor='text-white'
              noOfLines={11}
              codeBlockId={'codeblock2'}
            />
          </div>

          {/* Unlock the power of code */}
          <ExploreMore />
        </div>
      </div>

      {/* Section 2 - White color section */}
      <div className='bg-pure-greys-5 text-richblue-700' >
        <div className='homepage_bg h-[320px]'>
          <div className='w-11/12 pt-[200px] max-w-maxContent mx-auto flex justify-center' >
            <div className='flex flex-row gap-7' >
              <CTAButton active={true} linkto={'/signup'} >
                <div className='flex flex-row items-center gap-2' >
                Khám phá toàn bộ khóa học                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={'/login'} >
                <div className='text-white' >Tìm hiểu thêm</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className='flex flex-col max-w-maxContent w-11/12 mt-10 lg:mt-16 mx-auto gap-8 items-center justify-between' >
          <div className='flex flex-row mb-10 justify-between gap-10' >
            <div className='text-4xl font-semibold w-[45%]' >
            Nắm bắt các kỹ năng cần thiết cho những      
            <HighlightedText text="cơ hội kiếm tiền đang được ưa chuộng." />
            </div>

            <div className='flex flex-col gap-10 w-[40%] items-start'>
              <p>Trong thế giới hiện đại, việc học không chỉ đơn thuần là theo quy tắc. Ngày nay, để trở thành một chuyên gia cạnh tranh, bạn cần nhiều hơn những kỹ năng chuyên môn. Việc hiểu và áp dụng các phương pháp kiếm tiền online hiệu quả là một phần thiết yếu để đạt được thành công trong môi trường số.</p>
              <CTAButton active={true} linkto={'/signup'} >
              Tìm hiểu thêm
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>


      {/* Section 3 - Black color section */}
      <div className='bg-richblack-900' >
        <div className='w-11/12 mt-20 flex flex-col mx-auto max-w-maxContent items-center justify-between gap-8 text-white' >

          {/* Instructor section */}
          <InstructorSection />

          {/* Review section */}
          <div>
            <h2 className='text-center text-3xl md:text-4xl font-semibold mt-8' >
            Đánh giá từ các học viên khác            </h2>


            {/* Review slider */}
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

      {/* Section 4 - Footer section */}
      <div >
        <Footer />
      </div>


    </div>
  )
}

export default Home
