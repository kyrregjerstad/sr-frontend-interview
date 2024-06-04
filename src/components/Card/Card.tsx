import React from "react";
import style from "./Card.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card(props: Props) {
  return <div className={style.card} {...props} />;
}
