import Button from '@mui/joy/Button';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { useCallback, useEffect, useState } from 'react';
import { Stack, Typography, useTheme } from '@mui/joy';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import './pdfMobileSizeAdjust.css'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import useScreenSize from '../../hooks/useScreenSize';
import { isMobile } from 'react-device-detect';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { getFilesUrlListFromStorageBucker } from '../../utils/firebase-utils';


type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    index?: number,
}
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfModal = ({ isOpen, setIsOpen, index = 0 }: Props) => {
    const c = useTheme().palette

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfScale, setPdfScale] = useState(1)

    const [pdfList, setPdfList] = useState<string[] | null>(null);

    useEffect(() => {
        const loadPdf = async () => {
            try {
                const list = await getFilesUrlListFromStorageBucker('Catalogues') as string[];
                setPdfList([...list]);
            } catch (error) {
                console.error('Error loading PDF:', error);
            }
        };

        loadPdf();
    }, []);

    const { screenWidth } = useScreenSize();

    const pdfWidth = (isMobile || screenWidth < 900) ? 0.9 * screenWidth : 0.5 * screenWidth

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
        setNumPages(numPages);
    }

    const handlePageChange = (index: number) => {
        if (numPages) {
            const pgNumber = Math.min(Math.max(pageNumber + index, 1), numPages);
            setPageNumber(pgNumber);
        }
    };

    const handleScale = (step: number) => {
        const newValue = Math.min(Math.max((pdfScale + step), 0.5), 1.8);
        setPdfScale(newValue);
    }

    const handleClose = () => {
        setPdfScale(1);
        setPageNumber(1);
        setIsOpen(false);
    }

    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                case 'ArrowDown':
                    handlePageChange(-1);
                    break;
                case 'ArrowRight':
                case 'ArrowUp':
                    handlePageChange(1);
                    break;
                case '+':
                case '=':
                    handleScale(0.1);
                    break;
                case '-':
                case '_':
                    handleScale(-0.1);
                    break;
                default:
                    break;
            }
        },
        [handlePageChange, handleScale]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);



    return (
        <>
            <Modal open={isOpen} onClose={handleClose}>
                <ModalDialog variant="outlined" role="alertdialog">

                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography textAlign='center' textColor='neutral.400'>
                            Page {pageNumber} of {numPages}
                        </Typography>
                        <Stack direction='row' spacing={2} >
                            {!isMobile && <RemoveCircleOutlineIcon
                                sx={{
                                    color: c.neutral[400],
                                    cursor: 'pointer',
                                    transform: 'scale(1.2)'
                                }}
                                onClick={() => handleScale(-.1)}
                            />}
                            {!isMobile && <AddCircleOutlineIcon
                                sx={{
                                    color: c.neutral[400],
                                    cursor: 'pointer',
                                    transform: 'scale(1.2)'
                                }}
                                onClick={() => handleScale(.1)}
                            />}
                        </Stack>
                        <Button variant="plain" color="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Stack>

                    <DialogContent sx={{ overflowX: 'hidden', scrollbarWidth: 'thin' }}>
                        <Stack sx={{ marginLeft: { xs: `${-(7200 / screenWidth + 3)}px`, sm: 0 } }}>
                            <Document file={pdfList?.length ? pdfList[index] : ''} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber} width={pdfWidth} scale={pdfScale} />
                            </Document>
                        </Stack>
                    </DialogContent>

                    <DialogActions>
                        <Stack direction='row' justifyContent='space-between' width='100%'>
                            <Button
                                variant="plain"
                                color="primary"
                                onClick={() => handlePageChange(-1)}
                                startDecorator={<KeyboardDoubleArrowLeftOutlinedIcon />}>
                                Previous
                            </Button>
                            <Button
                                variant="plain"
                                color="primary"
                                onClick={() => handlePageChange(+1)}
                                endDecorator={<KeyboardDoubleArrowRightOutlinedIcon />}>
                                Next
                            </Button>
                        </Stack>
                    </DialogActions>

                </ModalDialog>
            </Modal >
        </>
    );
}

export default PdfModal

