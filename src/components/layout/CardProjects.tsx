import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface CardProjectsType extends CardProps {
  title?: string;
  content?: string;
  url?: string;
  alt?: string;
  tags?: string[];
  onClickAction?: () => void;
}

export const CardProjects: React.FC<CardProjectsType> = ({
  title = "",
  content = "",
  url = "",
  alt = "",
  tags = [],
  onClickAction = () => {},
  ...props
}) => {
  return (
    <Card sx={{ minWidth: 350 }} {...props}>
      <CardActionArea onClick={onClickAction}>
        <CardMedia component="img" height="140" image={url} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CardProjects;
