import React, { useState } from 'react';

export default function CardProduto({ nome, valor, qtestoque, imagem, linkShopee }) {
  const [quantidade, setQuantidade] = useState(1);

  const incrementar = () => {
    if (quantidade < qtestoque) setQuantidade(quantidade + 1);
  };

  const decrementar = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm flex flex-col border border-pink-100">
      
      {/* 1. Mudança da Imagem: Altura controlada, centralizada e SEM CORTES (object-contain) */}
      <div 
        className="w-full bg-white flex items-center justify-center overflow-hidden border-b border-pink-50" 
        style={{ height: '240px', padding: '16px' }} // O padding de 16px impede que a foto toque as bordas
      >
        <img 
          src={imagem} 
          alt={nome} 
          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Conteúdo e Informações do Card */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          {/* Nome do Produto */}
          <h3 className="text-gray-800 font-semibold text-base line-clamp-2 h-12 leading-tight mb-2">
            {nome}
          </h3>

          {/* Preço de Destaque */}
          <p className="text-pink-600 font-extrabold text-2xl mb-1">
            {valor}
          </p>

          {/* Controle de Estoque */}
          <p className="text-gray-400 text-xs mb-4">
            Estoque disponível: {qtestoque}
          </p>
        </div>

        <div>
          {/* Seletor de Quantidade */}
          <div className="flex items-center justify-between mb-4 bg-gray-50 p-2 rounded-xl border border-gray-100">
            <span className="text-gray-600 font-medium text-sm">Qtd:</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={decrementar}
                disabled={quantidade <= 1}
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-100 active:scale-95 disabled:opacity-50 transition-all"
              >
                -
              </button>
              <span className="font-bold text-gray-800 text-base min-w-[16px] text-center">
                {quantidade}
              </span>
              <button 
                onClick={incrementar}
                disabled={quantidade >= qtestoque}
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-100 active:scale-95 disabled:opacity-50 transition-all"
              >
                +
              </button>
            </div>
          </div>

          {/* Botão de Compra Direcionando para a Shopee */}
          <a 
            href={linkShopee}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-center block transition-colors duration-300 shadow-md shadow-orange-500/10 active:scale-[0.98]"
          >
            Comprar na Shopee
          </a>
        </div>
      </div>

    </div>
  );
}