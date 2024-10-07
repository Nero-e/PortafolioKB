import styles from "./Button.module.css";
import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
  download?: string;
}

export const PrimaryButton = ({ href, text, download }: ButtonProps) => {
  return (
    <>
      <Link download={download} target="_black" href={href} className={`${styles.button}`} aria-label={text}>
        {text}
      </Link>
    </>
  );
};
