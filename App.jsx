import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Building2, 
  Lightbulb, 
  Users, 
  MapPin, 
  Target, 
  Rocket, 
  BookOpen, 
  Award, 
  Calendar, 
  Mail, 
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Network,
  Cpu,
  Dna,
  Cog,
  Atom
} from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-red-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Deep Tech Hub</h1>
                <p className="text-sm text-slate-600">IFCE Maracanaú</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Início' },
                { id: 'missao', label: 'Missão' },
                { id: 'deep-techs', label: 'Deep Techs' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'contatos', label: 'Contatos' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Deep Tech Hub
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Incubadora Tecnológica IFCE Maracanaú
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    Transformando Ciência em Inovação
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Consolidando o IFCE Maracanaú como referência no fomento à inovação através de startups Deep Tech, 
                    promovendo a transferência de tecnologia e aproveitando nossa localização estratégica no Distrito Industrial.
                  </p>
                  <Button 
                    onClick={() => scrollToSection('missao')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Conheça Nossa Missão
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 p-8">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <Dna className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Network className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <Cog className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                        <Atom className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section id="missao" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Nossa Missão</h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Lightbulb,
                title: "Inovação de Base Tecnológica",
                description: "Consolidar o IFCE Maracanaú como referência no fomento à inovação através de startups Deep Tech.",
                color: "bg-blue-500"
              },
              {
                icon: ArrowRight,
                title: "Transferência de Tecnologia",
                description: "Promover spinoffs acadêmicas e estreitar o relacionamento entre ciência e indústria.",
                color: "bg-green-500"
              },
              {
                icon: MapPin,
                title: "Localização Estratégica",
                description: "Aproveitar nossa posição no Distrito Industrial para maior articulação com empresas.",
                color: "bg-purple-500"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-slate-50 to-blue-50">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200"
            {...fadeInUp}
          >
            <p className="text-slate-700 text-center leading-relaxed">
              <strong>Implementação de projetos de Pesquisa, Desenvolvimento e Inovação (PD&I)</strong>, 
              aproveitando os instrumentos estratégicos previstos na Lei de Informática (Lei nº 8.248/1991, 
              atualizada pela Lei nº 14.968/2024) e na Lei do Bem (Lei nº 11.196/2005) para estimular o 
              fomento e o apoio a startups de base científica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O que é uma incubadora */}
      <section id="incubadora" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
              O que é uma incubadora de empresas?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed">
                  A Incubadora é uma ação pedagógica estratégica do IFCE – Campus Maracanaú. Oferece suporte a alunos e 
                  egressos de diversos cursos, estimulando o desenvolvimento de ideias inovadoras e a integração entre o 
                  meio acadêmico, social e produtivo.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Proporciona experiências práticas em gestão, inovação social e capacitação contínua, fortalecendo 
                  processos internos e a própria gestão da incubadora. Transforma saberes acadêmicos em produtos e 
                  serviços que solucionam desafios sociais e de mercado.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
                <CardHeader>
                  <CardTitle className="text-slate-800 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Alinhada às normas do IFCE
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">056/2016</Badge>
                    <p className="text-sm text-slate-600">Regimento Interno das Incubadoras de Empresas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">125/2019</Badge>
                    <p className="text-sm text-slate-600">Política de Inovação do IFCE</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">005/2017</Badge>
                    <p className="text-sm text-slate-600">Regimento Geral do Instituto</p>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-sm text-slate-600 italic">
                    Esses instrumentos fortalecem o papel da incubadora como ambiente de inovação, 
                    transferência tecnológica e empreendedorismo científico.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Techs */}
      <section id="deep-techs" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
              O Que São Deep Techs?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Definição</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Empreendimentos com forte base científica e tecnológica, nascidos em ambientes de pesquisa, 
                    desenvolvendo soluções complexas e disruptivas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Áreas de Atuação</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Cpu, text: "Inteligência artificial", color: "bg-blue-500" },
                      { icon: Atom, text: "Nanotecnologia", color: "bg-purple-500" },
                      { icon: Dna, text: "Biotecnologia", color: "bg-green-500" },
                      { icon: Cog, text: "Engenharia avançada", color: "bg-orange-500" },
                      { icon: Network, text: "Novos materiais", color: "bg-red-500" }
                    ].map((area, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className={`w-10 h-10 ${area.color} rounded-lg flex items-center justify-center`}>
                          <area.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{area.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    {/* Network visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-8 p-8">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.1,
                              repeat: Infinity
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Connecting lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.line
                          key={i}
                          x1={`${20 + (i % 4) * 20}%`}
                          y1={`${30 + Math.floor(i / 4) * 40}%`}
                          x2={`${40 + (i % 3) * 20}%`}
                          y2={`${50 + Math.floor(i / 3) * 20}%`}
                          stroke="url(#gradient)"
                          strokeWidth="1"
                          opacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: i * 0.2 }}
                        />
                      ))}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alinhamento Estratégico */}
      <section id="alinhamento" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
              Alinhamento Estratégico PDI 2024-2028
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                number: "01",
                title: "OE-4: Parcerias Estratégicas",
                description: "Expandir parcerias com organizações públicas e privadas para ampliar oportunidades no mercado de trabalho."
              },
              {
                number: "02",
                title: "OE-16: Fortalecimento da Pesquisa",
                description: "Fortalecer atividades de pesquisa, priorizando captação de recursos e colaboração interdisciplinar."
              },
              {
                number: "03",
                title: "OE-19: Ecossistema de Inovação",
                description: "Estabelecer ambiente que apoie eventos de empreendedorismo e promova funcionamento eficaz de incubadoras."
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{item.number}</div>
                    <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Serviços Oferecidos */}
      <section id="servicos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Serviços Oferecidos</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Target,
                title: "Consultoria e Captação de Recursos",
                description: "Apoio técnico especializado na elaboração de projetos de P&D e inovação, para captação de recursos públicos e privados."
              },
              {
                icon: Award,
                title: "Gestão da Propriedade Intelectual",
                description: "Suporte para registro e proteção de ativos tecnológicos (patentes, softwares, marcas e desenhos industriais)."
              },
              {
                icon: Network,
                title: "Articulação Científica e Redes de Inovação",
                description: "Intermediação com laboratórios do IFCE, universidades e ICTs parceiras, para acesso à infraestrutura e serviços tecnológicos."
              },
              {
                icon: BookOpen,
                title: "Capacitação e Desenvolvimento Empresarial",
                description: "Oficinas e workshops em finanças, inovação aberta, supply chain, planejamento estratégico e internacionalização."
              },
              {
                icon: Users,
                title: "Mentoria e Modelagem de Negócios",
                description: "Acompanhamento na criação e validação de modelos de negócio tecnológicos, tração de mercado e escalabilidade industrial."
              },
              {
                icon: Building2,
                title: "Infraestrutura Compartilhada e Acompanhamento",
                description: "Acesso a espaços físicos e digitais equipados. Monitoramento contínuo das startups com indicadores de desempenho."
              }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-slate-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Entregas e Metas */}
      <section id="metas" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Entregas e Metas</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                number: "10",
                title: "Startups Graduadas",
                description: "Meta de graduação de Deep Techs até o final do projeto em 2 anos.",
                color: "from-blue-500 to-blue-600"
              },
              {
                number: "3",
                title: "Parcerias Estratégicas",
                description: "Captação mínima de parcerias com setor produtivo e órgãos de fomento.",
                color: "from-green-500 to-green-600"
              },
              {
                number: "16",
                title: "Módulos de Capacitação",
                description: "Trilha empreendedora completa especializada em Deep Techs.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((meta, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className={`text-6xl font-bold bg-gradient-to-r ${meta.color} bg-clip-text text-transparent mb-4`}>
                      {meta.number}
                    </div>
                    <CardTitle className="text-xl text-slate-800">{meta.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{meta.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 text-center">Outras Entregas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Workshop de qualificação Deep Techs",
                    "Publicação do edital de seleção",
                    "Apoio à elaboração de planos de negócios",
                    "Relatório de acompanhamento das startups"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Cronograma */}
      <section id="cronograma" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
              Cronograma e Próximos Passos
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                period: "Novembro 2025",
                events: [
                  "Workshop de lançamento Deep Tech Hub – Incubadora Tecnológica IFCE Maracanaú",
                  "Lançamento do Edital 2025 Deep Tech Hub – Incubadora Tecnológica IFCE Maracanaú"
                ]
              },
              {
                period: "2025-2026",
                events: ["Lançamento dos primeiros editais, execução da trilha empreendedora e captação de parcerias."]
              },
              {
                period: "2026-2027",
                events: ["Consolidação dos serviços, acompanhamento das startups incubadas e preparação para graduações."]
              },
              {
                period: "Dezembro 2027",
                events: ["Término previsto com meta de 10 startups Deep Tech graduadas e ecossistema consolidado."]
              }
            ].map((timeline, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      {timeline.period}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {timeline.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-start space-x-3">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <blockquote className="text-xl text-slate-700 italic text-center leading-relaxed">
                  "A Deep Tech Hub será o elo estratégico entre ciência e indústria, transformando pesquisas aplicadas 
                  em soluções disruptivas com impacto socioeconômico regional e nacional."
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contatos */}
      <section id="contatos" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Contatos</h2>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto"
            {...fadeInUp}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-800">Entre em Contato</CardTitle>
                <CardDescription>
                  Para mais informações sobre a Deep Tech Hub, entre em contato conosco:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <a 
                      href="mailto:mairanobre@ifce.edu.br" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      mairanobre@ifce.edu.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-medium text-slate-800">Telefone</p>
                    <a 
                      href="tel:+5588996383390" 
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      +55 (88) 99638-3390
                    </a>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    onClick={() => window.open('mailto:mairanobre@ifce.edu.br', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
                  >
                    Enviar Email
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-red-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold">Deep Tech Hub</span>
          </div>
          <p className="text-slate-400">
            © 2025 Deep Tech Hub - Incubadora Tecnológica IFCE Maracanaú. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
