/* eslint-disable camelcase */

exports.up = pgm => {
    pgm.createTable('notes', {
        id: {
          type: 'VARCHAR(50)',
          primaryKey: true,
        },
        title: {
          type: 'TEXT',
          notNull: true,
        },
        year: {
          type: 'NUMBER',
          notNull: true,
        },
        performer: {
          type: 'TEXT',
          notNull: true,
        },
        genre: {
            type: 'TEXT',
            notNull: true,
        },
        duration: {
            type: 'NUMBER',
            notNull: true,
        },
        created_at: {
          type: 'TEXT',
          notNull: true,
        },
        updated_at: {
          type: 'TEXT',
          notNull: true,
        },
      });
};

exports.down = pgm => {
    pgm.dropTable('notes');
};
