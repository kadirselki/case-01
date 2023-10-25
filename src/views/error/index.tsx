import { Layout } from '@views/layout';
import { Link } from 'react-router-dom';
import { IconBack } from 'src/icons/svg-icons';

const ErrorPage = () => {
    return (
        <Layout>
            <div className="error-page">
                <Link to="/" className="prev-page-btn">
                    <i>
                        <IconBack width={30} height={20} />
                    </i>
                    Back
                </Link>
                <div className="error-box">Something went wrong! Please try again later.</div>
            </div>
        </Layout>
    );
};

export default ErrorPage;
