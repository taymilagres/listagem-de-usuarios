'use client'
import { useState } from 'react';
import InactiveButton from '../inactiveButton/InactiveButton';
import './itemTable.css';
import '../../styles/media.css';

export default function ItemTable({status, id, name, email, phone, openModal}){ //Passando props e a função do modal
    const [isActive, setIsActive] = useState(() => {
        const savedStatus = localStorage.getItem(`isActive-${id}`); 
        if (savedStatus !== null) {
          return JSON.parse(savedStatus); // Salva o o valor do status no LocalStorage
        }
        return status === undefined || status === "Ativo"; //default "ativo"
      });

    function clickStatus(){ //Função do botão para inativar
        const newStatus = !isActive;
        setIsActive(newStatus);
        localStorage.setItem(`isActive-${id}`, JSON.stringify(newStatus));
    }

    return(
        <div className='box-users-data'  >
            <section className={`item-table ${isActive ? '' : 'inactive'}`}> {/* Se isActive == falso ele adiciona a classe inactive e muda o estilo */}
                <p className={`item status ${isActive ? '' : 'inactive-status'}`} onClick={() => openModal(id)}>
                    {isActive ? 'Ativo' : 'Inativo'}
                </p>
                <p className={`item ${isActive ? '' : 'inactive-text'}`}onClick={() => openModal(id)}>{id}</p>
                <p className={`item ${isActive ? '' : 'inactive-text'}`}onClick={() => openModal(id)}>{name}</p>
                <p className={`item ${isActive ? '' : 'inactive-text'}`}onClick={() => openModal(id)}>{email}</p>
                <p className={`item ${isActive ? '' : 'inactive-text'}`}onClick={() => openModal(id)}>{phone}</p>
                
                <InactiveButton isActive={isActive} clickStatus={clickStatus}/>
            </section> 
        </div>
    )
}