import React, { useState } from "react";
import './LoginForm.css';   // Importing the CSS file
import Button from './Button'; // Importa el componente Button

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //Aqui se agrega la logica para enviar un formularo
        console.log("Email: ", email);
        console.log("Password", password);
    };

    return (
        <div className="login-container">
            <h1>!Bienvenido a EvaluApp: Zona de exámenes</h1>
            <p>Sube tu nivel de conocimento con EvaluApp. Plataforma para crear y tomar exámenes online Editorial. ¡Demuestra lo que sabes!</p>
            <div className="login-form">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="email" className="Email" style={{ display: 'block', textAlign: 'left' }}>Email:</label>                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Ingresa tu Correo"

                        />
                            </div>
                            <div className="form-group">
                            <label htmlFor="password" style={{ display: 'block', textAlign: 'left' }}>Password:</label>                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder="Ingreasa tu contraseña"
                                />
                            </div>
<<<<<<< HEAD
                            <a href="/forgot-password" style={{display: 'block', textAlign: 'center', fontSize: '1em', marginBottom: '0px', color: '#ffc107', textDecoration: 'underline', }}>¿Olvidaste tu contraseña?</a> <br />                      
                            <a href="/forgot-password" style={{display: 'block', textAlign: 'center', fontSize: '1em', marginBottom: '0px', color: '#ffc107', textDecoration: 'underline', }}>Si no tienes cuenta, crea una</a> 
                            <br />                      
                                 <Button type="submit">Irsar</Button> {/* Usa el componente Button */}
=======
                            <a href="/forgot-password" style={{display: 'block', textAlign: 'center', fontSize: '1em', marginBottom: '0px', color: '#ffc107', textDecoration: 'underline', }}>¿Olvidaste tu contraseña?</a>                       
                               <br />  <Button type="submit">Ingresar</Button> {/* Usa el componente Button */}
>>>>>>> b478ac2ae764c33366ae6b7cc41a4faa21cc4270
                        </form>
                    </div>
                </div>
            );  
        }
export default LoginForm;
        