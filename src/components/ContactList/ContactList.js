import css from './ContactList.module.css'



export const ContactList = ({ contacts, onDelete }) => {
    
    return (
        <ul>
            {contacts.map((contact) => {
                return (
                    <li className={css.item}key={contact.id}>
                        {contact.name}:{' '}{contact.phone}
                        <button className={css.button}type="button" onClick={() => onDelete(contact.id)}>❌</button>
                    </li>
                )
            })}
        </ul>
    )
}