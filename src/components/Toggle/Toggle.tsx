import React from "react";
import style from "./Toggle.module.scss";

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/**
 * A toggle switch component.
 * i.e:
 * ```tsx
 * <Toggle checked={checked} onChange={setChecked} />
 * ```
 */
export default function Toggle(props: Props) {
  return (
    <div
      className={style.toggle}
      onClick={() => props.onChange(!props.checked)}
    >
      <input
        type="checkbox"
        className={style.toggleInput}
        checked={props.checked}
      />
      <span className={style.toggleSlider}></span>
    </div>
  );
}
