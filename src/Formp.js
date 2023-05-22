function Formulario({ botao, keyboardEvent, insertd, obj, cancel, removeObj, update }) {
    return (
        <form>
            <input type="text" value={obj.name} onChange={keyboardEvent} name="name" placeholder="Nome" className="form-control" />
            <input type="text" value={obj.brand} onChange={keyboardEvent} name="brand" placeholder="Marca" className="form-control" />
            {
                botao
                    ?
                    <input type="button" value="Cadastrar" onClick={insertd} className="btn btn-primary" />
                    :
                    <div>
                        <input type="button" value="Alterar" onClick={update} className="btn btn-warning" />
                        <input type="button" value="Remover" onClick={removeObj} className="btn btn-danger" />
                        <input type="button" value="Cancelar" onClick={cancel} className="btn btn-secondary" />
                    </div>
            }


        </form>
    )
}

export default Formulario;