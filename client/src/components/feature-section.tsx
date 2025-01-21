import { Card, CardContent } from "@/components/ui/card";
import { Building2, Search, Award } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Por qué HotelesMedellín.co?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Amplia Selección
              </h3>
              <p className="text-gray-600">
                Encuentra los mejores hoteles en todos los sectores de Medellín
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Búsqueda Inteligente
              </h3>
              <p className="text-gray-600">
                Filtra por ubicación, precio y comodidades para encontrar tu hotel ideal
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Mejores Precios
              </h3>
              <p className="text-gray-600">
                Garantizamos las mejores tarifas disponibles en el mercado
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Hoteles Destacados
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa"
                alt="Luxury Hotel Room"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1592229506151-845940174bb0"
                alt="Luxury Hotel Room"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
