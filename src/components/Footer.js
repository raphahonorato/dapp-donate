export default function Footer() {
    return (
        <footer className=" d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-light">
            <p className="col-md-4 md-0 text-body-secondary">
                &copy; 2023 Raphael Honorato,
            </p>
            <ul className="nav col-md-4 justify-content-end ">
                <li className="nav-item">
                    <a href="/" className="nav-link px-2 text-body-secondary">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/criar" className="nav-link px-2 text-body-secondary">Nova Campanha</a>
                </li>
                <li className="nav-item">
                    <a href="/doar" className="nav-link px-2 text-body-secondary">Doar</a>
                </li>
                <li className="nav-item">
                    <a href="/sobre" className="nav-link px-2 text-body-secondary">Sobre</a>
                </li>
            </ul>
        </footer>
    )
}