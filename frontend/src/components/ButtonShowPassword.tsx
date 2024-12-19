export const ButtonShowPassword: React.FC<{ setVisibilite: (visible: boolean) => void }> = ({ setVisibilite }) => {
    return (
        <button 
            className="input-group-text" 
            type="button" 
            onMouseDown={() => setVisibilite(true)}
            onMouseUp={() => setVisibilite(false)}
            onMouseLeave={() => setVisibilite(false)}
        >
             <i className="bi bi-eye"></i>
        </button>
    );
}