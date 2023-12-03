import { useState } from "react";

export const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [formError, setFormError] = useState('');

    const handleConfirm = (e) => {
        e.preventDefault()
        if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
            setFormError('Por favor, complete todos los campos.')
            return;
        }
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div className="check-form">
            <form onSubmit={handleConfirm} className="checkout">
                <label>
                    <span>Nombre: </span>
                    <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
                </label>
                <label>
                    <span> Telefono: </span>
                    <input type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label>
                    <span>Email: </span>
                    <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <div>
                    <button type="submit" className="Button">Crear Order</button>
                </div>
                {formError && <span>{formError}</span>}
            </form>
        </div>
    )
}