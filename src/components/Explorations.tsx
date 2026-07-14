import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 👉 Thay đường dẫn ảnh (src) bằng ảnh thật của tiệm bạn.
// Có thể để trong thư mục /public/images/kieu-toc/ rồi trỏ src vào đó,
// hoặc dùng link ảnh từ CDN/Cloudinary của bạn.
const kieuToc = [
  {
    id: 1,
    ten: 'Undercut nam tính',
    moTa: 'Hai bên cạo gọn, phần trên để dài tạo điểm nhấn mạnh mẽ, phù hợp phong cách năng động.',
    src: '/images/kieu-toc/undercut-nam.jpg',
  },
  {
    id: 2,
    ten: 'Bob layer nữ tính',
    moTa: 'Tóc bob cắt tỉa layer nhẹ, ôm gọn khuôn mặt, dễ tạo kiểu mỗi ngày.',
    src: '/images/kieu-toc/bob-layer.jpg',
  },
  {
    id: 3,
    ten: 'Xoăn sóng nước',
    moTa: 'Nếp xoăn tự nhiên mềm mại, bồng bềnh, mang lại vẻ ngoài quyến rũ.',
    src: '/images/kieu-toc/xoan-song-nuoc.jpg',
  },
  {
    id: 4,
    ten: 'Pixie cá tính',
    moTa: 'Tóc ngắn cắt tỉa gọn gàng, tôn nét thanh thoát và cá tính riêng.',
    src: '/images/kieu-toc/pixie.jpg',
  },
  {
    id: 5,
    ten: 'Nhuộm Balayage',
    moTa: 'Kỹ thuật nhuộm loang màu tự nhiên, tạo hiệu ứng ánh sáng cho mái tóc.',
    src: '/images/kieu-toc/balayage.jpg',
  },
  {
    id: 6,
    ten: 'Tóc dài uốn cụp',
    moTa: 'Phần đuôi uốn cụp nhẹ nhàng, giữ nét mềm mại và sang trọng.',
    src: '/images/kieu-toc/uon-cup.jpg',
  },
]

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [kieuDangChon, setKieuDangChon] = useState<number | null>(null)

  useEffect(() => {
    if (!contentRef.current || !containerRef.current) return

    const ctx = gsap.context(() => {
      // Ghim phần nội dung khi cuộn
      ScrollTrigger.create({
        trigger: contentRef.current,
        pin: contentRef.current,
        pinSpacing: false,
        start: 'top center',
        end: 'bottom center',
      })

      // Hiệu ứng parallax cho các thẻ ảnh
      const cards = contentRef.current?.querySelectorAll('.parallax-card')
      cards?.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -100 : 100,
          rotation: index % 2 === 0 ? -5 : 5,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            markers: false,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const kieuChiTiet = kieuToc.find((k) => k.id === kieuDangChon)

  return (
    <section ref={containerRef} className="min-h-[300vh] bg-bg relative">
      {/* Nội dung được ghim */}
      <div
        ref={contentRef}
        className="h-screen flex flex-col items-center justify-center px-4"
      >
        {/* Tiêu đề */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-6 font-body">
            Bộ sưu tập
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic mb-6">
            Những kiểu tóc <span className="text-text-primary">đẹp nhất</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-md mx-auto font-body">
            Tuyển chọn những mẫu tóc được yêu thích tại salon, chạm để xem chi tiết.
          </p>
        </motion.div>

        {/* Lưới hiển thị các kiểu tóc */}
        <div className="grid grid-cols-2 gap-12 md:gap-20 max-w-[1400px]">
          {/* Cột trái */}
          <div className="space-y-20">
            {kieuToc.slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                className="parallax-card aspect-square max-w-[320px] rounded-2xl overflow-hidden bg-surface border border-stroke hover:border-[#89AACC] cursor-pointer group relative"
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setKieuDangChon(item.id)}
              >
                <img
                  src={item.src}
                  alt={item.ten}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-white font-body">{item.ten}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cột phải (lệch xuống) */}
          <div className="space-y-20 pt-24">
            {kieuToc.slice(3, 6).map((item) => (
              <motion.div
                key={item.id}
                className="parallax-card aspect-square max-w-[320px] rounded-2xl overflow-hidden bg-surface border border-stroke hover:border-[#89AACC] cursor-pointer group relative"
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setKieuDangChon(item.id)}
              >
                <img
                  src={item.src}
                  alt={item.ten}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-white font-body">{item.ten}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nút xem thêm trên Dribbble */}
        {/* <motion.button
          className="mt-12 rounded-full px-6 py-3 text-sm border border-stroke hover:border-[#89AACC] text-text-primary font-body transition-all hover:shadow-lg hover:shadow-[#89AACC]/20"
          whileHover={{ scale: 1.05 }}
        >
          Xem thêm trên Dribbble ↗
        </motion.button> */}
      </div>

      {/* Hộp thoại phóng to ảnh (lightbox) */}
      <AnimatePresence>
        {kieuChiTiet && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setKieuDangChon(null)}
          >
            <motion.div
              className="bg-surface border border-stroke rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-square mb-6 rounded-2xl overflow-hidden">
                <img
                  src={kieuChiTiet.src}
                  alt={kieuChiTiet.ten}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-display italic text-text-primary mb-4">
                {kieuChiTiet.ten}
              </h3>

              <p className="text-muted font-body mb-6">{kieuChiTiet.moTa}</p>

              {/* <div className="flex gap-3">
                <motion.button
                  className="flex-1 py-3 rounded-full bg-text-primary text-bg font-body font-medium hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  Đặt lịch kiểu tóc này
                </motion.button>
                <motion.button
                  className="py-3 px-6 rounded-full border border-stroke text-text-primary font-body font-medium hover:border-[#89AACC] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setKieuDangChon(null)}
                >
                  Đóng
                </motion.button>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}