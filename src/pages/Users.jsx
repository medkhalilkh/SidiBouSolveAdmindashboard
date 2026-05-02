import "../styles/Pages.css";

export default function Users() {
  const users = [
    
    {
      id: 1,
      nom: "Temani",
      prenom: "Hedi",
      email: "hedi.temani@gmail.com",
      is_staff: false,
      is_active: true,
      joined_at: "2026-04-10"
    },
    {
      id: 2,
      nom: "Khmir",
      prenom: "Jasser",
      email: "jasser.khmir@gmail.com",
      is_staff: false,
      is_active: true,
      joined_at: "2026-04-12"
    },
    {
      id: 3,
      nom: "Zanin",
      prenom: "Houda",
      email: "houda.zanin@gmail.com",
      is_staff: true,
      is_active: false,
      joined_at: "2026-04-15"
    }
  ];

  const handleToggleBlock = (userName) => {
    alert(`Status toggle clicked for ${userName}. (Static Version)`);
  };

  return (
    <div className="page">
      <div className="page-header" style={{ marginBottom: '20px' }}>
        <h2 className="page-heading">Users</h2>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Role</th>
              <th>Membre depuis</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className={!u.is_active ? "row-blocked" : ""}>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">{u.nom ? u.nom[0] : "U"}</div>
                    {u.prenom} {u.nom}
                  </div>
                </td>
                <td>{u.email}</td>
                <td>
                  <span className={`badge ${u.is_staff ? "badge-blue" : "badge-gray"}`}>
                    {u.is_staff ? "Admin" : "Student"}
                  </span>
                </td>
                <td>{u.joined_at}</td>
                <td>
                  <span className={`status-dot ${u.is_active ? "active" : "blocked"}`}>
                    {u.is_active ? "Active" : "Blocked"}
                  </span>
                </td>
                <td>
                  <button 
                    onClick={() => handleToggleBlock(u.prenom)}
                    className={`action-btn ${u.is_active ? "btn-block" : "btn-unblock"}`}
                  >
                    {u.is_active ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}