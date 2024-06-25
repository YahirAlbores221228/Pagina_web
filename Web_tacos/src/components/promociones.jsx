import { promotions } from '../Data/promociones';

function Promotions() {
    return (
        <div className="py-20">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <h2 className="text-3xl mb-12 font-semibold text-yellow-500 text-center">PROMOCIONES ESPECIALES</h2>
                <div className="mt-6 grid justify-items-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {promotions.map((promotion, index) => (
                        <div key={index.id} className="bg-white w-10/12 shadow-lg rounded-lg overflow-hidden" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-duration="500" data-aos-offset="200" data-aos-delay={index * 200}>
                            <img src={promotion.image} alt={promotion.title} className="w-full h-72 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{promotion.title}</h3>
                                <p className="mt-2 text-gray-600">{promotion.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Promotions;