import { Title } from "shared/ui/Title/Title";
import classes from "./Card.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Fact } from "shared/data/data";

type CardProps = {
  className?: string;
  fact: Fact;
};

export const Card = ({ className, fact }: CardProps) => {
  return (
    <div className={classNames(classes.card, {}, [className])}>
      <Title value={fact.title} />
      <Text value={fact.description} />
    </div>
  );
};
