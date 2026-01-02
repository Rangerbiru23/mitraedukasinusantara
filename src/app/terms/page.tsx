'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowLeft, FileText, CheckCircle, AlertCircle, Gavel, Users, ShoppingBag, Shield, Clock } from 'lucide-react'

export default function TermsAndConditions() {
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
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    PT MITRA EDUKASI NUSANTARA
                  </h1>
                  <p className="text-xs text-gray-500">Terms & Conditions</p>
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
                onClick={() => window.location.href = '/privacy'}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
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
                onClick={() => window.location.href = '/privacy'}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Gavel className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Syarat dan ketentuan penggunaan layanan <span className="font-semibold">PT MITRA EDUKASI NUSANTARA</span>
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
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Pendahuluan
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selamat datang di <span className="font-semibold text-blue-600">PT MITRA EDUKASI NUSANTARA</span>. 
                  Syarat dan Ketentuan ini mengatur penggunaan layanan kami, termasuk pembelian produk komputer dan peralatannya 
                  melalui platform kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini. 
                  Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, jangan gunakan layanan kami.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <ShoppingBag className="w-6 h-6 mr-3 text-purple-600" />
                Layanan Kami
              </h2>
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Produk yang Ditawarkan</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Komputer desktop dan laptop dari berbagai merek</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Smartphone dan tablet</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Aksesoris komputer dan peripheral</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Peralatan networking dan komponen PC</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-green-600" />
                Tanggung Jawab Pengguna
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Informasi Akurat",
                    description: "Memberikan informasi yang benar dan lengkap saat pendaftaran",
                    icon: CheckCircle,
                    color: "green"
                  },
                  {
                    title: "Keamanan Akun",
                    description: "Menjaga kerahasiaan kredensial login dan akses akun",
                    icon: Shield,
                    color: "blue"
                  },
                  {
                    title: "Penggunaan yang Wajar",
                    description: "Menggunakan layanan untuk tujuan yang sah dan legal",
                    icon: Users,
                    color: "purple"
                  },
                  {
                    title: "Kepatuhan",
                    description: "Mematuhi semua hukum dan peraturan yang berlaku",
                    icon: Gavel,
                    color: "orange"
                  }
                ].map((responsibility, index) => (
                  <div key={index} className={`bg-${responsibility.color}-50 rounded-xl p-6 border border-${responsibility.color}-100`}>
                    <div className="flex items-start">
                      <responsibility.icon className={`w-6 h-6 mr-3 text-${responsibility.color}-600 flex-shrink-0 mt-1`} />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{responsibility.title}</h3>
                        <p className="text-gray-600 text-sm">{responsibility.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <ShoppingBag className="w-6 h-6 mr-3 text-orange-600" />
                Syarat Pembayaran
              </h2>
              <div className="space-y-6">
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Metode Pembayaran</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Transfer bank ke rekening resmi PT MITRA EDUKASI NUSANTARA</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Pembayaran tunai di toko fisik</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Pembayaran melalui platform pembayaran digital yang bekerja sama</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                    Kebijakan Pengembalian
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Pengembalian produk dalam 7 hari sejak pembelian</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Produk harus dalam kondisi asli dan tidak rusak</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Biaya pengiriman pengembalian ditanggung pembeli</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Warranty */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-indigo-600" />
                Garansi Produk
              </h2>
              <div className="bg-indigo-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  Semua produk yang dijual oleh <span className="font-semibold text-blue-600">PT MITRA EDUKASI NUSANTARA</span> 
                  dilengkapi dengan garansi resmi dari produsen:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Garansi Hardware</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 1-3 tahun untuk komputer dan laptop</li>
                      <li>• 1 tahun untuk komponen PC</li>
                      <li>• 6 bulan - 1 tahun untuk aksesoris</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Syarat Garansi</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Kerusakan bukan karena kesalahan pengguna</li>
                      <li>• Tidak ada modifikasi tidak resmi</li>
                      <li>• Kelengkapan produk masih utuh</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3 text-red-600" />
                Pembatasan Tanggung Jawab
              </h2>
              <div className="bg-red-50 rounded-xl p-6">
                <div className="space-y-4 text-gray-600">
                  <p>
                    <span className="font-semibold text-blue-600">PT MITRA EDUKASI NUSANTARA</span> tidak bertanggung jawab atas:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Kerugian tidak langsung, insidental, atau konsekuensial</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Kehilangan data atau kerusakan akibat penggunaan produk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Keterlambatan pengiriman di luar kendali kami</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Kesalahan yang disebabkan oleh pihak ketiga</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-gray-600" />
                Perubahan Syarat dan Ketentuan
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku efektif 
                  segera setelah dipublikasikan di website kami.
                </p>
                <p className="text-gray-600">
                  Penggunaan terus menerus layanan kami setelah perubahan merupakan persetujuan Anda 
                  terhadap syarat dan ketentuan yang diperbarui.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Pertanyaan tentang Syarat & Ketentuan?</h2>
              <p className="text-blue-100 mb-6">
                Jika Anda memiliki pertanyaan tentang syarat dan ketentuan kami, 
                jangan ragu untuk menghubungi tim legal kami.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  <span>legal@ptmitraedukasinusantara.com</span>
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
                  <Gavel className="w-6 h-6 text-white" />
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
                <li><button onClick={() => window.location.href = '/privacy'} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => window.location.href = '/terms'} className="text-white">Terms & Conditions</button></li>
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