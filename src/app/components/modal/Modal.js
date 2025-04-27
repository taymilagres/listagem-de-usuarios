'use client'
import './modal.css';

export default function Modal({ selectedUser, closeModal }) { //Passando os dados do usuario que foi clicado e a função do modal
    console.log("Dados no Modal:", { selectedUser });
  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Dados do Usuário</h4> 
        {/* puxando os dados do usuário selecionado */}
        <p><strong>Nome:</strong> {selectedUser.name}</p>
        <p><strong>Nome de usuário:</strong> {selectedUser.username}</p>
        <p><strong>Website:</strong> {selectedUser.website}</p>
        <p><strong>Endereço:</strong> Rua {selectedUser.address?.street}, N° {selectedUser.address?.suite} - {selectedUser.address?.city}. <strong>Código postal: </strong> {selectedUser.address?.zipcode}</p>
        <p><strong>Localização:</strong> Latitude: {selectedUser.address?.geo?.lat}, Longitude: {selectedUser.address?.geo?.lng}</p>
        <p><strong>Empresa: </strong>{selectedUser.company.name}</p>

        <div className='company-list'>
            <ul>
                <li>{selectedUser.company.catchPhrase}</li>
                <li>{selectedUser.company.bs}</li>
            </ul>
        </div>

        <div className='modal-btn'>
            <button className="close-modal" onClick={closeModal}>Fechar</button> {/* passando a função de fechar o modal para o botão */}
        </div>
      </div>
    </div>
  );
}
