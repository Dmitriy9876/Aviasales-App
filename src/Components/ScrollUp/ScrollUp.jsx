import { useEffect, useState } from 'react';
import styles from './ScrollUp.module.scss';

export default function ScrollUp() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  if (scroll > 500) {
    return (
      <button
        type="button"
        className={styles.toTop}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        aria-label="scroll up"
      />
    );
  }

  return null;
}