import React from 'react';
import { useGetUsersSsr } from '@screens/http-ssr/hooks/use-get-users-ssr';

export function HttpSsrExampleScreen() {
  const [{ data: getUsersRes, isLoading: isUsersLoading, error: getUsersError }, fetchUsers] = useGetUsersSsr({
    initialData: {} //used in case API should be fetched on mount,
    // swrConfig: {
    //   refreshInterval: 10000
    // }
  });

  return (
    <div className='p-5'>
      {/*GET API EXAMPLE */}
      <h1 className='my-6 text-2xl font-bold text-blue-800'>GET</h1>
      <button className='my-2 rounded bg-gray-300 p-2' onClick={() => fetchUsers({})}>
        Fetch data
      </button>

      {/*Response */}
      {isUsersLoading && <div>Loading....</div>}
      <h1 className='my-6 text-2xl font-bold text-green-800'>Success</h1>

      {!isUsersLoading && <div>{JSON.stringify(getUsersRes)}</div>}
      <h1 className='my-6 text-2xl font-bold text-red-800'>Error</h1>
      {!isUsersLoading && <div>{JSON.stringify(getUsersError)}</div>}
    </div>
  );
}
