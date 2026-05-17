import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface CardProps {
    id_interno: string;
    nome: string;
    preco_ml: number;
    preco_venda: number;
    link_ml: string
    foto_url: string;
    vendido?: boolean;
}

export const Card = ({
    id_interno,
    nome,
    preco_ml,
    preco_venda,
    link_ml,
    foto_url,
    vendido
}: CardProps) => {

    const wLink = `https://api.whatsapp.com/send/?phone=5511940092817&text=Ol%C3%A1%21+Vi+esse+produto+${nome}+(${id_interno})+no+grupo%2C+ainda+est%C3%A1+dispon%C3%ADvel%3F&type=phone_number&app_absent=0`

    return (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} animate={{ opacity: vendido ? 0.5 : 1, scale: 1 }} className={`bg-zinc-50 border rounded-md border-zinc-200 p-6 w-full max-w-80 font-inter h-auto md:h-[600px] relative flex flex-col shadow-sm overflow-hidden`}>
            {
                vendido
                &&
                <div className="absolute z-40 w-full h-full top-0 left-0">
                    <div className="absolute z-40 bg-red-700/80 w-full top-24 left-0 flex justify-center items-center">
                        <h1 className="text-xl text-white font-bold leading-normal m-2 uppercase">
                            Esgotado
                        </h1>
                    </div>
                </div>
            }
            <div className="flex justify-center items-center rounded-xl h-[200px] p-3 bg-yellow-500">
                <a href={wLink} target="_blank" className="object-contain h-full w-full bg-white rounded-lg">
                    <img
                        className="object-contain h-full w-full bg-white rounded-lg"
                        src={foto_url}
                        alt=""
                    />
                </a>
            </div>
            <h1 className="font-bold text-lg leading-normal my-2">{nome}</h1>
            <h2 className="font-normal text-md leading-normal mb-2">🏪 Mercado Livre: {preco_ml.toLocaleString("pt-br", {
                currency: "BRL",
                style: "currency"
            })}</h2>
            <h3 className="font-normal text-md leading-normal mb-2">
                🔗 Link: <a href={link_ml} className="text-blue-500 underline" target="_blank">Ver no ML</a>
            </h3>
            <h4 className="font-normal text-md leading-normal mb-4">
                💰 Valor da Venda: {preco_venda.toLocaleString("pt-br", {
                    currency: "BRL",
                    style: "currency"
                })}
            </h4>
            <div className="w-full bg-yellow-100 py-2 pr-2 pl-4 rounded-lg text-sm text-zinc-800 flex relative">
                <div className="w-[4px] bg-yellow-500 absolute top-0 left-0 h-full rounded-l-lg"></div>
                ⚠️ Aviso: IMAGEM ILUSTRATIVA - Produto testado e 100% funcional. Item de outlet (caixa aberta), por isso o preço reduzido e sem garantia.
            </div>
            <motion.a
                href={wLink}
                target="_blank"
                animate={{ transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9 }}
                className="bg-yellow-500 w-full rounded-lg py-2 px-4 md:mt-auto mt-4 flex justify-center gap-2 items-center"
            >
                Tenho interesse <Send height={18} width={18}/>
            </motion.a>
        </motion.div>
    )
}