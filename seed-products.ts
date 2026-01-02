import { db } from '@/lib/db'

const sampleProducts = [
  {
    name: 'Laptop Gaming ROG Strix G15',
    description: 'Laptop gaming high-end dengan RTX 4060 dan AMD Ryzen 7',
    category: 'Laptop',
    price: 15999000,
    imageUrl: '/images/laptop-gaming.jpg',
    inStock: true,
    features: JSON.stringify(['RTX 4060', 'AMD Ryzen 7', '16GB RAM', '512GB SSD', '144Hz Display'])
  },
  {
    name: 'PC Desktop Intel Core i5',
    description: 'PC desktop untuk produktivitas dan gaming ringan',
    category: 'Desktop',
    price: 8999000,
    imageUrl: '/images/desktop-pc.jpg',
    inStock: true,
    features: JSON.stringify(['Intel Core i5-12400F', '8GB RAM', '256GB SSD', 'GTX 1660 Super', 'Windows 11'])
  },
  {
    name: 'Samsung Galaxy S23 Ultra',
    description: 'Smartphone flagship dengan kamera 200MP',
    category: 'Smartphone',
    price: 18999000,
    imageUrl: '/images/samsung-s23.jpg',
    inStock: true,
    features: JSON.stringify(['200MP Camera', '12GB RAM', '256GB Storage', '5000mAh Battery', 'S Pen Support'])
  },
  {
    name: 'iPad Air 5th Gen',
    description: 'Tablet premium dengan M1 chip untuk produktivitas',
    category: 'Tablet',
    price: 9999000,
    imageUrl: '/images/ipad-air.jpg',
    inStock: true,
    features: JSON.stringify(['M1 Chip', '10.9" Display', '64GB Storage', 'Touch ID', 'Apple Pencil Support'])
  },
  {
    name: 'Mechanical Gaming Keyboard RGB',
    description: 'Keyboard mechanical dengan switch blue dan RGB lighting',
    category: 'Aksesoris',
    price: 899000,
    imageUrl: '/images/mechanical-keyboard.jpg',
    inStock: true,
    features: JSON.stringify(['Blue Switch', 'RGB Backlight', 'Aluminum Frame', 'Anti-Ghosting', 'USB-C Connection'])
  },
  {
    name: 'Wireless Gaming Mouse',
    description: 'Mouse gaming wireless dengan sensor 16000 DPI',
    category: 'Aksesoris',
    price: 599000,
    imageUrl: '/images/gaming-mouse.jpg',
    inStock: true,
    features: JSON.stringify(['16000 DPI', 'Wireless', 'RGB Lighting', ' programmable buttons', '70hr Battery'])
  },
  {
    name: 'Gaming Headset 7.1 Surround',
    description: 'Headset gaming dengan audio 7.1 surround sound',
    category: 'Aksesoris',
    price: 799000,
    imageUrl: '/images/gaming-headset.jpg',
    inStock: true,
    features: JSON.stringify(['7.1 Surround', 'Noise Cancelling', 'RGB Lighting', 'Detachable Microphone', '3.5mm & USB'])
  },
  {
    name: 'WiFi 6 Router AX3000',
    description: 'Router WiFi 6 dengan kecepatan hingga 3Gbps',
    category: 'Networking',
    price: 1299000,
    imageUrl: '/images/wifi-router.jpg',
    inStock: true,
    features: JSON.stringify(['WiFi 6', 'AX3000 Speed', '4x4 MU-MIMO', 'Gigabit Ports', 'Mobile App Control'])
  },
  {
    name: 'Monitor 27" 4K IPS',
    description: 'Monitor 4K dengan panel IPS untuk warna akurat',
    category: 'Monitor',
    price: 5999000,
    imageUrl: '/images/4k-monitor.jpg',
    inStock: true,
    features: JSON.stringify(['4K Resolution', 'IPS Panel', '60Hz', 'HDR Support', 'USB-C Hub'])
  },
  {
    name: 'NVIDIA RTX 4070 Ti',
    description: 'Graphics card terbaru untuk gaming 4K',
    category: 'Components',
    price: 12999000,
    imageUrl: '/images/rtx-4070.jpg',
    inStock: true,
    features: JSON.stringify(['12GB VRAM', 'DLSS 3', 'Ray Tracing', '3x DisplayPort', '1x HDMI'])
  },
  {
    name: 'External SSD 1TB USB-C',
    description: 'Storage eksternal cepat dengan USB-C',
    category: 'Storage',
    price: 1599000,
    imageUrl: '/images/external-ssd.jpg',
    inStock: true,
    features: JSON.stringify(['1TB Capacity', 'USB-C', 'Read 1050MB/s', 'Write 1000MB/s', 'Shock Resistant'])
  },
  {
    name: 'Webcam Full HD 1080p',
    description: 'Webcam berkualitas tinggi untuk meeting online',
    category: 'Aksesoris',
    price: 499000,
    imageUrl: '/images/webcam.jpg',
    inStock: true,
    features: JSON.stringify(['1080p Resolution', 'Auto Focus', 'Noise Reduction', 'Wide Angle', 'Clip Mount'])
  }
]

async function seedProducts() {
  try {
    console.log('Seeding products...')
    
    for (const product of sampleProducts) {
      await db.product.create({
        data: product
      })
    }
    
    console.log('Products seeded successfully!')
  } catch (error) {
    console.error('Error seeding products:', error)
  } finally {
    await db.$disconnect()
  }
}

seedProducts()