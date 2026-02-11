# Guia de Atualização do Portfolio

Este guia explica como adicionar novos projetos ao portfolio e as especificações recomendadas para as imagens.

## Estrutura de Dados

Todos os projetos são gerenciados no arquivo `data/projects.ts`.

Para adicionar um novo projeto, adicione um novo objeto ao array `projects`:

```typescript
{
  id: "05", // ID único (sequencial)
  client: "Nome do Cliente",
  category: "Categoria do Projeto",
  size: "col-span-1 md:col-span-1 row-span-1", // Tamanho no grid (veja opções abaixo)
  image: "URL_DA_IMAGEM",
  desc: "Descrição curta do projeto."
},
```

### Opções de Tamanho (Grid Bento)

- **Padrão (quadrado/pequeno):** `col-span-1 md:col-span-1 row-span-1`
- **Largo (horizontal):** `col-span-1 md:col-span-2 row-span-1`
- **Alto (vertical):** `col-span-1 md:col-span-1 row-span-2`
- **Grande (destaque):** `col-span-1 md:col-span-2 row-span-2`

## Especificações de Imagem

Para garantir a melhor qualidade e performance, siga estas recomendações:

- **Formato:** JPG ou WEBP (melhor compressão).
- **Resolução Ideal:**
  - **Full HD:** 1920x1080px (para cards maiores)
  - **Padrão:** 1080x1080px (para cards quadrados)
  - **Mínimo:** 800px de largura.
- **Tamanho do Arquivo:** Tente manter abaixo de 300KB por imagem para carregamento rápido.
- **Proporção:** As imagens são cortadas automaticamente (`object-cover`), mas imagens horizontais (16:9) funcionam melhor em cards largos e imagens verticais/quadradas (1:1 ou 4:5) em cards menores.

## Como Adicionar Imagens Locais

1. Mova suas imagens para a pasta `public/portfolio` (crie se não existir).
2. No arquivo `projects.ts`, use o caminho absoluto a partir da pasta public:
   `image: "/portfolio/minha-imagem.jpg"`
