export default function HeroSection() {
    return (
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6">
        <div>
          <h1 className="text-5xl font-bold">Welcome to My Website</h1>
          <p className="mt-4 text-lg">Build fast, modern web apps with Next.js</p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>
    );
  }
  