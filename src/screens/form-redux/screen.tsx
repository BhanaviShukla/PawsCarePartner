import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setAppUserAction } from '@redux/auth';
import React from 'react';
import { useAppDispatch } from '@redux/hooks';

interface FormData {
  firstName: string;
  age: number;
}

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required()
  })
  .required();

export function FormReduxExampleScreen() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => {
    dispatch(setAppUserAction({ appUser: data, jwtToken: data.firstName }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='ml-2'>
      <input type='text' className='my-2 rounded border-2 border-gray-500' {...register('firstName')} />
      <p>{errors.firstName?.message}</p>

      <input type='text' className='rounded border-2 border-gray-500' {...register('age')} />
      <p>{errors.age?.message}</p>

      <button type='submit' className='mt-2 rounded border-2 border-black bg-gray-300 p-2'>
        SUBMIT
      </button>
    </form>
  );
}
