const loading = () => {
  <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert fixed inset-0">
    <span className="sr-only">Loading...</span>
    <div className="h-20 w-20 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
    <div className="h-20 w-20 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
    <div className="h-20 w-20 bg-black rounded-full animate-bounce" />
  </div>;
};
export default loading;
