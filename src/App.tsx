import { useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { CheckCircle, Smartphone, Wifi, DollarSign, Clock, Printer, Users, Star } from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && businessName) {
      setIsSubmitted(true)
      // Aquí se enviaría a la base de datos
      console.log('Registro:', { email, businessName })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Printer className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Restau-Bot</span>
            </div>
            <Button variant="outline" size="sm">
              Contacto
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  🚀 Próximamente - Lista de Espera
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Pedidos en línea para tu{' '}
                  <span className="text-primary">restaurante</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  La primera plataforma diseñada especialmente para fondas, food trucks y restaurantes pequeños. 
                  Funciona incluso con conectividad limitada y sin computadoras complejas.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Impresión automática de tickets</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Funciona con datos móviles</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Ultra fácil de usar</span>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-900">
                    ¡Únete a la lista de espera!
                  </h3>
                  <div className="space-y-3">
                    <Input
                      type="text"
                      placeholder="Nombre de tu negocio"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      required
                      className="h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Tu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12"
                    />
                    <Button type="submit" className="w-full h-12 text-lg">
                      Reservar mi lugar
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Sin compromiso. Te avisaremos cuando esté listo.
                  </p>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <div>
                      <h3 className="font-semibold text-green-800">¡Listo! Estás en la lista</h3>
                      <p className="text-green-700">Te contactaremos pronto con acceso prioritario.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Nuevo Pedido #127</h4>
                    <Badge className="bg-green-100 text-green-800">Confirmado</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>2x Tacos al Pastor</span>
                      <span>$60</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1x Quesadilla</span>
                      <span>$35</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>$95</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Printer className="w-4 h-4" />
                    <span>Imprimiendo en cocina...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que Resuelve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Diseñado para negocios como el tuyo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sabemos los retos que enfrentas día a día. Por eso creamos una solución que realmente funciona.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <Wifi className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Internet inestable</h3>
                <p className="text-gray-600">
                  Funciona con datos móviles y guarda pedidos offline hasta que se reconecte.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Presupuesto ajustado</h3>
                <p className="text-gray-600">
                  Precios justos sin hardware costoso. Solo necesitas tu celular y nuestra impresora.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Fácil para todos</h3>
                <p className="text-gray-600">
                  Interfaz súper simple. Tu equipo aprende a usarlo en minutos, sin capacitación compleja.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Características Clave */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Todo lo que necesitas en una sola plataforma
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Printer className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Impresora ZKTeco Integrada</h3>
                  <p className="text-gray-600">
                    Recibe pedidos en tu celular e imprime automáticamente en la cocina. 
                    Sin cables, funciona con datos móviles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Funciona en tu celular</h3>
                  <p className="text-gray-600">
                    No necesitas computadora ni tablet. Todo desde tu teléfono con una app súper fácil de usar.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Respaldo manual</h3>
                  <p className="text-gray-600">
                    Si falla la tecnología, puedes seguir tomando pedidos en papel y sincronizar después.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold mb-4 text-center">Panel de Control</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm">Pedidos hoy</span>
                    <span className="font-bold text-green-600">47</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm">Ventas del día</span>
                    <span className="font-bold text-blue-600">$2,340</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm">Tiempo promedio</span>
                    <span className="font-bold text-orange-600">12 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Lo que dicen nuestros usuarios beta
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Antes perdía muchos pedidos porque no tenía sistema. Ahora todo llega directo a la cocina y no se me olvida nada."
                </p>
                <div>
                  <p className="font-semibold">María González</p>
                  <p className="text-sm text-gray-500">Fonda "El Buen Sazón"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Mi food truck ahora puede recibir pedidos mientras manejo. La impresora funciona perfecto con mi plan de datos."
                </p>
                <div>
                  <p className="font-semibold">Carlos Ramírez</p>
                  <p className="text-sm text-gray-500">Food Truck "Tacos del Valle"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Súper fácil de usar. Mi mamá que no sabe de tecnología lo aprendió en un día. Ahora vendemos 30% más."
                </p>
                <div>
                  <p className="font-semibold">Ana Morales</p>
                  <p className="text-sm text-gray-500">Restaurante Familiar "La Cocina de Ana"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ¿Listo para modernizar tu negocio?
            </h2>
            <p className="text-xl opacity-90">
              Únete a cientos de restaurantes que ya están en nuestra lista de espera.
              Acceso prioritario y precio especial para los primeros usuarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Reservar mi lugar
              </Button>
              <p className="text-sm opacity-75">
                🎁 Los primeros 100 usuarios tendrán 3 meses gratis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Printer className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Restau-Bot</span>
              </div>
              <p className="text-gray-400">
                La plataforma de pedidos diseñada para restaurantes pequeños y negocios móviles.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Características</li>
                <li>Precios</li>
                <li>Hardware ZKTeco</li>
                <li>Soporte</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Acerca de</li>
                <li>Blog</li>
                <li>Contacto</li>
                <li>Términos</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>soporte@restau-bot.com</li>
                <li>+52 55 1234 5678</li>
                <li>WhatsApp: +52 55 9876 5432</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Restau-Bot. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App