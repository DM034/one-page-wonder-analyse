
export default function Footer() {
  return (
    <footer id="contact" className="w-full py-10 md:py-14 flex flex-col items-center justify-center text-center text-muted">
      <div className="flex flex-row justify-between w-full max-w-6xl px-6 mb-5">
        <div>
          Michael Raharison
        </div>
        <div>
          dm034.github.io
        </div>
      </div>
      <div className="text-xs font-thin">
        © {new Date().getFullYear()} Michael Raharison. Tous droits réservés.
      </div>
    </footer>
  );
}
