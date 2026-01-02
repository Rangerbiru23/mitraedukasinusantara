'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ShoppingBag, Headphones, Monitor, Smartphone, Wifi, Package, Truck, Shield, ChevronRight, Star, Users, TrendingUp, Award } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PT MITRA EDUKASI NUSANTARA
                </h1>
                <p className="text-xs text-gray-500">Solusi Teknologi Terpercaya</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'products' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Produk
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Kontak
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
                Hubungi Kami
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                Produk
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                Kontak
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trusted IT Solutions Provider
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PT MITRA EDUKASI NUSANTARA
                </span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-700">
                  Solusi Teknologi Terpercaya untuk Bisnis Anda
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Spesialis dalam perdagangan eceran komputer dan peralatannya. 
                Menyediakan produk teknologi berkualitas dengan harga terbaik 
                dan layanan purnajual yang handal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Lihat Produk
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-gray-600">1000+ Pelanggan Puas</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                      <Monitor className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Komputer & Laptop</h3>
                      <p className="text-sm text-gray-600">Berbagai merek dan spesifikasi</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                      <Smartphone className="w-12 h-12 text-purple-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Smartphone</h3>
                      <p className="text-sm text-gray-600">HP dan tablet terkini</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                      <Headphones className="w-12 h-12 text-green-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Aksesoris</h3>
                      <p className="text-sm text-gray-600">Peripheral lengkap</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                      <Wifi className="w-12 h-12 text-orange-600 mb-4" />
                      <h3 className="font-semibold text-gray-900 mb-2">Networking</h3>
                      <p className="text-sm text-gray-600">Solusi jaringan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Package className="w-4 h-4 mr-2" />
              Produk Unggulan
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produk <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Terlengkap</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Menyediakan berbagai produk teknologi terkini dengan kualitas terjamin dan harga kompetitif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Komputer & Laptop",
                description: "Desktop, laptop, dan workstation dari berbagai merek ternama dengan spesifikasi lengkap",
                features: ["Gaming", "Office", "Design", "Programming"],
                color: "blue"
              },
              {
                icon: Smartphone,
                title: "Smartphone & Tablet",
                description: "HP dan tablet terkini dengan teknologi terbaru dan harga terbaik",
                features: ["Android", "iOS", "Accessories", "Cases"],
                color: "purple"
              },
              {
                icon: Headphones,
                title: "Aksesoris Komputer",
                description: "Mouse, keyboard, headset, dan peripheral lainnya untuk produktivitas maksimal",
                features: ["Gaming Gear", "Office Setup", "Cables", "Storage"],
                color: "green"
              },
              {
                icon: Wifi,
                title: "Networking",
                description: "Router, switch, dan peralatan jaringan untuk kebutuhan kantor dan rumah",
                features: ["WiFi", "LAN", "Security", "Management"],
                color: "orange"
              },
              {
                icon: Package,
                title: "Components",
                description: "Processor, motherboard, RAM, GPU, dan komponen PC lainnya",
                features: ["CPU", "GPU", "RAM", "Storage"],
                color: "red"
              },
              {
                icon: Monitor,
                title: "Display & Monitor",
                description: "Monitor gaming, profesional, dan portable dengan berbagai ukuran",
                features: ["Gaming", "4K", "Portable", "Touchscreen"],
                color: "indigo"
              }
            ].map((product, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${product.color}-500 to-${product.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all flex items-center justify-center group-hover:scale-105">
                    Lihat Detail
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Mengapa Memilih Kami
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Keunggulan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kami</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                PT MITRA EDUKASI NUSANTARA berkomitmen memberikan produk dan layanan terbaik untuk kebutuhan teknologi Anda
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Truck,
                    title: "Pengiriman Cepat",
                    description: "Pengiriman produk tepat waktu dan aman ke seluruh Indonesia"
                  },
                  {
                    icon: Shield,
                    title: "Garansi Resmi",
                    description: "Semua produk bergaransi resmi dari produsen"
                  },
                  {
                    icon: Users,
                    title: "Layanan Pelanggan",
                    description: "Tim support siap membantu 24/7 untuk semua kebutuhan Anda"
                  },
                  {
                    icon: TrendingUp,
                    title: "Harga Kompetitif",
                    description: "Harga terbaik dengan kualitas produk yang terjamin"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
                    <p className="text-gray-600">Pelanggan Puas</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                      <p className="text-sm text-gray-600">Tahun Pengalaman</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
                      <p className="text-sm text-gray-600">Merek Produk</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                      <p className="text-sm text-gray-600">Layanan Support</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
                      <p className="text-sm text-gray-600">Produk Original</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Tentang Perusahaan
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PT MITRA EDUKASI NUSANTARA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mitra terpercaya untuk semua kebutuhan teknologi dan komputer Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
                <p className="text-blue-100 mb-6">
                  Menjadi penyedia solusi teknologi terdepan di Indonesia yang memberikan nilai tambah bagi pelanggan melalui produk berkualitas dan layanan prima.
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Menyediakan produk teknologi berkualitas dengan harga kompetitif</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Memberikan layanan pelanggan yang memuaskan dan profesional</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Berkontribusi pada kemajuan teknologi di Indonesia</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Membangun hubungan jangka panjang dengan pelanggan</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nilai-Nilai Perusahaan</h3>
                <div className="space-y-4">
                  {[
                    { title: "Integritas", description: "Berbisnis dengan jujur dan transparan" },
                    { title: "Kualitas", description: "Hanya menyediakan produk terbaik" },
                    { title: "Inovasi", description: "Selalu mengikuti perkembangan teknologi" },
                    { title: "Kepuasan Pelanggan", description: "Prioritas utama dalam setiap layanan" }
                  ].map((value, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mari <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Berkolaborasi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap membantu semua kebutuhan teknologi dan komputer Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                      <p className="text-gray-600">
                        KOMPLEK RUKO JURNATAN B-47 KELURAHAN<br />
                        Kel Purwodinatan, Kec. Semarang Tengah<br />
                        Kota Semarang, Prov. Jawa Tengah
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                      <p className="text-gray-600">0852-8570-3497</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@ptmitraedukasinusantara.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tulis pesan Anda..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-medium hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">PT MITRA EDUKASI NUSANTARA</h3>
                  <p className="text-xs text-gray-400">Solusi Teknologi Terpercaya</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Spesialis dalam perdagangan eceran komputer dan peralatannya. 
                Menyediakan produk teknologi berkualitas dengan harga terbaik.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Komputer & Laptop</button></li>
                <li><button className="hover:text-white transition-colors">Smartphone</button></li>
                <li><button className="hover:text-white transition-colors">Aksesoris</button></li>
                <li><button className="hover:text-white transition-colors">Networking</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors">Tentang Kami</button></li>
                <li><button className="hover:text-white transition-colors">Kontak</button></li>
                <li><button onClick={() => window.location.href = '/privacy'} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => window.location.href = '/terms'} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT MITRA EDUKASI NUSANTARA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}