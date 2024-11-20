import { Modal, ModalClose, Stack, Typography, Box } from '@mui/joy';
import { VarietyData } from '../../lib/varietyiesData';
import { DialogContent } from '@mui/joy';

type Props = {
    variety: VarietyData;
    open: boolean;
    onClose: () => void;
}

type SectionProps = {
    data: {
        key: string;
        value?: string | string[];
        properties?: Record<string, any>;
    }
};

const Section = ({ data }: SectionProps) => {
    if (!data) {
        return <></>;
    }

    if (data.value !== undefined) {
        return (
            <Stack direction={'column'} spacing={2}>
                <Typography level='h4'>{data.key}</Typography>
                {Array.isArray(data.value) ? (
                    <Box component={'ul'}>
                        {data.value.map((item, index) => (
                            <Typography component={'li'} key={index}>{item}</Typography>
                        ))}
                    </Box>
                ) : (
                    <Typography>{data.value}</Typography>
                )}
            </Stack>
        );
    }

    if (data.properties) {
        return (
            <Stack>
                <Typography level='h4'>{data.key}</Typography>
                <Stack direction={'column'} spacing={2}>
                    {Object.entries(data.properties || {}).map(([key, prop]) => (
                        <Section key={key} data={prop} />
                    ))}
                </Stack>
            </Stack>
        );
    }

    return <></>;
};

const VarietyModal = ({ variety, open, onClose }: Props) => {
    return (
        <Modal open={open} onClose={onClose} >
            <Stack
                position='relative'
                width={'90vw'}
                p={3}
                mx='auto'
                mt={'100px'}
                bgcolor={'neutral.50'}
            >
                <ModalClose variant="plain" sx={{ position: 'absolute', top: 12, right: 12 }} color='primary' />
                <Stack direction={'column'} spacing={4} height={'70vh'}>
                    <Typography level='h4'>{variety?.name?.value ?? 'title'}</Typography>
                    <DialogContent>
                        <Section data={variety.mainCharacteristics} />
                        <Section data={variety.physicalCharacteristics} />
                        <Section data={variety.sensitivity} />
                        <Section data={variety.resistance} />
                        <Section data={variety.planting} />
                        <Section data={variety.fertilization} />
                        <Section data={variety.storage} />
                        <Section data={variety.contacts} />
                    </DialogContent>
                </Stack>
            </Stack>
        </Modal>
    );
};

export default VarietyModal;