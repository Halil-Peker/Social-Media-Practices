import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>FİRMALAR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionSummary>
            <Typography>ONE</Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>TWO</Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>THREE</Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>FOUR</Typography>
          </AccordionSummary>
          <AccordionSummary>
            <Typography>FIVE</Typography>
          </AccordionSummary>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default SimpleAccordion;
