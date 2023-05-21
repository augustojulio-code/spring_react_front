function Formulario({ botao, keyboardEvent, insertd }) {
    return (
        <form>
            <input type="text" onChange={keyboardEvent} name="name" placeholder="Nome" className="form-control" />
            <input type="text" onChange={keyboardEvent} name="brand" placeholder="Marca" className="form-control" />
            {
                botao
                    ?
                    <input type="button" value="Cadastrar" onClick={insertd} className="btn btn-primary" />
                    :
                    <div>
                        <input type="button" value="Alterar" className="btn btn-warning" />
                        <input type="button" value="Remover" className="btn btn-danger" />
                        <input type="button" value="Cancelar" className="btn btn-secondary" />
                    </div>
            }


        </form>
    )
}

export default Formulario;