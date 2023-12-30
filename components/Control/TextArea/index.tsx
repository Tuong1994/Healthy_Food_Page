"use client";

import React from "react";
import { HiXCircle } from "react-icons/hi2";
import { useFormContext } from "react-hook-form";
import { ControlColor, ControlShape, InputValue } from "../type";
import { ComponentSize } from "@/common/type";
import { useLang } from "@/hooks";
import FormItemContext from "../Form/FormItemContext";
import FormContext from "../Form/FormContext";
import utils from "@/utils";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rootClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  rootStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  label?: React.ReactNode | React.ReactNode[];
  addonBefore?: React.ReactNode | React.ReactNode[];
  addonAfter?: React.ReactNode | React.ReactNode[];
  sizes?: ComponentSize;
  color?: ControlColor;
  shape?: ControlShape;
  required?: boolean;
  optional?: boolean;
  hasClear?: boolean;
  onChangeInput?: (text: string) => void;
}

const TextArea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  {
    rootClassName = "",
    labelClassName = "",
    inputClassName = "",
    rootStyle,
    labelStyle,
    label,
    addonBefore,
    addonAfter,
    value = "",
    sizes = "md",
    color = "blue",
    shape = "square",
    placeholder,
    rows = 5,
    disabled,
    required,
    optional,
    hasClear = true,
    onBlur,
    onChangeInput,
    ...restProps
  },
  ref
) => {
  const { lang } = useLang();

  const rhfMethods = useFormContext();

  const { color: rhfColor, sizes: rhfSizes, shape: rhfShape } = React.useContext(FormContext);

  const { isRhf, rhfName, rhfError, rhfValue, rhfDisabled, rhfOnChange, rhfOnBlur } =
    React.useContext(FormItemContext);

  const [inputValue, setInputValue] = React.useState<InputValue>(value);

  const inputRef = React.useRef<HTMLDivElement>(null);

  const controlDisabled = rhfDisabled ? rhfDisabled : disabled;

  const controlColor = isRhf ? rhfColor : color;

  const controlSize = isRhf ? rhfSizes : sizes;

  const controlShape = isRhf ? rhfShape : shape;

  const showClearIcon = inputValue && !controlDisabled && hasClear;

  const showOptional = required ? false : optional;

  const sizeClassName = `textarea-${controlSize}`;

  const colorClassName = `textarea-${controlColor}`;

  const shapeClassName = `textarea-${controlShape}`;

  const disabledClassName = controlDisabled ? "textarea-disabled" : "";

  const errorClassName = rhfError ? "textarea-error" : "";

  const mainClassName = utils.formatClassName(
    "textarea",
    colorClassName,
    sizeClassName,
    shapeClassName,
    errorClassName,
    rootClassName,
    disabledClassName
  );

  const controlLabelClassName = utils.formatClassName("textarea-label", labelClassName);

  const controlInputClassName = utils.formatClassName("control-box", inputClassName);

  // Focus input when error is trigger
  React.useEffect(() => {
    if (rhfError) inputRef.current?.click();
  }, [rhfError]);

  // Set default value
  React.useEffect(() => {
    if (isRhf) return setInputValue(rhfValue);
    setInputValue(value);
  }, [value, isRhf, rhfValue]);

  const iconSize = () => {
    if (controlSize === "sm") return 14;
    if (controlSize === "md") return 16;
    if (controlSize === "lg") return 18;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChangeInput?.(value);
  };

  const handleClearInput = () => {
    if (isRhf) return rhfMethods.setValue(rhfName, "");
    setInputValue("");
    onChangeInput?.("");
  };

  const onChangeFn = rhfOnChange ? rhfOnChange : handleChange;

  const onBlurFn = rhfOnBlur ? rhfOnBlur : onBlur;

  return (
    <div style={rootStyle} className={mainClassName}>
      <label>
        {label && (
          <div style={labelStyle} className={controlLabelClassName}>
            {required && <span className="label-required">*</span>}
            <span>{label}</span>
            {showOptional && <span className="label-optional">({lang.common.form.label.optional})</span>}
          </div>
        )}

        <div ref={inputRef} className="textarea-group">
          <div className="group-control">
            <textarea
              ref={ref}
              {...restProps}
              rows={rows}
              value={inputValue}
              disabled={controlDisabled}
              placeholder={placeholder ?? lang.common.form.placeholder.type}
              className={controlInputClassName}
              onChange={onChangeFn}
              onBlur={onBlurFn}
            />
            {showClearIcon && (
              <div className="control-action" onClick={handleClearInput}>
                <HiXCircle size={iconSize()} />
              </div>
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default React.forwardRef(TextArea);
