export default function Footer() {
  return (
    <footer className="w-full mt-12 py-8 border-t border-zinc-200/10 text-sm text-zinc-500 flex justify-center">
      <div className="max-w-4xl text-center">© {new Date().getFullYear()} Suthar Pawankumar — Built with Next.js</div>
    </footer>
  );
}
