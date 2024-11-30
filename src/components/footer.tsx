import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-20 flex justify-center items-center">
      <div className="text-center animate-bounce text-2xl hover:text-3xl hover:text-opacity-100 footer-text transition-all">
        <Link href="https://github.com/cod3prod">Created by cod3prod</Link>
      </div>
    </footer>
  );
}
