const muiDialogs = {
  MuiDialog: {
    paper: {
      borderRadius: 16,
    },
  },
  MuiDialogActions: {
    root: {
      marginBottom: 8,
    },
  },
  MuiDialogTitle: {
    root: {
      borderBottom: '1px solid #0D0C0E',
      marginBottom: 10,
      padding: '10px 15px',
      '& h2': {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 700,
      },
      '& button': {
        padding: 8,
        marginRight: 20,
      },
    },
  },
};

export default muiDialogs;
