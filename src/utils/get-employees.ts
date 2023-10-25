import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
    query GetEmployees {
        employees {
            id
            name
            surname
            title
            photo
            age
            bio
            phone
            email
            address
            votes
        }
    }
`;

export const getEmployees = () => {
    const { data, loading, error } = useQuery(QUERY);
    const employees = data?.employees || null;
    return { employees, loading, error };
};
