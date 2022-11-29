import { useState } from "react"
import { FourteenthClassItem } from "../../components/FourteenthClassItem"

export function FourteenthClass() {

    const registers = [
        { id: 1, title: 'Primeiro registro' }
    ]

    const [registerListVisible, setRegisterListVisible] = useState(true)

    function deleteRegisterFromList() {



    }

    return (
        <>

            <h1>Lista de Registros</h1>

            <button onClick={() => setRegisterListVisible(!registerListVisible)}>{`${registerListVisible ? 'Ocultar' : 'Mostrar'} Lista`}</button>

            {

                // Verificação se o State que controla a visibilidade da Lista é True
                registerListVisible ? (

                    <ul>
                        {
                            // Map utilizando o Array "registers"
                            registers.map(
                                register => {
                                    return (
                                        <FourteenthClassItem
                                            key={register.id}
                                            registerData={register}
                                            deleteRegister={(registerReturned) => deleteRegisterFromList(registerReturned)}
                                        />
                                    )
                                }
                            )
                        }
                    </ul>

                ) : (

                    <p>A lista está oculta</p>

                )

            }

        </>
    )

}