import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export type ImageStyle = 'Cinematográfico' | 'Retro' | 'Cyberpunk' | 'Minimalista' | 'Esboço' | 'Vibrante' | 'Futurista' | 'Noir';
export type AspectRatio = '1:1' | '16:9' | '9:16' | '4:3' | '3:4';
export type Lighting = 'Hora Dourada' | 'Estúdio' | 'Neon' | 'Luar' | 'Nevoeiro' | 'Luz do Dia';
export type Camera = 'Grande Angular' | 'Macro' | 'Desfoque de Movimento' | 'Ângulo Baixo' | 'Vista Aérea';
export type Material = 'Fosco' | 'Metálico' | 'Fibra de Carbono' | 'Cromo' | 'Pintura Perolizada';
export type Environment = 'Urbano' | 'Pista de Corrida' | 'Showroom' | 'Montanha' | 'Deserto' | 'Floresta';

export interface GenerationOptions {
  style?: ImageStyle;
  aspectRatio?: AspectRatio;
  lighting?: Lighting;
  camera?: Camera;
  material?: Material;
  environment?: Environment;
  negativePrompt?: string;
}

export async function generateCarImage(prompt: string, options: GenerationOptions = {}): Promise<string | null> {
  const { 
    style = 'Cinematográfico', 
    aspectRatio = '1:1', 
    lighting, 
    camera, 
    material, 
    environment, 
    negativePrompt = '' 
  } = options;
  
  const styleModifiers: Record<ImageStyle, string> = {
    'Cinematográfico': 'fotografia profissional de carros, resolução 8k, iluminação cinematográfica, sombras dramáticas',
    'Retro': 'visual de filme vintage, estética dos anos 70, textura granulada, tons quentes',
    'Cyberpunk': 'luzes neon, noite chuvosa, cidade futurista, alto contraste, acentos brilhantes',
    'Minimalista': 'fundo limpo, composição simples, linhas elegantes, iluminação suave',
    'Esboço': 'esboço a lápis feito à mão, linhas artísticas, fundo branco, estilo carvão',
    'Vibrante': 'cores saturadas, luz do dia brilhante, alta energia, detalhes nítidos',
    'Futurista': 'design aerodinâmico avançado, tecnologia de ponta, estética de ficção científica, superfícies lisas',
    'Noir': 'estilo de filme clássico em preto e branco, alto contraste, sombras profundas, atmosfera misteriosa'
  };

  const lightingModifiers: Record<Lighting, string> = {
    'Hora Dourada': 'luz solar quente e suave, pôr do sol, brilho dourado',
    'Estúdio': 'iluminação de estúdio profissional controlada, reflexos suaves',
    'Neon': 'iluminação neon vibrante, atmosfera noturna urbana',
    'Luar': 'iluminação noturna suave, brilho prateado, sombras frias',
    'Nevoeiro': 'luz difusa através de névoa densa, atmosfera atmosférica',
    'Luz do Dia': 'luz solar direta e clara, sombras nítidas'
  };

  const cameraModifiers: Record<Camera, string> = {
    'Grande Angular': 'lente grande angular, perspectiva ampla, visual épico',
    'Macro': 'close-up extremo, detalhes minuciosos, profundidade de campo rasa',
    'Desfoque de Movimento': 'sensação de velocidade, fundo borrado, ação dinâmica',
    'Ângulo Baixo': 'perspectiva de baixo para cima, visual imponente e poderoso',
    'Vista Aérea': 'vista de cima, perspectiva de drone, composição geométrica'
  };

  const materialModifiers: Record<Material, string> = {
    'Fosco': 'acabamento de pintura fosca, sem brilho, textura suave',
    'Metálico': 'pintura metálica brilhante, reflexos de metal',
    'Fibra de Carbono': 'textura de fibra de carbono visível, visual de alta performance',
    'Cromo': 'superfícies cromadas altamente reflexivas, brilho de espelho',
    'Pintura Perolizada': 'efeito de mudança de cor, brilho iridescente'
  };

  const environmentModifiers: Record<Environment, string> = {
    'Urbano': 'ruas da cidade, arranha-céus ao fundo, asfalto molhado',
    'Pista de Corrida': 'circuito de corrida profissional, zebras, arquibancadas',
    'Showroom': 'piso de exposição limpo e reflexivo, ambiente de luxo',
    'Montanha': 'estradas sinuosas de montanha, picos nevados, natureza selvagem',
    'Deserto': 'vastas dunas de areia, calor escaldante, horizonte aberto',
    'Floresta': 'estrada cercada por árvores densas, luz filtrada pelas folhas'
  };

  let fullPrompt = `${styleModifiers[style]}`;
  if (lighting) fullPrompt += `, ${lightingModifiers[lighting]}`;
  if (camera) fullPrompt += `, ${cameraModifiers[camera]}`;
  if (material) fullPrompt += `, ${materialModifiers[material]}`;
  if (environment) fullPrompt += `, ${environmentModifiers[environment]}`;
  
  fullPrompt += `: ${prompt}${negativePrompt ? `. Evitar: ${negativePrompt}` : ''}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: fullPrompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as any,
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Erro ao gerar imagem do carro:", error);
    return null;
  }
}

export async function getCarDetails(carName: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Forneça especificações técnicas breves para ${carName} em formato JSON: { "engine": "...", "topSpeed": "...", "acceleration": "..." }. Use português para os valores se necessário.`,
      config: {
        responseMimeType: "application/json",
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Erro ao obter detalhes do carro:", error);
    return {};
  }
}
