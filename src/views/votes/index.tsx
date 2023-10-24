import { VoteCard } from '@components/vote-card';
import { Layout } from '@views/layout';

const VotesPage = () => {
    return (
        <Layout>
            <div className="vote-page">
                <div className="vote-list">
                    <VoteCard />
                    <VoteCard />
                    <VoteCard />
                    <VoteCard />
                    <VoteCard />
                    <VoteCard />
                </div>
            </div>
        </Layout>
    );
};

export default VotesPage;
