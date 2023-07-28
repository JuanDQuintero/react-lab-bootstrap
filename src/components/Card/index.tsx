import { BasicCard } from "../BasicCard";
import { Div } from "../Div";
import { Card as CardType, Color } from "@interfaces";
import { OutlinedCard } from "../OutlinedCard";
import { MediaCard } from "../MediaCard";
import { DropdownCard } from "../DropdownCard";

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
  title,
  subtitle,
  variant,
  text,
  colorCard,
  anchor,
  img,
  ...rest
}) => {
  return (
    <Div className={`card m-4`} {...rest}>
      {variant == "basic" && (
        <BasicCard
          title={title}
          subtitle={subtitle}
          text={text}
          anchor={anchor}
        />
      )}
      {variant == "outlined" && (
        <OutlinedCard
          colorCard={colorCard}
          title={title}
          subtitle={subtitle}
          text={text}
          anchor={anchor}
        />
      )}
      {variant == "media" && (
        <MediaCard
          title={title}
          subtitle={subtitle}
          text={text}
          anchor={anchor}
          img={img}
        />
      )}
      {variant == "dropdown" && (
        <DropdownCard
          title={title}
          subtitle={subtitle}
          text={text}
          anchor={anchor}
          img={img}
        />
      )}
    </Div>
  );
};
