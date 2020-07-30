import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import api from '../../services/api';
import { Error, RepositoriesInfo, Form, Title } from './styles';

type IRepository = {
    id: string;
    name: string;
    phone: string;
    age: number;
    address: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}[];
interface User {
    id: string;
    name: string;
    phone: string;
    age: number;
    address: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}

const Repository: React.FC = () => {
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [age, setAge] = useState();
    const [address, setAddress] = useState();
    const [status, setStatus] = useState();
    const [userCurrent, setUserCurrent] = useState<User | undefined>();
    const [inputError, setInputError] = useState('');
    const [list, setList] = useState<IRepository>([]);
    const ageCurrent = userCurrent?.age.toString();
    const { params } = useRouteMatch<any>();
    const handleUpdate = (): void => {
        const users = {
            user: {
                name,
                phone,
                age,
                address,
                status,
            },
        };
        async function loadTransactions(): Promise<void> {
            try {
                await api
                    .put(`/transactions/${params.id}`, users)
                    .then((response) => {
                        alert(response.data);
                    });
            } catch {
                setInputError('não foi possivel cadastrar essa pessoa.');
            }
        }
        loadTransactions();
    };
    useEffect(() => {
        async function loadTransactions(): Promise<void> {
            await api.get('/transactions').then((response) => {
                setList(response.data);
                const userUpdate = list.find((userT) => userT.id === params.id);
                setUserCurrent(userUpdate);
            });
        }
        loadTransactions();
    }, [list, params]);

    return (
        <RepositoriesInfo>
            <Title>Atualizar Informações do(a) {userCurrent?.name}</Title>
            <Form hasError={!!inputError} onSubmit={handleUpdate}>
                <strong>Nome:</strong>
                <input
                    placeholder={userCurrent?.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <strong>Telefone:</strong>
                <input
                    placeholder={userCurrent?.phone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <strong>Idade:</strong>
                <input
                    type="number"
                    placeholder={ageCurrent}
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))} // eslint-disable-line
                />
                <br />
                <strong>Endereço:</strong>
                <input
                    placeholder={userCurrent?.address}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <br />
                <strong>Status na campanha:</strong>
                <input
                    placeholder={userCurrent?.status}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <br />
                <button type="submit">Atualizar dados</button>
            </Form>
            <Link to="/list">Cancelar</Link>
            {inputError && <Error>{inputError}</Error>}
        </RepositoriesInfo>
    );
};

export default Repository;
