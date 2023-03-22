import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
  name: string;
  gender: string;
  email: string;
  status: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    gender: yup.string().required(),
    email: yup.string().required().email(),
    status: yup.string().required()
  })
  .required();

type PostFormProps = {
  onSubmit(data: FormData): unknown;
};

export function PostForm(props: PostFormProps) {
  const { onSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      gender: '',
      status: ''
    }
  });

  const onFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor='name'>Name: </label>
        <input type='text' className='my-2 rounded border-2 border-gray-500' id='name' {...register('name')} />
        <fieldset id='gender'>
          <input className='mr-1' type='radio' id='male' {...register('gender')} value='Male' />
          <label htmlFor='male'>Male</label>
          <input className='ml-2 mr-1' type='radio' id='female' {...register('gender')} value='Female' />
          <label htmlFor='female'>Female</label>
        </fieldset>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' className='my-2 rounded border-2 border-gray-500' {...register('email')} />{' '}
        <br />
        <fieldset id='status'>
          <input className='mr-1' type='radio' id='active' {...register('status')} value='active' />
          <label htmlFor='active'>Active</label>
          <input className='ml-2 mr-1' type='radio' id='inactive' {...register('status')} value='inactive' />
          <label htmlFor='inactive'>Inactive</label>
        </fieldset>
        <button type='submit' className='my-2 mr-3 rounded bg-gray-300 p-2'>
          SUBMIT POST
        </button>
      </form>
      {!isEmpty(errors) && (
        <div>
          <p>Form Errors</p>

          {Object.keys(errors).map((error) => {
            return (
              <div key={error} className='text-red-400'>
                {errors[error].message}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
