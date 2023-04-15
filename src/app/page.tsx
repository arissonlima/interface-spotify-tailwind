import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a className="flex items-center gap-3 text-xs font-semi-bold text-zinc-200" href=""><HomeIcon /> Home</a>
            <a className="flex items-center gap-3 text-xs font-semi-bold text-zinc-200" href=""><Search /> Search</a>
            <a className="flex items-center gap-3 text-xs font-semi-bold text-zinc-200" href=""><Library /> Your Library</a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">My Lovely Songs</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Good Music Brazil</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">RUSH!</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Queen #2023</a>
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="text-bold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/guns.png" width={104} height={104} alt="Capa do álbum do Queen" />
              <strong>Álbum name</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/maneskin.png" width={104} height={104} alt="Capa do álbum do Queen" />
              <strong>Álbum name</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/queen.png" width={104} height={104} alt="Capa do álbum do Queen" />
              <strong>Álbum name</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/playlist1.png" width={104} height={104} alt="Capa do álbum do Queen" />
              <strong>Álbum name</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/playlist2.png" width={104} height={104} alt="Capa do álbum do Queen" />
              <strong>Álbum name</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/redhot.png" width={104} height={104} alt="Capa do álbum do Queen" />
              <strong>Álbum name</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Arisson Lima</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/guns.png" className="w-full" width={120} height={120} alt="Capa do álbum do Queen" />
              <strong className="font-semibold">Daily 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/queen.png" className="w-full" width={120} height={120} alt="Capa do álbum do Queen" />
              <strong className="font-semibold">Daily 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/maneskin.png" className="w-full" width={120} height={120} alt="Capa do álbum do Queen" />
              <strong className="font-semibold">Daily 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/playlist2.png" className="w-full" width={120} height={120} alt="Capa do álbum do Queen" />
              <strong className="font-semibold">Daily 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/playlist1.png" className="w-full" width={120} height={120} alt="Capa do álbum do Queen" />
              <strong className="font-semibold">Daily 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/maneskin.png" className="w-full" width={40} height={40} alt="Capa do álbum do Queen" />
          <div className="flex flex-col">
            <strong className="font-normal">Baby Said</strong>
            <span className="text-xs text-zinc-400">Maneskin</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:44</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}
