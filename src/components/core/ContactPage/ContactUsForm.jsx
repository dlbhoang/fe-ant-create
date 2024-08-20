import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import countryCodes from '../../../data/countryCodes.json'
import { contactUs } from '../../../services/operations/contactServices';

const ContactUsForm = () => {

  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (contactData) => {
    await contactUs(contactData, setLoading, reset);

    // reset({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   phoneNo: '',
    //   message: ''
    // })
  }

  return (
    <div className='' >
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7' >
        <div className='flex flex-col md:flex-row gap-5' >
          <label className='w-full'>
            <p className='label-style ' >Tên <sup className='text-pink-200' > *</sup></p>

            <input
              type="text"
              name='firstName'
              placeholder='Nhập tên'
              className='input-style'
              {...register('firstName', { required: true })}
            />

            {
              errors.firstName && <p className='input-error-style' >Vui lòng nhập tên của bạn</p>
            }
          </label>

          <label className='w-full'>
            <p className='label-style' >Họ <sup className='text-pink-200' > *</sup></p>

            <input
              type="text"
              name='lastName'
              placeholder='Nhập họ'
              className='input-style'
              {...register('lastName', { required: true })}
            />

            {
              errors.lastName && <p className='input-error-style' >Vui lòng nhập họ của bạn</p>
            }
          </label>
        </div>

        <div>
          <label>
            <p className='label-style' >Địa chỉ email <sup className='text-pink-200' > *</sup></p>

            <input
              type='email'
              name='email'
              placeholder='Nhập địa chỉ email'
              className='input-style '
              {...register('email', { required: true })}
            />

            {
              errors.email && <p className='input-error-style' >Vui lòng nhập địa chỉ email của bạn</p>
            }
          </label>
        </div>

        <div >
          <label htmlFor='phoneNo'>
            <p className='label-style' >Số điện thoại <sup className='text-pink-200' > *</sup></p>
          </label>

          <div className='flex items-center gap-x-4' >

            <div className='w-[75px]' >
              <select
                name='countryCode'
                className='input-style'
                defaultValue={'+84'}
                {...register('countryCode', { required: true })}
              >
                {
                  countryCodes.map((code, index) => (
                    <option value={code.code} key={index}  >
                      {code.code} - {code.country}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className='w-[calc(100%-90px)]' >
              <input
                type='number'
                name='phoneNo'
                id='phoneNo'
                placeholder='12345 67890'
                className='input-style '
                {...register('phoneNo', {
                  required: {
                    value: true,
                    message: 'Please enter your Phone Number'
                  },
                  minLength: {
                    value: 10,
                    message: 'Invalid Phone Number'
                  },
                  maxLength: {
                    value: 12,
                    message: 'Invalid Phone Number'
                  }
                })}
              />

              {
                errors.phoneNo && <p className='input-error-style' >{errors.phoneNo.message}</p>
              }
            </div>

          </div>


        </div>

        <div>
          <label>
            <p className='label-style' >Message <sup className='text-pink-200' > *</sup></p>

            <textarea
              name='message'
              cols={30}
              rows={3}
              placeholder='Nhập tin nhắn của bạn ở đây'
              className='input-style '
              {...register('message', { required: true })}
            />

            {
              errors.message && <p className='input-error-style' >Please enter your message</p>
            }
          </label>
        </div>

        <button
          disabled={loading}
          type='submit'
          className={`mt-3 w-full
            text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold bg-yellow-50 
            text-black drop-shadow-[2px_2px_rgba(255,255,255,0.5)] 
            disabled:bg-richblack-500 disabled:cursor-wait
            ${!loading && 'transition-all duration-200 hover:scale-95 hover:shadow-none'}
          `}
        >
          Gửi tin nhắn
        </button>

      </form>
    </div>
  )
}

export default ContactUsForm
