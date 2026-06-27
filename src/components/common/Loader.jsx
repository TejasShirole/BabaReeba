const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin" />

      <h2 className="text-white text-lg tracking-widest">
        LOADING...
      </h2>
    </div>
  );
};

export default Loader;