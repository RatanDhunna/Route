function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page you are looking for does not exist.<br />
        Please check the URL or return to the home page.
      </p>
      <a href="/" className="add-cart-btn">Go Home</a>
    </div>
  );
}

export default NotFound;
