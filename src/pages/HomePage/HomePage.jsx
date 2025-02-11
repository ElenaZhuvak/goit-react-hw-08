import backgroundImage from '../../images/leather.jpg'

const HomePage = () => {
  return (
    <div
      className="hero h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
       
          <div className="bg-[rgba(139,69,19,0.5)] w-full">
            <h1 className="text-5xl font-bold py-4">Phonebook</h1>
          </div>
    
      </div>
    </div>
  );
};

export default HomePage;