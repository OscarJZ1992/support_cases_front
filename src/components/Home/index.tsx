import homeImage from '../../assets/img/home.png';
const HomeComponent = () => {
    return (
            <>
                <div className="Home flex flex-col items-center justify-center p-8">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">Plataforma de Soporte, Logs y Eventos</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Bienvenido a la plataforma dedicada al seguimiento de casos de soporte y el registro de eventos.
                        Aquí podrás gestionar los eventos, soportes usuarios y logs.
                    </p>
                    <div>
                        <img src={homeImage} alt="home"  />
                    </div>
                </div>
            </>
    );
}

export default HomeComponent;