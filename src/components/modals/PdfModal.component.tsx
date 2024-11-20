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
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    pdfName: string;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfModal = ({ isOpen, setIsOpen, pdfName }: Props) => {
    const c = useTheme().palette

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfScale, setPdfScale] = useState(1);
    const [pdfFile, setPdfFile] = useState<string | null>(null);

    useEffect(() => {
        if (pdfName) {
            const pdfPath = `/varietiesDocs/${pdfName}.pdf`;
            setPdfFile(pdfPath);
        }
    }, [pdfName]);

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

    if (!pdfFile) return null;

    return (
        <Modal open={isOpen} onClose={handleClose} sx={{ zIndex: 2000 }}>
            <ModalDialog variant="outlined" role="alertdialog">
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography textAlign='center' textColor='neutral.400'>
                        Страница {pageNumber} от {numPages}
                    </Typography>
                    <Stack direction='row' spacing={{ xs: 0, sm: 2 }} >
                        {!isMobile && <RemoveCircleOutlineIcon
                            sx={{
                                color: c.neutral[400],
                                cursor: 'pointer',
                                transform: 'scale(1)'
                            }}
                            onClick={() => handleScale(-.1)}
                        />}
                        {!isMobile && <AddCircleOutlineIcon
                            sx={{
                                color: c.neutral[400],
                                cursor: 'pointer',
                                transform: 'scale(1)'
                            }}
                            onClick={() => handleScale(.1)}
                        />}
                    </Stack>
                    <Button
                        variant="plain"
                        color="primary"
                        onClick={handleClose}
                        sx={{ px: 0 }}
                    >
                        Затвори
                    </Button>
                </Stack>

                <DialogContent sx={{ overflowX: 'hidden', scrollbarWidth: 'thin' }}>
                    <Stack sx={{ marginLeft: { xs: `${-(7200 / screenWidth + 3)}px`, sm: 0 } }}>
                        <Document
                            file={pdfFile}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} width={pdfWidth} scale={pdfScale} />
                        </Document>
                    </Stack>
                </DialogContent>

                <DialogActions
                    sx={{
                        marginLeft: { xs: -2, sm: 0 }
                    }
                    }>
                    <Stack
                        direction='row'
                        justifyContent='space-between'
                        width='100%'
                    >
                        <Button
                            variant="plain"
                            color="primary"
                            sx={{ px: { xs: 1, sm: 2, md: 4 } }}
                            disabled={pageNumber === 1}
                            onClick={() => handlePageChange(-1)}
                        >
                            {<KeyboardDoubleArrowLeftOutlinedIcon />}Предишна
                        </Button>


                        <Button
                            variant="plain"
                            color="primary"
                            sx={{ px: { xs: 1, sm: 2, md: 4 } }}
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = `/varietiesDocs/${pdfName}.pdf`;
                                link.download = pdfName;
                                link.click();
                            }}
                        >
                            Запази{<ArrowDownwardIcon sx={{ fontSize: '16px' }} />}
                        </Button>

                        <Button
                            variant="plain"
                            color="primary"
                            sx={{ px: { xs: 1, sm: 2, md: 4 } }}
                            disabled={pageNumber === numPages}
                            onClick={() => handlePageChange(+1)}
                        >
                            Следваща{<KeyboardDoubleArrowRightOutlinedIcon />}
                        </Button>
                    </Stack>
                </DialogActions>
            </ModalDialog>
        </Modal >
    );
}

export default PdfModal

