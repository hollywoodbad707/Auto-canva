import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Download, Share2, Sparkles, ChevronRight, ChevronDown, Maximize2, X, Info, Zap, Gauge, Timer, Settings2, Layout, Palette, Ban, Monitor, Smartphone, Tablet, Copy, ExternalLink, Play, Pause, RefreshCw, Bookmark, Trash2, Save } from 'lucide-react';
import { CarWallpaper, Category } from './types';
import { INITIAL_WALLPAPERS } from './data';
import { generateCarImage, getCarDetails, ImageStyle, AspectRatio, GenerationOptions, Lighting, Camera, Material, Environment } from './services/gemini';

const CATEGORIES: Category[] = ['Supercarros', 'Muscle', 'Clássicos', 'Elétricos', 'Off-Road', 'JDM'];

const AI_SUGGESTIONS = [
  "Ferrari clássica no interior da Itália",
  "Nissan GT-R Cyberpunk em Tóquio",
  "Supercarro elétrico futurista em Marte",
  "Carro muscle vintage em um deserto chuvoso",
  "BMW M4 moderna em uma estrada de montanha",
  "Lamborghini neon em uma cidade futurista",
  "Porsche 911 clássico na neve",
  "Bugatti Chiron em alta velocidade no deserto"
];

const STYLES: ImageStyle[] = ['Cinematográfico', 'Retro', 'Cyberpunk', 'Minimalista', 'Esboço', 'Vibrante', 'Futurista', 'Noir'];
const ASPECT_RATIOS: AspectRatio[] = ['1:1', '16:9', '9:16', '4:3', '3:4'];
const LIGHTING_OPTIONS: Lighting[] = ['Hora Dourada', 'Estúdio', 'Neon', 'Luar', 'Nevoeiro', 'Luz do Dia'];
const CAMERA_OPTIONS: Camera[] = ['Grande Angular', 'Macro', 'Desfoque de Movimento', 'Ângulo Baixo', 'Vista Aérea'];
const MATERIAL_OPTIONS: Material[] = ['Fosco', 'Metálico', 'Fibra de Carbono', 'Cromo', 'Pintura Perolizada'];
const ENVIRONMENT_OPTIONS: Environment[] = ['Urbano', 'Pista de Corrida', 'Showroom', 'Montanha', 'Deserto', 'Floresta'];

const AI_SUGGESTIONS_LIMIT = 5;
const ROTATION_INTERVALS = [
  { label: '5s (Demo)', value: 5000 },
  { label: '1 Hora', value: 3600000 },
  { label: '1 Dia', value: 86400000 }
];

const ADVANCED_TOOLTIPS = {
  style: "Define a estética visual geral da imagem (ex: Retrô, Futurista).",
  aspectRatio: "Ajusta o formato da imagem para diferentes telas (ex: 16:9 para desktop, 9:16 para celular).",
  lighting: "Controla a atmosfera e o humor através da luz (ex: Hora Dourada para tons quentes).",
  camera: "Define a perspectiva e o enquadramento do veículo (ex: Grande Angular para capturar mais cenário).",
  material: "Especifica o acabamento da pintura e superfícies do carro (ex: Fibra de Carbono, Metálico).",
  environment: "Escolhe o cenário onde o carro será posicionado (ex: Pista de Corrida, Deserto).",
  negativePrompt: "Palavras-chave que a IA deve evitar incluir na imagem gerada.",
  variationCount: "Número de variações a serem geradas simultaneamente para este prompt."
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeStyle, setActiveStyle] = useState<ImageStyle | 'All'>('All');
  const [activeAspectRatio, setActiveAspectRatio] = useState<AspectRatio | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [wallpapers, setWallpapers] = useState<CarWallpaper[]>(INITIAL_WALLPAPERS);
  const [selectedWallpaper, setSelectedWallpaper] = useState<CarWallpaper | null>(null);
  const [downloadingWallpaper, setDownloadingWallpaper] = useState<CarWallpaper | null>(null);
  const [settingAsWallpaper, setSettingAsWallpaper] = useState<CarWallpaper | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [variationCount, setVariationCount] = useState(1);
  const [aiPrompt, setAiPrompt] = useState('');
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  
  // Auto-Rotation (Slideshow) State
  const [isAutoRotationActive, setIsAutoRotationActive] = useState(false);
  const [rotationInterval, setRotationInterval] = useState(ROTATION_INTERVALS[0].value);
  const [currentRotationIndex, setCurrentRotationIndex] = useState(0);
  
  // Saved Prompts State
  const [savedPrompts, setSavedPrompts] = useState<{ id: string; prompt: string; options: GenerationOptions }[]>(() => {
    const saved = localStorage.getItem('autocanvas_saved_prompts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('autocanvas_saved_prompts', JSON.stringify(savedPrompts));
  }, [savedPrompts]);

  const saveCurrentPrompt = () => {
    if (!aiPrompt.trim()) return;
    const newSaved = {
      id: Date.now().toString(),
      prompt: aiPrompt,
      options: { ...genOptions }
    };
    setSavedPrompts([newSaved, ...savedPrompts]);
  };

  const deleteSavedPrompt = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPrompts(savedPrompts.filter(p => p.id !== id));
  };

  const loadSavedPrompt = (saved: { prompt: string; options: GenerationOptions }) => {
    setAiPrompt(saved.prompt);
    setGenOptions(saved.options);
    setShowAdvanced(true);
  };
  
  // Advanced AI Options
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [genOptions, setGenOptions] = useState<GenerationOptions>({
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    lighting: 'Estúdio',
    camera: 'Ângulo Baixo',
    material: 'Metálico',
    environment: 'Showroom',
    negativePrompt: ''
  });
  
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredWallpapers = wallpapers.filter(w => {
    const matchesCategory = activeCategory === 'All' || w.category === activeCategory;
    const matchesStyle = activeStyle === 'All' || w.style === activeStyle;
    const matchesAspectRatio = activeAspectRatio === 'All' || w.aspectRatio === activeAspectRatio;
    const matchesSearch = w.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStyle && matchesAspectRatio && matchesSearch;
  });

  // Auto-Rotation Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoRotationActive && filteredWallpapers.length > 0) {
      interval = setInterval(() => {
        setCurrentRotationIndex((prev) => (prev + 1) % filteredWallpapers.length);
      }, rotationInterval);
    }
    return () => clearInterval(interval);
  }, [isAutoRotationActive, rotationInterval, filteredWallpapers.length]);

  // Update selected wallpaper when rotation changes
  useEffect(() => {
    if (isAutoRotationActive && filteredWallpapers[currentRotationIndex]) {
      setSelectedWallpaper(filteredWallpapers[currentRotationIndex]);
    }
  }, [currentRotationIndex, isAutoRotationActive, filteredWallpapers]);

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCategoryChange = (category: Category | 'All') => {
    setActiveCategory(category);
    setCurrentRotationIndex(0);
    scrollToGrid();
  };

  const handleGenerateAI = async (promptOverride?: string) => {
    const finalPrompt = promptOverride || aiPrompt;
    if (!finalPrompt) return;
    setIsGenerating(true);
    scrollToGrid();
    
    const newWallpapers: CarWallpaper[] = [];
    
    try {
      for (let i = 0; i < variationCount; i++) {
        const imageUrl = await generateCarImage(finalPrompt, genOptions);
        if (imageUrl) {
          const newWallpaper: CarWallpaper = {
            id: `${Date.now()}-${i}`,
            title: finalPrompt,
            category: 'Supercarros', // Default for AI
            style: genOptions.style,
            aspectRatio: genOptions.aspectRatio,
            imageUrl,
            description: `AI-generated automotive art variation ${i + 1} based on: ${finalPrompt}`,
          };
          newWallpapers.push(newWallpaper);
        }
      }

      if (newWallpapers.length > 0) {
        setWallpapers([...newWallpapers, ...wallpapers]);
        setSelectedWallpaper(newWallpapers[0]);
        setAiPrompt('');
      }
    } catch (error) {
      console.error('Error generating variations:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadClick = (e: React.MouseEvent, wallpaper: CarWallpaper) => {
    e.stopPropagation();
    setDownloadingWallpaper(wallpaper);
  };

  const confirmDownload = () => {
    if (!downloadingWallpaper) return;
    
    // Simulate download
    const link = document.createElement('a');
    link.href = downloadingWallpaper.imageUrl;
    link.download = `${downloadingWallpaper.title.replace(/\s+/g, '_')}_AutoCanvas.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.appendChild(link);
    
    setDownloadingWallpaper(null);
  };

  const handleSetWallpaperClick = (wallpaper: CarWallpaper) => {
    setSettingAsWallpaper(wallpaper);
  };

  const copyImageLink = async () => {
    if (!settingAsWallpaper) return;
    try {
      await navigator.clipboard.writeText(settingAsWallpaper.imageUrl);
      // Optional: Show a toast or feedback
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = async (wallpaper: CarWallpaper) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `AutoCanvas: ${wallpaper.title}`,
          text: wallpaper.description,
          url: wallpaper.imageUrl,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(wallpaper.imageUrl);
        // We could show a toast here
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-500">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <div className="w-full h-1/2 bg-blue-600 self-start" />
            </div>
          </div>
          <span className="text-lg font-display font-bold tracking-[0.2em] uppercase">AutoCanvas</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          {['Explorar', 'Categorias', 'Estúdio IA', 'Sobre'].map((item) => (
            <button 
              key={item}
              onClick={item === 'Categorias' ? scrollToGrid : undefined}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 hover:text-white transition-all duration-500 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input
              type="text"
              placeholder="BUSCAR MODELOS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-none py-2.5 pl-11 pr-6 text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:border-white/30 transition-all w-72"
            />
          </div>
          <button className="p-2.5 hover:bg-white/5 rounded-full transition-colors duration-500">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-48 pb-24 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 relative z-10">
          <div className="max-w-3xl">
            <div className="bmw-reveal mb-4">
              <motion.span 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="block text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500"
              >
                O Futuro da Estética
              </motion.span>
            </div>
            
            <div className="bmw-reveal mb-8">
              <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="text-7xl md:text-9xl font-display font-extrabold leading-[0.9] tracking-tighter"
              >
                ALEGRIA É <br />
                <span className="gradient-text">ETERNA.</span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white/40 text-lg max-w-md font-light leading-relaxed"
            >
              Experimente a intersecção entre engenharia de alta performance e arte digital.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="glass p-8 rounded-none border-l-2 border-l-blue-600 w-full max-w-md">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-blue-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Estúdio de Design IA</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => {
                      setGenOptions({
                        style: 'Cinematográfico',
                        aspectRatio: '16:9',
                        lighting: 'Estúdio',
                        camera: 'Ângulo Baixo',
                        material: 'Metálico',
                        environment: 'Showroom',
                        negativePrompt: ''
                      });
                    }}
                    className="p-2 text-white/40 hover:text-white/60 transition-all duration-500"
                    title="Resetar Opções"
                  >
                    <RefreshCw className="w-3.5 h-3.5 rotate-180" />
                  </button>
                  <button 
                    onClick={() => {
                      const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
                      setGenOptions({
                        style: getRandom(STYLES) as ImageStyle,
                        aspectRatio: getRandom(ASPECT_RATIOS) as AspectRatio,
                        lighting: getRandom(LIGHTING_OPTIONS) as Lighting,
                        camera: getRandom(CAMERA_OPTIONS) as Camera,
                        material: getRandom(MATERIAL_OPTIONS) as Material,
                        environment: getRandom(ENVIRONMENT_OPTIONS) as Environment,
                        negativePrompt: genOptions.negativePrompt
                      });
                    }}
                    className="p-2 text-white/40 hover:text-white/60 transition-all duration-500"
                    title="Aleatorizar Opções"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className={`p-2 transition-all duration-500 ${showAdvanced ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'}`}
                  >
                    <Settings2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-[11px] font-medium text-white/40 uppercase tracking-widest mb-6">Conceitualize sua visão.</p>
              
              <div className="flex gap-3 mb-6">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="DIGITE O PROMPT..."
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-none py-3 pl-4 pr-20 text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:border-white/30"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {aiPrompt && (
                      <button
                        onClick={() => setAiPrompt('')}
                        className="p-1.5 text-white/20 hover:text-white transition-colors"
                        title="Limpar"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                    <button
                      onClick={saveCurrentPrompt}
                      disabled={!aiPrompt.trim()}
                      className="p-1.5 text-white/20 hover:text-blue-500 transition-colors disabled:opacity-0"
                      title="Salvar Prompt"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleGenerateAI()}
                  disabled={isGenerating}
                  className="bg-white text-black px-6 py-3 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-blue-600 hover:text-white transition-all duration-500 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    'Gerar'
                  )}
                </button>
              </div>

              {savedPrompts.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-white/30 mb-3">
                    <Bookmark className="w-3 h-3" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Prompts Salvos</span>
                  </div>
                  <div className="flex flex-col gap-2 max-h-32 overflow-y-auto no-scrollbar">
                    {savedPrompts.map((saved) => (
                      <div
                        key={saved.id}
                        onClick={() => loadSavedPrompt(saved)}
                        className="group flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/5 p-2 transition-all cursor-pointer"
                      >
                        <span className="text-[9px] font-medium text-white/60 truncate max-w-[200px]">{saved.prompt}</span>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-[8px] text-blue-500 uppercase font-bold">{saved.options.style}</span>
                          <button
                            onClick={(e) => deleteSavedPrompt(saved.id, e)}
                            className="p-1 text-white/20 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence>
                {showAdvanced && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mb-4 space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5 group/tooltip relative">
                          <Palette className="w-3 h-3" /> Estilo
                          <Info className="w-2.5 h-2.5 opacity-40 cursor-help" />
                          <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-black/90 border border-white/10 text-[8px] font-medium leading-relaxed tracking-normal normal-case text-white/80 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-xl">
                            {ADVANCED_TOOLTIPS.style}
                          </div>
                        </label>
                        <select 
                          value={genOptions.style}
                          onChange={(e) => setGenOptions({ ...genOptions, style: e.target.value as ImageStyle })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 px-2 text-[10px] focus:outline-none"
                        >
                          {STYLES.map(s => <option key={s} value={s} className="bg-[#050505]">{s}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5 group/tooltip relative">
                          <Layout className="w-3 h-3" /> Proporção
                          <Info className="w-2.5 h-2.5 opacity-40 cursor-help" />
                          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black/90 border border-white/10 text-[8px] font-medium leading-relaxed tracking-normal normal-case text-white/80 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-xl">
                            {ADVANCED_TOOLTIPS.aspectRatio}
                          </div>
                        </label>
                        <select 
                          value={genOptions.aspectRatio}
                          onChange={(e) => setGenOptions({ ...genOptions, aspectRatio: e.target.value as AspectRatio })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 px-2 text-[10px] focus:outline-none"
                        >
                          {ASPECT_RATIOS.map(r => <option key={r} value={r} className="bg-[#050505]">{r}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5 group/tooltip relative">
                          <Zap className="w-3 h-3" /> Iluminação
                          <Info className="w-2.5 h-2.5 opacity-40 cursor-help" />
                          <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-black/90 border border-white/10 text-[8px] font-medium leading-relaxed tracking-normal normal-case text-white/80 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-xl">
                            {ADVANCED_TOOLTIPS.lighting}
                          </div>
                        </label>
                        <select 
                          value={genOptions.lighting}
                          onChange={(e) => setGenOptions({ ...genOptions, lighting: e.target.value as Lighting })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 px-2 text-[10px] focus:outline-none"
                        >
                          {LIGHTING_OPTIONS.map(o => <option key={o} value={o} className="bg-[#050505]">{o}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5 group/tooltip relative">
                          <Maximize2 className="w-3 h-3" /> Câmera
                          <Info className="w-2.5 h-2.5 opacity-40 cursor-help" />
                          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black/90 border border-white/10 text-[8px] font-medium leading-relaxed tracking-normal normal-case text-white/80 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-xl">
                            {ADVANCED_TOOLTIPS.camera}
                          </div>
                        </label>
                        <select 
                          value={genOptions.camera}
                          onChange={(e) => setGenOptions({ ...genOptions, camera: e.target.value as Camera })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 px-2 text-[10px] focus:outline-none"
                        >
                          {CAMERA_OPTIONS.map(o => <option key={o} value={o} className="bg-[#050505]">{o}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5 group/tooltip relative">
                          <Gauge className="w-3 h-3" /> Material
                          <Info className="w-2.5 h-2.5 opacity-40 cursor-help" />
                          <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-black/90 border border-white/10 text-[8px] font-medium leading-relaxed tracking-normal normal-case text-white/80 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-xl">
                            {ADVANCED_TOOLTIPS.material}
                          </div>
                        </label>
                        <select 
                          value={genOptions.material}
                          onChange={(e) => setGenOptions({ ...genOptions, material: e.target.value as Material })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 px-2 text-[10px] focus:outline-none"
                        >
                          {MATERIAL_OPTIONS.map(o => <option key={o} value={o} className="bg-[#050505]">{o}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5 group/tooltip relative">
                          <ExternalLink className="w-3 h-3" /> Ambiente
                          <Info className="w-2.5 h-2.5 opacity-40 cursor-help" />
                          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black/90 border border-white/10 text-[8px] font-medium leading-relaxed tracking-normal normal-case text-white/80 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-xl">
                            {ADVANCED_TOOLTIPS.environment}
                          </div>
                        </label>
                        <select 
                          value={genOptions.environment}
                          onChange={(e) => setGenOptions({ ...genOptions, environment: e.target.value as Environment })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 px-2 text-[10px] focus:outline-none"
                        >
                          {ENVIRONMENT_OPTIONS.map(o => <option key={o} value={o} className="bg-[#050505]">{o}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5 group/tooltip relative">
                          <Layout className="w-3 h-3" /> Variações
                          <Info className="w-2.5 h-2.5 opacity-40 cursor-help" />
                          <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-black/90 border border-white/10 text-[8px] font-medium leading-relaxed tracking-normal normal-case text-white/80 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-xl">
                            {ADVANCED_TOOLTIPS.variationCount}
                          </div>
                        </label>
                        <div className="flex gap-2">
                          {[1, 2, 4].map(count => (
                            <button
                              key={count}
                              onClick={() => setVariationCount(count)}
                              className={`flex-1 py-1.5 text-[10px] font-bold border transition-all ${
                                variationCount === count 
                                  ? 'bg-white text-black border-white' 
                                  : 'bg-white/5 text-white/40 border-white/10 hover:border-white/30'
                              }`}
                            >
                              {count}x
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1.5 group/tooltip relative">
                        <Ban className="w-3 h-3" /> Prompt Negativo
                        <Info className="w-2.5 h-2.5 opacity-40 cursor-help" />
                        <div className="absolute bottom-full left-0 mb-2 w-full p-2 bg-black/90 border border-white/10 text-[8px] font-medium leading-relaxed tracking-normal normal-case text-white/80 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-xl">
                          {ADVANCED_TOOLTIPS.negativePrompt}
                        </div>
                      </label>
                      <input
                        type="text"
                        placeholder="desfocado, baixa qualidade, distorcido..."
                        value={genOptions.negativePrompt}
                        onChange={(e) => setGenOptions({ ...genOptions, negativePrompt: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 px-2 text-[10px] focus:outline-none"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="flex flex-wrap gap-2">
                {(showAllSuggestions ? AI_SUGGESTIONS : AI_SUGGESTIONS.slice(0, AI_SUGGESTIONS_LIMIT)).map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleGenerateAI(suggestion)}
                    disabled={isGenerating}
                    className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/5 px-2 py-1 rounded-lg transition-colors text-white/40 hover:text-white/80"
                  >
                    {suggestion}
                  </button>
                ))}
                {AI_SUGGESTIONS.length > AI_SUGGESTIONS_LIMIT && (
                  <button
                    onClick={() => setShowAllSuggestions(!showAllSuggestions)}
                    className="text-[10px] text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1 px-2 py-1"
                  >
                    {showAllSuggestions ? 'Ver Menos' : 'Ver Mais'}
                    <ChevronDown className={`w-3 h-3 transition-transform ${showAllSuggestions ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Categories & Filters */}
      <section ref={gridRef} className="px-6 mb-24 scroll-mt-32">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Main Category Filter */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-white/5 pb-6">
            <div className="flex gap-10 overflow-x-auto no-scrollbar flex-1">
              <button
                onClick={() => handleCategoryChange('All')}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative group pb-2 whitespace-nowrap ${
                  activeCategory === 'All' ? 'text-white' : 'text-white/30 hover:text-white/60'
                }`}
              >
                Todos os Modelos
                {activeCategory === 'All' && <motion.div layoutId="activeCat" className="absolute -bottom-[1px] left-0 w-full h-[2px] bg-blue-600" />}
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative group pb-2 whitespace-nowrap ${
                    activeCategory === cat ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && <motion.div layoutId="activeCat" className="absolute -bottom-[1px] left-0 w-full h-[2px] bg-blue-600" />}
                </button>
              ))}
            </div>

            {/* Slideshow Controls */}
            <div className="glass p-4 rounded-none border-l-2 border-l-blue-600 flex items-center gap-6 min-w-max">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-blue-400">
                  <RefreshCw className={`w-3 h-3 ${isAutoRotationActive ? 'animate-spin-slow' : ''}`} />
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Rotação Automática</span>
                </div>
                <div className="flex gap-1.5">
                  {ROTATION_INTERVALS.map((interval) => (
                    <button
                      key={interval.value}
                      onClick={() => setRotationInterval(interval.value)}
                      className={`px-2 py-1 text-[7px] font-bold uppercase tracking-tighter border transition-all duration-500 ${
                        rotationInterval === interval.value
                          ? 'bg-white/10 border-white/20 text-white'
                          : 'border-white/5 text-white/30 hover:border-white/10 hover:text-white/50'
                      }`}
                    >
                      {interval.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsAutoRotationActive(!isAutoRotationActive)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-none text-[9px] font-bold uppercase tracking-widest transition-all duration-500 ${
                  isAutoRotationActive 
                    ? 'bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isAutoRotationActive ? (
                  <><Pause className="w-3.5 h-3.5" /> Parar</>
                ) : (
                  <><Play className="w-3.5 h-3.5" /> Iniciar</>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Style Filter */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6 flex items-center gap-3">
                <Palette className="w-3 h-3" /> Estética Visual
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveStyle('All')}
                  className={`px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-500 border ${
                    activeStyle === 'All' ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
                  }`}
                >
                  Todos os Estilos
                </button>
                {STYLES.map((style) => (
                  <button
                    key={style}
                    onClick={() => setActiveStyle(style)}
                    className={`px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-500 border ${
                      activeStyle === style ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Aspect Ratio Filter */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6 flex items-center gap-3">
                <Layout className="w-3 h-3" /> Formato
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveAspectRatio('All')}
                  className={`px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-500 border ${
                    activeAspectRatio === 'All' ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
                  }`}
                >
                  Todas as Proporções
                </button>
                {ASPECT_RATIOS.map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setActiveAspectRatio(ratio)}
                    className={`px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-500 border ${
                      activeAspectRatio === ratio ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <main className="px-6 pb-48 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {isGenerating && (
              <motion.div
                key="generating-loader"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="relative aspect-[4/5] overflow-hidden bg-white/5 flex flex-col items-center justify-center border border-white/10 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 animate-pulse" />
                <div className="relative w-32 h-32 mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-b-2 border-blue-500 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border-t-2 border-purple-500 rounded-full opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-blue-500 animate-bounce" />
                  </div>
                </div>
                <div className="text-center px-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-2">IA em Ação</h4>
                  <p className="text-[9px] font-medium text-white/40 uppercase tracking-widest leading-relaxed">
                    Esculpindo sua visão automotiva...
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600/20">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1/2 h-full bg-blue-600"
                  />
                </div>
              </motion.div>
            )}
            {filteredWallpapers.map((wallpaper, index) => (
              <motion.div
                key={wallpaper.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.33, 1, 0.68, 1] }}
                onClick={() => setSelectedWallpaper(wallpaper)}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-white/5"
              >
                <img
                  src={wallpaper.imageUrl}
                  alt={wallpaper.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-3">{wallpaper.category}</span>
                  <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">{wallpaper.title}</h3>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-white text-black py-4 font-bold text-[10px] tracking-widest uppercase hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-3">
                      <Maximize2 className="w-4 h-4" /> Ver Detalhes
                    </button>
                    <button 
                      onClick={(e) => handleDownloadClick(e, wallpaper)}
                      className="p-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all duration-500"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedWallpaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setSelectedWallpaper(null)} />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="relative w-full max-w-6xl glass rounded-none overflow-hidden flex flex-col lg:flex-row max-h-[90vh] border border-white/10"
            >
              <button
                onClick={() => setSelectedWallpaper(null)}
                className="absolute top-8 right-8 z-10 p-4 bg-black/50 hover:bg-black/80 transition-all duration-500"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="lg:w-2/3 relative h-[40vh] lg:h-auto group/img overflow-hidden">
                <img
                  src={selectedWallpaper.imageUrl}
                  alt={selectedWallpaper.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover/img:scale-110"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute bottom-10 right-10 p-4 bg-black/50 hover:bg-black/80 backdrop-blur-2xl transition-all duration-500 opacity-0 group-hover/img:opacity-100 flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase"
                >
                  <Maximize2 className="w-4 h-4" /> Visão Imersiva
                </button>
              </div>

              <div className="lg:w-1/3 p-10 sm:p-16 overflow-y-auto bg-black">
                <div className="flex items-center gap-3 mb-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
                    {selectedWallpaper.category}
                  </span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>
                
                <h2 className="text-5xl font-display font-extrabold mb-10 tracking-tighter leading-[0.9]">{selectedWallpaper.title}</h2>
                <p className="text-white/40 leading-relaxed mb-16 font-light">
                  {selectedWallpaper.description}
                </p>

                {selectedWallpaper.specs && (
                  <div className="mb-16">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6 flex items-center gap-3">
                      <Gauge className="w-3 h-3" /> Especificações Técnicas
                    </p>
                    <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing">
                      <div className="min-w-[220px] flex-shrink-0 glass p-6 border-l-2 border-l-blue-600 snap-start transition-all duration-500 hover:bg-white/5">
                        <div className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center border border-white/5 mb-4">
                          <Zap className="w-4 h-4 text-blue-500" />
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Motorização</p>
                        <p className="font-bold text-sm tracking-tight">{selectedWallpaper.specs.engine}</p>
                      </div>
                      <div className="min-w-[220px] flex-shrink-0 glass p-6 border-l-2 border-l-blue-600 snap-start transition-all duration-500 hover:bg-white/5">
                        <div className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center border border-white/5 mb-4">
                          <Gauge className="w-4 h-4 text-blue-500" />
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Velocidade Máxima</p>
                        <p className="font-bold text-sm tracking-tight">{selectedWallpaper.specs.topSpeed}</p>
                      </div>
                      <div className="min-w-[220px] flex-shrink-0 glass p-6 border-l-2 border-l-blue-600 snap-start transition-all duration-500 hover:bg-white/5">
                        <div className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center border border-white/5 mb-4">
                          <Timer className="w-4 h-4 text-blue-500" />
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">0-100 KM/H</p>
                        <p className="font-bold text-sm tracking-tight">{selectedWallpaper.specs.acceleration}</p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-1.5 mt-2">
                      <div className="w-1 h-1 rounded-full bg-blue-600" />
                      <div className="w-1 h-1 rounded-full bg-white/10" />
                      <div className="w-1 h-1 rounded-full bg-white/10" />
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <button 
                    onClick={(e) => handleDownloadClick(e, selectedWallpaper)}
                    className="w-full bg-white text-black py-5 font-bold text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all duration-500"
                  >
                    <Download className="w-4 h-4" /> Baixar em 4K
                  </button>
                  <button 
                    onClick={() => handleSetWallpaperClick(selectedWallpaper)}
                    className="w-full bg-transparent border border-white/10 py-5 font-bold text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-500"
                  >
                    <Info className="w-4 h-4" /> Definir como Papel de Parede
                  </button>
                  <button 
                    onClick={() => handleShare(selectedWallpaper)}
                    className="w-full bg-transparent border border-white/10 py-5 font-bold text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-500"
                  >
                    <Share2 className="w-4 h-4" /> Compartilhar Obra-Prima
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Confirmation Modal */}
      <AnimatePresence>
        {downloadingWallpaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setDownloadingWallpaper(null)} />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              className="relative w-full max-w-md glass p-10 rounded-none border border-white/10 text-center"
            >
              <div className="w-20 h-20 bg-white/5 border border-white/5 flex items-center justify-center mx-auto mb-8">
                <Download className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 tracking-tight uppercase">Confirmar Download</h3>
              <p className="text-white/40 mb-10 text-xs font-bold uppercase tracking-widest leading-relaxed">
                Tem certeza que deseja baixar <span className="text-white">"{downloadingWallpaper.title}"</span> em ultra-alta definição?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setDownloadingWallpaper(null)}
                  className="flex-1 py-5 bg-transparent border border-white/10 hover:bg-white/5 font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-500"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmDownload}
                  className="flex-1 py-5 bg-white text-black font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-blue-600 hover:text-white transition-all duration-500"
                >
                  Confirmar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen View */}
      <AnimatePresence>
        {isFullscreen && selectedWallpaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black flex items-center justify-center"
          >
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
              src={selectedWallpaper.imageUrl}
              alt={selectedWallpaper.title}
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-10 right-10 p-5 bg-black/50 hover:bg-black/80 backdrop-blur-2xl transition-all duration-500"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-10 py-5 bg-black/50 backdrop-blur-2xl border border-white/10">
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase">{selectedWallpaper.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Set as Wallpaper Instructions Modal */}
      <AnimatePresence>
        {settingAsWallpaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setSettingAsWallpaper(null)} />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              className="relative w-full max-w-3xl glass p-12 rounded-none border border-white/10 max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <button 
                onClick={() => setSettingAsWallpaper(null)}
                className="absolute top-8 right-8 p-4 hover:bg-white/10 transition-all duration-500"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8">
                  <Monitor className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-4xl font-display font-extrabold mb-4 tracking-tighter uppercase">Definir como Papel de Parede</h3>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Siga estes passos para definir <span className="text-white">"{settingAsWallpaper.title}"</span> como seu fundo.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="glass p-8 rounded-none border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <Monitor className="w-5 h-5 text-blue-500" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Desktop</h4>
                  </div>
                  <ol className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 space-y-4 list-decimal list-inside leading-relaxed">
                    <li>Baixe a imagem usando o botão abaixo.</li>
                    <li>Clique com o botão direito no arquivo baixado.</li>
                    <li>Selecione <span className="text-white">"Definir como fundo da área de trabalho"</span>.</li>
                  </ol>
                </div>

                <div className="glass p-8 rounded-none border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <Smartphone className="w-5 h-5 text-blue-500" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Celular</h4>
                  </div>
                  <ol className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 space-y-4 list-decimal list-inside leading-relaxed">
                    <li>Salve a imagem em suas Fotos/Galeria.</li>
                    <li>Abra a imagem e toque no ícone de <span className="text-white">Compartilhar</span>.</li>
                    <li>Escolha <span className="text-white">"Usar como Papel de Parede"</span>.</li>
                  </ol>
                </div>

                <div className="glass p-8 rounded-none border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <Tablet className="w-5 h-5 text-blue-500" />
                    <h4 className="text-[10px] font-bold uppercase tracking-widest">Tablet</h4>
                  </div>
                  <ol className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 space-y-4 list-decimal list-inside leading-relaxed">
                    <li>Pressione e segure a imagem e selecione <span className="text-white">"Salvar Imagem"</span>.</li>
                    <li>Vá em <span className="text-white">Configurações &gt; Papel de Parede</span>.</li>
                    <li>Selecione a imagem de sua galeria.</li>
                  </ol>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = settingAsWallpaper.imageUrl;
                    link.download = `${settingAsWallpaper.title.replace(/\s+/g, '_')}_AutoCanvas.jpg`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex-1 bg-white text-black py-5 font-bold text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all duration-500"
                >
                  <Download className="w-4 h-4" /> Baixar Imagem
                </button>
                <button
                  onClick={copyImageLink}
                  className="flex-1 bg-transparent border border-white/10 py-5 font-bold text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-500"
                >
                  <Copy className="w-4 h-4" /> Copiar Link Direto
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/5 py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-24">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-1/2 bg-blue-600 self-start" />
                </div>
              </div>
              <span className="text-xl font-display font-extrabold tracking-[0.3em] uppercase">AutoCanvas</span>
            </div>
            <p className="text-white/20 text-[10px] font-bold max-w-xs leading-loose uppercase tracking-[0.25em]">
              O destino digital definitivo para estética automotiva e design de alta performance. Criado para o entusiasta exigente.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-24">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-10">Modelos</h4>
              <ul className="space-y-5">
                {CATEGORIES.slice(0, 4).map(cat => (
                  <li key={cat}><button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-500">{cat}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-10">Estúdio</h4>
              <ul className="space-y-5">
                <li><button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-500">Gerador IA</button></li>
                <li><button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-500">Estilos Customizados</button></li>
                <li><button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-500">Acesso API</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-10">Legal</h4>
              <ul className="space-y-5">
                <li><button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-500">Privacidade</button></li>
                <li><button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-500">Termos</button></li>
                <li><button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-500">Cookies</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-16 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">© 2026 AUTOCANVAS DIGITAL. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <div className="w-4 h-4 bg-blue-600" />
            <div className="w-4 h-4 bg-indigo-900" />
            <div className="w-4 h-4 bg-red-600" />
          </div>
        </div>
      </footer>
    </div>
  );
}
