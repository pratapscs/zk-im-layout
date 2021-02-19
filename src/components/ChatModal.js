import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const ChatModal = ({
    id,
    children,
    dialogContentText,
    isOpen,
    handleClose,
    onClick,
    dialogTitle,
    fullScreen,
    fullWidth,
    maxWidth,
    disableBackdropClick,
    disableEscapeKeyDown,
    dividers,
    ...props
}) => {

    return (
        <>
            <Dialog 
                id={id}
                open={isOpen} 
                onClose={handleClose} 
                fullScreen={fullScreen}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                disableBackdropClick={disableBackdropClick}
                disableEscapeKeyDown={disableEscapeKeyDown}
                PaperComponent={PaperComponent}
                keepMounted
                aria-labelledby="draggable-dialog-title"
                aria-describedby="alert-dialog-slide-description"
                {...props}
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    {dialogTitle}
                </DialogTitle>
                <DialogContent dividers={dividers}>
                    {dialogContentText ? (
                        <DialogContentText>
                            {dialogContentText}
                        </DialogContentText>
                    ) : null}
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

ChatModal.propTypes = {
    id: PropTypes.string,
    children: PropTypes.element,
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    onClick: PropTypes.func,
    dialogTitle: PropTypes.string,
    dialogContentText: PropTypes.string,
    fullScreen: PropTypes.bool,
    fullWidth: PropTypes.bool,
    maxWidth: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs', false]),
    disableBackdropClick: PropTypes.bool,
    disableEscapeKeyDown: PropTypes.bool,
    dividers: PropTypes.bool
};

ChatModal.defaultProps = {
    maxWidth: 'sm',
    fullWidth: true
};

export default ChatModal;
