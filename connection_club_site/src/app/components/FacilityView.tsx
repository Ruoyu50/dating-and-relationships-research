import { motion } from 'motion/react';
import { ChevronRight, MapPin } from 'lucide-react';

interface FacilityViewProps {
  onNavigate: (view: 'overview' | 'reception' | 'pods') => void;
}

export default function FacilityView({ onNavigate }: FacilityViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="size-full flex items-center justify-center p-8"
    >
      <div className="max-w-6xl w-full">
        {/* Title Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-white">
            Connection Club Facility
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leave your sad life behind and enter a world of possibility. Experience fully immersive virtual connection.
          </p>
        </motion.div>

        {/* 3D Facility Layout */}
        <div className="relative w-full h-[500px]" style={{ perspective: '1200px' }}>
          {/* Reception Area Card */}
          <motion.div
            initial={{ rotateY: -20, x: -100, opacity: 0 }}
            animate={{ rotateY: 0, x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05, z: 50 }}
            onClick={() => onNavigate('reception')}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-80 cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="size-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1654722439127-0645ad92650b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbWluaW1hbGlzdCUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3ODEwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Reception area"
                className="size-full object-cover opacity-40"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-cyan-400">Entry Point</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Reception Area</h3>
                <p className="text-sm text-gray-400 mb-3">Check-in, verification & full-body scanning</p>
                <button className="flex items-center gap-2 text-cyan-400 hover:gap-3 transition-all">
                  Explore <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Pod Area Card */}
          <motion.div
            initial={{ rotateY: 20, x: 100, opacity: 0 }}
            animate={{ rotateY: 0, x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05, z: 50 }}
            onClick={() => onNavigate('pods')}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-80 cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="size-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1639628739781-861676b7e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxWUiUyMHRlY2hub2xvZ3klMjBwb2QlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3ODEwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pod area"
                className="size-full object-cover opacity-40"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-cyan-400">Main Experience</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">VR Pod Area</h3>
                <p className="text-sm text-gray-400 mb-3">Immersive pods with full sensory experience</p>
                <button className="flex items-center gap-2 text-cyan-400 hover:gap-3 transition-all">
                  Explore <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white animate-pulse" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-12 mt-20 max-w-3xl mx-auto pt-10 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400">Access Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-sm text-gray-400">Active Pods</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-sm text-gray-400">Virtual Worlds</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
