import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Accordian.module.css';
import Timer from './Timer';
import { Container } from '@mui/material';
import { Dispatch, FC, SetStateAction } from 'react';

type SceneData = {
  imageCreditLink?: string;
  imageCreditName?: string;
  hiddenImages?: {
    _id: string;
    name: string;
    imageUrl: string;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  }[];
  imageUrl?: string;
  sound?: string;
  title?: string;
  _id?: string;
};

type AccordianProps = {
  scene: {
    data: SceneData;
  };
  imageLoading: boolean;
  foundItems: {
    _id: string;
    name: string;
    imageUrl: string;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  }[];
  isPracticeTime: boolean;
  isResumingTime: boolean;
  setIsResumingTime: Dispatch<SetStateAction<boolean>>;
  setFinalTime: Dispatch<SetStateAction<number | null>>;
  isGameFinished: boolean;
};

const BasicAccordian: FC<AccordianProps> = ({
  scene,
  foundItems,
  imageLoading,
  isPracticeTime,
  isResumingTime,
  setIsResumingTime,
  setFinalTime,
  isGameFinished,
}) => {
  let renderedHiddenImages;
  if (scene.data.hiddenImages) {
    const hiddenImages = scene.data.hiddenImages;
    const foundItemIds = new Set(foundItems.map((obj) => obj._id));

    renderedHiddenImages = hiddenImages.map((image) => (
      <div
        className={
          foundItemIds.has(image._id)
            ? `${styles.hiddenImageContainer} ${styles.found}`
            : `${styles.hiddenImageContainer}`
        }
        key={image._id}
      >
        <p>{image.name.toUpperCase()}</p>
        <div className={styles.hiddenImage}>
          <img src={image.imageUrl} alt={image.name} />
        </div>
      </div>
    ));
  }

  return (
    <Container maxWidth='xl'>
      <Accordion className={styles.accordian} sx={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expand} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <div className={styles.accordianDescription}>
            {!imageLoading && (
              <Timer
                isPracticeTime={isPracticeTime}
                isResumingTime={isResumingTime}
                setIsResumingTime={setIsResumingTime}
                setFinalTime={setFinalTime}
                isGameFinished={isGameFinished}
              />
            )}
            <span className={styles.accordianPrompt}>View Targets</span>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 0 1rem 0px' }}>
          <div className={styles.accordianImageSection}>
            {renderedHiddenImages}
          </div>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default BasicAccordian;
