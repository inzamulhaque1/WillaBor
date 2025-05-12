import bg from '../../assets/bg/back1.png';

const Banner = () => {
    return (
        <div
            className="h-[900px] sm:h-80 bg-cover bg-center m-3 relative"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center ">
                W centrum Zakopanego ukryta wśród drzew
            </p>

            <div className='absolute flex gap-5'>
                <button className='border border-white text-white px-3 py-2 rounded-xl'>Data wyjazdu</button>
                <button className='border border-white text-white px-3 py-2 rounded-xl'>Data wyjazdu</button>
                <button className='border border-white text-white px-3 py-2 rounded-xl'>Data wyjazdu</button>
            </div>
        </div>
    );
};

export default Banner;