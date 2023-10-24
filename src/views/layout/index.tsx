import { ILayoutProps } from './layout.defs';
import { Header } from '@components/header';
import { Footer } from '@components/footer';

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <div className="app-layout">
            <Header />
            <main className="container">{children}</main>
            <Footer />
        </div>
    );
};
