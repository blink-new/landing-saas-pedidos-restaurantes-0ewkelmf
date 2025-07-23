import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { CheckCircle, Smartphone, Wifi, DollarSign, Clock, Printer, Users, Star, Bot, Brain, Zap, MessageSquare, Sparkles, Shield, Cpu } from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [animatedText, setAnimatedText] = useState('Restaurante')

  // Animación de la palabra "restaurante"
  useEffect(() => {
    const words = ['Restaurante', 'Negocio', 'Fonda', 'Food Truck', 'Puesto de Tacos', 'Mariscos', 'Pizzería']
    let currentIndex = 0
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length
      setAnimatedText(words[currentIndex])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && businessName) {
      setIsSubmitted(true)
      // Aquí se enviaría a la base de datos
      console.log('Registro:', { email, businessName })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 animate-glow">
                  <Bot className="w-7 h-7 text-black" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <Brain className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl blur-xl animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-shine animate-neon-pulse">
                  Restau-Bot
                </span>
                <span className="text-xs text-primary font-medium animate-pulse">AI Powered</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10 animate-cyber-border">
              Contacto
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/20 to-background matrix-bg">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float"></div>
          
          {/* Matrix-style animated lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                style={{
                  left: `${i * 5}%`,
                  animationDelay: `${i * 0.5}s`,
                  animation: 'matrix-rain 15s linear infinite'
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <Badge className="bg-primary/20 text-primary border-primary/50 animate-pulse hover:animate-bounce transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  🚀 Próximamente - Lista de Espera
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  <span className="text-shine">Pedidos IA</span> para tu{' '}
                  <span className="relative inline-block">
                    <span className="text-primary transition-all duration-500 ease-in-out font-bold">
                      {animatedText}
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  La primera plataforma con <span className="text-primary font-semibold">Inteligencia Artificial</span> diseñada para fondas, food trucks y restaurantes pequeños. 
                  Funciona incluso con conectividad limitada y sin computadoras complejas.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-foreground bg-card/50 px-4 py-2 rounded-full backdrop-blur-sm animate-scale-in">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Impresión automática IA</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground bg-card/50 px-4 py-2 rounded-full backdrop-blur-sm animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Funciona con datos móviles</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground bg-card/50 px-4 py-2 rounded-full backdrop-blur-sm animate-scale-in" style={{animationDelay: '0.4s'}}>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Chatbot inteligente 24/7</span>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 bg-card/80 p-8 rounded-2xl shadow-2xl border border-border backdrop-blur-xl animate-glow">
                  <h3 className="text-xl font-semibold text-foreground flex items-center">
                    <Bot className="w-6 h-6 mr-2 text-primary" />
                    ¡Únete a la revolución IA!
                  </h3>
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Nombre de tu negocio"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      required
                      className="h-14 bg-background/50 border-border text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                    />
                    <Input
                      type="email"
                      placeholder="Tu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 bg-background/50 border-border text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                    />
                    <Button type="submit" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 transform hover:scale-105 animate-glow">
                      <Zap className="w-5 h-5 mr-2" />
                      Reservar mi lugar
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Sin compromiso. Te avisaremos cuando esté listo.
                  </p>
                </form>
              ) : (
                <div className="bg-green-500/20 border border-green-500/50 p-8 rounded-2xl backdrop-blur-xl animate-scale-in">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                    <div>
                      <h3 className="font-semibold text-green-400 text-lg">¡Listo! Estás en la lista</h3>
                      <p className="text-green-300">Te contactaremos pronto con acceso prioritario.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative animate-float">
              <div className="bg-card/80 rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 animate-glow backdrop-blur-xl border border-border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <Bot className="w-5 h-5 mr-2 text-primary" />
                      Nuevo Pedido #127
                    </h4>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50 animate-pulse">Confirmado</Badge>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-foreground">
                      <span>2x Tacos al Pastor</span>
                      <span className="text-primary">$60</span>
                    </div>
                    <div className="flex justify-between text-foreground">
                      <span>1x Quesadilla</span>
                      <span className="text-primary">$35</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between font-semibold text-foreground">
                      <span>Total</span>
                      <span className="text-accent">$95</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground bg-primary/10 p-3 rounded-lg">
                    <Printer className="w-4 h-4 animate-pulse" />
                    <span>IA imprimiendo en cocina...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas que Resuelve */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Diseñado para <span className="text-shine">negocios como el tuyo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sabemos los retos que enfrentas día a día. Por eso creamos una solución con IA que realmente funciona.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-card/80 backdrop-blur-xl animate-scale-in group hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse">
                  <Wifi className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Internet inestable</h3>
                <p className="text-muted-foreground">
                  Funciona con datos móviles y guarda pedidos offline hasta que se reconecte. IA optimiza la conectividad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-card/80 backdrop-blur-xl animate-scale-in group hover:scale-105" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse">
                  <DollarSign className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Presupuesto ajustado</h3>
                <p className="text-muted-foreground">
                  Precios justos sin hardware costoso. Solo necesitas tu celular y nuestra impresora con IA.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-card/80 backdrop-blur-xl animate-scale-in group hover:scale-105" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse">
                  <Users className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Fácil para todos</h3>
                <p className="text-muted-foreground">
                  Interfaz súper simple con IA. Tu equipo aprende a usarlo en minutos, sin capacitación compleja.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Características Clave */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Todo lo que necesitas en una <span className="text-shine">plataforma IA</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group hover:transform hover:scale-105 transition-all duration-500 animate-slide-up">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                    <Printer className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <Cpu className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">Impresora ZKTeco con IA</h3>
                  <p className="text-muted-foreground text-lg">
                    Recibe pedidos en tu celular e imprime automáticamente en la cocina con inteligencia artificial. 
                    Sin cables, funciona con datos móviles y aprende de tus patrones.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group hover:transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">Chatbot Inteligente</h3>
                  <p className="text-muted-foreground text-lg">
                    Tu asistente virtual con IA toma pedidos 24/7, responde preguntas y gestiona todo automáticamente desde tu celular.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group hover:transform hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">IA Predictiva</h3>
                  <p className="text-muted-foreground text-lg">
                    Aprende de tus ventas para sugerir menús, optimizar tiempos y predecir demanda. Respaldo manual siempre disponible.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card/50 to-card/30 rounded-3xl p-8 backdrop-blur-xl border border-border animate-float">
              <div className="bg-card/80 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <h4 className="font-semibold mb-6 text-center text-foreground text-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 mr-2 text-primary" />
                  Panel de Control IA
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-500/20 rounded-xl border border-green-500/30">
                    <span className="text-sm text-foreground">Pedidos hoy</span>
                    <span className="font-bold text-green-400 text-xl">47</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
                    <span className="text-sm text-foreground">Ventas del día</span>
                    <span className="font-bold text-blue-400 text-xl">$2,340</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-500/20 rounded-xl border border-orange-500/30">
                    <span className="text-sm text-foreground">Tiempo promedio</span>
                    <span className="font-bold text-orange-400 text-xl">12 min</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/20 rounded-xl border border-purple-500/30">
                    <span className="text-sm text-foreground">IA Predicción</span>
                    <span className="font-bold text-purple-400 text-xl">+30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Lo que dicen nuestros <span className="text-shine">usuarios beta</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-2xl bg-card/80 backdrop-blur-xl animate-scale-in hover:scale-105 transition-all duration-500">
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-muted-foreground text-lg">
                  "Antes perdía muchos pedidos porque no tenía sistema. Ahora la IA maneja todo y no se me olvida nada."
                </p>
                <div>
                  <p className="font-semibold text-foreground">María González</p>
                  <p className="text-sm text-muted-foreground">Fonda "El Buen Sazón"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-2xl bg-card/80 backdrop-blur-xl animate-scale-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-muted-foreground text-lg">
                  "Mi food truck ahora puede recibir pedidos mientras manejo. La IA con impresora funciona perfecto."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Carlos Ramírez</p>
                  <p className="text-sm text-muted-foreground">Food Truck "Tacos del Valle"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-2xl bg-card/80 backdrop-blur-xl animate-scale-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-8 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-muted-foreground text-lg">
                  "Súper fácil de usar. Mi mamá que no sabe de tecnología lo aprendió con la IA. Ahora vendemos 30% más."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Ana Morales</p>
                  <p className="text-sm text-muted-foreground">Restaurante Familiar "La Cocina de Ana"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 text-black animate-slide-up">
            <h2 className="text-4xl lg:text-6xl font-bold animate-neon-pulse">
              ¿Listo para la revolución IA?
            </h2>
            <p className="text-xl opacity-90">
              Únete a cientos de restaurantes que ya están en nuestra lista de espera.
              Acceso prioritario y precio especial para los primeros usuarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-6 bg-black/80 text-white hover:bg-black/90 transform hover:scale-105 transition-all duration-300 animate-glow">
                <Bot className="w-6 h-6 mr-2" />
                Reservar mi lugar
              </Button>
              <p className="text-sm opacity-75 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                🎁 Los primeros 100 usuarios tendrán 3 meses gratis + IA Premium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 text-foreground py-12 border-t border-border backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-xl flex items-center justify-center shadow-2xl animate-glow">
                    <Bot className="w-7 h-7 text-black" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Brain className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-shine">Restau-Bot</span>
                  <span className="text-xs text-primary font-medium">AI Powered</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                La plataforma de pedidos con IA diseñada para restaurantes pequeños y negocios móviles.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Producto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Características IA</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Precios</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Hardware ZKTeco</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Soporte</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Acerca de</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contacto</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Términos</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contacto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors">soporte@restau-bot.com</li>
                <li className="hover:text-primary transition-colors">+52 55 1234 5678</li>
                <li className="hover:text-primary transition-colors">WhatsApp: +52 55 9876 5432</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Restau-Bot. Todos los derechos reservados. Powered by AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App