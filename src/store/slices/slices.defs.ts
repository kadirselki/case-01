export interface IAppState {
    appLoading: boolean;
}

export interface IEmployeeState {
    employees: IEmployee[] | null;
}

export interface IEmployee {
    id: string;
    name: string;
    surname: string;
    title: string;
    photo: string;
    age: number;
    bio: string;
    phone: string;
    email: string;
    address: string;
    votes: number;
}

export interface ILog {
    type: 'VİEW_PROFILE' | 'VOTE';
    employeeId: string;
    date: string;
}

export interface ILogState {
    logs: ILog[];
}
