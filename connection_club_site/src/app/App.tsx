import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScanFace, Users, Wifi, Shield, ChevronRight, Eye, Grid3x3, Camera } from 'lucide-react';
import FacilityView from './components/FacilityView';
import ReceptionArea from './components/ReceptionArea';
import PodArea from './components/PodArea';
import WalkthroughView from './components/WalkthroughView';

export default function App() {
  const [currentView, setCurrentView] = useState<'overview' | 'reception' | 'pods' | 'walkthrough'>('walkthrough');

  return (
    <div className="size-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="absolute top-0 left-0 right-0 z-50 px-8 py-6 bg-black/20 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Connection Club</h1>
              <p className="text-xs text-gray-400">Digital Facility Rendering</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setCurrentView('walkthrough')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentView === 'walkthrough'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <Camera className="w-4 h-4 inline mr-2" />
              Walkthrough
            </button>
            <button
              onClick={() => setCurrentView('overview')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentView === 'overview'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <Grid3x3 className="w-4 h-4 inline mr-2" />
              Overview
            </button>
            <button
              onClick={() => setCurrentView('reception')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentView === 'reception'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              Reception
            </button>
            <button
              onClick={() => setCurrentView('pods')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentView === 'pods'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Pod Area
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="size-full pt-24">
        <AnimatePresence mode="wait">
          {currentView === 'walkthrough' && <WalkthroughView key="walkthrough" />}
          {currentView === 'overview' && <FacilityView key="facility" onNavigate={setCurrentView} />}
          {currentView === 'reception' && <ReceptionArea key="reception" />}
          {currentView === 'pods' && <PodArea key="pods" />}
        </AnimatePresence>
      </div>

      {/* Floating Info Cards */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 max-w-sm"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Secure & Private</h3>
            <p className="text-sm text-gray-400">
              All members undergo background checks and in-person interviews before accessing facilities.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 max-w-sm"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
            <ScanFace className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Full Immersion</h3>
            <p className="text-sm text-gray-400">
              Full-body scans, sensory suits, and surround sound create the most realistic experience possible.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
