import EmailForm from "./email-form";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1515366974328-f1181eb25189")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Descubre los Mejores Hoteles en{" "}
          <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Medellín
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Pronto lanzaremos la plataforma más completa para encontrar tu hotel ideal en la Ciudad de la Eterna Primavera.
        </p>

        <div className="max-w-md mx-auto">
          <EmailForm />
        </div>
        
        <p className="text-sm text-gray-300 mt-4">
          Sé el primero en conocer cuando lancemos
        </p>
      </div>
    </section>
  );
}
