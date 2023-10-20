import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Accordian.module.css';
import Timer from './Timer';
import { Container } from '@mui/material';

export default function BasicAccordion() {
  return (
    <Container maxWidth='xl'>
      <Accordion className={styles.accordian} sx={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expand} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <div className={styles.accordianDescription}>
            <Timer />
            <span className={styles.accordianPrompt}>View Targets</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
