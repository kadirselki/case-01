import { Layout } from '@views/layout';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { IconBack } from 'src/icons/svg-icons';
import { RootState } from 'src/store';

const EmployeePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = useSelector((state: RootState) => state.employees.list?.find((emp) => emp.id === id));

    if (!data) {
        navigate('/');
        return;
    }
    const { name, surname, title, photo, age, phone, email, address, bio } = data;

    const totalVotes = useSelector((state: RootState) => state.app.totalVotes);
    const currentStats = {
        votes: data.votes,
        percent: (data.votes / totalVotes) * 100,
    };

    return (
        <Layout>
            <div className="employee-detail smooth-overflow">
                <Link to="/" className="prev-page-btn">
                    <i>
                        <IconBack width={30} height={20} />
                    </i>
                    Back
                </Link>
                <header className="employee-header">
                    <h1 className="employee-name">
                        {name} {surname}
                    </h1>
                    <p className="employee-title">{title}</p>
                </header>
                <div className="employee-content">
                    <figure className="employee-image">
                        <img src={photo} alt="Kadir Selki" />
                    </figure>
                    <div className="employee-informations">
                        <div>
                            <p className="bio">{bio}</p>
                            <ul className="employee-information-list">
                                <li>
                                    <p>
                                        <span className="employee-information-list-title">Age:</span>
                                        <span className="employee-information-list-content">{age}</span>
                                    </p>
                                </li>
                                <li>
                                    <a href={`tel:${phone}`}>
                                        <span className="employee-information-list-title">Phone:</span>
                                        <span className="employee-information-list-content">{phone}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${email}`}>
                                        <span className="employee-information-list-title">Email:</span>
                                        <span className="employee-information-list-content">{email}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:qq.com">
                                        <span className="employee-information-list-title">Adress:</span>
                                        <span className="employee-information-list-content">{address}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="employee-detail-vote-stats">
                            <p className="employee-detail-vote-stats-title"></p>
                            <p className="vote-stat-perctange">
                                <span className="weak-text">%</span>
                                {currentStats.percent.toFixed(1)}
                            </p>
                            <p className="vote-stat-count">{currentStats.votes} votes</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EmployeePage;
