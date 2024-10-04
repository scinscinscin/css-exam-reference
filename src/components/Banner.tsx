import styles from "./Banner.module.scss";
import Image from "next/image";
import Logo from "../../public/css_logo.png";

export function Banner() {
  return (
    <div className={styles.banner}>
      {[...Array(40).keys()].map(() => (
        <div className={styles.banner_item}>
          <Image src={Logo} alt="UST-CSS Logo" className={styles.logo_img} />
        </div>
      ))}
    </div>
  );
}
