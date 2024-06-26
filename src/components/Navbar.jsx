const Navbar = ({ cookies, redirect }) => {
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");

  return (
    <div className="navbar bg-neutral text-neutral-content flex flex-col md:flex-row gap-5 mb-5">
      <a href="/">Home</a>
      {(!accessToken || !refreshToken) ? (
        <>
          <a href="/signin">Login</a>
          <a href="/register">Register</a>
        </>
      ) : (
        <>
          <a href="/series/create">Add New Series</a>
          <form action="/api/auth/signout">
            <button type="submit">Logout</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Navbar;