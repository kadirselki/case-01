import { LogItem } from '@components/log-item';
import { NotFoundBox } from '@components/not-found-box';
import { Layout } from '@views/layout';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { IconBack } from 'src/icons/svg-icons';
import { RootState } from 'src/store';

const Logs = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const logs = useSelector((state: RootState) => state.logs.list);

    const sortedLogs =
        logs && logs.length > 0
            ? [...logs].sort((a, b) => {
                  return new Date(b.date).getTime() - new Date(a.date).getTime();
              })
            : null;

    return (
        <Layout>
            <div className="logs-page smooth-overflow">
                <Link to="/" className="prev-page-btn">
                    <i>
                        <IconBack width={30} height={20} />
                    </i>
                    Back
                </Link>
                <h1>Event Logs</h1>

                {sortedLogs ? (
                    <div className="log-list">
                        {sortedLogs.map((log, i) => {
                            return <LogItem data={log} key={i} />;
                        })}
                    </div>
                ) : (
                    <NotFoundBox message="Any logs yet!" />
                )}
            </div>
        </Layout>
    );
};

export default Logs;
