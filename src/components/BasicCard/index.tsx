import { CardProps } from "../Card";
import { Box } from "../Box";

export interface BasicCardProps extends CardProps {
  title?: string;
  subtitle?: string;
  text?: string;
  anchor?: string;
}

export const BasicCard: React.FC<BasicCardProps> = ({
  title = "Title",
  text = "Lorem ipsum",
  subtitle = "Subtitle",
  anchor = "Search",
  ...rest
}) => {
  return (
    <Box className={`card`} {...rest}>
      <Box className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle">{subtitle}</h6>
        <p className="card-subtitle">{text}</p>
        <a href="#" className="card-link">
          {anchor}
        </a>
      </Box>
    </Box>
  );
};
