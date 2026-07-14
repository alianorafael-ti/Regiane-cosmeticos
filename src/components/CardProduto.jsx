import { useState } from "react";

export default function CardProduto(props) {
    const [contador, setcontador] = useState(1);

    function aumentar(){
        setcontador(contador + 1);
    }
    
    function diminuir(){
        if (contador > 1) {
            setcontador(contador - 1);
        }
    }

    return (
        // 1. O Card principal (borda arredondada, sombra suave e limite de largura)
        <div className="w-72 bg-white border border-pink-100 rounded-xl shadow-md overflow-hidden">
            
            {/* 2. Imagem do produto */}
            <img 
                src={props.imagem} 
                alt={props.nome} 
                className="w-full h-48 object-cover" 
            />

            {/* 3. Detalhes do Produto */}
            <div className="p-4">
                {/* Nome do Produto */}
                <h3 className="text-lg font-bold text-gray-800 truncate">
                    {props.nome}
                </h3>
                
                {/* Preço */}
                <p className="text-2xl font-black text-pink-600 mt-2">
                    {props.valor}
                </p>
                
                {/* Estoque */}
                <p className="text-sm text-gray-400 mt-1">
                    Estoque disponível: {props.qtestoque}
                </p>

                {/* 4. Seletor de Quantidade (Contador) */}
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg mt-4">
                    <span className="text-sm font-bold text-gray-600">Qtd:</span>
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={diminuir} 
                            className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full font-bold flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors"
                        >
                            -
                        </button>
                        <span className="text-lg font-bold text-gray-800 min-w-[20px] text-center">
                            {contador}
                        </span>
                        <button 
                            onClick={aumentar} 
                            className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full font-bold flex items-center justify-center hover:bg-pink-100 hover:text-pink-600 transition-colors"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* 5. Botão de Redirecionamento para a Shopee */}
                <div className="mt-4">
                    <a 
                        href={props.linkShopee} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-4 rounded-lg transition-colors shadow-sm"
                    >
                        Comprar na Shopee
                    </a>
                </div>
            </div>
        </div>
    );
}