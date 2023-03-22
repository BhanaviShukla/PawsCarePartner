import React from 'react';
import { useGetUsers } from '@screens/http/hooks/use-get-users';
import { useCreateUser } from '@screens/http/hooks/use-create-user';
import { useUpdateUser } from '@screens/http/hooks/use-update-user';
import { useDeleteUser } from '@screens/http/hooks/use-delete-user';
import { PostForm } from '@screens/http/components/post-form';

export function HttpExampleScreen() {
  const [{ data: getUsersRes, isLoading: isUsersLoading, error: getUsersError }, fetchUsers, getUserMutation] =
    useGetUsers({
      initialData: {} //used in case API should be fetched on mount,
      // swrConfig: {
      //   refreshInterval: 10000
      // }
    });

  const [{ data: createUserRes, isLoading: isCreatingUser, error: createUserError }, createUser] = useCreateUser({
    // initialData: {}, //used in case API should be fetched on mount
  });

  const [{ data: updateUserRes, isLoading: isUpdatingUser, error: updateUserError }, updateUser] = useUpdateUser({
    // initialData: {}, //used in case API should be fetched on mount
    swrConfig: {
      onSuccess: () => {
        getUserMutation(); //revalidate the data
      }
    }
  });

  const [{ data: deleteUserRes, isLoading: isDeletingUser, error: deleteUserError }, deleteUser] = useDeleteUser({
    // initialData: {}, //used in case API should be fetched on mount
    swrConfig: {
      onSuccess: () => {
        getUserMutation(); //revalidate the data
      }
    }
  });

  return (
    <div className='p-5'>
      {/*Delete API EXAMPLE */}
      <h1 className='my-6 text-2xl font-bold text-blue-800'>Delete</h1>
      <button
        className='my-2 rounded bg-gray-300 p-2'
        onClick={() => {
          deleteUser({
            urlParams: getUsersRes?.[0]?.id
          });
        }}
      >
        Delete First Record <b>{getUsersRes?.[0]?.name}</b>
      </button>

      {/*Response */}
      {isDeletingUser && <div>Loading....</div>}
      <h1 className='my-6 text-2xl font-bold text-green-800'>Success</h1>

      {!isDeletingUser && <div>{JSON.stringify(deleteUserRes)}</div>}
      <h1 className='my-6 text-2xl font-bold text-red-800'>Error</h1>
      {!isDeletingUser && <div>{JSON.stringify(deleteUserError)}</div>}

      {/*PUT API EXAMPLE */}
      <h1 className='my-6 text-2xl font-bold text-blue-800'>PUT</h1>
      <button
        className='my-2 rounded bg-gray-300 p-2'
        onClick={() => {
          updateUser({
            name: 'TEST',
            urlParams: getUsersRes?.[0]?.id
          });
        }}
      >
        Update First Record from <b>{getUsersRes?.[0]?.name}</b> to <b>TEST</b>
      </button>

      {/*Response */}
      {isUpdatingUser && <div>Loading....</div>}
      <h1 className='my-6 text-2xl font-bold text-green-800'>Success</h1>

      {!isUpdatingUser && <div>{JSON.stringify(updateUserRes)}</div>}
      <h1 className='my-6 text-2xl font-bold text-red-800'>Error</h1>
      {!isUpdatingUser && <div>{JSON.stringify(updateUserError)}</div>}

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

      {/*POST API EXAMPLE */}
      <h1 className='my-6 text-2xl font-bold text-blue-800'>POST</h1>

      <PostForm onSubmit={createUser} />

      {/*Response */}
      {isCreatingUser && <div>Loading....</div>}
      <h1 className='my-6 text-2xl font-bold text-green-800'>Success</h1>

      {!isCreatingUser && <div>{JSON.stringify(createUserRes)}</div>}
      <h1 className='my-6 text-2xl font-bold text-red-800'>Error</h1>
      {!isCreatingUser && <div>{JSON.stringify(createUserError)}</div>}
    </div>
  );
}
