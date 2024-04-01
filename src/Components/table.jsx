const Table = ({ productos, deleteProducto, handleUpdate }) => {
    return (
        <div className="rounded-lg overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr style={{ backgroundColor: '#334155', color: 'white', textAlign: 'center', color: 'white' }}>
                        <th >Producto</th>
                        <th >Categoria</th>
                        <th >Precio</th>
                        <th >Peso</th>
                        <th >Descripcion</th>
                        <th >Acciones</th>
                    </tr>
                </thead>
                <tbody className="">
                    {productos && productos.map((producto) => (
                        <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100" key={producto.id}>
                            <td className="px-6 py-4 text-sm text-gray-800">{producto.producto}</td>
                            <td className="px-6 py-4 text-sm text-gray-800">{producto.categoria.categoria}</td>
                            <td className="px-6 py-4 text-sm text-gray-800">$ {producto.precio}</td>
                            <td className="px-6 py-4 text-sm text-gray-800">{producto.peso}</td>
                            <td className="px-6 py-4 text-sm text-gray-800">{producto.descripcion}</td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <button onClick={() => deleteProducto(producto.id)} type="button" className="sm:col-span-2 rounded-md py-1 px-2 my-1 border-solid border-2 border-red-900 transition-all duration-200  text-red-700 hover:bg-red-700 hover:text-white font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Eliminar</button>
                                <button onClick={() => handleUpdate(producto)} type="button" className="sm:col-span-2 rounded-md py-1 px-2 my-1 border-solid border-2 border-gray-900 transition-all duration-200  text-gray-700 hover:bg-gray-700 hover:text-white font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Table;