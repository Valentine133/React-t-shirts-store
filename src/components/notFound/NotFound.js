import notFoundImage from './404.svg';
import style from './NotFound.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={style.root}>
      <img src={notFoundImage} alt="404 page not found" />
      <h1>404 Page not found</h1>
    </div>
  )
}

export default NotFoundBlock;