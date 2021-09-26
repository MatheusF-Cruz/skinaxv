exports.up = function (knex) {
    return knex.schema.createTable('usuarios', (table) => {
        table.increments('id');
        table.string('usuario').notNullable();
        table.string('senha').notNullable()
        table.timestamps(true,true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuarios');
};

