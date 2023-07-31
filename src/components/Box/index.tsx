interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Box: React.FC<BoxProps> = ({ ...rest }) => {
  return <div {...rest} />;
};
