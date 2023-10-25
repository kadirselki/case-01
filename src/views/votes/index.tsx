import { VoteCard } from '@components/vote-card';
import { Layout } from '@views/layout';
import { Fragment } from 'react';
import { Flipped, Flipper } from 'react-flip-toolkit';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { IEmployee } from 'src/store/slices/slices.defs';

const VotesPage = () => {
    const employees = useSelector((state: RootState) => state.employees.list);

    const sortedEmployees =
        employees && employees.length > 0
            ? [...(employees as IEmployee[])].sort((a, b) => {
                  if (a.votes === b.votes) return a.name.localeCompare(b.name);
                  return b.votes - a.votes;
              })
            : null;

    return (
        <Layout>
            <div className="vote-page">
                {sortedEmployees ? (
                    <Flipper flipKey={sortedEmployees.map((e) => e.id).join('')} className="vote-list">
                        {sortedEmployees.map((employee) => (
                            <Flipped key={employee.id} flipId={employee.id}>
                                <div>
                                    <VoteCard data={employee} />
                                </div>
                            </Flipped>
                        ))}
                    </Flipper>
                ) : (
                    'Employee list is empty!'
                )}
            </div>
        </Layout>
    );
};

export default VotesPage;
