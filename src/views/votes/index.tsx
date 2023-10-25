import { VoteCard } from '@components/vote-card';
import { Layout } from '@views/layout';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const VotesPage = () => {
    const employees = useSelector((state: RootState) => state.employees.list);

    return (
        <Layout>
            <div className="vote-page">
                {employees && employees.length > 0 ? (
                    <div className="vote-list">
                        {employees.map((employee) => (
                            <VoteCard data={employee} key={employee.id} />
                        ))}
                    </div>
                ) : (
                    'Employee list is empty!'
                )}
            </div>
        </Layout>
    );
};

export default VotesPage;
