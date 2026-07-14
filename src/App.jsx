// 1. Importação do Componente Card
import CardProduto from "./components/CardProduto";

// 2. Importação de TODAS as fotos locais da pasta assets
import imgBanner from "./assets/Banner-Regiane-Cosmeticos.png";
import imgKayak from "./assets/kayak-masc.png";
import imgNaturaDom from "./assets/natura-homem-dom.png";
import imgNaturaHumor from "./assets/natura-humor.png";
import imgHumorProprio from "./assets/natura-humor-proprio.png";
import imgBioInstinto from "./assets/bio-instinto.png";
import imgMacadamia from "./assets/macadamia.png";
import imgFlorPera from "./assets/nat-todo-dia-flor-de-pera.png";
import imgTodaNoite from "./assets/sab-todo-dia-toda-noite.png";
import imgSiage from "./assets/siage.png";

export default function App() {
  // 3. Sua lista de produtos apontando para as variáveis das imagens importadas
  const meusProdutos = [
    {
      id: 1,
      nome: "Natura Kaiak Masculino Desodorante Colônia",
      valor: "R$ 172,90",
      qtestoque: 1,
      imagem: imgKayak, // Aqui passamos a variável da foto importada lá em cima!
      linkShopee: "https://shopee.com.br"
    },
    {
      id: 2,
      nome: "Natura Homem Dom Colônia Masculina",
      valor: "R$ 184,90",
      qtestoque: 3,
      imagem: imgNaturaDom,
      linkShopee: "https://shopee.com.br"
    },
    {
      id: 3,
      nome: "Kit Natura Humor a Dois 100ml + Shampoo",
      valor: "R$ 145,00",
      qtestoque: 2,
      imagem: imgNaturaHumor,
      linkShopee: "https://shopee.com.br"
    },
    {
      id: 4,
      nome: "Natura Humor Próprio Desodorante Colônia 75ml",
      valor: "R$ 134,90",
      qtestoque: 3,
      imagem: imgHumorProprio,
      linkShopee: "https://shopee.com.br"
    },
    {
      id: 5,
      nome: "Sabonete Íntimo Bio Instinto 17 Ervas 200ml",
      valor: "R$ 19,90",
      qtestoque: 1,
      imagem: imgBioInstinto,
      linkShopee: "https://shopee.com.br"
    },
    {
      id: 6,
      nome: "Creme para o Corpo Natura Tododia Macadâmia 400ml",
      valor: "R$ 65,90",
      qtestoque: 1,
      imagem: imgMacadamia,
      linkShopee: "https://shopee.com.br"
    },
    {
      id: 7,
      nome: "Creme Natura Tododia Flor de Pêra e Melissa 400ml",
      valor: "R$ 65,90",
      qtestoque: 2,
      imagem: imgFlorPera,
      linkShopee: "https://shopee.com.br"
    },
    {
      id: 8,
      nome: "Sabonete Natura Tododia Toda Noite",
      valor: "R$ 26,90",
      qtestoque: 1,
      imagem: imgTodaNoite,
      linkShopee: "https://shopee.com.br"
    },
    {
      id: 9,
      nome: "Eudora Siàge Hair Plastia (Shampoo + Condicionador)",
      valor: "R$ 89,90",
      qtestoque: 1,
      imagem: imgSiage,
      linkShopee: "https://shopee.com.br"
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50/50 flex flex-col justify-between">
      
      {/* CABEÇALHO */}
      {/* CABEÇALHO PREMIUM */}
      {/* CABEÇALHO COM BANNER PERSONALIZADO */}
     {/* CABEÇALHO COM BANNER TOTALMENTE EXPANDIDO */}
      <header className="bg-white border-b border-pink-100 shadow-sm w-full">
        {/* Faixa superior com mais altura e destaque */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm py-3.5 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-semibold tracking-wide">
            <span className="uppercase text-center sm:text-left">
              ✨ Novidades Natura & Eudora com pronta entrega!
            </span>
            <a 
              href="https://wa.me/5511999999999" // Substitua pelo link do WhatsApp real da Regiane
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:bg-white hover:text-pink-600 flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full transition-all duration-300 text-xs shadow-sm"
            >
              💬 Fale Conosco no WhatsApp
            </a>
          </div>
        </div>

        {/* Área do Banner - Ocupando 100% da largura da tela, sem bordas ou limites */}
        <div className="w-full overflow-hidden">
          <img 
            src={imgBanner} 
            alt="Banner Regiane Cosméticos" 
            className="w-full h-auto block"
          />
        </div>
      </header>
      {/* CORPO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 py-10 flex-grow">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">
            Catálogo Pronta Entrega
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Selecione a quantidade desejada e compre diretamente na nossa loja parceira da Shopee.
          </p>
        </div>

        {/* GRADE DE PRODUTOS */}
        <div className="flex flex-wrap gap-8 justify-center">
          {meusProdutos.map((produto) => (
            <CardProduto
              key={produto.id}
              nome={produto.nome}
              valor={produto.valor}
              qtestoque={produto.qtestoque}
              imagem={produto.imagem}
              linkShopee={produto.linkShopee}
            />
          ))}
        </div>

      </main>

      {/* RODAPÉ */}
      <footer className="bg-white border-t border-pink-100 py-6 text-center">
        <p className="text-xs text-gray-400">
          &copy; 2026 Regiane Cosméticos. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
}