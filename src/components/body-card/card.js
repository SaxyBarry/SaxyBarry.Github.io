import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Popup from "./card-popup";

const ContentCard = ({header, subtext, content}) => {
  return (
    <Card
      style={{
        backgroundColor: "#af5392",
        width: 700,
        height: 250,
        position: "relative"
      }}
    >
      <CardContent>
        <Typography
          variant="h2"
          component="h2"
          style={{
            FontFace: "Arial, Helvetica, sans-serif",
            color: "#fbcaefff",
          }}
        >
          {header}
        </Typography>
        <Typography
          style={{
            fontSize: 14,
            FontFace: "Arial, Helvetica, sans-serif",
            color: "#fbcaefff",
          }}
          color="textSecondary"
          gutterBottom
        >
          {subtext}
        </Typography>
      </CardContent>
     <Popup header={header} content = {content}/>
    </Card>
  );
};

export default ContentCard;
