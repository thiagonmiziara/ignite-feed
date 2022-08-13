import styles from "./Avatar.module.css";

interface IAvatarProps {
  src: string;
  hasBorder?: boolean;
}

export const Avatar = ({ src, hasBorder = true }: IAvatarProps) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
