'use client'
import './home.css';
import '../styles/media.css';
import Header from '../components/header/Header';
import ItemTable from '../components/itemTable/ItemTable';
import Modal from '../components/modal/Modal';
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]); //Pega os usuários que vem da API
  const [modalVisible, setModalVisible] = useState(false); //Vê se o modal está aberto ou não
  const [selectedUser, setSelectedUser] = useState(null); //Armazena o usuário que foi selecionado

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');  //GetAll dos usuários da API
        const data = await res.json();        
        setUsers(data);

      } catch (error) {
        console.error('Não foi possível realizar a busca de usuários: ', error);
      }
    }
    fetchUsers();
  }, []);

  const openModal = async (id) => { //Função que puxa os dados do usuario selecionado e abre o modal
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); //GetById do usuário selecionado da API
      const data = await res.json();

      setSelectedUser(data);  // Atualiza o estado com os dados do usuário selecionado
      setModalVisible(true);   // Mostra o modal

    } catch (error) {
      console.error("Erro ao buscar detalhes do usuário:", error);
    }
  };
  
  const closeModal = () => { //Função para fechar o modal
    setModalVisible(false);  
  };

  return (
    <>
      <Header />
      <section className='top-content'>
        <h2>Lista de usuários cadastrados:</h2>
      </section>

      <main>
        <div className='container'>
          <section className='components-table'> {/* Titulos das colunas */} 
            <h4 className='component status-component'>Status</h4>
            <h4 className='component'>ID</h4>
            <h4 className='component'>Nome</h4>
            <h4 className='component'>Email</h4>
            <h4 className='component'>Telefone</h4>
            <h4 className='component'>Ação</h4>
          </section>

          <section className='table-content'> {/* Itens da tabela */} 
            {users.map((user) => (
              <ItemTable
                key={user.id} //puxa o id do usuário da API
                status={user.status} //puxa o estado do status do usuário (default = ativo)
                id={user.id}  // passando o id
                name={user.name} //puxa o valor que está armazenado no "name" da API
                email={user.email} //puxa o valor que está armazenado no "email" da API
                phone={user.phone} //puxa o valor que está armazenado no "phone" da API
                openModal={() => openModal(user.id)}  
              />
            ))}
          </section>

          {modalVisible && selectedUser && (
            <Modal
              selectedUser={selectedUser}  // passando selectedUser para o Modal
              closeModal={closeModal}  // passando a função de fechamento para o Modal
            />
          )}
        </div>
      </main>

      <footer>
          <span>Make by Tayane Milagres | 04/2025 </span>
      </footer>
    </>
  );
}
