function UserInfo() {
  return (
    <div className="user-info-container">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="User"
        style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}
      />
      <h1>John Doe</h1>
      <p><strong>Age:</strong> 28</p>
      <p><strong>Date of Birth:</strong> 15th March 1997</p>
      <p><strong>Email:</strong> johndoe@example.com</p>
      <p><strong>Location:</strong> New York, USA</p>
    </div>
  );
}

export default UserInfo;
