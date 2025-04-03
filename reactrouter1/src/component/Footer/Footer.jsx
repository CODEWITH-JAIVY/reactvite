export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl hover:text-gray-400"></i>
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl hover:text-gray-400"></i>
            </a>
            <a href="mailto:your.email@example.com">
              <i className="fas fa-envelope text-2xl hover:text-gray-400"></i>
            </a>
          </div>
  
          {/* Footer Text */}
          <p className="text-sm">
            © {new Date().getFullYear()} Jaivy Roy. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  