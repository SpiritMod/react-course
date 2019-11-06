import React from 'react';

export const Facade = ({children}) => {
  return (
    <>
      <section className="facade">
        <div>
          {children}
        </div>
      </section>
    </>
  )
};
