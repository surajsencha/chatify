function LoginPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-pink-300/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
        <div className="card bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-10 max-w-lg w-full text-center">
          <div className="card-body items-center justify-center space-y-6">
            <h2 className="card-title text-4xl font-bold mb-6 text-black">
              Login
            </h2>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-lg w-full bg-white/50 border-white/30"
              />
            </div>

            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text text-lg text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered input-lg w-full bg-white/50 border-white/30"
              />
            </div>

            <div className="card-actions justify-center gap-6 mt-8 w-full">
              <a
                href="/"
                className="btn btn-secondary btn-lg px-10 py-4 glass text-black text-lg min-h-14 h-14"
              >
                Back
              </a>
              <button className="btn btn-primary btn-lg px-10 py-4 glass text-black text-lg min-h-14 h-14">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
