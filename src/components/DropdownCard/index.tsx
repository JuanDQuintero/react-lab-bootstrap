import { useState } from "react";
import { CardProps } from "../Card";
import { Box } from "../Box";

interface DropdownCardProps extends CardProps {}

export const DropdownCard: React.FC<DropdownCardProps> = ({
  title,
  text,
  anchor,
  subtitle,
  img,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box>
      <Box className="card-header">
        <h5 className="card-title">{title}</h5>
      </Box>
      <img className="card-img" src={img} alt="" />
      <Box className="card-body">
        <h6 className="card-subtitle">{subtitle}</h6>
        <p className="card-subtitle">{text}</p>
        <Box className="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="btn btn-secondary dropdown-toggle"
            onClick={handleExpandClick}
          >
            {anchor}
          </a>
        </Box>
      </Box>
    </Box>
  );
};
