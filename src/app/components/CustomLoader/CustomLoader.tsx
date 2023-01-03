import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './CustomLoader.module.scss';

interface LOADER_PROP {
  open: boolean;
}

function CustomLoader({ open }: LOADER_PROP) {
  return (
    <Backdrop open={open} className={styles.wrapper}>
      <CircularProgress className={styles.progress} />
    </Backdrop>
  );
}

export default CustomLoader;
