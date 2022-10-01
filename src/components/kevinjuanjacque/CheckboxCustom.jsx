import React, { useState, useEffect } from 'react';

const CheckboxCustom = ({ id, activate, onClick = () => null, title }) => {
  const [Active, setActive] = useState(activate);
  useEffect(() => {
    setActive(activate);

    return () => {};
  }, [activate]);

  return (
    <div className="flex items-center my-1 font-sans">
      <div
        className={
          ' border-[#a29fa8] w-min h-min gap-1 rounded-sm ' +
          (Active === false ? 'border-2' : 'border-0')
        }
        onClick={onClick}
      >
        <input
          checked={Active}
          readOnly
          className="m-0 p-0  w-4 checked:w-5 aspect-square border-2 bg-transparent hover:accent-[#a3ffae] accent-[#a3ffae] rounded-sm"
          id={id}
          type={'checkbox'}
        />
      </div>

      <label className="ml-5 text-md text-[#a29fa8] font-sans" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

export default CheckboxCustom;
