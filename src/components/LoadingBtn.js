import { LoadingButton } from '@mui/lab';
import React, { useEffect, useState } from 'react';

const LoadingBtn = () => {
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setSubmitting(false);
        }, 1000);

        return () => clearTimeout(id);

    }, [submitting]);

    return (
        <div>
            {/* Usages Loading Button  */}
            <LoadingButton
                loading={submitting}
                loadingIndicator='Submitting...'
                variant="contained"
                onClick={() => setSubmitting(true)}
                sx={{ width: '100%', height: '3rem' }}
            >
                Submit
            </LoadingButton>
        </div>
    );
};

export default LoadingBtn;