import { motion } from "framer-motion"

export const Header = () => {
    return (
        <motion.header 
            initial={{ opacity: 0, translateY: -300 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeIn"
            }}
            className="w-full bg-[#ffd52e] px-8 py-2 flex justify-between items-center fixed top-0 left-0 z-50 font-inter shadow-sm"
        >
            <img
                src="https://eletrostore.pages.dev/loja.png"
                alt=""
                className="h-auto w-full max-w-24"
            />

            <motion.a
                href=""
                target="_blank"
                className="underline text-lg text-zinc-900 py-2 px-4 rounded-lg hover:bg-yellow-200 transition-all duration-200"
            >
                Grupo
            </motion.a>
        </motion.header>
    )
}