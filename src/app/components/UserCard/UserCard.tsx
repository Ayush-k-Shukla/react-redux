import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { UserEntity } from '../../../core/core';
import styles from './UserCard.module.scss';

interface PropTypes {
  userInfo: UserEntity;
}

const UserCard = ({ userInfo }: PropTypes) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topContent}>
        <img src={userInfo.avatar} alt='profile' className={styles.pic} />

        <div className={styles.name}>
          <p>
            {userInfo.first_name} {userInfo.last_name}
          </p>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <MailOutlineIcon /> <p>{userInfo.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
