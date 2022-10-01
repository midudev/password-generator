import React from 'react';

function Level({ nivel = 'MEDIUM', quantity = 3 }) {
  const array = [1, 2, 3, 4];
  return (
    <div className="flex items-center">
      <h3 className="mr-2 text-[#cac7d0] font-semibold">{nivel}</h3>
      {array.map((item, index) => {
        return (
          <div
            className={
              'w-[0.3rem] h-5  border-[1px] mx-[0.15rem] ' +
              (quantity < index + 1
                ? 'border-[#a29fa8] bg-transparent'
                : 'border-[#fdce6f] bg-[#fdce6f]')
            }
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Level;
