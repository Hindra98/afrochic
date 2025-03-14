import { useState } from "react";

export default function InputWithIcon({
  type='',
  name='',
  id='',
  placeholder='',
  className='',
  eye=false,
  value='',
  icon='',
  onChange=null,
  disabled=false
}) {
  const [showPassword, setShowPassword] = useState(false);
  const iconeInput = icon !== "" && (
    <span className={"e-icons text-xl font-medium " + icon}></span>
  );
  return (
    <>
      <div className={`text-md flex flex-row gap-0 items-center border px-2 py-1 input-dashboard ` + className}>
        {iconeInput}
        <input
          type={!eye ? type : showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          className={"login-input w-full outline-none border-none bg-transparent ps-3"}
          value={value}
          onChange={onChange}
          autoComplete="off"
          disabled={disabled}
        />
        {eye &&
          (showPassword ? (
            <span
              className="icon eye-off-1icon- cursor-pointer text-lg font-medium"
              onClick={() => setShowPassword(!showPassword)}
            ></span>
          ) : (
            <span
              className="icon eye-1icon- cursor-pointer text-lg font-medium"
              onClick={() => setShowPassword(!showPassword)}
            ></span>
          ))}
      </div>
    </>
  );
}

export const InputWithoutIcon = ({
  type,
  name,
  id,
  placeholder,
  className,
  eye,
  value,
  textIn,
  onChange,
  disabled=false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const iconeInput = textIn !== "" && (
    <div className={"px-1 text-in-input h-full py-2"}>{textIn}</div>
  );
  return (
    <>
      <div className={`text-md flex flex-row gap-0 items-center border input-dashboard py-0 pe-2 ` + className}>
        {iconeInput}
        <input
          type={!eye ? type : showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          className={"login-input w-full outline-none border-none bg-transparent h-full"}
          value={value}
          onChange={onChange}
          autoComplete="off"
          disabled={disabled}
        />
        {eye &&
          (showPassword ? (
            <span
              className="e-icons e-eye-slash cursor-pointer text-2xl font-medium"
              onClick={() => setShowPassword(!showPassword)}
            ></span>
          ) : (
            <span
              className="e-icons e-eye cursor-pointer text-2xl font-medium"
              onClick={() => setShowPassword(!showPassword)}
            ></span>
          ))}
      </div>
    </>
  );
}
