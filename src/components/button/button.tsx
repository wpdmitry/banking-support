import React from "react";

import bcm from "../../tools/bcm";
import cn from "../../tools/classnames";

import styles from "./button.module.scss";

const b = bcm(styles);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...rest }, ref) => (
  <button ref={ref} className={cn(b(), className)} {...rest} />
));

// function Button({ className, ...rest }: ButtonProps) {
//   return <button className={cn(b(), className)} {...rest} />;
// }

export default Button;
