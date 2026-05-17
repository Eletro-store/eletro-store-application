import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../../service/products/get-all-products"
import { Spinner } from "../../components/ui/spinner"
import { Card } from "./components/card"
import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { useShowAfterScroll } from "./hooks/use-show-after-scroll"

export const Home = () => {

    const { data: products, isPending } = useQuery({
        queryKey: ["q_all_products"],
        queryFn: getAllProducts
    })

    const show = useShowAfterScroll(600);

    const handleButtonUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
    return (
        <section className="w-full flex justify-center items-center flex-wrap gap-8 p-8">
            {
                isPending 
                ?
                <Spinner 
                    className="h-16 w-16 text-yellow-500"
                />
                :
                products.map((prod: any, index: number) => {

                    const { foto_url, id_interno, link_ml, nome, preco_ml, preco_venda, vendido } = prod;

                    return (
                        <Card
                            key={index}
                            foto_url={foto_url}
                            id_interno={id_interno}
                            link_ml={link_ml}
                            nome={nome}
                            preco_ml={preco_ml}
                            preco_venda={preco_venda}
                            vendido={vendido}
                        />
                    )
                })
            }

            <motion.button
                onClick={handleButtonUp}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 rounded-lg transition-all duration-150 bg-yellow-500 grid place-items-center fixed left-8 bottom-16 ${!show ? "opacity-0" : "opacity-100"}`}
            >
                <ChevronUp
                    className="text-zinc-50 h-8 w-8"
                />
            </motion.button>
        </section>
    )
}