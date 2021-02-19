import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles(({ palette, spacing }) => {
    // if you want the same as facebook messenger, use this color '#09f'
    return {
    };
});

const ChatDropdownMenu = ({
    id,
    isOpen,
    handleClose,
    onClick,
    options,
    actionBtnIcon,
    icon,
    iconBtn,
    ...others
}) => {

    const styles = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemSelection = (value) => {
        setAnchorEl(null);
        onClick(value);
    };
    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                className={styles.iconBtn}
                onClick={handleClickMenuOpen}
            >
                <MoreHoriz />
            </IconButton>
            <Menu
                id={id}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClickMenuClose}
                keepMounted
                {...others}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === "Label-1"} onClick={() => handleMenuItemSelection(option.value)}>
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

ChatDropdownMenu.propTypes = {
    id: PropTypes.string,
    handleClose: PropTypes.func,
    onClick: PropTypes.func,
    options: PropTypes.array,
    actionBtnIcon: PropTypes.string,
    icon: PropTypes.bool,
};

ChatDropdownMenu.defaultProps = {
    options: [
        { label: 'Label-1', value: '0' },
        { label: 'Label-2', value: '1' },
        { label: 'Labe-3', value: '2' },
    ],
};

export default ChatDropdownMenu;
