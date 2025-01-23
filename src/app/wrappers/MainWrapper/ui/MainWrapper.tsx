import classes from "./MainWrapper.module.scss";

type MainWrapperProps = {
  children?: React.ReactNode;
};
export const MainWrapper = ({ children }: MainWrapperProps) => {
  return <div className={classes.wrapper}>{children}</div>;
};
