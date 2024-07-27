import styles from "./Button.module.css";
import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
}

export const PrimaryButton = ({ href, text }: ButtonProps) => {
  return (
    <>
      <Link href={href} className={`${styles.button}`} aria-label={text}>
        {text}
      </Link>
    </>
  );
};
