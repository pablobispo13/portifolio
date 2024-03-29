import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardProjects({
  title = "",
  content = "",
  image = "",
  alt = "",
  tags = [],
  onClickAction = () => {},
}) {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardActionArea onClick={onClickAction}>
        <CardMedia component="img" height="140" image={image} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tags.map((tag) => (
              <>{tag}</>
            ))}
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
