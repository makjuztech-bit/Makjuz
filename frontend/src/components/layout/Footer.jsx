import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.8fr_0.9fr_0.9fr_0.9fr] lg:px-8">
        <div className="space-y-5">
          <Link to="/" className="inline-block">
            <img src="/makjus.png" alt="Makjuz Logo" className="h-12 w-auto object-contain" />
          </Link>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Building the future, one line of code at a time. We create software that grows with your business.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <h3 className="text-base font-semibold text-white">Services</h3>
          <Link to="/it-solutions" className="block transition hover:text-white">
            IT Solutions
          </Link>
          <Link to="/bpo-services" className="block transition hover:text-white">
            BPO Services
          </Link>
          <Link to="/manpower-supply" className="block transition hover:text-white">
            Manpower Supply
          </Link>
        </div>

        <div className="space-y-4 text-sm">
          <h3 className="text-base font-semibold text-white">Company</h3>
          <Link to="/about" className="block transition hover:text-white">
            About Us
          </Link>
          <Link to="/careers" className="block transition hover:text-white">
            Careers
          </Link>
          <Link to="/contact" className="block transition hover:text-white">
            Contact
          </Link>
        </div>

        <div className="space-y-4 text-sm">
          <h3 className="text-base font-semibold text-white">Contact Info</h3>
          <div>
            <p className="text-sm font-semibold text-white">Email</p>
            <a href="mailto:support@makjuz.com" className="block transition hover:text-white">
              support@makjuz.com
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Phone</p>
            <a href="tel:+919597430022" className="block transition hover:text-white">
              +91 9597430022
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Address</p>
            <p className="text-sm leading-6 text-slate-400">
              No 69 B/2, Villakadi Kovil Street,<br />
              Kanchipuram -631501.
            </p>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
