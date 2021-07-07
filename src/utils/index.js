const mapDBToModel = ({ 
    id,
    title,
    year,
    performer,
    genre,
    durtion,
    created_at,
    updated_at,
  }) => ({
    id,
    title,
    year,
    performer,
    genre,
    durtion,
    createdAt: created_at,
    updatedAt: updated_at,
  });
   
  module.exports = { mapDBToModel };