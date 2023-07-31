import { CardProps, Box } from "@components";

export const CardBody: React.FC<CardProps> = ({ ...rest }) => {
  return <Box className={`card-body`} {...rest} />;
};
