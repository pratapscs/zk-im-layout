import React from 'react';
import cx from 'clsx';

export default () => {
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

