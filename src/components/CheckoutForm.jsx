import { useState } from "react";


export default function CheckoutForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userinfo', JSON.stringify(inputs));
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit} class="flex flex-col border-4 p-4">
            <input value={inputs.name || ""} onChange={handleChange} name="name" type="text" placeholder="Name" class="p-2" />
            <input value={inputs.email || ""} onChange={handleChange} name="email" type="email" placeholder="Email" class="p-2" />
            <input value={inputs.adress || ""} onChange={handleChange} name="adress" type="text" placeholder="Adress" class="p-2" />
            <input value={inputs.postalcode || ""} onChange={handleChange} name="postalcode" type="text" placeholder="Postalcode" class="p-2" />
            <input value={inputs.city || ""} onChange={handleChange} name="city" type="text" placeholder="City" class="p-2" />
            <button type="submit" class="p-2">Save adress</button>
        </form>
    )
}