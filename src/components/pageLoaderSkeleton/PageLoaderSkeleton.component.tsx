import { Typography } from '@mui/joy';
import './PageLoaderSkeleton.styles.scss'

const PageLoaderSkeleton: React.FC = () => {
    return (
        <div className='page-loader-skeleton'>
            <Typography textColor={'primary.200'} textAlign='center'>AGRIMATIC</Typography>
            <Typography textColor={'primary.200'} textAlign='center'>Вносител на висококачествен разсад за картофи от Нидерландия</Typography>
        </div>
    );
};

export default PageLoaderSkeleton;
