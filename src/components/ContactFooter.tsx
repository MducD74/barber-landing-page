import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import HLSVideoPlayer from './HLSVideoPlayer'
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'

export default function ContactFooter() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const marqueeContent = marquee.querySelector('.marquee-content')
    if (!marqueeContent) return

    gsap.to(marqueeContent, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <HLSVideoPlayer
        src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
        className="absolute inset-0 w-full h-full"
        scale="scale-y-[-1]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 pt-16 md:pt-20 pb-8 md:pb-12">
        {/* Marquee */}
        <div
          ref={marqueeRef}
          className="overflow-hidden mb-16 md:mb-20 py-8 md:py-12"
        >
          <div className="marquee-content flex whitespace-nowrap">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className="text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary/20 mx-8"
                >
                  HIỀN BARBER • CẮT TÓC NAM • UỐN • NHUỘM • TẠO KIỂU •
                </span>
              ))}
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 border-t border-stroke/30 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Địa chỉ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Địa chỉ
              </h3>

              <p className="text-sm text-muted leading-7">
                425 Núi Thành
                <br />
                Quận Hải Châu
                <br />
                Thành phố Đà Nẵng
              </p>
            </motion.div>

            {/* Liên hệ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Liên hệ
              </h3>

              <div className="flex flex-col gap-3 items-center md:items-start">
                <a
                  href="tel:0901234567"
                  className="text-sm text-muted hover:text-text-primary transition-colors flex items-center gap-2"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>0775 091 420</span>
                </a>

                <a
                  href="https://zalo.me/0775091420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-text-primary transition-colors flex items-center gap-2"
                >
                  <SiZalo className="w-5 h-5" />
                  <span>Zalo</span>
                </a>

                <a
                  href="https://www.facebook.com/hien.barber.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-text-primary transition-colors flex items-center gap-2"
                >
                  <FaFacebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </motion.div>

            {/* Giờ mở cửa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Giờ mở cửa
              </h3>

              <p className="text-sm text-muted leading-7">
                Thứ 2 - Chủ nhật
                <br />
                08:00 - 20:30
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2 mt-5">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <span className="text-xs text-muted">
                  Đang mở cửa - Sẵn sàng phục vụ
                </span>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="text-center mt-10 pt-8 border-t border-stroke/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted/60 font-body">
              © 2026 Hiền Barber. Chuyên cắt tóc nam, uốn, nhuộm, tạo kiểu và
              chăm sóc tóc.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}