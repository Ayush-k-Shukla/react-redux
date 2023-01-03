import { Button } from '@mui/material';
import { useEffect } from 'react';
import CustomLoader from '../../app/components/CustomLoader/CustomLoader';
import UserCard from '../../app/components/UserCard/UserCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ApiStatus, UserEntity } from '../../core/core';
import styles from './user.module.scss';
import { getAllUsers, getSingleUser } from './userSlice';

const User = () => {
  const dispatch = useAppDispatch();
  const { allUsers, singleUser } = useAppSelector((state) => state.user);

  const intialDummyCard: UserEntity = {
    email: 'abc@gmail.com',
    first_name: 'Dummy',
    last_name: 'Shukla',
    avatar: 'https://i.pravatar.cc/150?img=3',
    id: 0,
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handleChangeActiveUserCard = (id: number) => {
    dispatch(getSingleUser(id));
  };

  return (
    <>
      <CustomLoader
        open={
          singleUser.status === ApiStatus.PENDING ||
          allUsers.status === ApiStatus.PENDING
        }
      />

      <div className={styles.wrapper}>
        <div className={styles.parentContainer}>
          <UserCard userInfo={singleUser?.data || intialDummyCard} />
          <div className={styles.buttonsContainer}>
            {allUsers?.data?.map((user) => {
              return (
                <Button
                  variant={
                    singleUser.data?.id === user.id ? 'contained' : 'outlined'
                  }
                  onClick={() => handleChangeActiveUserCard(user.id)}
                  key={user.id}
                >
                  {user.id}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
