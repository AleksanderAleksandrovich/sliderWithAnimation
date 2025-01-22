import cls from "./Button.module.scss";

type Props = {};

export const Button = (props: Props) => {
  return <button className={cls.btn}>кнопка проверки стилей</button>;
};
