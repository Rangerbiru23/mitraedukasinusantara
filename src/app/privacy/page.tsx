'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Globe, FileText } from 'lucide-react'

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={goBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    PT MITRA EDUKASI NUSANTARA
                  </h1>
                  <p className="text-xs text-gray-500">Privacy Policy</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => window.location.href = '/'}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Beranda
              </button>
              <button
                onClick={() => window.location.href = '/terms'}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Terms & Conditions
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
              >
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
                onClick={() => window.location.href = '/'}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                Beranda
              </button>
              <button
                onClick={() => window.location.href = '/terms'}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Kebijakan privasi <span className="font-semibold">PT MITRA EDUKASI NUSANTARA</span> dalam melindungi data pribadi Anda
          </p>
          <div className="mt-8 inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <FileText className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Terakhir diperbarui: 1 Januari 2024</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-blue-600" />
                Pendahuluan
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selamat datang di <span className="font-semibold text-blue-600">PT MITRA EDUKASI NUSANTARA</span>. 
                  Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda 
                  ketika Anda menggunakan layanan kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini. 
                  Jika Anda tidak setuju dengan praktik-praktik ini, jangan gunakan layanan kami.
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-purple-600" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Nama lengkap, alamat email, nomor telepon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Alamat pengiriman dan penagihan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Informasi pembayaran (diproses melalui pihak ketiga yang aman)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Informasi Teknis</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Alamat IP dan jenis browser</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Informasi perangkat dan sistem operasi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cookie dan data tracking lainnya</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-green-600" />
                Penggunaan Informasi
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Untuk Menyediakan Layanan",
                    description: "Memproses pesanan, pengiriman, dan layanan pelanggan",
                    color: "blue"
                  },
                  {
                    title: "Untuk Peningkatan Layanan",
                    description: "Menganalisis penggunaan untuk meningkatkan pengalaman pengguna",
                    color: "purple"
                  },
                  {
                    title: "Untuk Komunikasi",
                    description: "Mengirim informasi produk, promosi, dan update layanan",
                    color: "green"
                  },
                  {
                    title: "Untuk Keamanan",
                    description: "Melindungi dari penipuan dan penyalahgunaan layanan",
                    color: "orange"
                  }
                ].map((usage, index) => (
                  <div key={index} className={`bg-${usage.color}-50 rounded-xl p-6 border border-${usage.color}-100`}>
                    <h3 className="font-semibold text-gray-900 mb-2">{usage.title}</h3>
                    <p className="text-gray-600 text-sm">{usage.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-red-600" />
                Keamanan Data
              </h2>
              <div className="bg-red-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold text-blue-600">PT MITRA EDUKASI NUSANTARA</span> 
                  mengimplementasikan langkah-langkah keamanan yang komprehensif untuk melindungi informasi pribadi Anda:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Enkripsi data selama transmisi dan penyimpanan</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Akses terbatas kepada personel yang berwenang</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Audit keamanan reguler dan pembaruan sistem</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Backup data yang aman dan terenkripsi</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 mr-3 text-indigo-600" />
                Hak Anda sebagai Pengguna
              </h2>
              <div className="space-y-4">
                {[
                  "Hak untuk mengakses data pribadi Anda",
                  "Hak untuk memperbaiki data yang tidak akurat",
                  "Hak untuk menghapus data pribadi Anda",
                  "Hak untuk membatasi pengolahan data",
                  "Hak untuk menarik persetujuan kapan saja"
                ].map((right, index) => (
                  <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                    <UserCheck className="w-5 h-5 mr-3 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-700">{right}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Pertanyaan tentang Privasi?</h2>
              <p className="text-blue-100 mb-6">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau bagaimana data Anda ditangani, 
                jangan ragu untuk menghubungi kami.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  <span>privacy@ptmitraedukasinusantara.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Telepon:</span>
                  <span>0852-8570-3497</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Alamat:</span>
                  <span>KOMPLEK RUKO JURNATAN B-47, Semarang</span>
                </div>
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
                  <Shield className="w-6 h-6 text-white" />
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
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => window.location.href = '/privacy'} className="text-white">Privacy Policy</button></li>
                <li><button onClick={() => window.location.href = '/terms'} className="hover:text-white transition-colors">Terms & Conditions</button></li>
                <li><button onClick={() => window.location.href = '/'} className="hover:text-white transition-colors">Kontak</button></li>
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