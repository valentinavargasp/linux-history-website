import { Terminal, Code, Shield, Cpu } from "lucide-react"

export function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-purple-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center items-center mb-6">
          <div className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
              alt="Linux Tux Penguin Mascot"
              className="h-20 w-20 mr-4 rounded-full bg-white p-2"
            />
            <Terminal className="h-16 w-16 absolute -top-2 -right-2 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Explorando el Mundo de Linux
          </h1>
        </div>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
          Un análisis completo del sistema operativo que revolucionó la informática moderna
        </p>

        {/* Linux distributions logos */}
        <div className="flex justify-center space-x-6 mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg"
            alt="Ubuntu Logo"
            className="h-10 w-10 bg-white rounded-full p-1"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fedora_logo.svg"
            alt="Fedora Logo"
            className="h-10 w-10 bg-white rounded-full p-1"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/Openlogo-debianV2.svg"
            alt="Debian Logo"
            className="h-10 w-10 bg-white rounded-full p-1"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg"
            alt="Red Hat Logo"
            className="h-10 w-10 bg-white rounded-full p-1"
          />
        </div>

        <div className="flex justify-center space-x-8 mt-8">
          <div className="flex items-center">
            <Code className="h-6 w-6 mr-2 text-green-400" />
            <span>Open Source</span>
          </div>
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-2 text-blue-400" />
            <span>Seguridad</span>
          </div>
          <div className="flex items-center">
            <Cpu className="h-6 w-6 mr-2 text-purple-400" />
            <span>Alto Rendimiento</span>
          </div>
        </div>
      </div>
    </header>
  )
}
