function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        <h1 className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-3 duration-500">
          &copy; {new Date().getFullYear()} {""}
          Wikan Portfolio
        </h1>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
