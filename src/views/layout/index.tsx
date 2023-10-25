import { ILayoutProps } from './layout.defs';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useEffect } from 'react';

export const Layout = ({ children }: ILayoutProps) => {
    const navigate = useNavigate();
    const appError = useSelector((state: RootState) => state.app.appError);

    useEffect(() => {
        if (appError) navigate('/error');
    }, [appError]);

    return (
        <div className="app-layout">
            <Header />
            <main className="container">{children}</main>
            <Footer />
        </div>
    );
};
