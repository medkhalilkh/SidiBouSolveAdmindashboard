import React, { useState } from 'react';
import '../styles/Category.css';

const Category = () => {
  const [categories, setCategories] = useState([

  ]);

  const [formData, setFormData] = useState({ nom: "", description: "" });
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setCategories(categories.map((cat) =>
        cat.id === editId ? { ...cat, ...formData } : cat
      ));
      setEditId(null);
    } else {
      const newId = categories.length > 0
        ? Math.max(...categories.map((c) => c.id)) + 1 : 1;
      setCategories([...categories, { id: newId, ...formData }]);
    }
    setFormData({ nom: "", description: "" });
  };

  const confirmDelete = () => {
    setCategories(categories.filter((cat) => cat.id !== deleteId));
    setDeleteId(null);
  };

  const handleEditClick = (cat) => {
    setEditId(cat.id);
    setFormData({ nom: cat.nom, description: cat.description });
  };

  return (
    <div className="cat-root">

      {/* Header */}
      <div className="cat-header">
        <h1>Gestion des catégories</h1>
        
      </div>

      {/* Stat Cards */}
      <div className="cat-stats">
        <div className="stat-card">
          <div className="stat-icon">🗂️</div>
          <div className="stat-info">
            <div className="stat-label">Nombre de catégories</div>
            <div className="stat-value">{categories.length}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <div className="stat-label">Actives</div>
            <div className="stat-value">{categories.length}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-info">
            <div className="stat-label">Avec Description</div>
            <div className="stat-value">{categories.filter(c => c.description).length}</div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="cat-main">

        {/* Form */}
        <div className="form-card">
          <div className="form-card-header">
            <div
              className="form-dot"
              style={{ background: editId ? '#f6ad55' : '#1a2e45' }}
            />
            <h3>{editId ? "Modifier la catégorie" : "Nouvelle catégorie"}</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="cat-input-group">
              <div className="cat-input-wrap">
                <label className="cat-label">Nom</label>
                <input
                  className="cat-input"
                  
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  required
                />
              </div>
              <div className="cat-input-wrap">
                <label className="cat-label">Description</label>
                <input
                  className="cat-input"

                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editId ? "Enregistrer les modifications" : "Ajouter une catégorie"}
              </button>
              {editId && (
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => {
                    setEditId(null);
                    setFormData({ nom: "", description: "" });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="table-card">
          <div className="table-card-header">
            <h3>Toutes les catégories</h3>
            <span className="count-pill">{categories.length} total</span>
          </div>

          {categories.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              Aucune catégorie pour le moment. Ajoutez-en une pour commencer.
            </div>
          ) : (
            <table className="cat-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Description</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.id}>
                    <td><span className="id-chip">#{cat.id}</span></td>
                    <td className="name-cell">{cat.nom}</td>
                    <td className="desc-cell">
                      {cat.description || <span style={{ color: '#c8d0da' }}>—</span>}
                    </td>
                    <td className="actions-col">
                      <button className="btn-edit-sm" onClick={() => handleEditClick(cat)}>
                        Modifier
                      </button>
                      <button className="btn-delete-sm" onClick={() => setDeleteId(cat.id)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Delete Confirmation */}
      {deleteId && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <div className="modal-icon">🗑️</div>
            <h3>Supprimer la catégorie?</h3>
            <p>Cette action ne peut être annulée. La catégorie sera définitivement supprimée.</p>
            <div className="modal-btns">
              <button className="btn-modal-cancel" onClick={() => setDeleteId(null)}>
                Annuler
              </button>
              <button className="btn-modal-danger" onClick={confirmDelete}>
                Oui, Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
