import { useQuery, gql } from '@apollo/client';
import { useMemo } from 'react';

const EMPLOYEES_QUERY = gql`
    query GetEmployees {
        employees {
            id
            name
            surname
            title
            photo
            address
            phone
            age
            email
        }
    }
`;

function useEmployees() {
    const { data, loading, error } = useQuery(EMPLOYEES_QUERY);

    const employees = useMemo(() => {
        if (data && data.employees) {
            return data.employees;
        }
        return [];
    }, [data]);

    return {
        employees,
        loading,
        error,
    };
}

const ErrorPage = () => {
    // Bunu kullanma şekli:

    const { employees, loading, error } = useEmployees();

    console.log(employees);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {employees.map((employee: any) => (
                <div key={employee.id}>
                    <img src={employee.photo} alt={employee.name} />
                    <h2>
                        {employee.name} {employee.surname}
                    </h2>
                    <p>{employee.title}</p>
                    {/* Diğer alanları da burada render edebilirsiniz */}
                </div>
            ))}
        </div>
    );
};

export default ErrorPage;
