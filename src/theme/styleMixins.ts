export const betweenChildrenMixin = (value: any) => {
  return {
    '& > *': {
      '&:not(:last-child)': {
        ...value,
      },
    },
  };
};
