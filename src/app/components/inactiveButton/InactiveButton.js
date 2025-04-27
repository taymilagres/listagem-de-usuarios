'use client'
import './inactiveButton.css';
import '../../styles/media.css';

export default function InactiveButton({isActive, clickStatus}){
    return(
        <button className={`inactive-button ${isActive ? '' : 'inactive'}`} onClick={clickStatus}>
            {isActive ? 'Inativar' : 'Ativar'} {/* Se isInactive == true: texto do botão fica "Inativar", ou false: "ativar" */}
        </button>
    )
}