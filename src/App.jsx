import React, { useState, useMemo } from 'react';
import { 
  Database, 
  Box, 
  Info, 
  RotateCcw, 
  Play, 
  Pause, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Dna,
  Atom,
  ExternalLink,
  Beaker,
  Fingerprint,
  FileCode2,
  Image as ImageIcon,
  Languages,
  Hexagon,
  Combine,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  Spline
} from 'lucide-react';
import GlassPanel from './components/GlassPanel';
import MoleculeViewer from './components/MoleculeViewer';
import { isomerGroups } from './data/moleculesData';
import { useLanguage } from './components/LanguageContext';

export default function App() {
  const { language, setLanguage, t } = useLanguage();
  
  // Flatten subtypes for selection logic while keeping parents for UI
  const allSubtypes = useMemo(() => {
    const flattened = [];
    const flatten = (items, parentTitle = null) => {
      items.forEach(item => {
        if (item.subtypes) {
          flatten(item.subtypes, item.title);
        } else if (item.isomers) {
          flattened.push({ ...item, parentTitle });
        }
      });
    };
    flatten(isomerGroups);
    return flattened;
  }, []);

  const [selectedGroup, setSelectedGroup] = useState(allSubtypes[0]);
  const [selectedCarbons, setSelectedCarbons] = useState(4);
  const [selectedIsomerIndex, setSelectedIsomerIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [mirrorMode, setMirrorMode] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [showHydrogens, setShowHydrogens] = useState(true);

  // Filter isomers based on selected group AND carbon count (if applicable)
  const filteredIsomers = useMemo(() => {
    if (!selectedGroup || !selectedGroup.isomers) return [];
    
    const needsCarbonFilter = ['estructural-cadea', 'estructural-posicion', 'estereoisomeria-geometrica'].includes(selectedGroup.id);
    
    if (needsCarbonFilter) {
      const filtered = selectedGroup.isomers.filter(iso => iso.carbons === selectedCarbons);
      return filtered.length > 0 ? filtered : [selectedGroup.isomers[0]];
    }
    return selectedGroup.isomers;
  }, [selectedGroup, selectedCarbons]);

  const selectedIsomer = filteredIsomers[selectedIsomerIndex] || filteredIsomers[0] || (selectedGroup?.isomers ? selectedGroup.isomers[0] : null);
  
  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setSelectedIsomerIndex(0);
    
    const availableCarbons = [...new Set(group.isomers.map(iso => iso.carbons))].filter(Boolean);
    if (availableCarbons.length > 0 && !availableCarbons.includes(selectedCarbons)) {
      setSelectedCarbons(availableCarbons[0]);
    }
    setMirrorMode(group.id === 'estereoisomeria-optica');
  };

  const handleCarbonSelect = (count) => {
    setSelectedCarbons(count);
    setSelectedIsomerIndex(0);
  };

  const showCarbonSelector = ['estructural-cadea', 'estructural-posicion', 'estereoisomeria-geometrica'].includes(selectedGroup.id);
  
  const activeCarbonCounts = useMemo(() => {
    if (!selectedGroup) return [4, 5, 6];
    const counts = [...new Set(selectedGroup.isomers.map(iso => iso.carbons))].filter(Boolean).sort((a,b) => a-b);
    return counts.length > 0 ? counts : [4, 5, 6];
  }, [selectedGroup]);

  const getGroupIcon = (id) => {
    switch(id) {
      case 'estructural-cadea': return <Database size={16} />;
      case 'estructural-posicion': return <Layers size={16} />;
      case 'estructural-funcion': return <FlaskConical size={16} />;
      case 'estereoisomeria-geometrica': return <Box size={16} />;
      case 'estereoisomeria-optica': return <Dna size={16} />;
      case 'estereoisomeria-conformacional': return <RotateCcw size={16} />;
      case 'estereoisomeria-configuracional': return <Spline size={16} />;
      default: return <Atom size={16} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-200 overflow-hidden font-sans">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* MOBILE MENU TOGGLE */}
      <button 
        className="lg:hidden absolute top-4 left-4 z-50 p-2 bg-white/10 rounded-lg backdrop-blur-md"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* LEFT SIDEBAR */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-80 
        transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} 
        transition-transform duration-300 ease-in-out
        p-4 flex flex-col gap-4
      `}>
        <GlassPanel variant="heavy" className="flex-1 flex flex-col gap-6 overflow-hidden text-sm">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/20 rounded-xl shadow-lg ring-1 ring-blue-500/20">
                  <Atom className="text-blue-400" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {t('appTitle')}
                  </h1>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <p className="text-[10px] text-slate-500 font-medium tracking-tight">
                      {t('copyright')}
                    </p>
                    <a 
                      href="https://creativecommons.org/licenses/by/4.0/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="opacity-40 hover:opacity-100 transition-opacity"
                    >
                      <img 
                        src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg" 
                        alt="CC BY" 
                        className="h-3 shadow-sm"
                      />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-1.5 p-1 bg-white/5 rounded-xl border border-white/5">
                {[
                  { id: 'gl', flag: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Galicia.svg' },
                  { id: 'en', flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg' }
                ].map(lang => (
                  <button 
                    key={lang.id}
                    onClick={() => setLanguage(lang.id)}
                    className={`p-1 rounded-lg transition-all ${language === lang.id ? 'bg-blue-600/30 ring-1 ring-blue-500/50' : 'opacity-40 hover:opacity-100'}`}
                  >
                    <img src={lang.flag} alt={lang.id} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-8 pt-2">
            {isomerGroups.map((group) => (
              <section key={group.id} className="flex flex-col gap-3">
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 flex items-center gap-2">
                   <ChevronRight size={10} className="text-blue-500" /> {group.title[language]}
                </h3>
                <div className="flex flex-col gap-1">
                  {group.subtypes.map((sub) => {
                    if (sub.subtypes) {
                      return (
                        <div key={sub.id} className="flex flex-col gap-2 mt-2">
                          <h4 className="text-[9px] font-bold text-slate-600 uppercase tracking-wider px-4 flex items-center gap-2">
                            <span className="w-1 h-3 bg-slate-700 rounded-full" /> {sub.title[language]}
                          </h4>
                          <div className="flex flex-col gap-1 pl-3 border-l border-white/5 ml-4">
                            {sub.subtypes.map((nestedSub) => (
                              <button
                                key={nestedSub.id}
                                onClick={() => handleGroupSelect(nestedSub)}
                                className={`
                                  w-full flex items-center gap-3 px-3 py-1.5 rounded-xl transition-all text-left
                                  ${selectedGroup.id === nestedSub.id 
                                    ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' 
                                    : 'hover:bg-white/5 text-slate-500 border border-transparent'}
                                `}
                              >
                                {getGroupIcon(nestedSub.id)}
                                <span className="text-[11px] font-medium">{nestedSub.title[language]}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleGroupSelect(sub)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all text-left
                          ${selectedGroup.id === sub.id 
                            ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' 
                            : 'hover:bg-white/5 text-slate-400 border border-transparent'}
                        `}
                      >
                        {getGroupIcon(sub.id)}
                        <span className="text-xs font-medium">{sub.title[language]}</span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}

            {showCarbonSelector && (
              <section className="animate-in fade-in slide-in-from-left-2 duration-300">
                <h2 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3 px-2">
                  {t('chainLength')}
                </h2>
                <div className="grid grid-cols-3 gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
                  {activeCarbonCounts.map((count) => (
                    <button
                      key={count}
                      onClick={() => handleCarbonSelect(count)}
                      className={`
                        py-1.5 rounded-lg text-xs font-bold transition-all
                        ${selectedCarbons === count 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                          : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}
                      `}
                    >
                      C{count}
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section className="animate-fade-in" key={`${selectedGroup.id}-${selectedCarbons}`}>
              <h2 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3 px-2">
                {t('isomersTitle')}
              </h2>
              <div className="grid grid-cols-1 gap-2 pb-10">
                {filteredIsomers.map((isomer, idx) => (
                  <button
                    key={isomer.id}
                    onClick={() => setSelectedIsomerIndex(idx)}
                    className={`
                      text-left p-3 rounded-xl transition-all border
                      ${selectedIsomerIndex === idx 
                        ? 'bg-purple-600/20 text-purple-200 border-purple-500/40' 
                        : 'bg-white/5 border-transparent hover:border-white/10 text-slate-400'}
                    `}
                  >
                    <div className="text-[13px] font-semibold break-words leading-tight">{isomer.name[language]}</div>
                    <div className="text-[10px] opacity-60 mt-0.5">{isomer.formula}</div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </GlassPanel>
      </aside>

      {/* MAIN VIEW */}
      <main className="flex-1 relative flex flex-col overflow-hidden">
        <div className="flex-1 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden relative">
          <MoleculeViewer 
            molecule={selectedIsomer} 
            autoRotate={autoRotate}
            mirrorMode={mirrorMode}
            showHydrogens={showHydrogens}
          />
          
          {/* INFO GUIDE PANEL (Bottom Center) */}
          <div className={`
             absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-40
             transition-all duration-500 ease-in-out
             ${showGuide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}
          `}>
            <GlassPanel variant="heavy" className="p-5 relative border border-white/10 shadow-2xl">
              <button 
                onClick={() => setShowGuide(false)}
                className="absolute top-3 right-3 p-1 hover:bg-white/10 rounded-full transition-colors text-slate-500 hover:text-white"
              >
                <X size={16} />
              </button>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-2xl text-blue-400 shrink-0">
                  <Info size={24} />
                </div>
                <div className="space-y-2 pr-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">
                       {selectedGroup.parentTitle?.[language] || t('description')}
                    </span>
                    <ChevronRight size={10} className="text-slate-600" />
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {selectedGroup.title[language]}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium line-clamp-4 hover:line-clamp-none transition-all cursor-help">
                    {selectedGroup.description[language]}
                  </p>
                </div>
              </div>
            </GlassPanel>
          </div>

          {!showGuide && (
             <button 
                onClick={() => setShowGuide(true)}
                className="absolute bottom-6 left-4 z-40 p-3 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-full text-blue-400 shadow-xl backdrop-blur-md transition-all animate-bounce"
                title={t('showTheory')}
             >
                <Info size={20} />
             </button>
          )}
        </div>

        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
          <GlassPanel className="flex items-center gap-1 p-1.5 px-3">
            <button 
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-2 rounded-lg transition-colors ${autoRotate ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-white/5 text-slate-400'}`}
              title={t('autoRotation')}
            >
              {autoRotate ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <div className="w-[1px] h-4 bg-white/10 mx-1" />
            <button 
              className="p-2 rounded-lg hover:bg-white/5 text-slate-400 transition-colors"
              title={t('resetView')}
              onClick={() => window.dispatchEvent(new CustomEvent('reset-camera'))}
            >
              <RotateCcw size={18} />
            </button>
            <div className="w-[1px] h-4 bg-white/10 mx-1" />
            <button 
              onClick={() => setShowHydrogens(!showHydrogens)}
              className={`p-2 rounded-lg transition-colors ${showHydrogens ? 'bg-blue-600/20 text-blue-400' : 'hover:bg-white/5 text-slate-400'}`}
              title={showHydrogens ? t('hideHydrogens') : t('showHydrogens')}
            >
              <Atom size={18} />
            </button>
            {selectedGroup.id === 'estereoisomeria-optica' && (
              <>
                <div className="w-[1px] h-4 bg-white/10 mx-1" />
                <button 
                  onClick={() => setMirrorMode(!mirrorMode)}
                  className={`p-2 rounded-lg transition-colors ${mirrorMode ? 'bg-purple-600/20 text-purple-400' : 'hover:bg-white/5 text-slate-400'}`}
                  title={t('mirrorMode')}
                >
                  <Dna size={18} />
                </button>
              </>
            )}
          </GlassPanel>
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={`
        fixed lg:static inset-y-0 right-0 z-40 w-80 
        transform ${showRightPanel ? 'translate-x-0' : 'translate-x-full'} 
        transition-transform duration-300 ease-in-out
        p-4 flex flex-col gap-4
      `}>
        <GlassPanel variant="heavy" className="flex-1 flex flex-col gap-6 overflow-hidden border-l border-white/10">
          <div className="flex-none flex flex-col items-center text-center gap-2 pt-2">
            <h2 className="text-4xl font-black text-white tracking-tighter mb-1">
              {selectedIsomer.formula}
            </h2>
            <div className="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              {t('molecularFormula')}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-8">
            <section>
              <h3 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2 px-1">
                <ImageIcon size={14} /> {t('twoDRepresentation')}
              </h3>
              <div className="bg-[#001529] rounded-2xl p-6 border border-white/10 aspect-square flex items-center justify-center overflow-hidden group relative shadow-2xl">
                {selectedIsomer?.smiles ? (
                  <img 
                    src={`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${encodeURIComponent(selectedIsomer.smiles)}/PNG`}
                    alt={`${selectedIsomer.name[language]} 2D`} 
                    className="max-w-full max-h-full transition-transform duration-500 group-hover:scale-105"
                    style={{
                      filter: 'invert(1) brightness(1.5) contrast(1.2)'
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <FileCode2 size={40} className="opacity-20" />
                    <span className="text-[10px] uppercase tracking-widest">{t('noData')}</span>
                  </div>
                )}
              </div>
            </section>

            <section className="space-y-6 animate-fade-in" key={selectedIsomer.id}>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 leading-tight">{selectedIsomer.name[language]}</h3>
                <p className="text-xs font-medium text-blue-400 font-mono tracking-wide underline decoration-blue-500/30 underline-offset-4">
                  {selectedIsomer.iupac}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1 bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                    <Fingerprint size={12} className="text-slate-600" /> {t('casNumber')}
                  </div>
                  <div className="text-base font-mono text-slate-200">{selectedIsomer.cas}</div>
                </div>

                <div className="space-y-1 bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                    <FileCode2 size={12} className="text-slate-600" /> {t('smiles')}
                  </div>
                  <div className="text-xs font-mono text-slate-300 break-all bg-black/20 p-2 rounded-lg border border-white/5">
                    {selectedIsomer.smiles}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {selectedIsomer.description?.[language] && (
                  <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                    <h4 className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-2">
                      <Info size={14} className="text-blue-500" /> {t('description')}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      {selectedIsomer.description[language]}
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-3">
             <a 
              href={selectedIsomer.wikipediaUrl || `https://en.wikipedia.org/wiki/${selectedIsomer.iupac}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl transition-all shadow-lg shadow-blue-900/40 font-bold group text-sm"
            >
              <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {t('viewOnWikipedia')}
            </a>
          </div>
        </GlassPanel>
      </aside>

      {/* MOBILE PANEL TOGGLE (RIGHT) */}
      {!showRightPanel && (
        <button 
          className="lg:hidden absolute top-4 right-4 z-50 p-2 bg-white/10 rounded-lg backdrop-blur-md"
          onClick={() => setShowRightPanel(true)}
        >
          <Info size={20} />
        </button>
      )}
    </div>
  );
}
