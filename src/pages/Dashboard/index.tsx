import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import api from '../../services/api';
import { Container, Title, Img, Form, Error } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}
const Dashboard: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [inputError, setInputError] = useState('');

    async function handleAddUser(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
        try {
            const user = {
                name,
                phone,
                age,
                address,
                status,
            };
            const response = await api.post('/transactions', user);
            const users = response.data;
            alert(`Usuario(a) ${users.name} cadrastado(a) com sucesso.`);
            setName('');
            setAddress('');
            setStatus('');
            setAge(0);
            setPhone('');
        } catch {
            setInputError('não foi possivel cadastrar essa pessoa.');
        }
    }

    return (
        <Container>
            <Img>
                <img src={logo} alt="git" />
            </Img>
            <Link to="list">LISTA DE PESSOAS CADASTRADAS</Link>
            <Title>Adicione Pessoas</Title>
            <Form hasError={!!inputError} onSubmit={handleAddUser}>
                <input
                    placeholder="Digite o nome completo:"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    placeholder="Digite o telefone para contato:"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Digite a idade:"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))} // eslint-disable-line
                />
                <input
                    placeholder="Digite o endereço:"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    placeholder="Digite o status da pessoa:"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <br />
                <button type="submit">Adicionar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
        </Container>
    );
};

export default Dashboard;
