import Forms from "./Components/forms";
import Table from "./Components/table";
import { useEffect, useState } from "react";
import axios from "axios";
import { routes } from "./tools/ApiRoutes";
const App = () => {

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [productosConCategoria, setProductosConCategoria] = useState([]);
  const [isEditing, setEditing] = useState(false);

  const [idProducto, setIdProducto] = useState('');
  const [producto, setProducto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [peso, setPeso] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    getCategorias();
    getProductos();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setProductosConCategoria(setCategoryToProduct(productos, categorias));
  }, [productos, categorias])

  const getProductos = async () => {
    const responseProductos = await axios.get(routes.productos);
    setProductos(responseProductos.data);
  }

  const getCategorias = async () => {
    const resCategorias = await axios.get(routes.categorias);
    setCategorias(resCategorias.data);
  }

  const setCategoryToProduct = (productos = [], categorias = []) => {
    if (!productos && !categorias) return [];
    return productos.map(producto => {
      let categoriaEncontrada = categorias.find(categoria => categoria.id === producto.categoriaId)
      if (!categoriaEncontrada) categoriaEncontrada = { categoria: '' };
      return {
        ...producto,
        categoria: categoriaEncontrada,
      };
    });
  };

  const createProductos = async (e) => {
    e.preventDefault();
    const idCategoria = categorias.find(it => it.categoria === categoria).id;
    const data = {
      producto: producto,
      categoriaId: idCategoria,
      precio: precio,
      peso: peso,
      descripcion: descripcion,
    };
    let response;
    if (!isEditing) {
      response = await axios.post(routes.productos, data);
    } else {
      response = await axios.put(routes.productos + idProducto, data);
    }
    if (response.status === 201 || response.status === 200) {
      getProductos();
      alert('Producto actualizado');
    } else {
      alert('El producto no se pudo actualizar');
    }

    setIdProducto("");
    setProducto("");
    setDescripcion("");
    setCategoria(categorias[0].categoria);
    setPrecio(0);
    setPeso(0);
    setEditing(false);
  }
  const deleteProducto = async (id) => {
    const response = await axios.delete(routes.productos + id);
    if (response.status === 200) {
      getProductos();
      alert('Producto ha sido eliminado');
    } else {
      alert('El producto no se pudo eliminar');
    }
  }

  const handleUpdate = (producto) =>{
    setIdProducto(producto.id);
    setProducto(producto.producto);
    setCategoria(producto.categoria.categoria);
    setPrecio(producto.precioUnitario);
    setPeso(producto.peso);
    setDescripcion(producto.descripcion);
    setEditing(true);

  }

  return (
    <div >
      <div display="flex" className="p-2" style={{ height: '10vh', backgroundColor: '#0f172a', color: 'white', borderRadius: '0 0 0 0' }} alignItems="center">
        <h1 className='font-bold text-4xl pt-1' style={{ textAlign: 'left', color: 'white' }}>PRUEBA PEIIX</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 p-5 space-x-4" >
        <Forms  {...{ categorias, producto, setProducto, descripcion, setDescripcion, categoria, setCategoria, precio, setPrecio, peso, setPeso, createProductos, isEditing, setEditing }} />
        <div class="col-span-2">
          <Table handleUpdate={handleUpdate} deleteProducto={deleteProducto} productos={productosConCategoria} />
        </div>
      </div>
    </div>
  );
}

export default App;
