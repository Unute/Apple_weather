import React from 'react'
import styles from './InfoSecond.module.css'

const UVThermoCapsule = ({ uv }) => {
  // Ограничим uv в диапазоне 0-10
  const uvSafe = Math.max(0, Math.min(uv, 10));
  // Позиция кружка в процентах
  const left = (uvSafe / 10) * 100;

  return (
    <div className={styles.uvCapsule}>
      <div className={styles.uvLine}>
        <div
          className={styles.uvCircle}
          style={{ left: `${left}%`, transform: 'translate(-50%, -50%)' }}
        />
      </div>
    </div>
  );
};

export default UVThermoCapsule;