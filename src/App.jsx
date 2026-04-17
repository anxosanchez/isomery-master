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
  Languages
} from 'lucide-react';
import GlassPanel from './components/GlassPanel';
import MoleculeViewer from './components/MoleculeViewer';
import { isomerGroups } from './data/moleculesData';
import { useLanguage } from './components/LanguageContext';

export default function App() {
  const { language, setLanguage, t } = useLanguage();
  
  const [selectedGroup, setSelectedGroup] = useState(isomerGroups[0]);
  const [selectedIsomerIndex, setSelectedIsomerIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [mirrorMode, setMirrorMode] = useState(false);

  const selectedIsomer = selectedGroup.isomers[selectedIsomerIndex];
  
  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setSelectedIsomerIndex(0);
    setMirrorMode(group.id === 'estereoisomeria-optica');
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
        <GlassPanel variant="heavy" className="flex-1 flex flex-col gap-6 overflow-hidden">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/20 rounded-xl">
                  <Atom className="text-blue-400" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {t('appTitle')}
                  </h1>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <p className="text-[10px] text-slate-500 font-medium">
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
              
              {/* LANGUAGE SELECTOR WITH FLAGS */}
              <div className="flex gap-1.5 p-1 bg-white/5 rounded-xl border border-white/5">
                <button 
                  onClick={() => setLanguage('gl')}
                  className={`p-1 rounded-lg transition-all ${language === 'gl' ? 'bg-blue-600/30 ring-1 ring-blue-500/50' : 'opacity-40 hover:opacity-100'}`}
                  title="Galego"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Galicia.svg" 
                    alt="GL" 
                    className="w-6 h-4 object-cover rounded-sm shadow-sm"
                  />
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`p-1 rounded-lg transition-all ${language === 'en' ? 'bg-blue-600/30 ring-1 ring-blue-500/50' : 'opacity-40 hover:opacity-100'}`}
                  title="English"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" 
                    alt="EN" 
                    className="w-6 h-4 object-cover rounded-sm shadow-sm"
                  />
                </button>
              </div>
            </div>
            
            <div className="px-2">
              <p className="text-base lg:text-lg font-semibold text-slate-200 tracking-tight leading-tight">
                {t('appSubtitle')}
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-6">
            <section>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 px-2">
                {t('typesTitle')}
              </h2>
              <div className="flex flex-col gap-1">
                {isomerGroups.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => handleGroupSelect(group)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all
                      ${selectedGroup.id === group.id 
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' 
                        : 'hover:bg-white/5 text-slate-400'}
                    `}
                  >
                    <Layers size={18} />
                    <span className="text-sm font-medium">{group.title[language]}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="animate-fade-in" key={selectedGroup.id}>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 px-2">
                {t('isomersTitle')}
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {selectedGroup.isomers.map((isomer, idx) => (
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
                    <div className="text-sm font-semibold">{isomer.name[language]}</div>
                    <div className="text-[10px] opacity-60 mt-0.5">{isomer.formula}</div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </GlassPanel>
      </aside>

      {/* MAIN VIEW */}
      <main className="flex-1 relative flex flex-col">
        {/* 3D CANVAS AREA */}
        <div className="flex-1 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
          <MoleculeViewer 
            molecule={selectedIsomer} 
            autoRotate={autoRotate}
            mirrorMode={mirrorMode}
          />
        </div>

        {/* 3D CONTROLS OVERLAY */}
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

      {/* RIGHT SIDEBAR (ENHANCED PROPERTY PANEL) */}
      <aside className={`
        fixed lg:static inset-y-0 right-0 z-40 w-96 
        transform ${showRightPanel ? 'translate-x-0' : 'translate-x-full'} 
        transition-transform duration-300 ease-in-out
        p-4 flex flex-col gap-4
      `}>
        <GlassPanel variant="heavy" className="flex-1 flex flex-col gap-6 overflow-hidden border-l border-white/10">
          <div className="flex-none flex flex-col items-center text-center gap-2 pt-2">
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-1">
              {selectedIsomer.formula}
            </h2>
            <div className="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-widest">
              {t('molecularFormula')}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-8">
            {/* 2D DIAGRAM - REFINED VISIBILITY */}
            <section>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2 px-1">
                <ImageIcon size={14} /> {t('twoDRepresentation')}
              </h3>
              {/* Dark Blue background with thick white lines */}
              <div className="bg-[#001529] rounded-2xl p-6 border border-white/10 aspect-square flex items-center justify-center overflow-hidden group relative shadow-2xl">
                <img 
                  src={`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${selectedIsomer.pubchemCid}/PNG`}
                  alt={`${selectedIsomer.name[language]} 2D`} 
                  className="max-w-full max-h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    filter: 'invert(1) brightness(2) contrast(1.5) drop-shadow(0px 0px 0.75px white) drop-shadow(0px 0px 0.75px white)'
                  }}
                />
                <div className="absolute inset-0 bg-blue-400/5 group-hover:bg-blue-400/10 transition-colors pointer-events-none" />
              </div>
            </section>

            {/* IDENTIFIERS & NAMES */}
            <section className="space-y-6 animate-fade-in" key={selectedIsomer.id}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{selectedIsomer.name[language]}</h3>
                <p className="text-sm font-medium text-blue-400 font-mono tracking-tight underline decoration-blue-500/30 underline-offset-4">
                  {selectedIsomer.iupac}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1 bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    <Fingerprint size={12} className="text-slate-600" /> {t('casNumber')}
                  </div>
                  <div className="text-lg font-mono text-slate-200">{selectedIsomer.cas}</div>
                </div>

                <div className="space-y-1 bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                    <FileCode2 size={12} className="text-slate-600" /> {t('smiles')}
                  </div>
                  <div className="text-sm font-mono text-slate-300 break-all bg-black/20 p-2 rounded-lg border border-white/5 leading-relaxed">
                    {selectedIsomer.smiles}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">{t('developedFormula')}</h4>
                  <div className="text-sm font-mono text-purple-300 bg-purple-500/5 p-3 rounded-xl border border-purple-500/10 text-center">
                    {selectedIsomer.developedFormula}
                  </div>
                </div>

                <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                  <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2">
                    <Info size={14} className="text-blue-500" /> {t('description')}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed italic">
                    {selectedIsomer.description[language] || selectedGroup.description[language]}
                  </p>
                </div>

                {selectedGroup.id === 'estereoisomeria-optica' && (
                  <div className="p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <CheckCircle2 size={14} />
                      <h4 className="text-xs font-bold uppercase tracking-wider">{t('quirality')}</h4>
                    </div>
                    <p className="text-xs text-purple-300/80 leading-relaxed">
                      {t('quiralityDesc')}
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-3">
             <a 
              href={selectedIsomer.wikipediaUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl transition-all shadow-lg shadow-blue-900/40 font-bold group"
            >
              <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {t('viewOnWikipedia')}
            </a>
            
            <button 
              onClick={() => setShowRightPanel(false)}
              className="lg:hidden w-full flex items-center justify-center px-6 py-3 bg-white/5 text-slate-400 rounded-2xl font-medium border border-white/5"
            >
              {t('closeDetails')}
            </button>
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
