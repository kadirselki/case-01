import { Layout } from '@views/layout';

const EmployeePage = () => {
    return (
        <Layout>
            <div className="employee-detail">
                <header className="employee-header">
                    <h1 className="employee-name">Kadir Selki</h1>
                    <p className="employee-title">Front-end Developer</p>
                </header>
                <div className="employee-content">
                    <figure className="employee-image">
                        <img src="https://avatars.githubusercontent.com/u/18359888?v=4" alt="Kadir Selki" />
                    </figure>
                    <div className="employee-informations">
                        <ul className="employee-information-list">
                            <li>
                                <p>
                                    <span className="employee-information-list-title">Yaş:</span>
                                    <span className="employee-information-list-content">44</span>
                                </p>
                            </li>
                            <li>
                                <a href="mailto:qq.com">
                                    <span className="employee-information-list-title">Telefon:</span>
                                    <span className="employee-information-list-content">+90 545 542 82 44</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:qq.com">
                                    <span className="employee-information-list-title">Email:</span>
                                    <span className="employee-information-list-content">qq@ad.co</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:qq.com">
                                    <span className="employee-information-list-title">Adress:</span>
                                    <span className="employee-information-list-content">İstanbul</span>
                                </a>
                            </li>
                        </ul>

                        <div className="employee-detail-vote-stats">
                            <p className="employee-detail-vote-stats-title"></p>
                            <p className="vote-stat-perctange">
                                <span className="weak-text">%</span>50.2
                            </p>
                            <p className="vote-stat-count">124 votes</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EmployeePage;
