import styles from "./Button.module.css";
import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  text: string;
  download?: string;
}

export const PrimaryButton = ({ href, text, download }: PrimaryButtonProps) => {
  return (
    <Link
      download={download}
      target="_black"
      href={href}
      className={`${styles.button}`}
    >
      {text}
    </Link>
  );
};
