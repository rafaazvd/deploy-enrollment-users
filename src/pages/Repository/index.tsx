import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch, Link, useParams, useHistory } from 'react-router-dom';
import { FiChevronLeft, FiDelete, FiEdit } from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import { Header, RepositoriesInfo } from './styles';

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

const Repository: React.FC = () => {
    const [list, setList] = useState<IRepository>([]);
    const history = useHistory();

    // const [issues, setIssues] = useState<Issue[]>([]);
    // const { params } = useRouteMatch<RepositoryParams>();
    const reload = useCallback(() => {
        async function loadTransactions(): Promise<void> {
            await api.get('/transactions').then((response) => {
                setList(response.data);
            });
        }
        loadTransactions();
    }, []);
    useEffect(() => {
        async function loadTransactions(): Promise<void> {
            await api.get('/transactions').then((response) => {
                setList(response.data);
            });
        }
        loadTransactions();
    }, [reload]);

    const handleDelete = async (id: string): Promise<void> => {
        if (window.confirm('Você realmente quer excluir esse usuario?')) {
            await api.delete(`/transactions/${id}`).then((response) => {
                reload();
            });
        }
    };
    const handleUpdate = (id: string): void => {
        history.push(`/update/${id}`);
    };

    return (
        <>
            <Header>
                <img src={logo} alt="gitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft size={46} />
                    Voltar para o cadastro
                </Link>
            </Header>

            <RepositoriesInfo>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Status</th>
                            <th>Endereço</th>
                            <th>Contato</th>
                            <th>Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.status}</td>
                                <td>
                                    {user.address || 'sem enderço cadastrado'}
                                </td>
                                <td>
                                    {' '}
                                    {user.phone || 'sem telefone cadastrado'}
                                </td>
                                <td>
                                    {user.age || 'sem idade cadastrada'}
                                    <button
                                        type="button"
                                        onClick={() => handleUpdate(user.id)}
                                    >
                                        <FiEdit size={16} color="green" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        <FiDelete size={16} color="red" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </RepositoriesInfo>
        </>
    );
};

export default Repository;
