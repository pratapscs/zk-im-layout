import React, { HTMLProps } from 'react';
import cx from 'clsx';

export default (styled) => {
  
  const SidebarContent = ({
    className,
    ...props
  }) => {
    return (
      <Div
        className={cx('SidebarContent', className)}
        {...props}
      />
    );
  };

  return SidebarContent;
};

