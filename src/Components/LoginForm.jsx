import React, { useState } from "react";
import './LoginForm.css';   // Importing the CSS file
import Button from './Button'; // Importa el componente Button

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //Aqui se agrega la logica para enviar un formulario
        console.log("Email: ", email);
        console.log("Password", password);
    };

    return (
        <div className="login-container">
            <h1>¡Bienvenido a EvaluApp: Zona de exámenes!</h1>
            <p>Sube tu nivel de conocimento con EvaluApp. Plataforma para crear y tomar exámenes online Editorial. ¡Demuestra lo que sabes!</p>
            <div className="login-form">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Email"
                        />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder="Password"                               
                                />
                            </div>
                            <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                            <a href="">Si no tienes cuenta, crea una</a>
                            <Button type="submit">Ingresar</Button> {/* Usa el componente Button */}
                        </form>
                    </div>
                </div>
            );  
        }
export default LoginForm;
        