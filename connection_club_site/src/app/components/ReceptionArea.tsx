import { motion } from 'motion/react';
import { ScanFace, UserCheck, ClipboardCheck, ArrowRight, Fingerprint } from 'lucide-react';

export default function ReceptionArea() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="size-full overflow-auto p-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Reception & Entry Area
          </h2>
          <p className="text-gray-400">Your journey begins here — verification, scanning, and preparation for immersion.</p>
        </motion.div>

        {/* 3D Reception Space */}
        <div className="relative h-[600px] mb-12" style={{ perspective: '1500px' }}>
          {/* Main Reception Desk */}
          <motion.div
            initial={{ rotateX: 20, y: 100, opacity: 0 }}
            animate={{ rotateX: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-15deg)' }}
          >
            {/* Floor */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/90 rounded-3xl border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_49%,rgba(148,163,184,0.1)_50%,transparent_51%)] bg-[length:100%_40px]" />
              <img
                src="https://images.unsplash.com/photo-1743511738166-fc0ef2010c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwbWluaW1hbGlzdCUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3ODEwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Reception space"
                className="size-full object-cover opacity-20"
              />
            </div>

            {/* Reception Desk */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-cyan-900/80 to-blue-900/80 rounded-2xl border border-cyan-500/50 shadow-2xl shadow-cyan-500/20"
              style={{ transform: 'translateX(-50%) translateZ(50px)' }}
            >
              <div className="size-full flex items-center justify-center">
                <div className="text-center">
                  <UserCheck className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Reception Desk</div>
                </div>
              </div>
            </motion.div>

            {/* Scanning Stations - Left */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute left-12 top-12 w-40 h-56 bg-gradient-to-br from-purple-900/60 to-slate-900/80 rounded-xl border border-purple-500/30 shadow-xl"
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="size-full p-4 flex flex-col items-center justify-center">
                <ScanFace className="w-12 h-12 text-purple-400 mb-3" />
                <div className="text-xs font-semibold mb-1">Full-Body</div>
                <div className="text-xs text-gray-400 text-center">Scanning Station</div>
                <div className="mt-3 w-full h-2 bg-purple-500/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Scanning Stations - Right */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute right-12 top-12 w-40 h-56 bg-gradient-to-br from-purple-900/60 to-slate-900/80 rounded-xl border border-purple-500/30 shadow-xl"
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="size-full p-4 flex flex-col items-center justify-center">
                <Fingerprint className="w-12 h-12 text-purple-400 mb-3" />
                <div className="text-xs font-semibold mb-1">Biometric</div>
                <div className="text-xs text-gray-400 text-center">Verification</div>
                <div className="mt-3 w-full h-2 bg-purple-500/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Waiting Area Seats */}
            <div className="absolute bottom-16 left-20 flex gap-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="w-12 h-12 bg-slate-700/50 rounded-lg border border-white/10"
                  style={{ transform: 'translateZ(10px)' }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-4 gap-6"
        >
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-900/40 to-slate-900/40 p-6 rounded-xl border border-cyan-500/30">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold mb-2">1. Check-In</h3>
              <p className="text-sm text-gray-400">Present membership credentials and verify identity</p>
            </div>
            <ArrowRight className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-cyan-500/50" />
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 p-6 rounded-xl border border-purple-500/30">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <ScanFace className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">2. Body Scan</h3>
              <p className="text-sm text-gray-400">Full-body 3D scan to update your virtual avatar</p>
            </div>
            <ArrowRight className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-purple-500/50" />
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 p-6 rounded-xl border border-blue-500/30">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">3. Preparation</h3>
              <p className="text-sm text-gray-400">Receive sensory suit and equipment briefing</p>
            </div>
            <ArrowRight className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-500/50" />
          </div>

          <div>
            <div className="bg-gradient-to-br from-emerald-900/40 to-slate-900/40 p-6 rounded-xl border border-emerald-500/30">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold mb-2">4. Enter Pod</h3>
              <p className="text-sm text-gray-400">Proceed to your assigned immersion pod</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
