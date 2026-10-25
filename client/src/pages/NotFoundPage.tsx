import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-8xl text-primary">404</h1>
      <h2 className="text-3xl">Page not found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist!</p>

      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </main>
  );
}
