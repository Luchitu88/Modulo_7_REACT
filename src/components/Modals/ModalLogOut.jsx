const ModalLogOut = ({ visible, onClose, onLogout }) => {
    if (!visible) return null;
  
    return (
      <div className="modal-overlay" style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}>
        <div style={{
          backgroundColor: "#efd6bd",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "800px",
          width: "100%",
          color: "#7e4f1a",
          position: "relative",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <h3 style={{ margin: 0 }}>¿Estás seguro de que quieres cerrar sesión?</h3>
            <button
              onClick={onLogout}
              style={{
                backgroundColor: "rgb(209, 209, 209)",
                color: "black",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "10px 15px",
                marginRight: "120px",
              }}
            >
              Presiona el botón para salir!!!
            </button>
          </div>
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "20px",
              color: "#7e4f1a",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  };
  
  export default ModalLogOut;
  