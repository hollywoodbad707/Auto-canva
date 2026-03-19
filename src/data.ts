import { CarWallpaper } from './types';

export const INITIAL_WALLPAPERS: CarWallpaper[] = [
  // Supercarros
  {
    id: 's1',
    title: 'Porsche 911 GT3 RS',
    category: 'Supercarros',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920',
    description: 'O 911 definitivo focado em pista, construído para pura performance.',
    specs: { engine: '4.0L Flat-6', topSpeed: '184 mph', acceleration: '3.0s 0-60' }
  },
  {
    id: 's2',
    title: 'Lamborghini Revuelto',
    category: 'Supercarros',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1920',
    description: 'O primeiro supercarro híbrido V12 da Lamborghini.',
    specs: { engine: '6.5L V12 Hybrid', topSpeed: '217 mph', acceleration: '2.5s 0-60' }
  },
  {
    id: 's3',
    title: 'Ferrari SF90 Stradale',
    category: 'Supercarros',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820bc6988?auto=format&fit=crop&q=80&w=1920',
    description: 'A Ferrari de rua mais potente de todos os tempos.',
    specs: { engine: '4.0L V8 Hybrid', topSpeed: '211 mph', acceleration: '2.5s 0-60' }
  },
  {
    id: 's4',
    title: 'McLaren 750S',
    category: 'Supercarros',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1920',
    description: 'A evolução da performance e leveza da McLaren.',
    specs: { engine: '4.0L V8 Twin-Turbo', topSpeed: '206 mph', acceleration: '2.7s 0-60' }
  },
  {
    id: 's5',
    title: 'Bugatti Chiron',
    category: 'Supercarros',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&q=80&w=1920',
    description: 'A obra-prima da engenharia e velocidade extrema.',
    specs: { engine: '8.0L W16 Quad-Turbo', topSpeed: '261 mph', acceleration: '2.4s 0-60' }
  },
  {
    id: 's6',
    title: 'Koenigsegg Jesko',
    category: 'Supercarros',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1920',
    description: 'O megacarro sueco projetado para quebrar recordes.',
    specs: { engine: '5.0L V8 Twin-Turbo', topSpeed: '300+ mph', acceleration: '2.5s 0-60' }
  },
  {
    id: 's7',
    title: 'Aston Martin Valkyrie',
    category: 'Supercarros',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f16df9f77a8?auto=format&fit=crop&q=80&w=1920',
    description: 'Um carro de Formula 1 para as ruas.',
    specs: { engine: '6.5L V12', topSpeed: '250 mph', acceleration: '2.5s 0-60' }
  },
  {
    id: 's8',
    title: 'Pagani Huayra',
    category: 'Supercarros',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1594731802114-281fb0256b0d?auto=format&fit=crop&q=80&w=1920',
    description: 'Arte sobre rodas com performance de tirar o fôlego.',
    specs: { engine: '6.0L V12 Twin-Turbo', topSpeed: '238 mph', acceleration: '2.8s 0-60' }
  },
  {
    id: 's9',
    title: 'Rimac Nevera',
    category: 'Supercarros',
    style: 'Cyberpunk',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1920',
    description: 'O hipercarro elétrico que redefine a aceleração.',
    specs: { engine: 'Quad-Motor Elétrico', topSpeed: '258 mph', acceleration: '1.81s 0-60' }
  },
  {
    id: 's10',
    title: 'Ford GT',
    category: 'Supercarros',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80&w=1920',
    description: 'A lenda americana renascida para as pistas modernas.',
    specs: { engine: '3.5L V6 Twin-Turbo', topSpeed: '216 mph', acceleration: '3.0s 0-60' }
  },
  {
    id: 's11',
    title: 'McLaren P1',
    category: 'Supercarros',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1920',
    description: 'O hipercarro híbrido que definiu uma era de performance.',
    specs: { engine: '3.8L V8 Hybrid', topSpeed: '217 mph', acceleration: '2.8s 0-60' }
  },
  {
    id: 's12',
    title: 'Ferrari LaFerrari',
    category: 'Supercarros',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1920',
    description: 'A expressão máxima da tecnologia híbrida da Ferrari.',
    specs: { engine: '6.3L V12 Hybrid', topSpeed: '217 mph', acceleration: '2.4s 0-60' }
  },
  {
    id: 's13',
    title: 'Porsche 918 Spyder',
    category: 'Supercarros',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920',
    description: 'Equilíbrio perfeito entre eficiência elétrica e potência V8.',
    specs: { engine: '4.6L V8 Hybrid', topSpeed: '214 mph', acceleration: '2.2s 0-60' }
  },
  {
    id: 's14',
    title: 'Lamborghini Aventador SVJ',
    category: 'Supercarros',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1920',
    description: 'O V12 mais agressivo focado em recordes de pista.',
    specs: { engine: '6.5L V12', topSpeed: '217 mph', acceleration: '2.8s 0-60' }
  },
  {
    id: 's15',
    title: 'Ford GT (2005)',
    category: 'Supercarros',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&q=80&w=1920',
    description: 'A lenda de Le Mans renascida para o século 21.',
    specs: { engine: '5.4L V8 Supercharged', topSpeed: '205 mph', acceleration: '3.4s 0-60' }
  },
  {
    id: 's16',
    title: 'Mercedes-AMG One',
    category: 'Supercarros',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1611310263986-313b56e47a95?auto=format&fit=crop&q=80&w=1920',
    description: 'Um motor de Formula 1 em um carro de rua.',
    specs: { engine: '1.6L V6 Hybrid F1', topSpeed: '219 mph', acceleration: '2.9s 0-60' }
  },
  {
    id: 's17',
    title: 'Pagani Zonda Cinque',
    category: 'Supercarros',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1594731802114-281fb0256b0d?auto=format&fit=crop&q=80&w=1920',
    description: 'Uma das criações mais raras e barulhentas de Horacio Pagani.',
    specs: { engine: '7.3L V12', topSpeed: '217 mph', acceleration: '3.4s 0-60' }
  },
  {
    id: 's18',
    title: 'Bugatti Veyron Super Sport',
    category: 'Supercarros',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&q=80&w=1920',
    description: 'O carro que quebrou a barreira dos 400 km/h.',
    specs: { engine: '8.0L W16 Quad-Turbo', topSpeed: '267 mph', acceleration: '2.5s 0-60' }
  },
  {
    id: 's19',
    title: 'Lexus LFA',
    category: 'Supercarros',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1920',
    description: 'Famoso pelo melhor som de motor V10 do mundo.',
    specs: { engine: '4.8L V10', topSpeed: '202 mph', acceleration: '3.6s 0-60' }
  },
  {
    id: 's20',
    title: 'Saleen S7 Twin Turbo',
    category: 'Supercarros',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f16df9f77a8?auto=format&fit=crop&q=80&w=1920',
    description: 'O supercarro americano puro-sangue dos anos 2000.',
    specs: { engine: '7.0L V8 Twin-Turbo', topSpeed: '248 mph', acceleration: '2.8s 0-60' }
  },

  // Muscle
  {
    id: 'm1',
    title: 'Ford Mustang Shelby GT500',
    category: 'Muscle',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1584345604480-8347bb9c56a0?auto=format&fit=crop&q=80&w=1920',
    description: 'Uma fera moderna com potência supercharged e estilo agressivo.',
    specs: { engine: '5.2L V8 Supercharged', topSpeed: '180 mph', acceleration: '3.3s 0-60' }
  },
  {
    id: 'm2',
    title: 'Dodge Challenger SRT Hellcat',
    category: 'Muscle',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=1920',
    description: 'O rei das arrancadas com som inconfundível.',
    specs: { engine: '6.2L V8 Supercharged', topSpeed: '199 mph', acceleration: '3.7s 0-60' }
  },
  {
    id: 'm3',
    title: 'Chevrolet Camaro ZL1',
    category: 'Muscle',
    style: 'Cyberpunk',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'Performance de pista em um pacote muscle clássico.',
    specs: { engine: '6.2L V8 Supercharged', topSpeed: '198 mph', acceleration: '3.5s 0-60' }
  },
  {
    id: 'm4',
    title: 'Dodge Charger SRT Hellcat',
    category: 'Muscle',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1612544406678-fb3d59451811?auto=format&fit=crop&q=80&w=1920',
    description: 'O sedã mais potente do mundo.',
    specs: { engine: '6.2L V8 Supercharged', topSpeed: '204 mph', acceleration: '3.6s 0-60' }
  },
  {
    id: 'm5',
    title: 'Chevrolet Chevelle SS',
    category: 'Muscle',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1615906659444-1af689b7e13e?auto=format&fit=crop&q=80&w=1920',
    description: 'Um ícone da era de ouro dos muscle cars.',
    specs: { engine: '7.4L V8', topSpeed: '130 mph', acceleration: '6.0s 0-60' }
  },
  {
    id: 'm6',
    title: 'Plymouth Barracuda',
    category: 'Muscle',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1920',
    description: 'Design agressivo e potência bruta dos anos 70.',
    specs: { engine: '7.0L V8 Hemi', topSpeed: '140 mph', acceleration: '5.5s 0-60' }
  },
  {
    id: 'm7',
    title: 'Pontiac GTO',
    category: 'Muscle',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=1920',
    description: 'O carro que deu início à febre dos muscle cars.',
    specs: { engine: '6.4L V8', topSpeed: '120 mph', acceleration: '6.6s 0-60' }
  },
  {
    id: 'm8',
    title: 'Oldsmobile 442',
    category: 'Muscle',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=1920',
    description: 'Luxo e performance em um pacote muscle sofisticado.',
    specs: { engine: '7.5L V8', topSpeed: '115 mph', acceleration: '7.0s 0-60' }
  },
  {
    id: 'm9',
    title: 'Buick GNX',
    category: 'Muscle',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1920',
    description: 'O muscle car que assustou os supercarros nos anos 80.',
    specs: { engine: '3.8L V6 Turbo', topSpeed: '124 mph', acceleration: '4.7s 0-60' }
  },
  {
    id: 'm10',
    title: 'Equus Bass 770',
    category: 'Muscle',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1920',
    description: 'Uma homenagem moderna aos clássicos muscle cars.',
    specs: { engine: '6.2L V8 Supercharged', topSpeed: '200 mph', acceleration: '3.4s 0-60' }
  },
  {
    id: 'm11',
    title: '1969 Dodge Charger R/T',
    category: 'Muscle',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=1920',
    description: 'O epítome do muscle car americano dos anos 60.',
    specs: { engine: '7.2L V8 Magnum', topSpeed: '135 mph', acceleration: '6.0s 0-60' }
  },
  {
    id: 'm12',
    title: '1970 Plymouth Hemi Cuda',
    category: 'Muscle',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1920',
    description: 'Raro, potente e extremamente desejado por colecionadores.',
    specs: { engine: '7.0L V8 Hemi', topSpeed: '140 mph', acceleration: '5.6s 0-60' }
  },
  {
    id: 'm13',
    title: '1967 Chevrolet Camaro SS',
    category: 'Muscle',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O início da rivalidade histórica com o Mustang.',
    specs: { engine: '6.5L V8', topSpeed: '125 mph', acceleration: '6.5s 0-60' }
  },
  {
    id: 'm14',
    title: '1970 Ford Mustang Boss 429',
    category: 'Muscle',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1584345604480-8347bb9c56a0?auto=format&fit=crop&q=80&w=1920',
    description: 'Construído para homologar o motor da NASCAR.',
    specs: { engine: '7.0L V8', topSpeed: '118 mph', acceleration: '5.3s 0-60' }
  },
  {
    id: 'm15',
    title: '1969 Pontiac Firebird Trans Am',
    category: 'Muscle',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=1920',
    description: 'Performance e estilo agressivo da Pontiac.',
    specs: { engine: '6.6L V8', topSpeed: '120 mph', acceleration: '6.3s 0-60' }
  },
  {
    id: 'm16',
    title: '1971 AMC Javelin AMX',
    category: 'Muscle',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1920',
    description: 'O muscle car não convencional que dominou as pistas.',
    specs: { engine: '6.6L V8', topSpeed: '125 mph', acceleration: '6.8s 0-60' }
  },
  {
    id: 'm17',
    title: '1968 Oldsmobile Toronado',
    category: 'Muscle',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=1920',
    description: 'Um muscle de luxo com tração dianteira inovadora.',
    specs: { engine: '7.5L V8', topSpeed: '135 mph', acceleration: '7.5s 0-60' }
  },
  {
    id: 'm18',
    title: '1965 Shelby GT350',
    category: 'Muscle',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1584345604480-8347bb9c56a0?auto=format&fit=crop&q=80&w=1920',
    description: 'O Mustang focado em corrida de Carroll Shelby.',
    specs: { engine: '4.7L V8', topSpeed: '138 mph', acceleration: '6.6s 0-60' }
  },
  {
    id: 'm19',
    title: '1970 Buick GSX Stage 1',
    category: 'Muscle',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1920',
    description: 'O muscle car com o maior torque da sua era.',
    specs: { engine: '7.5L V8', topSpeed: '120 mph', acceleration: '5.8s 0-60' }
  },
  {
    id: 'm20',
    title: '1969 Mercury Cougar Eliminator',
    category: 'Muscle',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1615906659444-1af689b7e13e?auto=format&fit=crop&q=80&w=1920',
    description: 'O primo luxuoso e potente do Mustang.',
    specs: { engine: '7.0L V8', topSpeed: '130 mph', acceleration: '5.5s 0-60' }
  },

  // Clássicos
  {
    id: 'c1',
    title: 'Ferrari F40',
    category: 'Clássicos',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1920',
    description: 'O último carro pessoalmente aprovado por Enzo Ferrari.',
    specs: { engine: '2.9L Twin-Turbo V8', topSpeed: '201 mph', acceleration: '3.8s 0-60' }
  },
  {
    id: 'c2',
    title: 'Mercedes-Benz 300 SL Gullwing',
    category: 'Clássicos',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1920',
    description: 'As icônicas portas asa de gaivota e elegância atemporal.',
    specs: { engine: '3.0L I6', topSpeed: '163 mph', acceleration: '8.8s 0-60' }
  },
  {
    id: 'c3',
    title: 'Jaguar E-Type',
    category: 'Clássicos',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1920',
    description: 'O carro mais bonito já fabricado, segundo Enzo Ferrari.',
    specs: { engine: '3.8L I6', topSpeed: '150 mph', acceleration: '7.0s 0-60' }
  },
  {
    id: 'c4',
    title: 'Lamborghini Miura',
    category: 'Clássicos',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&q=80&w=1920',
    description: 'O primeiro supercarro de motor central.',
    specs: { engine: '3.9L V12', topSpeed: '171 mph', acceleration: '6.7s 0-60' }
  },
  {
    id: 'c5',
    title: 'Porsche 356',
    category: 'Clássicos',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1920',
    description: 'Onde tudo começou para a Porsche.',
    specs: { engine: '1.6L Flat-4', topSpeed: '107 mph', acceleration: '13.5s 0-60' }
  },
  {
    id: 'c6',
    title: 'Aston Martin DB5',
    category: 'Clássicos',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=1920',
    description: 'O carro definitivo do James Bond.',
    specs: { engine: '4.0L I6', topSpeed: '145 mph', acceleration: '8.0s 0-60' }
  },
  {
    id: 'c7',
    title: 'Chevrolet Corvette C2',
    category: 'Clássicos',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820bc6988?auto=format&fit=crop&q=80&w=1920',
    description: 'O icônico Sting Ray com design split-window.',
    specs: { engine: '5.4L V8', topSpeed: '135 mph', acceleration: '5.8s 0-60' }
  },
  {
    id: 'c8',
    title: 'BMW 507',
    category: 'Clássicos',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'Um dos roadsters mais raros e belos da BMW.',
    specs: { engine: '3.2L V8', topSpeed: '122 mph', acceleration: '11.1s 0-60' }
  },
  {
    id: 'c9',
    title: 'Shelby Cobra',
    category: 'Clássicos',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1594976612316-9b9b12df0396?auto=format&fit=crop&q=80&w=1920',
    description: 'Potência americana em um chassi britânico leve.',
    specs: { engine: '7.0L V8', topSpeed: '164 mph', acceleration: '4.2s 0-60' }
  },
  {
    id: 'c10',
    title: 'Alfa Romeo Tipo 33 Stradale',
    category: 'Clássicos',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920',
    description: 'Uma joia italiana rara e extremamente bela.',
    specs: { engine: '2.0L V8', topSpeed: '160 mph', acceleration: '5.5s 0-60' }
  },
  {
    id: 'c11',
    title: '1957 Chevrolet Bel Air',
    category: 'Clássicos',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1920',
    description: 'O ícone cultural da América dos anos 50.',
    specs: { engine: '4.6L V8', topSpeed: '100 mph', acceleration: '10.5s 0-60' }
  },
  {
    id: 'c12',
    title: '1963 Corvette Split Window',
    category: 'Clássicos',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820bc6988?auto=format&fit=crop&q=80&w=1920',
    description: 'O design mais icônico da história do Corvette.',
    specs: { engine: '5.4L V8', topSpeed: '135 mph', acceleration: '5.8s 0-60' }
  },
  {
    id: 'c13',
    title: '1961 Jaguar E-Type Roadster',
    category: 'Clássicos',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1920',
    description: 'Elegância britânica pura em forma de conversível.',
    specs: { engine: '3.8L I6', topSpeed: '150 mph', acceleration: '7.0s 0-60' }
  },
  {
    id: 'c14',
    title: '1955 Porsche 550 Spyder',
    category: 'Clássicos',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1920',
    description: 'O lendário "Little Bastard" de James Dean.',
    specs: { engine: '1.5L Flat-4', topSpeed: '140 mph', acceleration: '8.0s 0-60' }
  },
  {
    id: 'c15',
    title: '1967 Ferrari 275 GTB/4',
    category: 'Clássicos',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1920',
    description: 'Uma das Ferraris V12 mais bonitas já feitas.',
    specs: { engine: '3.3L V12', topSpeed: '165 mph', acceleration: '6.0s 0-60' }
  },
  {
    id: 'c16',
    title: '1964 Aston Martin DB5',
    category: 'Clássicos',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=1920',
    description: 'O carro de espionagem definitivo com estilo britânico.',
    specs: { engine: '4.0L I6', topSpeed: '145 mph', acceleration: '8.0s 0-60' }
  },
  {
    id: 'c17',
    title: '1966 Lamborghini Miura P400',
    category: 'Clássicos',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&q=80&w=1920',
    description: 'O nascimento do conceito moderno de supercarro.',
    specs: { engine: '3.9L V12', topSpeed: '171 mph', acceleration: '6.7s 0-60' }
  },
  {
    id: 'c18',
    title: '1954 Mercedes-Benz 300 SL',
    category: 'Clássicos',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1920',
    description: 'Inovação técnica e design de portas asa de gaivota.',
    specs: { engine: '3.0L I6', topSpeed: '163 mph', acceleration: '8.8s 0-60' }
  },
  {
    id: 'c19',
    title: '1969 BMW 2002 Turbo',
    category: 'Clássicos',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O primeiro carro turbo de produção da Europa.',
    specs: { engine: '2.0L Turbo I4', topSpeed: '130 mph', acceleration: '7.0s 0-60' }
  },
  {
    id: 'c20',
    title: '1974 Lancia Stratos HF',
    category: 'Clássicos',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1594976612316-9b9b12df0396?auto=format&fit=crop&q=80&w=1920',
    description: 'A lenda do rally com design futurista da Bertone.',
    specs: { engine: '2.4L V6', topSpeed: '143 mph', acceleration: '6.8s 0-60' }
  },

  // Elétricos
  {
    id: 'e1',
    title: 'Tesla Model S Plaid',
    category: 'Elétricos',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1920',
    description: 'Aceleração inigualável em um sedã elétrico de luxo.',
    specs: { engine: 'Tri-Motor Elétrico', topSpeed: '200 mph', acceleration: '1.99s 0-60' }
  },
  {
    id: 'e2',
    title: 'Lucid Air Sapphire',
    category: 'Elétricos',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1920',
    description: 'O ápice do luxo e performance elétrica.',
    specs: { engine: 'Tri-Motor Elétrico', topSpeed: '205 mph', acceleration: '1.89s 0-60' }
  },
  {
    id: 'e3',
    title: 'Porsche Taycan Turbo S',
    category: 'Elétricos',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1614200024993-21c39211d9ad?auto=format&fit=crop&q=80&w=1920',
    description: 'A alma da Porsche em um coração elétrico.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '161 mph', acceleration: '2.6s 0-60' }
  },
  {
    id: 'e4',
    title: 'Audi RS e-tron GT',
    category: 'Elétricos',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1614200024993-21c39211d9ad?auto=format&fit=crop&q=80&w=1920',
    description: 'Design progressivo e performance eletrizante.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '155 mph', acceleration: '3.1s 0-60' }
  },
  {
    id: 'e5',
    title: 'Mercedes-AMG EQS 53',
    category: 'Elétricos',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1611310263986-313b56e47a95?auto=format&fit=crop&q=80&w=1920',
    description: 'Luxo supremo com o DNA da AMG.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '155 mph', acceleration: '3.4s 0-60' }
  },
  {
    id: 'e6',
    title: 'Rivian R1T',
    category: 'Elétricos',
    style: 'Off-Road',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1920',
    description: 'A picape elétrica pronta para qualquer aventura.',
    specs: { engine: 'Quad-Motor Elétrico', topSpeed: '115 mph', acceleration: '3.0s 0-60' }
  },
  {
    id: 'e7',
    title: 'Hyundai Ioniq 5 N',
    category: 'Elétricos',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1920',
    description: 'Diversão pura em um hatchback elétrico de alta performance.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '161 mph', acceleration: '3.4s 0-60' }
  },
  {
    id: 'e8',
    title: 'Lotus Evija',
    category: 'Elétricos',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1920',
    description: 'O hipercarro elétrico britânico mais potente.',
    specs: { engine: 'Quad-Motor Elétrico', topSpeed: '200+ mph', acceleration: '2.0s 0-60' }
  },
  {
    id: 'e9',
    title: 'Pininfarina Battista',
    category: 'Elétricos',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1920',
    description: 'Design italiano encontra performance elétrica extrema.',
    specs: { engine: 'Quad-Motor Elétrico', topSpeed: '217 mph', acceleration: '1.79s 0-60' }
  },
  {
    id: 'e10',
    title: 'Polestar 6',
    category: 'Elétricos',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1920',
    description: 'O roadster elétrico do futuro.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '155 mph', acceleration: '3.2s 0-60' }
  },
  {
    id: 'e11',
    title: 'Tesla Roadster (2008)',
    category: 'Elétricos',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1920',
    description: 'O carro que provou que elétricos podem ser desejáveis.',
    specs: { engine: 'Motor Elétrico AC', topSpeed: '125 mph', acceleration: '3.7s 0-60' }
  },
  {
    id: 'e12',
    title: 'Audi RS e-tron GT',
    category: 'Elétricos',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1614200024993-21c39211d9ad?auto=format&fit=crop&q=80&w=1920',
    description: 'Gran Turismo elétrico com design de tirar o fôlego.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '155 mph', acceleration: '3.1s 0-60' }
  },
  {
    id: 'e13',
    title: 'BMW i4 M50',
    category: 'Elétricos',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'A dinâmica de condução da BMW agora totalmente elétrica.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '140 mph', acceleration: '3.7s 0-60' }
  },
  {
    id: 'e14',
    title: 'Mercedes-Benz EQS SUV',
    category: 'Elétricos',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1611310263986-313b56e47a95?auto=format&fit=crop&q=80&w=1920',
    description: 'O auge do luxo elétrico em formato SUV.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '130 mph', acceleration: '4.5s 0-60' }
  },
  {
    id: 'e15',
    title: 'Ford Mustang Mach-E GT',
    category: 'Elétricos',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1584345604480-8347bb9c56a0?auto=format&fit=crop&q=80&w=1920',
    description: 'A alma do Mustang em um SUV elétrico de alta performance.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '124 mph', acceleration: '3.5s 0-60' }
  },
  {
    id: 'e16',
    title: 'GMC Hummer EV SUV',
    category: 'Elétricos',
    style: 'Off-Road',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1920',
    description: 'Poder elétrico bruto com capacidades off-road extremas.',
    specs: { engine: 'Tri-Motor Elétrico', topSpeed: '106 mph', acceleration: '3.3s 0-60' }
  },
  {
    id: 'e17',
    title: 'Polestar 3',
    category: 'Elétricos',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1920',
    description: 'O SUV elétrico de performance para a era moderna.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '130 mph', acceleration: '4.6s 0-60' }
  },
  {
    id: 'e18',
    title: 'Kia EV6 GT',
    category: 'Elétricos',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1920',
    description: 'Performance de supercarro em um crossover elétrico versátil.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '161 mph', acceleration: '3.4s 0-60' }
  },
  {
    id: 'e19',
    title: 'Volkswagen ID.4 GTX',
    category: 'Elétricos',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1920',
    description: 'A versão esportiva e potente da linha ID da VW.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '112 mph', acceleration: '6.2s 0-60' }
  },
  {
    id: 'e20',
    title: 'Nio EP9',
    category: 'Elétricos',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1920',
    description: 'O hipercarro elétrico chinês que dominou Nürburgring.',
    specs: { engine: 'Quad-Motor Elétrico', topSpeed: '194 mph', acceleration: '2.7s 0-60' }
  },

  // Off-Road
  {
    id: 'o1',
    title: 'Land Rover Defender',
    category: 'Off-Road',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1920',
    description: 'Capacidade off-road icônica encontra o luxo moderno.',
    specs: { engine: '3.0L I6 Mild-Hybrid', topSpeed: '119 mph', acceleration: '6.0s 0-60' }
  },
  {
    id: 'o2',
    title: 'Ford Bronco Raptor',
    category: 'Off-Road',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1615906659444-1af689b7e13e?auto=format&fit=crop&q=80&w=1920',
    description: 'Inspirado no deserto, construído para a aventura.',
    specs: { engine: '3.0L V6 Twin-Turbo', topSpeed: '100 mph', acceleration: '5.6s 0-60' }
  },
  {
    id: 'o3',
    title: 'Jeep Wrangler Rubicon',
    category: 'Off-Road',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1920',
    description: 'A liberdade de ir a qualquer lugar.',
    specs: { engine: '2.0L Turbo I4', topSpeed: '110 mph', acceleration: '6.8s 0-60' }
  },
  {
    id: 'o4',
    title: 'Mercedes-Benz G-Class',
    category: 'Off-Road',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1520105072000-f44fc083e50b?auto=format&fit=crop&q=80&w=1920',
    description: 'O ícone do luxo off-road.',
    specs: { engine: '4.0L V8 Twin-Turbo', topSpeed: '130 mph', acceleration: '4.5s 0-60' }
  },
  {
    id: 'o5',
    title: 'Toyota Land Cruiser 300',
    category: 'Off-Road',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1594976612316-9b9b12df0396?auto=format&fit=crop&q=80&w=1920',
    description: 'Lendária confiabilidade em qualquer terreno.',
    specs: { engine: '3.5L V6 Twin-Turbo', topSpeed: '130 mph', acceleration: '6.7s 0-60' }
  },
  {
    id: 'o6',
    title: 'Ram 1500 TRX',
    category: 'Off-Road',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=1920',
    description: 'A picape mais rápida e potente do mundo.',
    specs: { engine: '6.2L V8 Supercharged', topSpeed: '118 mph', acceleration: '4.5s 0-60' }
  },
  {
    id: 'o7',
    title: 'Chevrolet Colorado ZR2',
    category: 'Off-Road',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1615906659444-1af689b7e13e?auto=format&fit=crop&q=80&w=1920',
    description: 'Performance off-road em um tamanho médio.',
    specs: { engine: '2.7L Turbo I4', topSpeed: '100 mph', acceleration: '6.8s 0-60' }
  },
  {
    id: 'o8',
    title: 'Ineos Grenadier',
    category: 'Off-Road',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=1920',
    description: 'Um utilitário puro e sem frescuras.',
    specs: { engine: '3.0L I6 Turbo', topSpeed: '100 mph', acceleration: '8.6s 0-60' }
  },
  {
    id: 'o9',
    title: 'Hummer EV',
    category: 'Off-Road',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1920',
    description: 'A revolução elétrica no off-road.',
    specs: { engine: 'Tri-Motor Elétrico', topSpeed: '106 mph', acceleration: '3.0s 0-60' }
  },
  {
    id: 'o10',
    title: 'Suzuki Jimny',
    category: 'Off-Road',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1920',
    description: 'Pequeno no tamanho, gigante na capacidade.',
    specs: { engine: '1.5L I4', topSpeed: '90 mph', acceleration: '12.0s 0-60' }
  },
  {
    id: 'o11',
    title: 'Toyota Hilux Arctic Trucks',
    category: 'Off-Road',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1594976612316-9b9b12df0396?auto=format&fit=crop&q=80&w=1920',
    description: 'Preparada para as condições mais extremas do planeta.',
    specs: { engine: '2.8L Turbo Diesel', topSpeed: '105 mph', acceleration: '10.0s 0-60' }
  },
  {
    id: 'o12',
    title: 'Mitsubishi Pajero Evolution',
    category: 'Off-Road',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'A lenda do Dakar homologada para as ruas.',
    specs: { engine: '3.5L V6', topSpeed: '112 mph', acceleration: '8.0s 0-60' }
  },
  {
    id: 'o13',
    title: 'Nissan Patrol Nismo',
    category: 'Off-Road',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1594976612316-9b9b12df0396?auto=format&fit=crop&q=80&w=1920',
    description: 'Luxo off-road com performance aprimorada pela Nismo.',
    specs: { engine: '5.6L V8', topSpeed: '124 mph', acceleration: '6.5s 0-60' }
  },
  {
    id: 'o14',
    title: 'Bowler Wildcat',
    category: 'Off-Road',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1615906659444-1af689b7e13e?auto=format&fit=crop&q=80&w=1920',
    description: 'Um carro de rally puro para terrenos impossíveis.',
    specs: { engine: '4.0L V8', topSpeed: '100 mph', acceleration: '5.8s 0-60' }
  },
  {
    id: 'o15',
    title: 'Local Motors Rally Fighter',
    category: 'Off-Road',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1920',
    description: 'Um híbrido entre muscle car e off-roader de deserto.',
    specs: { engine: '6.2L V8', topSpeed: '130 mph', acceleration: '6.0s 0-60' }
  },
  {
    id: 'o16',
    title: 'Ariel Nomad',
    category: 'Off-Road',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1920',
    description: 'A experiência off-road mais visceral e leve.',
    specs: { engine: '2.4L I4', topSpeed: '125 mph', acceleration: '3.4s 0-60' }
  },
  {
    id: 'o17',
    title: 'Rezvani Tank',
    category: 'Off-Road',
    style: 'Cyberpunk',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1920',
    description: 'Um veículo tático extremo para as ruas.',
    specs: { engine: '6.2L V8 Supercharged', topSpeed: '140 mph', acceleration: '3.5s 0-60' }
  },
  {
    id: 'o18',
    title: 'Mercedes-Benz G63 AMG 6x6',
    category: 'Off-Road',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1520105072000-f44fc083e50b?auto=format&fit=crop&q=80&w=1920',
    description: 'O rei incontestável do excesso off-road.',
    specs: { engine: '5.5L V8 Twin-Turbo', topSpeed: '100 mph', acceleration: '7.8s 0-60' }
  },
  {
    id: 'o19',
    title: 'Hennessey VelociRaptor 6x6',
    category: 'Off-Road',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=1920',
    description: 'Mais rodas, mais potência, mais aventura.',
    specs: { engine: '3.5L V6 Twin-Turbo', topSpeed: '110 mph', acceleration: '4.9s 0-60' }
  },
  {
    id: 'o20',
    title: 'Ford F-150 Lightning Off-Road',
    category: 'Off-Road',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1920',
    description: 'A picape elétrica preparada para trilhas silenciosas.',
    specs: { engine: 'Dual-Motor Elétrico', topSpeed: '110 mph', acceleration: '4.0s 0-60' }
  },

  // JDM
  {
    id: 'j1',
    title: 'Nissan GT-R R34',
    category: 'JDM',
    style: 'Cyberpunk',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O lendário "Godzilla" do mundo JDM.',
    specs: { engine: '2.6L Twin-Turbo I6', topSpeed: '155 mph', acceleration: '4.7s 0-60' }
  },
  {
    id: 'j2',
    title: 'Toyota Supra A80',
    category: 'JDM',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    description: 'O ícone dos anos 90 com o lendário motor 2JZ.',
    specs: { engine: '3.0L Twin-Turbo I6', topSpeed: '155 mph', acceleration: '4.6s 0-60' }
  },
  {
    id: 'j3',
    title: 'Mazda RX-7 FD',
    category: 'JDM',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    description: 'A beleza do motor rotativo e design fluido.',
    specs: { engine: '1.3L Twin-Turbo Rotary', topSpeed: '155 mph', acceleration: '5.0s 0-60' }
  },
  {
    id: 'j4',
    title: 'Honda NSX (NA1)',
    category: 'JDM',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O supercarro japonês que mudou as regras do jogo.',
    specs: { engine: '3.0L V6 VTEC', topSpeed: '168 mph', acceleration: '5.5s 0-60' }
  },
  {
    id: 'j5',
    title: 'Subaru Impreza 22B',
    category: 'JDM',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    description: 'A lenda do rally para as ruas.',
    specs: { engine: '2.2L Turbo Flat-4', topSpeed: '155 mph', acceleration: '4.5s 0-60' }
  },
  {
    id: 'j6',
    title: 'Mitsubishi Lancer Evolution IX',
    category: 'JDM',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'Precisão e tração integral lendária.',
    specs: { engine: '2.0L Turbo I4', topSpeed: '155 mph', acceleration: '4.8s 0-60' }
  },
  {
    id: 'j7',
    title: 'Nissan Silvia S15',
    category: 'JDM',
    style: 'Cyberpunk',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O rei do drift com estilo inconfundível.',
    specs: { engine: '2.0L Turbo I4', topSpeed: '145 mph', acceleration: '5.5s 0-60' }
  },
  {
    id: 'j8',
    title: 'Honda Civic Type R (EK9)',
    category: 'JDM',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O hatchback definitivo com alma de corrida.',
    specs: { engine: '1.6L I4 VTEC', topSpeed: '140 mph', acceleration: '6.7s 0-60' }
  },
  {
    id: 'j9',
    title: 'Toyota AE86',
    category: 'JDM',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'A lenda das montanhas e do drift clássico.',
    specs: { engine: '1.6L I4', topSpeed: '125 mph', acceleration: '8.5s 0-60' }
  },
  {
    id: 'j10',
    title: 'Mazda MX-5 Miata (NA)',
    category: 'JDM',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'Pura alegria de dirigir em um roadster leve.',
    specs: { engine: '1.6L I4', topSpeed: '116 mph', acceleration: '8.3s 0-60' }
  },
  {
    id: 'j11',
    title: 'Toyota Chaser JZX100',
    category: 'JDM',
    style: 'Cyberpunk',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    description: 'O sedã de drift definitivo com motor 1JZ.',
    specs: { engine: '2.5L Turbo I6', topSpeed: '155 mph', acceleration: '5.5s 0-60' }
  },
  {
    id: 'j12',
    title: 'Nissan Skyline R32 GT-R',
    category: 'JDM',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O carro que deu origem ao apelido Godzilla.',
    specs: { engine: '2.6L Twin-Turbo I6', topSpeed: '155 mph', acceleration: '5.0s 0-60' }
  },
  {
    id: 'j13',
    title: 'Honda Integra Type R (DC2)',
    category: 'JDM',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    description: 'Considerado um dos melhores carros de tração dianteira de todos os tempos.',
    specs: { engine: '1.8L I4 VTEC', topSpeed: '145 mph', acceleration: '6.2s 0-60' }
  },
  {
    id: 'j14',
    title: 'Mazda RX-7 Savanna (FC)',
    category: 'JDM',
    style: 'Retro',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    description: 'A segunda geração do RX-7 com estilo clássico dos anos 80.',
    specs: { engine: '1.3L Turbo Rotary', topSpeed: '145 mph', acceleration: '6.5s 0-60' }
  },
  {
    id: 'j15',
    title: 'Nissan 350Z (Z33)',
    category: 'JDM',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O renascimento da linhagem Z com performance moderna.',
    specs: { engine: '3.5L V6', topSpeed: '155 mph', acceleration: '5.4s 0-60' }
  },
  {
    id: 'j16',
    title: 'Mitsubishi GTO (3000GT)',
    category: 'JDM',
    style: 'Futurista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    description: 'Um tour de force tecnológico dos anos 90.',
    specs: { engine: '3.0L Twin-Turbo V6', topSpeed: '155 mph', acceleration: '4.8s 0-60' }
  },
  {
    id: 'j17',
    title: 'Toyota Celica GT-Four (ST205)',
    category: 'JDM',
    style: 'Cinematográfico',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    description: 'A lenda do rally com tração integral e motor turbo.',
    specs: { engine: '2.0L Turbo I4', topSpeed: '152 mph', acceleration: '5.9s 0-60' }
  },
  {
    id: 'j18',
    title: 'Nissan 180SX',
    category: 'JDM',
    style: 'Cyberpunk',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O ícone do drift com faróis escamoteáveis.',
    specs: { engine: '2.0L Turbo I4', topSpeed: '140 mph', acceleration: '6.5s 0-60' }
  },
  {
    id: 'j19',
    title: 'Honda S2000 (AP1)',
    category: 'JDM',
    style: 'Minimalista',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920',
    description: 'O roadster com um dos maiores giros de motor da história.',
    specs: { engine: '2.0L I4 VTEC', topSpeed: '150 mph', acceleration: '5.8s 0-60' }
  },
  {
    id: 'j20',
    title: 'Subaru Impreza WRX STI (GC8)',
    category: 'JDM',
    style: 'Vibrante',
    aspectRatio: '16:9',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    description: 'A primeira geração do ícone do rally STI.',
    specs: { engine: '2.0L Turbo Flat-4', topSpeed: '150 mph', acceleration: '4.9s 0-60' }
  }
];
