import { useState } from "react";

const AppHook = () => {
    const [sistolica, setSistolica] = useState(" ")
    const [diastolica, setDiastolica] = useState(" ")
    const [result, setResult] = useState(" ")

    const verificarPressao = () => {
        let resultPressão

        if (sistolica < 130 && diastolica < 85) {
            resultPressão = "Normal"
        } else if (sistolica < 140 && diastolica < 90) {
            resultPressão = "Normal - Limitrofe"
        } else if (sistolica < 160 && diastolica < 100) {
            resultPressão = "Hipertensão Leve"
        } else if (sistolica < 180 && diastolica < 110) {
            resultPressão = "Hipertensão Moderada"
        } else {
            resultPressão = "Hipertensão Grave"
        }

        setResult(<p>Seu diagnóstico é: {resultPressão}</p>)
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

            {result}

        </div>
    )
}

export default AppHook;
