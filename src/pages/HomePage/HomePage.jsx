import backgroundImage from '../../images/leather.jpg'

const HomePage = () => {
  return (
    <div
      className="hero overflow-hidden h-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay bg-opacity-60 h-full"></div>
      <div className="hero-content w-full bg-[rgba(139,69,19,0.5)] text-neutral-content text-center flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold py-4">Phonebook</h1>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
