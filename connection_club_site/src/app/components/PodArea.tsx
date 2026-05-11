import { motion } from 'motion/react';
import { Eye, Headphones, Wifi, Activity, Circle } from 'lucide-react';

export default function PodArea() {
  const pods = [
    { id: 1, status: 'active', position: { x: 100, y: 50, z: 0 } },
    { id: 2, status: 'active', position: { x: 300, y: 50, z: 20 } },
    { id: 3, status: 'available', position: { x: 500, y: 50, z: 0 } },
    { id: 4, status: 'active', position: { x: 700, y: 50, z: 20 } },
    { id: 5, status: 'active', position: { x: 100, y: 250, z: 40 } },
    { id: 6, status: 'available', position: { x: 300, y: 250, z: 60 } },
    { id: 7, status: 'active', position: { x: 500, y: 250, z: 40 } },
    { id: 8, status: 'maintenance', position: { x: 700, y: 250, z: 60 } },
  ];

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
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            VR Immersion Pod Area
          </h2>
          <p className="text-gray-400">State-of-the-art pods with full sensory immersion technology.</p>
        </motion.div>

        {/* 3D Pod Layout */}
        <div className="relative h-[500px] mb-12 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl border border-white/10 overflow-hidden">
          <div className="absolute inset-0" style={{ perspective: '1200px' }}>
            {/* Grid Floor */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(transparent_49%,rgba(139,92,246,0.3)_50%,transparent_51%),linear-gradient(90deg,transparent_49%,rgba(139,92,246,0.3)_50%,transparent_51%)] bg-[length:60px_60px]" />
            </div>

            {/* Pods Container */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(25deg)' }}
            >
              <div className="relative w-[850px] h-[400px]">
                {pods.map((pod, index) => (
                  <motion.div
                    key={pod.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="absolute"
                    style={{
                      left: pod.position.x,
                      top: pod.position.y,
                      transform: `translateZ(${pod.position.z}px)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Pod Shell */}
                    <div className={`w-40 h-44 rounded-2xl border-2 transition-all ${
                      pod.status === 'active'
                        ? 'bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-purple-500/50 shadow-2xl shadow-purple-500/30'
                        : pod.status === 'available'
                        ? 'bg-gradient-to-br from-emerald-900/60 to-slate-900/80 border-emerald-500/50 shadow-xl shadow-emerald-500/20'
                        : 'bg-gradient-to-br from-slate-900/60 to-slate-800/80 border-slate-600/50 shadow-xl'
                    }`}>
                      {/* Pod Interior */}
                      <div className="size-full p-4 flex flex-col items-center justify-between">
                        {/* Pod Number */}
                        <div className="w-full flex items-center justify-between">
                          <span className="text-xs font-mono opacity-50">POD-{String(pod.id).padStart(2, '0')}</span>
                          <Circle className={`w-2 h-2 ${
                            pod.status === 'active' ? 'fill-purple-400 text-purple-400' :
                            pod.status === 'available' ? 'fill-emerald-400 text-emerald-400' :
                            'fill-gray-500 text-gray-500'
                          }`} />
                        </div>

                        {/* Pod Visual */}
                        <div className="relative w-20 h-20 rounded-xl bg-black/40 border border-white/10 overflow-hidden">
                          {pod.status === 'active' && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent"
                                animate={{ opacity: [0.3, 0.7, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <Eye className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-purple-300" />
                            </>
                          )}
                          {pod.status === 'available' && (
                            <div className="size-full flex items-center justify-center text-emerald-500 text-xs">
                              READY
                            </div>
                          )}
                          {pod.status === 'maintenance' && (
                            <div className="size-full flex items-center justify-center text-gray-500 text-xs">
                              MAINT
                            </div>
                          )}
                        </div>

                        {/* Status */}
                        <div className="text-xs font-semibold uppercase">
                          {pod.status}
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect for Active Pods */}
                    {pod.status === 'active' && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl -z-10"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Status Legend */}
          <div className="absolute top-6 right-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs">
              <Circle className="w-3 h-3 fill-purple-400 text-purple-400" />
              <span>Active (6)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Circle className="w-3 h-3 fill-emerald-400 text-emerald-400" />
              <span>Available (2)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Circle className="w-3 h-3 fill-gray-500 text-gray-500" />
              <span>Maintenance (1)</span>
            </div>
          </div>
        </div>

        {/* Pod Features */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-4 gap-6"
        >
          <div className="bg-gradient-to-br from-purple-900/40 to-slate-900/40 p-6 rounded-xl border border-purple-500/30">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-semibold mb-2">VR Headset</h3>
            <p className="text-sm text-gray-400">8K resolution per eye, 120° field of view</p>
          </div>

          <div className="bg-gradient-to-br from-pink-900/40 to-slate-900/40 p-6 rounded-xl border border-pink-500/30">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="font-semibold mb-2">Sensory Suit</h3>
            <p className="text-sm text-gray-400">Full haptic feedback and temperature control</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 p-6 rounded-xl border border-blue-500/30">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2">Spatial Audio</h3>
            <p className="text-sm text-gray-400">360° surround sound with bone conduction</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-slate-900/40 p-6 rounded-xl border border-cyan-500/30">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
              <Wifi className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-semibold mb-2">Neural Link</h3>
            <p className="text-sm text-gray-400">Real-time synchronization with virtual world</p>
          </div>
        </motion.div>

        {/* Technical Specs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6">Pod Specifications</h3>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-sm text-gray-400 mb-1">Dimensions</div>
              <div className="font-mono">2.5m × 2m × 2.2m</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Climate Control</div>
              <div className="font-mono">16°C - 28°C</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Session Duration</div>
              <div className="font-mono">Up to 8 hours</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Power Consumption</div>
              <div className="font-mono">2.4 kW</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Network Speed</div>
              <div className="font-mono">10 Gbps fiber</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Safety Systems</div>
              <div className="font-mono">Emergency release</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
