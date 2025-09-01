
function Home() {
return (
        <div className="home-container">
            <h1>Discover Your Next Adventure</h1>
            <p>
                Welcome to our modern web experience!<br />
                Explore, connect, and learn more about us.
            </p>
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Adventure"
                style={{ width: '100%', maxWidth: '400px', borderRadius: '12px', margin: '24px auto' }}
            />
            <div style={{marginTop: '24px'}}>
                <a href="/about" className="add-cart-btn">Learn More About Us</a>
            </div>
        </div>
    );
}

export default Home;
