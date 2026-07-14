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
  // 3. Sua lista de produtos oficial
  const meusProdutos = [
    {
      id: 1,
      nome: "Natura Kaiak Masculino Desodorante Colônia",
      valor: "R$ 172,90",
      qtestoque: 1,
      imagem: imgKayak,
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
    // Fundo rosa pastel definido
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: '#fce7f3' }}>
      
      {/* CABEÇALHO */}
      <header className="w-full bg-white relative">
        {/* Tarja Rosa */}
        <div 
          className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 relative z-10 shadow-md flex items-center"
          style={{ padding: '32px 24px' }} 
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4 font-semibold tracking-wide">
            <span 
              className="uppercase text-center sm:text-left font-bold" 
              style={{ fontSize: '16px' }}
            >
              ✨ Novidades Natura & Eudora com pronta entrega!
            </span>
            
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:bg-white hover:text-pink-600 flex items-center gap-2 bg-white/15 px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm font-bold"
              style={{ fontSize: '18px' }}
            >
              💬 Fale Conosco no WhatsApp
            </a>
          </div>
        </div>

        {/* Banner com margem negativa */}
        <div 
          className="w-full overflow-hidden relative z-0"
          style={{ marginTop: '-48px' }}
        >
          <img 
            src={imgBanner} 
            alt="Banner Regiane Cosméticos" 
            className="w-full h-auto block"
          />
        </div>
      </header>

      {/* CORPO PRINCIPAL - Largura total sem travas externas para poder centralizar perfeitamente */}
      <main className="w-full py-10 flex-grow">
        
        {/* Título */}
        <div 
          className="text-center" 
          style={{ marginTop: '56px', marginBottom: '40px', padding: '0 16px' }}
        >
          <h2 
            className="font-bold tracking-tight" 
            style={{ color: '#db2777', fontSize: '32px' }}
          >
            Catálogo Pronta Entrega
          </h2>
          <p 
            className="text-gray-700 font-medium" 
            style={{ fontSize: '16px', maxWidth: '600px', margin: '8px auto 0' }}
          >
            Selecione a quantidade desejada e compre diretamente na nossa loja parceira da Shopee.
          </p>
        </div>

        {/* GRADE DE PRODUTOS CORRIGIDA E 100% SIMÉTRICA */}
        <div 
          style={{ 
            display: 'grid', 
            // Força o grid a ter no máximo 3 colunas idênticas lado a lado
            gridTemplateColumns: 'repeat(3, minmax(280px, 340px))', 
            gap: '32px', 
            // Garante que o grupo inteiro de cards fique centralizado na tela
            justifyContent: 'center',
            margin: '0 auto',
            width: '100%',
            padding: '0 32px' // Espaçamento igual e seguro nas duas pontas da tela
          }}
        >
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
      {/* RODAPÉ PREMIUM */}
      <footer 
        className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center relative z-10 shadow-lg mt-12"
        style={{ padding: '24px 16px' }}
      >
        <p className="text-sm font-bold tracking-wide">
          &copy; 2026 Regiane Cosméticos. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
}