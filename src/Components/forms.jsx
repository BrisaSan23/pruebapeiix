
const Forms = (props) => {

    const {
        categorias,
        producto,
        setProducto,
        descripcion,
        setDescripcion,
        categoria,
        setCategoria,
        precio,
        setPrecio,
        peso,
        setPeso,
        createProductos,
        isEditing,
        setEditing
    } = props

    return (
        <div div className="App" >

            <form class="columns-lg" onSubmit={(e) => createProductos(e)}>
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h1 className='font-bold text-3xl text-center'>{isEditing ? 'Modificar Productos' : 'Agregar Productos'}</h1>

                        <div class="mt-6 flex items-center justify-end gap-x-6" />

                        <hr className="mx-2" />

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="producto" class=" block text-sm font-medium leading-6 text-gray-900">Nombre del producto</label>
                                <div class="mt-2">
                                    <input type="text" name="producto" id="producto" value={producto} onChange={(e) => setProducto(e.target.value)} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="categoria" class="block text-sm font-medium leading-6 text-gray-900">Categoria</label>
                                <div class="mt-2">
                                    <select id="categoria" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        {categorias && categorias.map(categoria => (
                                            <option key={categoria.id}>{categoria.categoria}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="precio" class="block text-sm font-medium leading-6 text-gray-900">Precio Unitario</label>
                                <div class="mt-2">
                                    <input type="number" name="precio" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="peso" class="block text-sm font-medium leading-6 text-gray-900">Peso (kg)</label>
                                <div class="mt-2">
                                    <input type="number" name="peso" id="peso" value={peso} onChange={(e) => setPeso(e.target.value)} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div class="col-span-full">
                                <label for="descripcion" class="block text-sm font-medium leading-6 text-gray-900">Descripcion</label>
                                <div class="mt-2">
                                    <textarea id="descripcion" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">

                    <button type="submit" className="sm:col-span-2 rounded-md py-2 px-8 my-2 border-solid border-2 border-slate-900 transition-all duration-200  text-slate-700 hover:bg-slate-700 hover:text-white font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                        {isEditing ? 'Modificar Productos' : 'Agregar Productos'}
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Forms;