import { useState } from "react";

const AppHook = () => {
    const [sistolica, setSistolica] = useState(" ")
    const [diastolica, setDiastolica] = useState(" ")
    const [result, setResult] = useState(" ")

    const verificarPressao = () => {

        if (sistolica < 130 && diastolica < 85) {
            setResult("Normal")
        } else if (sistolica < 140 && diastolica < 90) {
            setResult("Normal - Limitrofe")
        } else if (sistolica < 160 && diastolica < 100) {
            setResult("Hipertensão Leve")
        } else if (sistolica < 180 && diastolica < 110) {
            setResult("Hipertensão Moderada")
        } else {
            setResult("Hipertensão Grave")
        }

    }

    const showResult = () => {
        if (result !== " ") {
            return <p>Seu diagnóstico é: {result}</p>
        }

        return null
    }

    return (
        <div>
            <h1>Controle de Pressão Arterial</h1>

            Pressão sistolica: <br />
            <input type="number" onChange={(event) => setSistolica(event.target.value)} />

            <br /><br />

            Pressão diastolica: <br />
            <input type="number" onChange={(event) => setDiastolica(event.target.value)} />

            <br /><br />

            <input type="button" value="Verificar" onClick={verificarPressao} />

            <br />

            {showResult()}

        </div>
    )
}

export default AppHook;
