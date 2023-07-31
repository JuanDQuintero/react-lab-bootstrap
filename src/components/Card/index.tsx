import { Box } from "../Box";
import { Card as CardType, Color } from "@interfaces";
import { CardBody } from "../CardBody";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  text?: string;
  variant?: CardType;
  colorCard?: Color;
  anchor?: string;
  img?: string;
}

export const Card: React.FC<CardProps> = ({
  ...rest
}) => {
  return (
    <Box className={`card m-4`} {...rest}>
      <CardBody />
    </Box>
  );
};
