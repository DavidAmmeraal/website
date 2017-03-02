import classnames from 'classnames';

export default (...args) => {
  console.log('arguments = ' , args);
  return classnames.apply(this, args).split(' ').join('__');
}
