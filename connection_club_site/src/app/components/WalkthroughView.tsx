import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const rooms = [
  {
    id: 'entrance',
    name: 'Main Entrance',
    description: 'The moment you arrive, elegant doors open to reveal a sophisticated lobby bathed in ambient lighting.',
    image: 'https://images.unsplash.com/photo-1749788873243-65087660f55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBsb2JieSUyMGVudHJhbmNlJTIwZGFya3xlbnwxfHx8fDE3NzgxMDg3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'lobby',
    name: 'Reception Lobby',
    description: 'A minimalist space with clean lines and futuristic architecture. Soft cyan lighting guides you toward the reception desk.',
    image: 'https://images.unsplash.com/photo-1654722439127-0645ad92650b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbWluaW1hbGlzdCUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3ODEwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'reception',
    name: 'Check-In Desk',
    description: 'The reception desk features holographic displays and biometric scanners. Staff members verify your membership credentials.',
    image: 'https://images.unsplash.com/photo-1743511738166-fc0ef2010c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwbWluaW1hbGlzdCUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3ODEwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'scanning',
    name: 'Body Scanning Chamber',
    description: 'A circular chamber with purple ambient lighting. Advanced sensors capture a full 3D scan of your body to update your virtual avatar.',
    image: 'https://images.unsplash.com/photo-1706065638524-eb52e7165abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbWVkaWNhbCUyMHNjYW5uaW5nJTIwcm9vbSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc4MTA4NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'corridor',
    name: 'Pod Corridor',
    description: 'A geometric hallway with reflective surfaces leads to the pod area. Each step brings you closer to your virtual escape.',
    image: 'https://images.unsplash.com/photo-1761933401849-f26428089e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwbWluaW1hbGlzdCUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3ODEwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'pod-hall',
    name: 'Pod Hall',
    description: 'Rows of sleek immersion pods line the walls, each glowing with different colored lights indicating their status.',
    image: 'https://images.unsplash.com/photo-1639628739781-861676b7e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxWUiUyMHRlY2hub2xvZ3klMjBwb2QlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3ODEwODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'pod-interior',
    name: 'Inside Your Pod',
    description: 'The pod interior is surprisingly spacious. Ergonomic seating, VR headset mounted above, and sensory suit laid out ready for use.',
    image: 'https://images.unsplash.com/photo-1667604946733-c7dd5b992d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBzcGElMjBwb2QlMjBjYXBzdWxlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc4MTA4NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function WalkthroughView() {
  const [currentRoom, setCurrentRoom] = useState(0);

  const goToNext = () => {
    setCurrentRoom((prev) => (prev + 1) % rooms.length);
  };

  const goToPrevious = () => {
    setCurrentRoom((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  const room = rooms[currentRoom];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="size-full flex flex-col"
    >
      {/* Main Render View */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={room.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={room.image}
                alt={room.name}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            </div>

            {/* 3D Perspective Overlay Elements */}
            <div className="absolute inset-0" style={{ perspective: '1000px' }}>
              {/* Room-specific interactive elements */}
              {room.id === 'entrance' && (
                <>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute left-20 bottom-32 w-64 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent border-l-2 border-t-2 border-cyan-500/30 backdrop-blur-sm"
                    style={{ transform: 'rotateY(20deg) translateZ(50px)' }}
                  >
                    <div className="p-6">
                      <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-cyan-400" />
                      </div>
                      <div className="text-sm text-cyan-300">Entry Portal</div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute right-20 bottom-32 w-64 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent border-r-2 border-t-2 border-purple-500/30 backdrop-blur-sm"
                    style={{ transform: 'rotateY(-20deg) translateZ(50px)' }}
                  >
                    <div className="p-6 text-right">
                      <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 ml-auto">
                        <div className="w-8 h-8 rounded-full bg-purple-400" />
                      </div>
                      <div className="text-sm text-purple-300">Security Check</div>
                    </div>
                  </motion.div>
                </>
              )}

              {room.id === 'scanning' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-purple-500/30"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-purple-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-purple-400 mb-2">3D</div>
                      <div className="text-sm text-purple-300">SCANNING IN PROGRESS</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {room.id === 'pod-hall' && (
                <>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="absolute w-32 h-40 bg-gradient-to-br from-purple-900/60 to-slate-900/80 border-2 border-purple-500/40 rounded-xl"
                      style={{
                        left: `${15 + i * 10}%`,
                        top: `${30 + i * 15}%`,
                        transform: `rotateY(${30 - i * 10}deg) translateZ(${50 - i * 20}px)`
                      }}
                    >
                      <div className="size-full p-3 flex flex-col items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-400 mb-2 animate-pulse" />
                        <div className="text-xs">POD {i + 1}</div>
                      </div>
                    </motion.div>
                  ))}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={`r-${i}`}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="absolute w-32 h-40 bg-gradient-to-br from-cyan-900/60 to-slate-900/80 border-2 border-cyan-500/40 rounded-xl"
                      style={{
                        right: `${15 + i * 10}%`,
                        top: `${30 + i * 15}%`,
                        transform: `rotateY(${-30 + i * 10}deg) translateZ(${50 - i * 20}px)`
                      }}
                    >
                      <div className="size-full p-3 flex flex-col items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-cyan-400 mb-2 animate-pulse" />
                        <div className="text-xs">POD {i + 4}</div>
                      </div>
                    </motion.div>
                  ))}
                </>
              )}

              {room.id === 'pod-interior' && (
                <>
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute left-1/2 top-20 -translate-x-1/2 w-80 h-64 bg-gradient-to-br from-purple-900/80 to-slate-900/90 border-2 border-purple-500/50 rounded-2xl backdrop-blur-sm"
                    style={{ transform: 'translateX(-50%) rotateX(20deg) translateZ(100px)' }}
                  >
                    <div className="size-full p-6 flex flex-col items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-purple-500/20 border-4 border-purple-500/40 flex items-center justify-center mb-4">
                        <div className="text-4xl">🥽</div>
                      </div>
                      <div className="text-sm font-semibold">VR Headset Ready</div>
                      <div className="text-xs text-gray-400 mt-1">8K Resolution</div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute left-1/4 bottom-20 w-48 h-32 bg-gradient-to-br from-cyan-900/80 to-slate-900/90 border-2 border-cyan-500/50 rounded-xl backdrop-blur-sm"
                    style={{ transform: 'rotateY(-15deg) translateZ(50px)' }}
                  >
                    <div className="size-full p-4 flex flex-col items-center justify-center">
                      <div className="text-2xl mb-2">🎧</div>
                      <div className="text-xs font-semibold">Spatial Audio</div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute right-1/4 bottom-20 w-48 h-32 bg-gradient-to-br from-pink-900/80 to-slate-900/90 border-2 border-pink-500/50 rounded-xl backdrop-blur-sm"
                    style={{ transform: 'rotateY(15deg) translateZ(50px)' }}
                  >
                    <div className="size-full p-4 flex flex-col items-center justify-center">
                      <div className="text-2xl mb-2">🧤</div>
                      <div className="text-xs font-semibold">Sensory Suit</div>
                    </div>
                  </motion.div>
                </>
              )}
            </div>

            {/* Room Information Overlay */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-0 left-0 right-0 p-8 pb-24"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div className="text-sm text-cyan-400 font-medium">
                    Step {currentRoom + 1} of {rooms.length}
                  </div>
                </div>
                <h2 className="text-5xl font-bold mb-4">{room.name}</h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {room.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 hover:border-cyan-500/50 transition-all group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 hover:border-cyan-500/50 transition-all group"
        >
          <ChevronRight className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
        </button>
      </div>

      {/* Room Progress Indicator */}
      <div className="p-6 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center gap-2">
            {rooms.map((r, index) => (
              <button
                key={r.id}
                onClick={() => setCurrentRoom(index)}
                className={`flex-1 h-2 rounded-full transition-all ${
                  index === currentRoom
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                    : index < currentRoom
                    ? 'bg-gray-600'
                    : 'bg-gray-800'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-3">
            {rooms.map((r, index) => (
              <button
                key={r.id}
                onClick={() => setCurrentRoom(index)}
                className={`text-xs transition-colors ${
                  index === currentRoom ? 'text-cyan-400 font-semibold' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
