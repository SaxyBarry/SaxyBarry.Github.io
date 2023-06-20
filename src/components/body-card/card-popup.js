import * as React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "75%",
  backgroundColor: "#824678",
  border: "1px solid #af5392",
  boxShadow: 24,
  p: 4,
};


export default function Popup({header, subtext, content}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="popup-btn">
      <Button size="small" onClick={handleOpen}>
        <Typography
          style={{
            fontSize: 14,
            FontFace: "Arial, Helvetica, sans-serif",
            color: "#fbcaefff",
          }}
          color="textSecondary"
          gutterBottom
        >
          More
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h3"
            style={{
              FontFace: "Sans-serif",
              color: "#fbcaefff",
            }}
          >
            {header}
          </Typography>
          <Typography
            id="modal-modal-description"
            style={{
              FontFace: "sans-serif",
              color: "#fbcaefff",
            }}
          >
          {content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
