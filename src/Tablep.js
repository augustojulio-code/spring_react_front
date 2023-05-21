function Tabela({ listProducts }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    listProducts.map((obj, indexp) => (
                        <tr key={indexp}>
                            <td>{indexp + 1}</td>
                            <td>{obj.name}</td>
                            <td>{obj.brand}</td>
                            <td><button className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))

                }
            </tbody>
        </table>
    )
}

export default Tabela;