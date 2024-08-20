import React from 'react'

const stats = [
  { count: "5K", label: "Học viên đang hoạt động" },
  { count: "10+", label: "Giảng viên" },
  { count: "200+", label: "Khóa học" },
  { count: "50+", label: "Giải thưởng" },
]

const StudyNotionStats = () => {
  return (
    <div className='bg-richblack-700' >
      <div className='w-11/12 mx-auto max-w-maxContent flex flex-col justify-between' >
        <div className='grid grid-cols-2 md:grid-cols-4 text-center' >
          {
            stats.map((stat, index) => (
              <div className='flex flex-col py-5 lg:py-10' key={index} >
                <h1 className='text-richblack-5 font-bold text-2xl lg:text-3xl ' >{stat.count}</h1>
                <h2 className='font-semibold text-base text-richblack-500' >{stat.label}</h2>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default StudyNotionStats
