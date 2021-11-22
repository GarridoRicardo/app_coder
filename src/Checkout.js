const Checkout = () => {
 
  return (
      <form>
        <div className="container">
          <div className="row d-flex justify-content-center h-100">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Apellido"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="number"
                className="form-control"
                id="telefono"
                placeholder="Telefono"
                required
              />
            </div>
            <hr />
            <button  className="btn btn-primary">
              Finalizar Compra
            </button>
          </div>
        </div>
      </form>
  );
};

export default Checkout;
