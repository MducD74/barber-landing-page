import { motion } from 'framer-motion'

const products = [
  {
    title: 'Sáp Vuốt Tóc Volcanic Clay V5',
    type: 'Sáp tạo kiểu',
    brand: 'Apestomen',
    image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_104530_521b2f85-c0f3-4d0e-9704-b578315b4cb9.png&w=1920&q=85',
  },
  {
    title: 'Gôm Xịt Tóc Butterfly Shadow',
    type: 'Gôm giữ nếp',
    brand: 'Butterfly',
    image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103711_76ccdb8b-5043-4f47-9c54-4379713393ea.png&w=1920&q=85',
  },
  {
    title: 'Tinh Dầu Dưỡng Tóc Olaplex No.7',
    type: 'Dưỡng phục hồi',
    brand: 'Olaplex',
    image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103728_394f6a1b-85e2-4386-a4f6-408472a0a5b7.png&w=1920&q=85',
  },
  {
    title: 'Bột Rắc Phồng Tóc Osis+ Dust It',
    type: 'Bột tạo phồng',
    brand: 'Schwarzkopf',
    image: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103739_86743e0e-16a7-4bee-bf38-dd67985344dc.png&w=1920&q=85',
  },
]

export default function Products() {
  return (
    <section className="bg-bg py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <p className="text-xs text-muted uppercase tracking-[0.3em] font-body">
              Sản Phẩm
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic">
              Sản phẩm <span className="text-text-primary">chăm sóc</span>
            </h2>
            <motion.button
              className="hidden md:inline-flex rounded-full px-6 py-3 text-sm border border-stroke hover:border-[#89AACC] text-text-primary font-body transition-all hover:shadow-lg hover:shadow-[#89AACC]/20"
              whileHover={{ scale: 1.05 }}
            >
              Xem tất cả ↗
            </motion.button>
          </div>

          <p className="text-muted text-sm md:text-base mt-6 font-body max-w-2xl">
            Các dòng sản phẩm tạo kiểu và chăm sóc tóc cao cấp, được lựa chọn kỹ lưỡng để bảo vệ tóc và giữ nếp chuẩn form cả ngày dài.
          </p>
        </motion.div>

        {/* Product Entries */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-3 pr-6 bg-surface/30 hover:bg-surface border border-stroke rounded-[32px] sm:rounded-full hover:border-[#89AACC] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 flex-1">
                {/* Product Image */}
                <div className="w-16 h-16 rounded-full sm:rounded-[28px] overflow-hidden bg-stroke/20 shrink-0 relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Product Title */}
                <h3 className="text-sm md:text-base font-body text-text-primary font-medium">
                  {product.title}
                </h3>
              </div>

              {/* Product Info */}
              <div className="flex items-center gap-4 text-xs text-muted font-body whitespace-nowrap ml-20 sm:ml-0">
                <span>{product.type}</span>
                <div className="w-px h-4 bg-stroke/30" />
                <span className="font-medium text-text-primary/70">{product.brand}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All */}
        {/* <motion.button
          className="md:hidden w-full mt-8 rounded-full px-6 py-3 text-sm border border-stroke hover:border-[#89AACC] text-text-primary font-body transition-all"
          whileHover={{ scale: 1.02 }}
        >
          Xem tất cả ↗
        </motion.button> */}
      </div>
    </section>
  )
}